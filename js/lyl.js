/**
 * Created by LYL on 2017-06-25.
 */

//------==========-paylesson台湾页面左侧导航栏滑动特效开始-----------------------------------

//设置标杆
// var _line = parseInt($(window).height() / 3);
var nav = $('#j_nav_left');  //获取左边导航栏元素
var nav_items = nav.children();  //获取ul的所有子元素
var nav_H = parseInt(nav.height());  //获取左边导航栏的高度
var steps = $('#j_step').children();  //获取右边所有步骤的子元素
var step01_H = parseInt(steps.eq(0).height()); //获取第一个步骤元素的高度，li或者tr，用这个高度导航栏开始滑动是高度的参考点
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

//-----------步骤特效结束----------------

//===========教程引导页面特效=================================================
//点击a触发加id事件--------------------------------------------------
//1.获取右侧导航栏中所有的li标签个数进行遍历
//2.点击右侧的导航栏的某个li时，给当前的这个点击li标签中的a元素的href属性传入一个 【#+id的参数】的
//3.获取左侧步骤中的所有div的h2标签遍历，获得索引号
//4.传入相应参数【id】
//1.获取右侧导航栏中所有的子li标签个数进行遍历
//2.点击右侧的导航栏的某个子li时，给当前的这个点击li标签中的a元素的href属性传入一个 【#+id的参数+索引号】
//3.获取左侧步骤中的所有子div的h3标签，传入参数【id参数+索引号】
//4.给所有的li和div中的h2加上id参数
//5.给所有的子元素li和子div的h3传入id+索引号---------------------
var id_name = ['install', 'set', 'update', 'taskFB', 'taskSelf', 'help', 'question','i7391'];
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

//2016-06-29
//返回顶部特效---------------------------
toTop();
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


