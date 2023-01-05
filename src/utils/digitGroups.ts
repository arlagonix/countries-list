/** Groups digits in a number in groups of 3 */
export function digitGroups(
  /** Number where you need to group digits. Number must be a non negative integer */
  num: number,
  /** Separator used to divide number groups, default is space */
  separator: string = " "
): string {
  const parts = num.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  return parts.join(".");
}

// Solution is based on
// https://stackoverflow.com/questions/2901102/how-to-format-a-number-with-commas-as-thousands-separators
