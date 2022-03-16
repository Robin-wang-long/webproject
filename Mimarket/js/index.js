var tabs = document.getElementById("tabs").getElementsByTagName("li");
console.log(tabs);
var lists = document.getElementById("lists").getElementsByTagName("ul");
console.log(lists);
for (let i = 0; i < tabs.length; i++) 
{
    tabs[i].onclick = showlist;
}

 
function showlist(){
    for(var i = 0;i<tabs.length;i++){
        if(tabs[i] === this){
            tabs[i].className = "active";
            lists[i].className = "clearfix active";
        }else{
            tabs[i].className = "";
            lists[i].className = "clearfix";
        }
    }
}
var seckillnac = document.getElementById("seckillnav");

window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;

    if(scrollTop>=260){
        seckillnac.className = "seckill-nav seckill-navfixed";
    }else{
        seckillnac.className = "seckill-nav";
    }
    console.log(scrollTop);
}
var timer = document.getElementById("timer");
var maxtime = 80 * 60;  
function CountDown() {
    if (maxtime >= 0) {
        var s = maxtime
        var hour = Math.floor(s / 3600 );
        s = s % 3600;
        var minutes = Math.floor(s / 60);
        var seconds = Math.floor(s % 60);
        var msg = "即将开始距<br>开始 " + hour + ":" + minutes + ":" + seconds;
        timer.innerHTML = msg;
        --maxtime;
        }
    }
var time = setInterval("CountDown()", 1000);