//js化，遍历数据，传入对应的html的结构-------------------------------------
var data = [{
    id: 1,
    level: 1,
    title: "1.安装",
    content: [
        {
            id: 1,
            level: 2,
            step: "1.获得外挂压缩包",
            des: "	付费后的用户将会通过QQ得到一个压缩包（完整版），如图:图中的文件名称中带有的版本号和日期可能有所不同",
            img: "../img/Setup01.png"
        },
        {
            id: 2,
            level: 2,
            step: "2.解压缩",
            des: "必须解压缩到文件夹，不能在压缩包中直接运行。直接解压缩到硬盘，最好不要放在C盘，不然系统重装就没了，本软件是绿色完整版，比如在D盘，就算系统重装后，直接使用就行了。 解压缩后得到下图所示文件列表：启动外挂的图标很显眼，一看就知道了（He008(*)Fight.exe）不同版本可能名称有所不同",
            img: "../img/Setup02.png"
        },
        {
            id: 3,
            level: 2,
            step: "3.设置游戏客户端路径",
            des: "首次运行会弹出一个设置路径的窗口，如图：红线已标明了，就是要让外挂找到游戏客户端在什么地方，好读取所需要的文件，所以，游戏客户端的路径选择应该如下图所示：",
            img: "../img/Setup03.png"
        },
        {
            id: 4,
            level: 2,
            step: "4.什么是游戏路径？",
            des: "左图的游戏路径是我电脑安装的地方，必须和图划线路径选择保持一致。",
            img: "../img/Setup04.png"
        },
        {
            id: 5,
            level: 2,
            step: "5.启动外挂时要关闭游戏、其他类型外挂",
            des: "启动外挂，如图：注意：启动前必须关掉游戏客户端程序、007、旋风等外挂，否则读取文件时会失败。",
            img: "../img/Setup05.png"
        },
        {
            id: 6,
            level: 2,
            step: "6.启动失败怎么办？",
            des: "一旦启动时读取文件失败，必须执行如图操作。或手动删除008下的< cash >文件夹",
            img: "../img/Setup06.png"
        },
        {
            id: 7,
            level: 2,
            step: "7.添加新帐号",
            des: "填写好帐号、密码，选择好角色，点击“登录”。",
            img: "../img/Setup07.png"
        }
    ]
}, {
    id: 2,
    level: 1,
    title: "2.设置--战斗版·任务版通用",
    content: [
        {
            id: 1,
            level: 2,
            step: "1.登录",
            des: "填写好帐号、密码，选择好角色，点击“登录”",
            img: "../img/Setup08.png"
        }, {
            id: 2,
            level: 2,
            step: "2.打开角色窗口",
            des: "双击选中的行，可以打开角色窗口",
            img: "../img/Setup09.png"
        }, {
            id: 3,
            level: 2,
            step: "3.修理装备",
            des: "接下来先设置【装备修理】，在【装备栏】某个装备上点击【鼠标右键】，会有菜单提示，逐个设置就行了。",
            img: "../img/Setup10.png"

        }, {
            id: 4,
            level: 2,
            step: "4.战斗设置",
            des: "接下来就是进行战斗设置",
            img: "../img/Setup11.png"

        }, {
            id: 5,
            level: 2,
            step: "5.自动武功加持",
            des: "轻功不需要设置，外功是智能的，只能选择最强，或最省内力。补血、补内武功也在这里勾选，支持组队武功,不支持夫妻技能，因为经常伴侣不在线，容易卡住。",
            img: "../img/Setup14.png"

        }, {
            id: 6,
            level: 2,
            step: "6.常规设置",
            des: "会弹出一个设置窗口，内容比较多，但应该是描述很清晰了。特别注意：寻怪(相对)级别：比角色等级 -10~ 9当前角色是26级，-10 实际就是 角色等级26 - 相对低10级 = 16级怪9    实际就是 角色等级26 + 相对高 9级 = 35级怪",
            img: "../img/Setup12.png"

        }, {
            id: 7,
            level: 2,
            step: "7.挂机点设置",
            des: "需要注意的是，这里的挂机点等级是指怪物的等级，和第6页【寻怪等级】概念是一致的。如果设置不正确，那么挂机点将无法保存。如果不明白继续看下一步",
            img: "../img/Setup15.png"

        }, {
            id: 8,
            level: 2,
            step: "8.挂机点设置详解",
            des: "①角色等级是26级；②当前挂机范围内的怪物等级是16级，对应的挂机点设置中的怪物等级也要填写16；③寻怪设置：想打16级~35级的怪物，换句话说，就是想打比自己低10级的怪~比自己高9级的怪。这个等级设置是相对的，和其他的外挂概念不同，优点是:事先设置好各种等级的挂机点后，可以随着角色的升级后自动更换挂机点",
            img: "../img/Setup1201.png"

        }, {
            id: 9,
            level: 2,
            step: "9.药品设置",
            des: "买药设置：只买一种红药时，只能设置为大血药。设置顺序时，先设置大血药，再设置小血药。当不买小药时，必须取消【买小药】，且大药的剂量必须大于小药的剂量，否则会有出错提示。宠物买药不用设置，只要有能用的宠物就会自动使用，默认寻找第一个能用的宠物。一定注意+9宠物和+10宠物的区别，否则可能设置的大药买不了，建议全部用+10的宠物。这里要注意：使用任务版时，不要勾选超出2倍药卖掉，否则会卡住任务，浪费钱财。",
            img: "../img/Setup16.png"
        }, {
            id: 10,
            level: 2,
            step: "10.自动学武",
            des: "学武设置：【添加】的武功默认学的等级，是下一级武功所要求的前置等级，如果没有后置武功，则默认100级。 添加好的武功，鼠标双击可设置学习到多少级，默认100，确定就行了。",
            img: "../img/Setup17.png"
        }, {
            id: 11,
            level: 2,
            step: "11.组队、远程设置",
            des: "组队、远程设置",
            img: "../img/Setup18.png"
        }, {
            id: 12,
            level: 2,
            step: "12.开始挂机",
            des: "设置到这里就完成了，然后开始战斗就行了",
            img: "../img/Setup19.png"
        }, {
            id: 13,
            level: 2,
            step: "13.聊天",
            des: "聊天窗口的设置，在信息栏点击鼠标右键，有菜单选择。自动隐藏的目的是尽量扩大信息显示的空间。",
            img: "../img/Setup20.png"
        }
    ]
}, {
    id: 3,
    level: 1,
    title: "3.如何更新",
    content: [
        {
            id: 1,
            level: 2,
            step: "1.如何更新外挂补丁",
            des: "一般是替换某个文件，比如主程序，直接替换同名文件即可。也可能是03.dat，03F.dat，03T.dat，也是直接替换同名文件即可。注意，QQ接收这个文件可能会改名03F(1).dat之类，你替换时必须改成03F.dat，否则替换无效。替换之后，外挂重启，即可。",
            img: "../img/question5.png"
        },
        {
            id: 2,
            level: 2,
            step: "2.游戏客户端更新",
            des: "游戏客户端更新了，外挂不能用了，如果更新外挂？1、外挂主控台菜单->共享资源->清除所有缓存。2、重启外挂，即可。",
            img: "../img/question13.png"
        }
    ]
}, {
    id: 4,
    level: 1,
    title: "4.任务版(自动205FB)",
    content: [
        {
            id: 1,
            level: 2,
            step: "简介：",
            des: "任务版是在战斗版的基础上增加了自动做任务的功能、自动FB的功能，所以其他设置都是一样的，不再赘述。自动做任务： 只自动支持到130级主线任务。在task.txt中把已经支持的任务清单都列出来了，不想做的任务可以自己修改，后文详述。自动FB的功能：不是所有FB都可以自动的，目前只支持205FB的自动，其他FB要自动的需要自己编写挂机点脚本。",
            img: ""
        }, {
            id: 2,
            level: 2,
            step: "步骤1",
            des: "自动FB必须启动任务版(Task)才行，战斗版不含此功能",
            img: "../img/task1.png"
        }, {
            id: 3,
            level: 2,
            step: "步骤2",
            des: "手动进入FB地图后，在外挂菜单中“战斗设置”。",
            img: "../img/Setup11.png"
        }, {
            id: 4,
            level: 2,
            step: "步骤3",
            des: "“战斗设置”->“练功点”->“导入文件”。",
            img: "../img/task2.png"
        }, {
            id: 5,
            level: 2,
            step: "步骤4",
            des: "“选择”205FB.ini”导入。”。",
            img: "../img/task3.png"
        }, {
            id: 6,
            level: 2,
            step: "步骤5",
            des: "“菜单->”开始战斗”，即可。”。",
            img: "../img/Setup19.png"
        }, {
            id: 7,
            level: 2,
            step: "步骤6",
            des: "因FB怪太多，一般都打不完，所以，可用左图中的FBStep旋钮来跳过一些不需要的挂机点， 可节约不少时间，当然，也可以自行修改脚本，删除一些挂机点， 这个因人而异，众口难调，请自行修改。",
            img: "../img/task4.png"
        }, {
            id: 8,
            level: 2,
            step: "步骤7",
            des: "自行修改时注意规则：如图：半径=1，是自动与NPC对话，坐标应设置为NPC的坐标战斗点设置的半径、坐标自行决定，和战斗版设置是一样的，但不能=1。所以，建议把挂机点范围弄的尽可能的小，否则会走很多冤枉路，浪费时间。强烈建议：只是删除不需要的挂机点，不要自己去添加，容易搞错，修改前自己做好备份。",
            img: "../img/task5.png"
        }
    ]
}, {
    id: 5,
    level: 1,
    title: "5.任务版(自动做任务)",
    content: [
        {
            id: 1,
            level: 2,
            step: "简介",
            des: "任务版是在战斗版的基础上增加了自动做任务的功能、自动FB的功能，所以其他设置都是一样的，不再赘述。自动做任务： 只自动支持到130级主线任务。在task.txt中把已经支持的任务清单都列出来了，不想做的任务可以自己修改，后文详述。自动FB的功能：不是所有FB都可以自动的，目前只支持205FB的自动，其他FB要自动的需要自己编写挂机点脚本。",
            img: ""
        }, {
            id: 2,
            level: 2,
            step: "步骤1",
            des: "自动FB必须启动任务版(Task)才行，战斗版不含此功能",
            img: "../img/task1.png"
        }, {
            id: 3,
            level: 2,
            step: "步骤2",
            des: "菜单->”开始战斗”，即可。外挂会自动根据当前状态，判断是否有可接任务，自己去做。包括：自动接关卡任务，自动还任务，自动下一个任务。",
            img: "../img/Setup19.png"
        }, {
            id: 4,
            level: 2,
            step: "步骤3",
            des: "任务版用户可同时使用任务版主程序，也可使用战斗版主程序，根据你做任务的完成情况自己选择，比如一两天之内无任务可做，建议用战斗版，更稳定。",
            img: "../img/task6.png"
        }, {
            id: 5,
            level: 2,
            step: "步骤4",
            des: " 所有任务都在Task.txt中写死了，星号'*'开头，表示这一行的任务被忽略了。要做的任务这行就不能有星号注释'*', 有些任务是有前置任务的，当你自己修改这个文件时，一定要注意任务的前后置关系。修改Task.txt后，要重启外挂才能生效。 ",
            img: "../img/task7.png"
        }, {
            id: 6,
            level: 2,
            step: "步骤5",
            des: "当前为了方便不懂的朋友不会设置task.txt，已经把所有支线任务全部注释了，就是不会做任何支线任务，除非你接了task.txt中已经存在的任务（无论是否被注释的）。",
            img: "../img/task8.png"
        }
    ]
}, {
    id: 6,
    level: 1,
    title: "6.如何申请远程协助",
    content: [
        {
            id: 1,
            level: 2,
            step: "如何申请远程协助",
            des: "1. 先在此教程中查询自己的问题，能解决的不需要申请援助了。2. 通过QQ群，在群里把问题贴出来，能用交谈回复的不接受远程申请。4. 远程协助开始时，先把游戏客户端的文件夹打开来，008的文件夹打开来（同时开2个文件夹）。 5. 远程协助只是协助你解决问题，原则上以我说你说的方式，并不是说你可以去睡觉，然后我来给你搞定，想得美。最好的方式还是教会你自己能解决问题。6. 远程时因网络太卡，或你电脑太卡的原因无法继续远程的，请理解。 7. 不同意以上条款的，可以选择不使用此外挂。",
            img: ""
        }
    ]
}, {
    id: 7,
    level: 1,
    title: "7.常见问题解决",
    content: [
        {
            id: 1,
            level: 2,
            step: "1.夫妻技能无法施展",
            des: "解决方法：夫妻号必须在同一个组队。如果夫妻号在同一个008上挂机，将外挂上第一个号小退一下即可。",
            img: ""
        }, {
            id: 2,
            level: 2,
            step: "2.手动状态挂机点被改",
            des: "解决方法：手动状态下，被怪攻击进入反击模式，会原地战斗，挂机点临时被更换了。可能原因：1.如果此时在【角色菜单】->工作->战斗设置中去查看，肯定还是当前小圈圈挂机点。 不要紧，重新在【角色菜单】->工作->开始战斗即可，会恢复本来保存的设置。",
            img: ""
        }, {
            id: 3,
            level: 2,
            step: "3.如何让角色停止",
            des: "双击地图，角色就会停下来。注意： 主控台最好把[断线重连]功能关闭，否则如果1分钟左右不动的话，角色又会重新开始默认战斗。",
            img: "../img/question1.png"
        }, {
            id: 4,
            level: 2,
            step: "4.新号刚上线会乱跑",
            des: "	【原因】 外挂有默认设置，默认的挂机点最高设置到了60级左右，所以新上挂的号上线后会自动判断挂机点，所以直接去金山了。【解决办法】 1.双击地图，可以停止当前动作，让角色停下来.2.再进行挂机点设置。",
            img: "../img/question2.png"
        }, {
            id: 5,
            level: 2,
            step: "5.设置好的号自己跑？",
            des: "其实不是乱跑，考虑到长期不动有可能掉线，或者自动化程序停止了需要重启，所以会重新开始战斗。或者让这个号直接经商，或打坐，或采集。",
            img: ""
        }, {
            id: 6,
            level: 2,
            step: "6.显示服务器踢出",
            des: "【原因】：1. 偶尔出现的，可能是服务器问题，如果后面自己连上了就没事。掉线是正常的。 2.此帐号未付费，或已经到期。008是付费才能使用的。 3.	付费账户，弄错了帐号补丁文件，比如帮朋友挂机，用朋友的帐号补丁，（这个并不是通用的，都要向我索取才行，你用别人的出问题会很多）。 4.	发现很多朋友只要有一点问题，就删掉008整个文件夹，然后又解压缩出来，结果忘记补丁要更新了，设置也丢了，反正我也想不出还有什么操作，总之就是瞎搞一通。5.	某些人尝试破解。【解决办法：】 从我发给你的外挂完整版里，单独把03*.dat文件解压缩出来，替换外挂当前的同名文件。  注意：每个付费用户都是直接从我这里用QQ接收的完整版，里面的帐号已经包含了你的帐号，和别人的完整版不是一样的。实在不行重新找我索要最新的帐号文件补丁。",
            img: "../img/question7.png"
        }, {
            id: 7,
            level: 2,
            step: "7.咋帮朋友挂机",
            des: "自己的设置肯定不能弄丢了，只要添加朋友的设置即可，先把下图中< User >文件夹中放入他的对应角色名的.ini文件（比如：角色名=小精灵，对应的配置文件=38-小精灵.ini）数字38代表的是服务器ID，不同区的数字不一样。 然后重启外挂，在主控台自行添加他的帐号、密码，即可。",
            img: "../img/question3.png"
        }, {
            id: 8,
            level: 2,
            step: "8.各种密码保存在哪？",
            des: "所有密码都是以明文的方式存放在UserList.ini中，主要是为了方便大家管理多个帐号，所以没有加密，所以本地的隐私自行负责，如果发给朋友挂机，自然是信得过的，也不存在问题，但是如果帮忙发个外挂包给不认识的人，一定注意把这个文件不要包含进去。",
            img: ""
        }, {
            id: 9,
            level: 2,
            step: "9.如何更新补丁？",
            des: "一般是替换某个文件，比如主程序，直接替换同名文件即可。也可能是03.dat，03F.dat，03T.dat，也是直接替换同名文件即可。注意，QQ接收这个文件可能会改名03F(1).dat之类，你替换时必须改成03F.dat，否则替换无效。替换之后，外挂重启，即可。",
            img: "../img/question5.png"
        }, {
            id: 10,
            level: 2,
            step: "10.挂机点老被过滤掉",
            des: "图中①角色等级是26级，图中②当前挂机范围内的怪物等级是16级，对应的挂机点设置中的怪物等级也要填写16，图中③寻怪设置：想打16级~35级的怪物，换句话说，就是想打比自己低10级的怪~比自己高9级的怪。这个等级设置是相对的，和其他的外挂概念不同，优点是:事先设置好各种等级的挂机点后， 可以随着角色的升级后自动更换挂机点",
            img: "../img/question6.png"
        }, {
            id: 11,
            level: 2,
            step: "11.外挂崩溃？",
            des: "外挂是在Win7 32位 旗舰版 SP1下编译制作的，所以在64位操作系统上可能会不稳定，解决方法如图：",
            img: "../img/question9.png"
        }, {
            id: 12,
            level: 2,
            step: "12.两台电脑同时用",
            des: "外挂是绿色版本即使重装系统，也无需设置照样使用，所以，建议HY008放在除C盘以外的盘符，尤其不建议放在桌面，严重影响电脑的性能。解决如图：把整个Hy008外挂文件夹复制到另一台电脑上，在新电脑上重新设置游戏客户端的路径就行了。 ",
            img: "../img/question12.png"
        }, {
            id: 13,
            level: 2,
            step: "13.如何更新外挂？",
            des: "1、外挂主控台菜单->共享资源->清除所有缓存。2、重启外挂，即可。 ",
            img: "../img/question13.png"
        }
    ]
}, {
    id: 8,
    level: 1,
    title: "8.i7391网站购买流程",
    content: [
        {
            id: 1,
            level: 2,
            step: "1.登入帳號",
            des: "注册后登入i7391帳號後 點上方的我是買家的會員中心<br><a href='http://www.i7391.com/' target='_blank'>i7391网址：http://www.i7391.com/</a>",
            img: "../img/istep01.png"
        },{
            id: 2,
            level: 2,
            step: "2.帳戶資金儲值方式",
            des: "",
            img: "../img/istep02.png"
        },{
            id: 3,
            level: 2,
            step: "3.选择缴款方式",
            des: "步骤3.用什麼自己選擇 網站都有圖文解釋 在此不多說",
            img: "../img/istep03.png"
        },{
            id:4,
            level: 2,
            step: "4.儲值OK",
            des: "儲值好之後會這樣",
            img: "../img/istep04.png"
        },{
            id: 5,
            level: 2,
            step: "5.确认领收、留言",
            des: "買完後，【确认领收】，在賣家留言处，写上收款账号【每次向群主索要】收款帐号：Cat2005@sougou.com",
            img: "../img/istep05.png"
        }
    ]
}
];
getData(data);
function getData(data) {
    var $article = $("#article"); //获取文章的大盒子
    var $nav = $('#tree_menu');   //获取ul列表菜单
    var html = "";  //存储文章内容的变量
    var navHtml = "";//存储菜单列表内容的变量

    $article.empty();  //清空内容
    $nav.empty();

    // 左边的文章内容详情
    for (var i = 0; i < data.length; i++) {

        //循环遍历每一篇文章
        /*
         <div class=" bs-docs-section col-sm-10 col-md-10 col-md-offset-1 col-xs-offset-1">

         <h2 class=" page-header bs-docs-header" id="j_title">1.HY008安装教程详解 [BY蚂蚁]</h2>
         */
        html += '<div class=" bs-docs-section col-sm-10 col-md-10 col-md-offset-1 col-xs-offset-1">';   //  第一个div开始
        html += '<h2 class=" page-header bs-docs-header">' + data[i].title + '</h2>';
        // console.log(data[i].title);
        //一级菜单
        /*
         <li><a id="j_nav_title">1.安装教程</a>
         */
        navHtml += '<li>';
        navHtml += '<a>' + data[i].title + '</a>';

        //每一个步骤循环
        for (var j = 0; j < data[i].content.length; j++) {
            // console.log(data[i].content.length);
            /*
             <!--单步开始-->
             <div class="thumbnail ">
             <div class="bs-callout bs-callout-danger">
             <h3 id="j_step"> 步骤1.获得外挂压缩包</h3>
             <p id="j_des">付费后的用户将会通过QQ得到一个压缩包（完整版），如图:图中的文件名称中带有的版本号和日期可能有所不同</p>
             </div>
             <img id="j_img" src="../img/Setup01.png" alt="" class="center-block">
             </div>
             */

            html += '<div class="thumbnail ">';
            html += '<div class="bs-callout bs-callout-danger">';
            html += '<h3 id="j_step">' + data[i].content[j].step + '</h3>';
            html += '<p id="j_des">' + data[i].content[j].des + '</p>';
            html += '</div>';
            html += ' <img id="j_img" src=" ' + data[i].content[j].img + ' " alt="" class="center-block"> ';
            html += '</div>';
            //二级菜单
            /*<ul>
             <li><a id="j_nav_step" class="active">步骤1.获得外挂压缩包</a></li>
             <li><a>步骤2.解压缩</a></li>
             <li><a>步骤3.设置游戏客户端路径</a></li>
             </ul>*/
            navHtml += '<ul>';
            navHtml += '<li><a>' + data[i].content[j].step + '</a></li>';
            navHtml += '</ul>';
        }

        html += '</div>';
        navHtml += '</li>';
        // console.log(html);
    }
    $article.append(html);
    $nav.append(navHtml);
}


