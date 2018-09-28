var result=1;
function kinds(n,torf) {
    if (n==0){
        return result
    }
   if (torf) {
           kinds(n - 1, false);
   }else {
        result++
        kinds(n - 1, true);
        kinds(n - 1, false);
   }
return result
}
console.log(kinds(3,false));
//0.18