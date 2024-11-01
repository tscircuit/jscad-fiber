export function flattenArray(arr: any[]): any[] {
  return arr.reduce(
    (flat, item) =>
      flat.concat(Array.isArray(item) ? flattenArray(item) : item),
    [],
  )
}
