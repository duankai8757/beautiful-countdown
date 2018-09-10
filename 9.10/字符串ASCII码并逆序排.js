var str="hello world";
function GetAsciiCode(str){
    var strAscii = new Array();//用于接收ASCII码
    for(var i = 0 ; i < str.length ; i++ ){
        strAscii[i] = str.charCodeAt(i);//只能把字符串中的字符一个一个的解码
    }
    strAscii.sort(function (a, b) {
        return b-a;
    })
    return strAscii
}
console.log(GetAsciiCode(str))
