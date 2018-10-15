function test(x,a,c,y,b,d) {
    var zhi=parseInt(y/a)*c;
    var chun=parseInt(x/b)*d;
    console.log(zhi,chun
    )
    if (zhi===chun){
        return 'TIE'
    }
    if (zhi<chun){
        return 'XIAOZHI'
    }
    if (zhi>chun){
        return 'XIAOCHUN'
    }
}
// console.log(test(1,2,3,4,5,6));
var n=4
// for(i=0;i<n;i++){
    var readline='1 2 3 4 5 6'.split(' ');
console.log(readline)
    console.log(test(readline[0],readline[1],readline[2],readline[3],readline[4],readline[5]))
// }