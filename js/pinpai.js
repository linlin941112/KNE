$(function(){
	var xiahua=document.querySelector("header nav ul .xiahua");
	var navli=document.querySelectorAll("header nav ul li");
	for (var i = 0; i < navli.length; i++) {
		navli[i].w=navli[i].offsetWidth;
		navli[i].l=navli[i].offsetLeft;
	}
	// 初始化
	xiahua.style.left=navli[0].l+"px";
	xiahua.style.width=navli[0].w+"px";

	for (var i = 0; i < navli.length; i++) {
		navli[i].index=i;
		navli[i].onmouseover=function(){
			xiahua.style.left=navli[this.index].l+"px";
			xiahua.style.width=navli[this.index].w+"px";
		}
	}


	// banner
	var banner=document.querySelector(".banner");
	var zuida=document.querySelector(".banner .box");
	var anniu=document.querySelectorAll(".banner .anniubox li");
	var tuW=document.querySelector(".banner .box .meige").offsetWidth;
	// 初始化
	anniu[0].style.opacity="1";
	anniu[0].style.width="30px";
	var t;
	var num=0;
	t=setInterval(move, 5000);
	function move(){
		num++;
		if(num>anniu.length-1){
			num=0;
		}
		animate(zuida,{marginLeft:-tuW*num});
		for (var i = 0; i < anniu.length; i++) {
			anniu[i].style.opacity="0.2";
			anniu[i].style.width="10px";
		}
		// anniu[num].style.background="#fff";
		animate(anniu[num],{width:30,opacity:1});
	}
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(move, 5000);
	}
	for (var i = 0; i < anniu.length; i++) {
		anniu[i].index=i;
		anniu[i].onclick=function(){
			num=this.index-1;
			move();
		}
	}



	
})