// 在前端处理html模板的时候倒是可以用堆栈来匹配成对的括号。遇到开括号则将其压入，遇到匹配的闭括号则压出相应的开括号，否则继续压入。
// https://github.com/qieguo2016/algorithm/blob/master/md/%E6%95%B0%E7%BB%84%E4%B8%8E%E9%93%BE%E8%A1%A8%EF%BC%8C%E5%A0%86%E6%A0%88%E4%B8%8E%E9%98%9F%E5%88%97.md
function pairTest(str) {
    var open = {
        '<': '>',
        '{': '}',
        '(': ')',
    };
    var close = {
        '>': '<',
        '}': '{',
        ')': '(',
    };
    var stack = [];
    var result = [];
    for (var i = 0, len = str.length; i < len; i++) {
        if (open[str[i]]) {
            stack.push({index: i, value: str[i]});
        }
        if (close[str[i]]) {
            if (close[str[i]] === stack[stack.length - 1].value) {
                var temp = stack.pop();
                result.push(str.slice(temp.index + 1, i));
            } else {
                throw new Error('匹配出错！');
            }
        }
    }
    return result;
}