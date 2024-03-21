/**
 * @description 同构字符串
 * @link https://leetcode.cn/problems/isomorphic-strings/description
 */

/**
 * @description 解题思路：不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上
 * 1.声明两个 Map，分别记录 s -> t 和 t -> s 的字符映射
 * 2.遍历字符串，满足下面中的任一条件则不同构
 *  2.1.获取 s 字符映射的 t 字符，若映射值 与 t 字符不同，则不同构
 *  2.2.获取 t 字符映射的 s 字符，若映射值 与 s 字符不同，则不同构
 * 3.不满足上述两个条件，则将映射对存储下来(s -> t 和 t -> s)
 * 4.循环正常结束后，则表示传入的两个字符串满足同构
 */
export function isIsomorphic(s: string, t: string): boolean {
  const n = s.length;
  const s2t = new Map<string, string>();
  const t2s = new Map<string, string>();

  for (let i = 0; i < n; i++) {
    const s_char = s[i];
    const t_char = t[i];

    if (s2t.has(s_char) && s2t.get(s_char) !== t_char) {
      return false;
    }

    if (t2s.has(t_char) && t2s.get(t_char) !== s_char) {
      return false;
    }

    s2t.set(s_char, t_char);
    t2s.set(t_char, s_char);
  }

  return true;
}
