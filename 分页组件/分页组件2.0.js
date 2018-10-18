(function ($) {
    $.fn.pagination=function (options) {
        
    };
    // 默认参数列表
    $.fn.pagination.defaults = {
        pageCount : 0,
        showNumber : 10,
        showList : [10, 20, 50, 100],
        showPageBackOffset : 1,
        showPageFrontOffset : 2,
        count : 0,
        showPage : 1,
        showBlock : "",
        req:null,
        isJump : true,
        isList : true,
    }
    /**
     * 分页页码工具初始化(init)
     * @method init
     * @for Pagination
     * @param {int} count 数据总数
     * @param {int} showBlock 渲染的目标class
     * @param {int} req 请求函数
     */
    $.fn.pagination.init = function (showBlock, count, req) {
        this.count = count;
        this.pageCount = Math.ceil(this.count / this.showNumber);
        this.showBlock = "#" + showBlock;
        if ($.isFunction(req)) {
            this.req = req;
        } else {
            console.error("req is not a function");
        }
    };
    $.fn.pagination.render=function () {

    }
})(jQuery);