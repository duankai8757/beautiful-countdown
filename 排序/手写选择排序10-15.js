function xuansort(arr) {
    let min=0;
    for (let i=0;i<arr.length;i++){
        min=i;
        for (let j=i+1;j<arr.length;j++){
            if (arr[j]<arr[min]){
                min=j
            }
        }
        var temp=arr[i];
        arr[i]=arr[min];
        arr[min]=temp;
    }
    return arr
}
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
var a=xuansort(arr);
console.log(a)