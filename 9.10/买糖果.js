var n;
while ((n = readInt()) != null) {
    var v = readInt();		//货车的容量
    var candyA = [];		//A1类型糖果，每个数组包含（编号、魔幻因子含量）
    var candyB = [];	//A2类型糖果，每个数组包含（编号、魔幻因子含量）
    for (var i = 1; i <= n; i++) {
        var candyType = readInt();			//糖果类型
        var candyFactor = readInt();		//糖果的魔幻因子含量.
        if (candyType == 1)
            candyA.push([i, candyFactor]);
        else
            candyB.push([i, candyFactor]);
    }
    var originV = v;
    //将糖果按照魔幻因子的含量排序
    candyA.sort((a, b) => b[1] - a[1]);
    candyB.sort((a, b) => b[1] - a[1]);
    var sumFactor = 0;
    var index = [];
    if (v % 2 == 1 && candyA.length > 0) {
        sumFactor += candyA[0][1];
        index.push(candyA[0][0]);
        v--;
        candyA.shift();
    }
    while (candyA.length > 1 && candyB.length > 0 && v > 0) {
        //当A类糖果的前两个魔幻因子之和大于B类糖果第一个的魔幻因子，选择A类前两个
        if ((candyA[0][1] + candyA[1][1]) >= candyB[0][1]) {
            sumFactor += (candyA[0][1] + candyA[1][1]);
            index.push(candyA[0][0], candyA[1][0]);
            v -= 2;
            candyA.splice(0, 2);
        } else {
            sumFactor += candyB[0][1];
            index.push(candyB[0][0]);
            v -= 2;
            candyB.shift();
        }
    }
    //考察最后剩余的情况
    //若是A糖果不足2个了,B糖果还有，则全装B糖果
    if (candyA.length <= 1 && candyB.length > 0) {
        //如果A还剩一个，如果比B大，则先装A
        if (candyA.length == 1) {
            while (v > 0) {
                if (candyA.length == 0 && candyB.length == 0) break;
                if (candyA.length == 1 && (candyB.length == 0 || candyA[0][1] >= candyB[0][1])) {
                    sumFactor += candyA[0][1];
                    index.push(candyA[0][0]);
                    v--;
                    candyA.shift();
                }
                if (v >= 2 && candyB.length > 0) {
                    sumFactor += candyB[0][1];
                    index.push(candyB[0][0]);
                    v -= 2;
                    candyB.shift();
                }
            }
        } else {
            while (v >= 2 && candyB.length > 0) {
                sumFactor += candyB[0][1];
                index.push(candyB[0][0]);
                v -= 2;
                candyB.shift();
            }
        }
    } else if (candyB.length == 0 && candyA.length > 1) {
        while (v > 0 && candyA.length > 1) {
            sumFactor += (candyA[0][1] + candyA[1][1]);
            index.push(candyA[0][0], candyA[1][0]);
            v -= 2;
            candyA.splice(0, 2);
        }
    }
    //若干车什么都没有装，则为No
    if(originV === v){
        print(0);
        print('No')
    }else{
        index.sort((a,b)=>a-b);
        print(sumFactor);
        print(index.join(" "));
    }
}