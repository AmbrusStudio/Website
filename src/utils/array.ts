export function arrayGroupByCount<T = unknown>(arr: T[], count: number): T[][] {
  let indexMark: number
  const initial: T[][] = []
  arr.forEach((curr, index) => {
    const ind = Math.floor(index / count)
    if (indexMark !== ind) {
      indexMark = ind
      initial[ind] = []
    }
    initial[ind].push(curr)
  })
  return initial
}
