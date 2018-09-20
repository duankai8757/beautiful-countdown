/*var n=6;
var string='1,2,3,3,4,4,4,5,5,5,5,5'
function test(n) {
    var arr=[];
    string.split(",").map(function (i) {
        arr.push(i)
    })
    var m=arr[n-1]
    var num=arr.indexOf(m)
    return num
}
console.log(test(6));*/

var string='0,1,0,2,1,0,1,3,2,1,2,1'
var arr=[]
function test2(string){
string.split(",").map(function (i) {
    arr.push(i)
})
    console.log(arr)
}
console.log(test2(string))

string.split(",").map(function (i) {
    arr.push(i)
})
function test(height){
    var waterVol = 0;
    var left = 0;
    var right = height.length - 1;
    var leftWall = height[left];
    var rightWall = height[right];

    while(left < right){
        if(height[left] < height[right]){
            if(height[left] < leftWall){
                waterVol += leftWall - height[left]
            }else{
                leftWall = height[left];
            }
            left++;
        }else{
            if(height[right] < rightWall){
                waterVol += rightWall - height[right];
            }else{
                rightWall = height[right];
            }
            right--;
        }
    }
    return waterVol;
};