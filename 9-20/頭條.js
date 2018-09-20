// var string=read_line();
var string='/a/././b//../../c/';
function test(str) {
    var string=str||'';
    var num=0;
    if ( string.lastIndexOf('/')!==-1){
        num=string.lastIndexOf('/');
        if (num===string.length-1) {
            var a=string.substring(0,string.length-1)
            test(a)
        }else {
            var b=string.substring(num);
            console.log(b)
            return b
        }
    }
}
test(string)