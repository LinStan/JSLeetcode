/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b)
  var item = [],
    path = [];
  get_combin(candidates, target, 0, item, path);

  function get_combin(candidates, target, it, item, path) {
    if (target < 0)
      // 如果大于target 直接返回不继续搜索
      return;
    if (target == 0) {
      // 若得到路径，插入到item，不用清空path。因为需要继续搜索其余可能性
      path = path.slice()
      item.push(path);
      return
    }
    for (var i = it; i < candidates.length; i++) {
      path.push(candidates[i]);
      get_combin(candidates, target - candidates[i], i, item, path)
      // 无论是该路径大于target还是等于target，都需要对其删除最后一个元素，进行其余支路的搜索
      path.pop()
    }
  }
  return item
};