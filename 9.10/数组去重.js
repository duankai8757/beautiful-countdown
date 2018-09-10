function arrayUnique(target) {
    var result = [target[0]];
    var temp = {};
    temp[target[0]] = true;
    for (var i = 1, targetLen = target.length; i < targetLen; i++) {
        if (typeof temp[target[i]] === 'undefined') {
            result.push(target[i]);
            temp[target[i]] = true;
        }
    }
    return result;
}