export function generateArrayVariants(arr: number[]): number[][] {
    const result = [arr];
    const arraysWithRemovedElements = arr.map((_, index) =>
      arr.slice(0, index).concat(arr.slice(index + 1))
    );
    return result.concat(arraysWithRemovedElements);
  }