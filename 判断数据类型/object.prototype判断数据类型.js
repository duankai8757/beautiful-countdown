function type(a) {
    var typestring=Object.prototype.toString.call(a);
    var regex=	/^\[object (\w+)\]$/;
    typestring.match(regex);
    console.log(RegExp.$1.toLocaleLowerCase())
    return RegExp.$1.toLocaleLowerCase()
}
var a;
var b=null;
var c=function () {
    console.log(1)
};
var d=[1,2];
var e={};
type(a);
type(b);
type(c);
type(d);
type(e);