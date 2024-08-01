import React from "react"

type EffectCallback = () => void | (() => void | undefined)
type DependencyList = ReadonlyArray<any>
type Dispatch<A> = (value: A) => void
type SetStateAction<S> = S | ((prevState: S) => S)

interface HookTester<T extends (...args: any[]) => any> {
  run: (...params: Parameters<T>) => ReturnType<T>
  states: any[]
  memos: any[]
  effects: EffectCallback[]
  cleanups: Array<(() => void) | undefined>
  resetState: () => void
  overrideGlobals: () => void
}

export function createHookTester<T extends (...args: any[]) => any>(
  useHook: T,
): HookTester<T> {
  let states: any[] = []
  let memos: any[] = []
  let effects: EffectCallback[] = []
  let cleanups: Array<(() => void) | undefined> = []
  let currentStateIndex = 0
  let currentMemoIndex = 0
  let currentEffectIndex = 0

  const useState = <S>(
    initialState: S | (() => S),
  ): [S, Dispatch<SetStateAction<S>>] => {
    const stateIndex = currentStateIndex++
    if (states.length <= stateIndex) {
      states.push(
        typeof initialState === "function"
          ? (initialState as () => S)()
          : initialState,
      )
    }
    const setState = (newState: SetStateAction<S>) => {
      states[stateIndex] =
        typeof newState === "function"
          ? (newState as (prevState: S) => S)(states[stateIndex])
          : newState
    }
    return [states[stateIndex], setState]
  }

  const useMemo = <T>(factory: () => T, deps?: DependencyList): T => {
    const memoIndex = currentMemoIndex++
    if (memos.length <= memoIndex) {
      memos.push({ value: factory(), deps })
    } else {
      const prevDeps = memos[memoIndex].deps
      if (!prevDeps || !deps || deps.some((dep, i) => dep !== prevDeps[i])) {
        memos[memoIndex] = { value: factory(), deps }
      }
    }
    return memos[memoIndex].value
  }

  const useCallback = useMemo

  const useEffect = (effect: EffectCallback, deps?: DependencyList): void => {
    const effectIndex = currentEffectIndex++
    if (effects.length <= effectIndex) {
      effects.push(effect)
      const cleanup = effect()
      cleanups.push(cleanup)
    } else {
      const prevDeps = deps !== undefined ? deps : null
      const storedDeps = prevDeps === null ? null : [...prevDeps]
      if (
        !prevDeps ||
        !storedDeps ||
        storedDeps.some((dep, i) => dep !== prevDeps[i])
      ) {
        if (cleanups[effectIndex]) {
          cleanups[effectIndex]!()
        }
        effects[effectIndex] = effect
        const cleanup = effect()
        cleanups[effectIndex] = cleanup
      }
    }
  }

  const run = (...params: Parameters<T>): ReturnType<T> => {
    currentStateIndex = 0
    currentMemoIndex = 0
    currentEffectIndex = 0
    return useHook.apply(null, params)
  }

  const resetState = () => {
    states = []
    memos = []
    effects = []
    cleanups.forEach((cleanup) => cleanup && cleanup())
    cleanups = []
  }

  const overrideGlobals = () => {
    const originalReact = { ...React }
    React.useState = useState as any
    React.useMemo = useMemo as any
    React.useCallback = useCallback as any
    React.useEffect = useEffect as any
    // TODO add restore function
  }

  return {
    run,
    get states() {
      return [...states]
    },
    get memos() {
      return memos.map((memo) => memo.value)
    },
    get effects() {
      return [...effects]
    },
    get cleanups() {
      return [...cleanups]
    },
    resetState,
    overrideGlobals,
  }
}

export default createHookTester
