/**
 * Created by by on 2017/3/5.
 */
$(function () {
    //插件初始化代码
    $("#dowebok").fullpage({
        sectionsColor: ["#27292a", "#3b414d", "#3b414d", "#332A3A"],
        // 是否显示导航栏
        'navigation': true,
        anchors:["page1","page2","page3","page4"],
        menu:"#menu",
        // 滚动到某一屏后地回调函数,参数index表示当前是哪一屏
        afterLoad: function (link, index) {
            //console.log(index);
            $(".section").removeClass("current");
            //代码d目的让第一屏刷新时右动画
            setTimeout(function () {
                $(".section").eq(index - 1).addClass("current");
            }, 100);
        }
    });

    /*第四屏: */
    var caseItem = $(".case-item");
    var caseItemIntroduce = $(".case-item-introduce")[0];
    var introduce = $(".introduce");


    for(var i=0;i<caseItem.length;i++){
        caseItem[i].index = i;
        caseItem[i].onmouseover = function () {
            this.style.transform = "scale(1.1,1.1)";
            caseItemIntroduce.style.display = "block";
            for(var j=0;j<introduce.length;j++){
                introduce[j].style.display = "none";
            }
            introduce[this.index].style.display = "block";
            var inch = introduce[this.index].offsetHeight;
            var toph = (350-inch)/2;
            caseItemIntroduce.style.top = toph+"px";
            console.log(introduce[this.index].offsetHeight);
            console.log(toph);
        }
        caseItem[i].onmouseout = function () {
            this.style.transform = "scale(1,1)";
            caseItemIntroduce.onmouseover = function(){
                this.style.display = "block";
            }
            caseItemIntroduce.style.display = "none";
        }
    }

});