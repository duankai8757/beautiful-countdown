
function Find(target, array)
{
    var n=array.length;
    var m=array[0].length;
   for (var i=n-1,j=0;i>=0&&j<m;){
            console.log('i:'+i,"j:"+j);
           console.log(array[i][j]);
           if (target===array[i][j]) {
               return true
           }
           if (target<array[i][j]){
             i--
               continue
           }
           if (target>array[i][j]) {
               j++
               continue
       }
}
    return false
}


let barr=[[1,2,3,4,5,6],[2,3,4,5,6,7],[5,8,9,11,23,56]];
console.time()
console.log(Find(7,barr))
console.timeEnd()