/**
 * @description 单词规律
 * @link https://leetcode.cn/problems/word-pattern/description
 */

/**
 * @description 解题思路
 * 1.由于 s 字符串是以空格分割的一个个单词，先获取到每个单词组成的数组
 * 2.若 pattern 模式字符串的长度不等于单词数组的长度，则不满足匹配规律
 * 3.声明两个 Map，分别记录 pattern_char -> word 和 word -> pattern_char 的字符映射
 * 4.遍历，满足下面中的任一条件则不满足单词规律
 *  4.1.获取 pattern_char 字符映射的 word 单词，若映射值 与 word 单词不同，则不满足单词规律
 *  4.2.获取 word 单词映射的 pattern_char 字符，若映射值 与 pattern_char 字符不同，则不满足单词规律
 * 5.不满足上述两个条件，则将映射对存储下来(pattern_char -> word 和 word -> pattern_char)
 * 6.循环正常结束后，则表示传入的两个字符串满足单词规律
 */
export function wordPattern(pattern: string, s: string): boolean {
  const n = pattern.length;
  const words = s.split(" ");

  if (n !== words.length) return false;

  const p2s = new Map<string, string>();
  const s2p = new Map<string, string>();

  for (let i = 0; i < n; i++) {
    const pattern_char = pattern[i];
    const word = words[i];

    if (p2s.has(pattern_char) && p2s.get(pattern_char) !== word) {
      return false;
    }

    if (s2p.has(word) && s2p.get(word) !== pattern_char) {
      return false;
    }

    p2s.set(pattern_char, word);
    s2p.set(word, pattern_char);
  }

  return true;
}
