$(function () {
    //区域滚动
    require();
    var $parent = $('.nav-tabs-parent');
    /*1. 有个父容器  宽度100%  溢出隐藏*/
    $parent.css({width: '100%', overflow: 'hidden'});
    /*2. 套着一个子容器  宽度超过父容器  内容在一行显示*/
    var width = 0;
    $parent.find('li').each(function () {
        width += $(this).outerWidth(true);
    });
    $parent.find('ul').width(width);
    /*3. 初始化*/
    new IScroll($parent[0],{scrollX:true,scrollY:false});

    //工具提示
    $('[data-toggle="tooltip"]').tooltip();
});