function timeout(ms) {
    return new Promise((resolve, reject) => {
        //paras 3 附加参数，一旦定时器到期，它们会作为参数传递给function 或 执行字符串
        setTimeout(resolve, ms, 'done');
    });
}

timeout(1000).then((value) => {
    console.log(value);
});