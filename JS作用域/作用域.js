
var a=1;
function bfun() {
    var c=2;
    return  function () {
        console.log(c)
    }
}
bfun()();