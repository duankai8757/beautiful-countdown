function sort(arr) {
    for (let i=0,l=arr.length;i<l;i++){
        for (let j=0,b=arr.length-i-1;j<b;j++){
            if (arr[j+1]<arr[j]){
              var  temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr
}
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(sort(arr))