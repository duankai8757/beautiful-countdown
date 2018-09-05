Array.prototype.uniq = function () {
    //return [...new Set(this)]; es6


    var $ = this, flag = true;
    var result = [];
    $.forEach(function (value, index, array) {
        if (result.indexOf(value) === -1) {
            if (value != value) {
                if (flag) {
                    result.push(value)
                    flag = false
                }
            }
            else {
                result.push(value)
            }
        }
    })
    return result

}
var a = [1, 1, 1, 2, 3, 4]
var b = a.uniq();
console.log(b)