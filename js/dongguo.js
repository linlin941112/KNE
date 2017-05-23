$(function(){
	var xiahua=document.querySelector("header nav ul .xiahua");
	var navli=document.querySelectorAll("header nav ul li");
	for (var i = 0; i < navli.length; i++) {
		navli[i].w=navli[i].offsetWidth;
		navli[i].l=navli[i].offsetLeft;
	}
	// 初始化
	xiahua.style.left=navli[2].l+"px";
	xiahua.style.width=navli[2].w+"px";

	for (var i = 0; i < navli.length; i++) {
		navli[i].index=i;
		navli[i].onmouseover=function(){
			xiahua.style.left=navli[this.index].l+"px";
			xiahua.style.width=navli[this.index].w+"px";
		}
	}


	
})