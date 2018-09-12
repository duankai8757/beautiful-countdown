/*
按所给的时间格式输出指定的时间
格式说明
对于 2014.09.05 13:14:20
yyyy: 年份，2014
yy: 年份，14
MM: 月份，补满两位，09
M: 月份, 9
dd: 日期，补满两位，05
d: 日期, 5
HH: 24制小时，补满两位，13
H: 24制小时，13
hh: 12制小时，补满两位，01
h: 12制小时，1
mm: 分钟，补满两位，14
m: 分钟，14
ss: 秒，补满两位，20
s: 秒，20
w: 星期，为 ['日', '一', '二', '三', '四', '五', '六'] 中的某一个，本 demo 结果为 五*/
var formatDate=function (dat, geshi) {
    var year=dat.getFullYear();
    var month=dat.getMonth();
    var day=dat.getDay();
    var hours=dat.getHours();
    var seconds=dat.getSeconds();
    var minutes=dat.getMinutes();
    var week=dat.getDay();
 var  obj={
     'yyyy':year,
     'yy':(year+'').slice(-2),
     'MM':('0'+(month+1)).slice(-2),
     'M':(month+1),
     'dd':("0"+day).slice(-2),
     'd':day,
     'HH':("0"+hours).slice(-2),
     'H':hours,
     'hh':("0"+hours%12).slice(-2),
     'h':hours%12,
     'mm':("0"+minutes).slice(-2),
     'm':minutes,
     'ss':("0"+seconds).slice(-2),
     's':seconds,
     'w': ['日', '一', '二', '三', '四', '五', '六'][week]

 }
 return geshi.replace(/[a-z]+/ig,function ($1) {
     return obj[$1]
 })

}
console.log(formatDate(new Date(1409894060000), 'yyyy-M-d hh:mm:ss 星期w'))