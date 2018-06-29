const WINDOW_WIDTH = 1024;
const WINDOW_HEIGHT = 768;
const RADIUS = 8; //圆的半径
const MARGIN_TOP = 60; //上边距
const MARGIN_LEFT = 30; //第一个数字距离画布左边距的距离、
const endTime = new Date(2018, 5, 30, 0, 0, 0);
let curShowTimeSeconds = 0;
let balls = [];
const colors = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#009688", "#4caf50", "#8bc34a", "#ffeb3b", "#ff9800", "#ff5722", "#9e9e9e", "#607d8b"];
window.onload = function () {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");

    canvas.height = WINDOW_HEIGHT;
    canvas.width = WINDOW_WIDTH;
    curShowTimeSeconds = getCurrentShowTimeSeconds();
    setInterval(function () {
        render(context);
        update();
    }, 50);
};

/*
函数功能：绘制倒计时
    @para cxt:上下文绘图环境*/
function render(cxt) {
    cxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
    let hours = parseInt(curShowTimeSeconds / 3600);
    let minutes = parseInt((curShowTimeSeconds - hours * 3600) / 60);
    let second = curShowTimeSeconds % 60;
    // 将时间绘制出来
    renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours / 10), cxt);
    renderDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(hours % 10), cxt);
    renderDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 10, cxt);
    renderDigit(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes / 10), cxt);
    renderDigit(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(hours % 10), cxt);
    renderDigit(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP, 10, cxt);
    renderDigit(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(second / 10), cxt);
    renderDigit(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(second % 10), cxt);

    // 将小球绘制出来
    for (let i = 0; i < balls.length; i++) {
        cxt.fillStyle = balls[i].color;
        cxt.beginPath();
        cxt.arc(balls[i].x, balls[i].y, RADIUS, 0, 2 * Math.PI, true);
        cxt.closePath();
        cxt.fill();
    }

}

/*得到当前时间于endtime的差值秒数*/
function getCurrentShowTimeSeconds() {
    let curTime = new Date();
    let ret = endTime.getTime() - curTime.getTime();
    ret = Math.round(ret / 1000);
    return ret >= 0 ? ret : 0;
}

/*当前时间与绘制时间进行比对 检测时间的改变
* 产生新的小球
* 对已经产生的小球的运动进行更新*/
function update() {
    let nextShowTimeSeconds = getCurrentShowTimeSeconds();
    let nextHours = parseInt(nextShowTimeSeconds / 3600);
    let nextMinutes = parseInt((nextShowTimeSeconds - nextHours * 3600) / 60);
    let nextSeconds = nextShowTimeSeconds % 60;

    let curHours = parseInt(curShowTimeSeconds / 3600);
    let curMinutes = parseInt((curShowTimeSeconds - curHours * 3600) / 60);
    let curSeconds = curShowTimeSeconds % 60;
    if (nextSeconds !== curSeconds) {
        if (parseInt(curHours / 10) !== parseInt(nextHours / 10)) {
            addBalls(MARGIN_LEFT, MARGIN_TOP, parseInt(curHours / 10));
        }
        if (parseInt(curHours % 10) !== parseInt(nextHours % 10)) {
            addBalls(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(curHours % 10));
        }
        if (parseInt(curMinutes / 10) !== parseInt(nextMinutes / 10)) {
            addBalls(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(curMinutes / 10));
        }
        if (parseInt(curMinutes % 10) !== parseInt(nextMinutes % 10)) {
            addBalls(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(curMinutes % 10));
        }
        if (parseInt(curSeconds / 10) !== parseInt(nextSeconds / 10)) {
            addBalls(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(curSeconds / 10));
        }
        if (parseInt(curSeconds % 10) !== parseInt(nextSeconds % 10)) {
            addBalls(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(nextSeconds % 10));
        }
        curShowTimeSeconds = nextShowTimeSeconds
    }
    updateBalls()

}

/*
利用物理公式将小球的位置一帧一帧的算出来
@para vx X轴的速度
@para vy Y轴的速度
@para g  重力加速度
@para n  摩擦系数
碰撞检测：ball.Y>=768-ball.R  */
function updateBalls() {
    for (let i = 0; i < balls.length; i++) {
        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;
        /* 碰撞检测 速度取反乘摩擦系数*/
        if (balls[i].y >= WINDOW_HEIGHT - RADIUS) {
            balls[i].y = WINDOW_HEIGHT - RADIUS;
            balls[i].vy = -balls[i].vy * 0.75;
        }
    }
    let cnt = 0;
    for (let i = 0; i < balls.length; i++)
        if (balls[i].x + RADIUS > 0 && balls[i].x - RADIUS < WINDOW_WIDTH)
            balls[cnt++] = balls[i];

    while (balls.length > cnt) {
        balls.pop();
    }
}

function addBalls(x, y, num) {
    for (let i = 0; i < digit[num].length; i++) {
        for (let j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j] === 1) {
                let aball = {
                    x: x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
                    y: y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
                    g: 1.5 + Math.random(),
                    vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
                    vy: -5,
                    color: colors[Math.floor(Math.random() * 14)]
                }
                balls.push(aball)
            }
        }
    }
}

/*
函数功能：绘制某一个数字
    @para x:绘制起始位置x轴坐标
    @para y:绘制起始位置y轴坐标
    @para num:绘制数字的值
    @para cxt:上下文绘图环境*/
function renderDigit(x, y, num, cxt) {
    cxt.fillStyle = "#009688";
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


