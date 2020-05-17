/**
 * Function to find all unique objects in an array based on a specified property
 * Adapted from: https://stackoverflow.com/a/51655152/8620332
 */
export function uniqueArrayBy<T>(arr: T[], prop: keyof T): T[] {
  return arr.reduce((acc: T[], el) => {
    if (acc.every((el2) => el2[prop] !== el[prop])) {
      acc.push(el);
    }
    return acc;
  }, []);
}
