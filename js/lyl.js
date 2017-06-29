/**
 * Created by LYL on 2017-06-25.
 */

// ============左侧导航栏滑动特效开始===============

//设置标杆
// var _line = parseInt($(window).height() / 3);
var nav = $('#j_nav_left');  //获取左边导航栏元素
var nav_items = nav.children();  //获取ul的所有子元素
var nav_H = parseInt(nav.height());  //获取左边导航栏的高度

var steps = $('#j_step').children();  //获取右边所有步骤的子元素
// console.log(steps);
var step01_H = parseInt(steps.eq(0).height()); //获取第一个步骤元素的高度，li或者tr，用这个高度导航栏开始滑动是高度的参考点
// console.log(step01_H);
$(window).scroll(function () {

    //如果滚动的高度大于第一个步骤元素的高度，导航栏则开始随之滚动
    if ($(window).scrollTop() > step01_H) {
        nav.css({'position': 'fixed', 'top': '50%', 'left': '60', 'margin-top': -(nav_H / 2)})
    } else {
        nav.css({'position': '', 'top': '', 'margin-top': ''})
    }
    nav_items.eq(0).addClass('active');

    //滚动到标杆位置,左侧导航加active
    steps.each(function (i, ele) {
        var target = parseInt($(this).offset().top - $(window).scrollTop() - 20);//- _line
        // console.log(target);
        if (target <= 0) {
            nav_items.removeClass('active');
            nav_items.eq(i).addClass('active');
        }
        else if ($(document).height() == $(window).scrollTop() + $(window).height()) {  //
            nav_items.removeClass('active');
            nav_items.eq(steps.length - 1).addClass('active');
        }

    });
});


nav_items.click(function () {
    nav_items.removeClass('active');
    $(this).addClass('active');
    var _i = $(this).index();
    $('body, html').animate({scrollTop: steps.eq(_i).offset().top - 20}, 20);// - _line
});

// ============步骤特效结束===============


//--------------------------------------------------

//点击a触发加id事件
//1.获取右侧导航栏中所有的li标签个数进行遍历
//2.点击右侧的导航栏的某个li时，给当前的这个点击li标签中的a元素的href属性传入一个 【#+id的参数】的
//3.获取左侧步骤中的所有div的h2标签遍历，获得索引号
//4.传入相应参数【id】


//1.获取右侧导航栏中所有的子li标签个数进行遍历
//2.点击右侧的导航栏的某个子li时，给当前的这个点击li标签中的a元素的href属性传入一个 【#+id的参数+索引号】
//3.获取左侧步骤中的所有子div的h3标签，传入参数【id参数+索引号】

//给所有的li和div中的h2加上id参数
//给所有的子元素li和子div的h3传入id+索引号
function addItem_Id(id_name) {

    //菜单获取id
    var nav_items = $('#tree_menu').children();
    nav_items.each(function (index, el) {
        $(this).find('a').attr('href', '#' + id_name[index]);
        //分别获取子元素li
        var nav_branch = $(this).children().find('a');   //li--->ul
        // console.log(nav_branch);
        nav_branch.each(function (i, e) {
            $(this).attr('href', '#' + id_name[index] + i);
        })
    });


    //文章标题获取id
    var article = $('#article').children();
    article.each(function (index, el) {
        // h2 get id name
        $(this).children('h2').attr('id', id_name[index]);
        // h3 get id name

        var step = $(this).find('h3');
        step.each(function (i, e) {
            $(this).attr('id', id_name[index] + i);
        })
    });
}


//返回顶部特效---------------------------

function toTop() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $('#top').fadeIn(1500);
        }
        else {
            $('#top').fadeOut(1500);
        }
    });
    $('#top').click(function () {
        $('body,html').animate({scrollTop: 0}, 1000);

    });
}


//页面滑动时激活相应的菜单项

//js化，遍历数据，传入对应的html的结构

function getData() {
    var $j_title = $("#j_title"); //
    var $j_step = $("#j_step");
    var $j_des = $("#j_des");
    var $j_img = $("#j_img");

    var str_title = "";  //存储数据的变量
    var str_step = "";
    var str_des = "";
    var str_img = "";
    $j_title.empty();  //清空内容
    $j_step.empty();
    $j_des.empty();
    $j_img.empty();

    /*$j_title.each(data, function (i, obj) {
        console.log(i, obj);

        /!*str_step += data.content[i].step[i];
        str_des += data.content[i].des[i] ;
        str_img += data.content[i].img[i];*!/
    });*/
    var data = [{
        "title": "安装教程",
        "content": [
            {
                "step": "1.获得外挂压缩包",
                "img": "图片1",
                "des": "描述1"
            },
            {
                "step": "2.解压缩",
                "img": "图片2",
                "des": "描述2"
            },
            {
                "step": "3.设置游戏客户端路径",
                "img": "图片3",
                "des": "描述3"
            }
        ]
    },
        {
            "title": "设置教程",
            "content": [
                {
                    "step": "1.登录",
                    "img": "图片1",
                    "des": "描述1"
                },
                {
                    "step": "2.打开角色窗口",
                    "img": "图片2",
                    "des": "描述2"
                },
                {
                    "step": "3.修理装备",
                    "img": "图片3",
                    "des": "描述3"
                }
            ]
        }];
    for(var i=0;i<data.length;i++){
        console.log(data.length);
        str_title += data[i].title[i];
        console.log(str_title);
    }


    $j_title.text(str_title);//显示处理后的数据
}
getData();































