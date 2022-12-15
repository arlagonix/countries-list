/** Groups digits in a number in groups of 3 */
export function digitGroups(
  /** Number where you need to group digits */
  num: number
): string {
  const strNum = num.toString();
  let res = strNum.match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  if (res !== null) return res.join(" ");
  return "0";
}
