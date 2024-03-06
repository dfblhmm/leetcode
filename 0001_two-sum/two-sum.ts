/**
 * @description 两数之和
 * @link https://leetcode.cn/problems/two-sum/description/
 */

/**
 * @description 解题思路
 * 1.声明一个 Map，用于保存（数值 - 其在数组中的索引）
 * 2.遍历数组
 *  2.1.先求出与该数 n1 配对成 target 值的另一个数 n2（n1 = target - n1）
 *  2.2 若 n2 存在于 Map 中，则取出其索引，和当前遍历的索引组成求解结果返回
 *  2.3 若 n2 不存在于 Map 中，则存储进 Map
 */
export default function twoSum(nums: number[], target: number): number[] {
  const n = nums.length;
  const map = new Map<number, number>();

  for (let i = 0; i < n; i++) {
    const n1 = nums[i];
    const n2 = target - n1;

    if (map.has(n2)) {
      return [i, map.get(n2)!];
    } else {
      map.set(n2, i);
    }
  }

  return [];
}
