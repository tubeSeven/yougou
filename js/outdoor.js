/**
 * Created by huang_000 on 2016/7/17.
 */
var soulStation=document.getElementById('soul_station');
soulStation.onmouseover=function(){
    soulStation.innerHTML="SoulStation";
};
soulStation.onmouseout=function(){
    soulStation.innerHTML="首 尔 站";
};
var mobileGou=document.getElementById('mobile_gou');
var code=document.getElementById('code');
mobileGou.onmouseover=function(){
    mobileGou.style.background='white';
    mobileGou.style.borderBottom='1px solid white';
    code.style.display='block';
    mobileGou.style.color='red';
};
code.onmouseout=function(){
    code.style.display='none';
};
mobileGou.onmouseout=function(){
    code.style.display='none';
    mobileGou.style.borderBottom='1px solid #eee';
    mobileGou.style.color='#666';
    mobileGou.style.background='rgb(246,246,248)';
};
code.onmouseover=function(){
    code.style.display='block';
    mobileGou.style.borderBottom='1px solid white';
};
var hoverImg=document.getElementsByClassName('hover_img');
for(var i=0;i<hoverImg.length;i++){
    hoverImg[i].onmouseover=function(){
        this.style.opacity='0.9';
    };
    hoverImg[i].onmouseout=function(){
        this.style.opacity='1';
    };
}

var menu=document.getElementById('menu');
var menu_1=document.getElementById('menu_1');
menu.onclick= function (event) {
    var oEvent=event;
    menu_1.style.display='block';
    oEvent.cancelBubble=true;
};
document.onclick=function(){
    menu_1.style.display='none';
};




