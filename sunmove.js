/**
 * Created by CosName on 2017/2/14.
 * This document requires the support of Jquery to normal operation.
 * cos_move{
 *    element:---要生效的节点
 *    color:-----阴影颜色
 *    spread:----阴影尺寸
 *    blur:------模糊距离
 * }
 */
var cos_move=function(element,color,spread,blur) {
    var x=0;
    var y=0;
    function update(e){
        x = e.clientX || e.touches[0].clientX;
        y = e.clientY || e.touches[0].clientY;
        $(''+element+'').each(function () {
            var X=eval('($(this).offset().left + $(this).width()/2 - x)/50');
            var Y=eval('($(this).offset().top + $(this).height()/2 - y)/50');
            color=color||"rgba(0,0,0,.3)";
            spread=spread||"0";
            blur=blur||"1vh";
            $(this).css({
                "box-shadow":color+" "+X+"px "+Y+"px "+blur+" "+spread
            });
        });
    }
    document.addEventListener('mousemove',update);
    document.addEventListener('touchmove',update);
    console.log("%cThanks For Using SunMove.js","background:black;color:white;border-radius:3px");
    console.log("%cSunMove.js v0.1.0","background:black;color:white;border-radius:3px");
    console.log("%cPower By CosName","background:black;color:white;border-radius:3px");
};