const WINDOW_WIDTH = 1024;
const WINDOW_HEIGHT = 768;
const RADIUS = 8; //圆的半径
const MARGIN_TOP = 60; //上边距
const MARGIN_LEFT = 30; //第一个数字距离画布左边距的距离、
const endTime = new Date(2018, 5, 30, 0, 0, 0);
let curShowTimeSeconds = 0;
window.onload = function () {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");

    canvas.height = WINDOW_HEIGHT;
    canvas.width = WINDOW_WIDTH;

    render(context);
};

/*
函数功能：绘制倒计时
    @para cxt:上下文绘图环境*/
function render(cxt) {
    curShowTimeSeconds = getCurrentShowTimeSeconds();
    let hours = parseInt(curShowTimeSeconds / 3600);
    let minutes = parseInt((curShowTimeSeconds - hours * 3600) / 60);
    let second = curShowTimeSeconds % 60;

    renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours / 10), cxt);
    renderDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(hours % 10), cxt);
    renderDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 10, cxt);
    renderDigit(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes / 10), cxt);
    renderDigit(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(hours % 10), cxt);
    renderDigit(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP, 10, cxt);
    renderDigit(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(second / 10), cxt);
    renderDigit(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(second % 10), cxt);

}

function getCurrentShowTimeSeconds() {
    let curTime = new Date();
    console.log(endTime.toLocaleDateString())
    let ret = endTime.getTime() - curTime.getTime();
    ret = Math.round(ret / 1000);
    return ret >= 0 ? ret : 0;
}

/*
函数功能：绘制某一个数字
    @para x:绘制起始位置x轴坐标
    @para y:绘制起始位置y轴坐标
    @para num:绘制数字的值
    @para cxt:上下文绘图环境*/
function renderDigit(x, y, num, cxt) {
    cxt.fillStyle = "red";
    for (let i = 0; i < digit[num].length; i++) {
        for (let j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j] === 1) {
                cxt.beginPath();
                /* 利用格子系统计算格子的位置
                 第(i,j)个圆心的位置：centerX：x+j*(R+1)+(R+1) centerY：y+i*(R+1)+(R+1)
                 arc()
                 @para 圆心X轴位置
                 @para 圆心Y轴位置
                 @para 半径
                 @para 起始位置
                 @para 结束位置
                 @para 是否顺时针*/
                cxt.arc(x + j * 2 * (RADIUS + 1) + (RADIUS + 1), y + i * 2 * (RADIUS + 1) + (RADIUS + 1), RADIUS, 0, 2 * Math.PI);
                cxt.closePath();
                cxt.fill();
            }
        }
    }
}