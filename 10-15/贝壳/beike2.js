var str='027555+692-0xD32C';
function test(str){
    var reg=/[+-]/g;
    var arrchar=[];
    while (reg.exec(str)){
        arrchar.push(reg.exec(str))
    }
    var arr=str.split(/[+-]/);
  var  sum=turn(arr[0]);
    for (i=1;i<arr.length;i++){
        arrchar[i]==='+'?sum+=turn(arr[i]):sum-=turn(arr[i])
    }
    return sum


}
function turn(str){
    if (str[0]==='0'&&str[1]==='x'){
        return parseInt(str,16);
    }
    if (str[0]==='0') {
        return parseInt(str,8);
    }else
    {
        return parseInt(str,10);
    }
}
console.log(test(str))

/*
var str=read_line()
function test(str){
    var arr=str.split('-');
    arr.map(function (item,index) {
        if (item.indexOf('+')!==-1){
            var b=item.split('+');
            arr[index]=b;
        }
    })
    var sum=0;
    arr.map(function (item) {
        if (typeof item==="object") {
            item.map(function (item2) {
                sum +=turn(item2)
            })
        }else {
            sum -=turn(item)
        }
    })
    return sum
}
function turn(str){
    if (str[0]==='0'&&str[1]==='x'){
        return parseInt(str,16);
    }
    if (str[0]==='0') {
        return parseInt(str,8);
    }else
    {
        return parseInt(str,10);
    }
}
printsth(test(str))*/
