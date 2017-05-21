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


	var ruzhu=document.querySelector(".shi .shix main .box ul");
	var an=document.querySelectorAll(".shi .shix main .anniubox .anniu");
	// 初始化
	an[0].style.width="24px";
	an[0].style.background="#FF3895";
	var num1=0;
	function move1(){
		num1++;
		if(num1>an.leng-1){
			num1=0;
		}
		animate(ruzhu,{marginLeft:-1020*num1});
		for (var i = 0; i < an.length; i++) {
			an[i].style.width="10px";
			an[i].style.background="#FFF33B";
		}
		an[num1].style.width="24px";
		an[num1].style.background="#FF3895";
	}
	for (var i = 0; i < an.length; i++) {
		an[i].index=i;
		an[i].onmouseover=function(){
			num1=this.index-1;
			move1();
		}
	}



	var meige=document.querySelectorAll(".meng main .anli .meige");
	var anniu1=document.querySelectorAll(".meng main .anli .anniubox .anniu");
	// 初始化
	for (var i = 0; i < meige.length; i++) {
		meige[i].style.opacity=0;
	}
	meige[0].style.opacity=1;
	for (var i = 0; i < anniu1.length; i++) {
		anniu1[i].style.width="10px";
		anniu1[i].style.background="#FFF33B";
	}
	anniu1[0].style.width="24px";
	anniu1[0].style.background="#FF3895";
	var num2=0;
	function move2(){
		num2++;
		for (var i = 0; i < meige.length; i++) {
			meige[i].style.opacity=0;
		}
		meige[num2].style.opacity=1;
		for (var i = 0; i < anniu1.length; i++) {
			anniu1[i].style.width="10px";
			anniu1[i].style.background="#FFF33B";
		}
		anniu1[num2].style.width="24px";
		anniu1[num2].style.background="#FF3895";
	}
	for (var i = 0; i < anniu1.length; i++) {
		anniu1[i].index=i;
		anniu1[i].onmouseover=function(){
			num2=this.index-1;
			move2();
		}
	}



	var huantu=document.querySelectorAll(".huan main .neirong .right .tu li");
	var huanli=document.querySelectorAll(".huan main .neirong .right .dian li");
	var zuo=document.querySelector(".huan main .neirong .right .zuoyou .zuo");
	var you=document.querySelector(".huan main .neirong .right .zuoyou .you");
	// 初始化
	for (var i = 0; i < huantu.length; i++) {
		huantu[i].classList.remove("active");
	}
	huantu[0].classList.add("active");
	for (var i = 0; i < huanli.length; i++) {
		huanli[i].classList.remove("active");
	}
	huanli[0].classList.add("active");
	var num3=0;
	function move3(){
		num3++;
		if(num3>huantu.length-1){
			num3=0;
		}
		if(num3<0){
			num3=huantu.length-1;
		}
		for (var i = 0; i < huantu.length; i++) {
			huantu[i].classList.remove("active");
		}
		huantu[num3].classList.add("active");
		for (var i = 0; i < huanli.length; i++) {
			huanli[i].classList.remove("active");
		}
		huanli[num3].classList.add("active");
	}
	for (var i = 0; i < huanli.length; i++) {
		huanli[i].index=i;
		huanli[i].onmouseover=function(){
			num3=this.index-1;
			move3();
		}
	}
	zuo.onclick=function(){
		num3=num3-2;
		move3();
	}
	you.onclick=function(){
		move3();
	}




















})