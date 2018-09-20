var string=read_line()
var arr=[]
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
print(test(arr))