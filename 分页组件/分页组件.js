/**
 * 服务器分页页码工具类(Pagination)
 * @update@time2018-8-26 16:36:55 by 段凯
 * 1.基于bootstrap.min.css(当然也基于jquery)
 * 2.基于jquery.js
 * 3.样式基于bootstrap-table.min.css（项目中要跟使用bootstrap-table的模块保持一直）
 * ----------------------------------------------
 * @class Pagination
 * @property {int} pageCount 页数
 * @property {Array<int>} showList 每页显示的数据数量数组
 * @property {int} showNumber 显示的数据数量
 * @property {int} showPageBackOffset 后偏移页数
 * @property {int} showPageFrontOffset 前偏移页数
 * @property {int} count 数据总数
 * @property {int} showPage 当前显示页面
 * @property {function} req 请求方法
 * @property {bool} isJump 是否显示跳转
 * @property {bool} isList 是否显示每页数量数组
 */

const Pagination = function () {
    this.pageCount = 0;
    this.showNumber = 10;
    this.showList = [10, 20, 50, 100];
    this.showPageBackOffset = 1;
    this.showPageFrontOffset = 2;
    this.count = 0;
    this.showPage = 1;
    this.showBlock = "";
    this.req;
    this.isJump = true;
    this.isList = true;
    // this.obj;
};

/**
 * 控制分页参数页面跳转input框只能输入数字
 * @param _this
 * @author fangyuxuan
 */
function onlyNumberType(_this) {
    _this.value = _this.value.replace(/[^0-9]/g, '');
}

/**
 * 分页页码工具初始化(init)
 * @method init
 * @for Pagination
 * @param {int} count 数据总数
 * @param {int} showBlock 渲染的目标class
 * @param {int} req 请求函数
 */
Pagination.prototype.init = function (showBlock, count, req) {
    this.count = count;
    this.pageCount = Math.ceil(this.count / this.showNumber);
    this.showBlock = "#" + showBlock;
    if ($.isFunction(req)) {
        this.req = req;
    } else {
        console.error("req is not a function");
    }
};
/**
 * 分页页码工具渲染函数(paginationPageNumber)
 * @method paginationPageNumber
 * @for Pagination
 */
