function getUrlParam3(sUrl, sKey) {
    var resObj = {};
    var reg = /(\w+)=(\w+)/g;
    while (reg.exec(sUrl)) {
        resObj[RegExp.$1] ? resObj[RegExp.$1] = [].concat(resObj[RegExp.$1], RegExp.$2) : resObj[RegExp.$1] = RegExp.$2;
    }
    if (sKey) {
        return (resObj[sKey] ? resObj[sKey] : '');
    }
    return resObj;
}

let url = 'http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe'
let result = getUrlParam3(url);
console.log(result)