// 2017-06-30
//页面滑动时激活相应的菜单项-------------------------------
//获取页面的滚动位置高度，如果窗口高度距离顶端为20px时，就获取当前位置的id，给右边的相对应的菜单ID加样式并展开
//遍历每一个id，获取起距离窗口顶部的距离，如距离为0，那么菜单id加上active属性
/*
slideActive(id_name);

function getElementTop(elem) {

    var elemTop = elem.offsetTop;//获得elem元素距相对定位的父元素的top

    elem = elem.offsetParent;//将elem换成起相对定位的父元素

    while (elem != null) {//只要还有相对定位的父元素
        //获得父元素 距他父元素的top值,累加到结果中
        elemTop += elem.offsetTop;
        //再次将elem换成他相对定位的父元素上;
        elem = elem.offsetParent;
        console.log( "elemTop = " + elemTop);
    }

    return elemTop;

}
function slideActive(ids) {
    $(window).scroll(function (event  ) {

        for (var i = 0; i < ids.length; i++) {
            // console.log(ids.length);
            var e = ids[i];         //遍历每一个传进来的参数
            var currentObj= document.getElementById(e);  //获取所有id对象 数组






             console.log("currentObj = " + currentObj);

        var _相对高度 =     getElementTop(currentObj);

        }


        //console.log($(document).scrollTop()); //获取滚动条到顶部的垂直高度
    });
}

*/

//打开一个一级菜单时另外一个close


//首页点击对应的教程跳到对应的文章位置，用html+#id的方式------------


