Pagination.prototype.render = function () {
    let paginationObj = this;
    $(this.showBlock).eq(0).html("");//清空内容
    $(this.showBlock).addClass("fixed-table-pagination");
    let $paginationBeforeDiv = $("<div class='pull-right pagination-detail tool-detail'></div>");
    let $paginationBefore = $("<span class='pagination-info'>共 " + this.count + " 条</span>");
    $paginationBeforeDiv.append($paginationBefore);

    //分页 页码 begin
    let $pagination = $("<div class='pull-right pagination tool-fenye'></div>");
    let $paginationUl = $("<ul class='pagination'></ul>");
    $pagination.append($paginationUl);

    let $t_left;
    let $t_home;
    $t_home = $("<li class='page-item'><a class='page-link'>首页</a></li>");
    $t_left = $("<li class='page-item page-pre'><a class='page-link'>‹</a></li>");

    if (this.showPage == 1) {
        $t_home.addClass("disabled");
        $t_left.addClass("disabled");
    } else {
        $t_left.on("click", function () {
            paginationObj.jumpTab(parseInt(paginationObj.showPage) - 1);
        });
        $t_home.on("click", function () {
            paginationObj.jumpTab(1);
        });
    }
    $paginationUl.append($t_left);
    let n = 1;
    let $t_page;
    let t_page_a;
    //如果当前页面不在偏移范围内则不显示
    //检测前面是否有.
    if (this.showPage <= 3) {
        for (n; (n < 3 + this.showPageFrontOffset + this.showPageBackOffset) && (n <= this.pageCount); n++) {
            $t_page = $("<li class='page-item'></li>");
            t_page_a = $("<a class='page-link'>" + n + "</a>");
            $t_page.append(t_page_a);
            $t_page.css("cursor", "pointer");
            if (n === parseInt(this.showPage)) {
                $t_page.addClass("active");
                // @update 2018-8-9 16:13:49 段凯 bug4149
                $t_page.addClass("disabled");
            }
            $t_page.on("click", function () {
                paginationObj.jumpTab(this.innerText);
            });
            $paginationUl.append($t_page);
        }
    }
    else {
        if (n < this.showPage - this.showPageBackOffset) {

            let $t_page1 = $("<li class='page-item'><a class='page-link'>1</a></li>");
            $t_page1.on("click", function () {
                paginationObj.jumpTab(this.innerText);
            });
            $t_page = $("<li class='page-item disabled'><a class='page-link'>...</a></li>");
            $paginationUl.append($t_page1, $t_page);
            n = this.showPage - this.showPageBackOffset;
        }
    }

    //输出中间部分页码
    for (n; n <= this.pageCount; n++) {
        if (n < 3 + this.showPageFrontOffset + this.showPageBackOffset) {
            $t_page = $("<li class='page-item'></li>");
            t_page_a = $("<a>" + n + "</a>");
            $t_page.append(t_page_a);
            if (n === parseInt(this.showPage)) {
                $t_page.addClass("active");
                $t_page.addClass("disabled");
            }
            $t_page.on("click", function () {
                paginationObj.jumpTab(this.innerText);
            });
        } else if (n < parseInt(this.showPage) + this.showPageFrontOffset) {
            $t_page = $("<li class='page-item'></li>");
            t_page_a = $("<a>" + n + "</a>");
            $t_page.append(t_page_a);
            if (n === parseInt(this.showPage)) {
                $t_page.addClass("active");
                $t_page.addClass("disabled");
            }
            $t_page.on("click", function () {
                paginationObj.jumpTab(this.innerText);
            });
        } else {
            $t_page = $("<li class='page-item page-last-separator disabled'><a class='page-link'>...</a></li>");
            $paginationUl.append($t_page);
            break;
        }
        $paginationUl.append($t_page);
    }
    //输出末端页码
    for (n; n <= this.pageCount; n++) {
        if (n <= parseInt(this.pageCount) - this.showPageBackOffset) {
            continue;
        }
        $t_page = $("<li class='page-item'><a class='page-link'>" + n + "</a></li>");
        $t_page.on("click", function () {
            paginationObj.jumpTab(this.innerText);
        });
        $paginationUl.append($t_page);
    }
    //对首页和尾页进行处理
    let $t_right;
    let $t_end;
    $t_right = $("<li class='page-item'><a class='page-link'>›</a></li>");
    $t_end = $("<li class='page-item'><a class='page-link'>尾页</a></li>");
    if (this.showPage == this.pageCount || this.pageCount == 0) {
        $t_right.addClass("disabled");
        $t_end.addClass("disabled");
    } else {
        $t_right.on("click", function () {
            paginationObj.jumpTab(parseInt(paginationObj.showPage) + 1);
        });
        $t_end.on("click", function () {
            paginationObj.jumpTab(paginationObj.pageCount);
        });
    }
    $paginationUl.append($t_right);
    //分页 页码 end

    //输入跳转 begin
    if (this.isJump) {
        let $jump = $("<div class='pull-right pagination tool-goto'></div>");
        let $jump_input_before = $("<span>到第 </span>");
        let $jump_input = $("<input id='pageNum' class='btn btn-default' type='text' oninput=\"onlyNumberType(this)\" maxlength='3' style='width: 30px;'>");
        let $jump_input_after = $("<span> 页 </span>");
        let $jump_btn = $("<input type='button' value='确定' class='btn btn-primary button-style'/>");
        $jump_btn.on("click", function () {
            paginationObj.jumpTab($(this).prev().prev().val());
        });
        $jump.append($jump_input_before, $jump_input, $jump_input_after, $jump_btn);
        $(this.showBlock).eq(0).append($jump);
    }
    //输入跳转 end

    //输入显示每页数量数组 begin
    if (this.isList) {
        let $list = $("<span class='page-list btn-group dropup tool-countpage'></span>");

        //========== update@date 2018-6-12 15:15:03 by 段凯 将分页组件样式统一===============
        let _selectedval = '';
        let $list_btn = $("<button type=\"button\"  class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"page-size\">" + paginationObj.showNumber + "条/页</span> <span class=\"caret\"></span></button>")
        let $list_select = $("<ul  class=\"dropdown-menu\" role=\"menu\" style='min-width: 0;'></ul>");
        for (let t_n = 0; t_n < this.showList.length; t_n++) {
            let $list_option = $("<li  class='" + this.showList[t_n] + "' value='" + this.showList[t_n] + "' id='menu_li'><a>" + this.showList[t_n] + "条/页</a></li>");
            $list_select.append($list_option);
        }
        // ===============end====================
        $list_select.val(this.showNumber);

        $list_select.find("a").on("click", function () {
            paginationObj.showNumber = parseInt($(this).parent().attr("class"));
            paginationObj.pageCount = Math.ceil(paginationObj.count / paginationObj.showNumber);
            /*$.each($selectli, function (i, item) {
                if ($(item).attr("value") == paginationObj.showNumber) {
                    $(item).addClass("active")
                }
            });*/
            paginationObj.jumpTab(1);
        });
        $list.append($list_btn);
        $list.append($list_select);
        $(this.showBlock).eq(0).append($list);

        /* ==============当前页数加class active==================*/
        let $selectli = $("#menu_li");
        $.each($selectli, function (i, item) {
            if ($(item).attr("value") == paginationObj.showNumber) {
                $(item).addClass("active")
                $(item).addClass("disabled");
            }
        })
    }

    //输入显示每页数量数组 end

    $(this.showBlock).eq(0).append($pagination);
    $(this.showBlock).eq(0).append($paginationBeforeDiv);
};
/**
 * 每页？条 menu点击跳转
 *@num 每页显示？条
 *
 */
Pagination.prototype.selected = function (num) {
    let paginationObj = this;
    paginationObj.showNumber = parseInt(num);
    paginationObj.pageCount = Math.ceil(paginationObj.count / paginationObj.showNumber);
    paginationObj.jumpTab(1);
};
/**
 * 分页跳转函数(jumpTab)
 * @method jumpTab
 * @for Pagination
 * @param {int} pageIndex 跳转到的页码
 */
Pagination.prototype.jumpTab = function (pageIndex) {
    if (pageIndex > 0 && pageIndex <= this.pageCount) {
        this.showPage = pageIndex;
    } else {
        layer.msg("请输入正确的页码");
        // update@time 2018-7-27 10:47:22 DUANKAI
        return
        // this.showPage = 1;
    }
    this.req();
};


/**
 * 设置每页显示的数量之后自动跳转到第一页
 * 分页设置每页显示的数量函数(setShowNumber)
 * @method setShowNumber
 * @for Pagination
 * @param {int} showNumber 每页显示的数量
 */
Pagination.prototype.setShowNumber = function (showNumber) {
    this.showPage = 1;
    this.showNumber = showNumber;
    this.render();
};

/*==========================分页止================================*/