/**
 * @description 无重复字符的最长子串
 * @link https://leetcode.cn/problems/longest-substring-without-repeating-characters/description
 */

/**
 * @description 解题思路 - 滑动窗口
 * 1.声明一个 Map，用于保存【字符 - 字符索引】映射
 * 2.采用双指针，初始状态都指向字符串头部
 * 3.遍历字符串，并对每个字符及其索引保存在 Map 中
 *  3.1.每次【right指针】向右移动一位
 *  3.2.当遇到了重复的字符，让【left】指针向右移动一位
 *  3.3.计算每次遍历时的字串长度【right - left + 1】
 * 4.取其中最大的字串长度作为求解结果
 */
export default function lengthOfLongestSubstring(s: string): number {
  const len = s.length;
  if (len <= 1) return len;

  const map = new Map<string, number>();

  let left = 0;
  let right = 0;
  let maxLen = 0;

  while (right < len) {
    const char = s[right];
    const preCharIndex = map.get(char);

    if (map.has(char) && preCharIndex! >= left) {
      left = preCharIndex! + 1;
    }

    map.set(char, right);
    maxLen = Math.max(right - left + 1, maxLen);

    right++;
  }

  return maxLen;
}
