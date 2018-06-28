const WINDOW_WIDTH = 1024;
const WINDOW_HEIGHT = 768;
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
    let hours = 23;
    let minutes = 59;
    let second = 59;

    renderDigit(0, 0, parseInt(hours / 10), cxt)

}

/*
函数功能：绘制某一个数字
    @para x:绘制起始位置x轴坐标
    @para y:绘制起始位置y轴坐标
    @para num:绘制数字的值
    @para cxt:上下文绘图环境*/
function renderDigit(x, y, num, cxt) {

}