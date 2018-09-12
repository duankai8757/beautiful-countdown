var year = readInt();
var month = readInt();
function searchMouthDays(y,m) {
    if (y ===void 0||m===void 0||y>2018||y<0||m>12||m<0){
        return false
    }
        if (m===(1||3||5||7||8||10||12))return 31
       else if (m===(4||6||9||11)) return 30;
        else if (y%4===0){
            return 29
         }else{
            return 28
        }
}
console.log(searchMouthDays(year,month))