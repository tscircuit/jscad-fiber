export const singleElementUnnest = <T>(element: T | T[]): T | T[] => {
  if (Array.isArray(element) && element.length === 1) {
    return element[0]
  }

  return element
}
