// 获取元素的样式
function getStyle(obj,prop){
	if(obj.currentStyle==undefined){
		return window.getComputedStyle(obj,null)[prop];
	}else{
		return obj.currentStyle[prop];
	}
}

// 获取或设置元素的文本
function getText(obj,value){
	if(value==undefined){
		if(obj.innerText){
			return obj.innerText;
		}else{
			return obj.textContent;
		}
		
	}else{
		if(obj.innerText){
			obj.innerText=arguments[1];
			return obj.innerText;
		}else{
			obj.textContent=arguments[1];
			return obj.textContent;
		}
		
	}
}

// 通过类名获取元素
function getClass(sel,obj){
	var obj=obj||document;
	var bb=[];
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(sel);
	}else{
		var aa=obj.getElementsByTagName('*');
		for (var i = 0; i < aa.length; i++) {
			str=aa[i].className;
			if(bijiao(str,sel)){
				bb[bb.length]=aa[i];
			}
		}
		return bb;	
	}	
}
function bijiao(str,sel){
	var a=str.split(" ");
	for (var i = 0; i < a.length; i++) {
		if(a[i]==sel){
			return true;
		}
	}
	return false;
}




function $(sel,obj){
	obj=obj||document;
	if(typeof sel=="function"){
		window.onload=function(){
			sel();
		}
	}else if(typeof sel=="string"){
		
			if(sel.charAt(0)=="."){
				return getClass(sel.slice(1),obj);
			}else if(sel.charAt(0)=="#"){
				return obj.getElementById(sel.slice(1));
			}else if(/^[a-z|1-6]{1,10}$/g.test(sel)){
				return obj.getElementsByTagName(sel);
			}else{
				console.error("非法输入");
			}

		
	}
}


// 查找他的下一个元素节点
function nextSiblingEle(box){
	var a=box.nextSibling;
	if(a==null){
		return null
	}else{
		while(a.nodeType!=1){
			a=a.nextSibling;
			if(a==null){
				return null;
			}
		}
		return a;
	}
}
// 查找他的上一个元素节点
function preSibligEle(box){
	var a=box.previousSibling;
	if(a==null){
		return null
	}else{
		while(a.nodeType!=1){
			a=a.previousSibling;
			if(a==null){
				return null;
			} 
		}
		return a;
	}
}



// 在后面追加新节点
function insertAfter (newobj,befobj){
	var parent=befobj.parentNode;
	var next=nextSiblingEle(befobj);
	if(next==null){
		parent.appendChild(newobj);
	}else{
		parent.insertBefore(newobj,next);
	}
}


// 获取全部的元素节点
function getEleChild(box){
	var a=box.childNodes;
	var b=[];
	for (var i = 0; i < a.length; i++) {
		if(a[i].nodeType==1){
			b[b.length]=a[i];
		}
	}
	return b;
}	
// 获取第一个的元素节点
function firstEleChild(obj){
	return getEleChild(obj)[0];
}
// 获取最后一个的元素节点
function lastEleChild(obj){
	return getEleChild(obj)[getEleChild(obj).length-1];
}

// 获取文档的宽度和高度
function offsetWindow(){
		var x=document.documentElement.clientWidth;
		var y=document.documentElement.clientHeight;
		return {width:x,height:y};
	}

// 获取元素到body的宽度和高度
function getPosition(obj){
	var x=obj.offsetLeft;
	var y=obj.offsetTop;
	var fu=obj.parentNode;
	while(fu.nodeName!="BODY"){
		if(getStyle(fu,"position")=="relative"||getStyle(fu,"position")=="absolute"){
			x+=parseInt(getStyle(fu,"borderLeftWidth"));
			x+=fu.offsetLeft;
			y+=parseInt(getStyle(fu,"borderTopWidth"));
			y+=fu.offsetTop;
		}
		fu=fu.parentNode;

	
	}
	return {top:x,top:y};
}

// 轮播图
function lunbo(tu,an,da,zuo,you){
	var num=0;
	var t1;
	var t=setInterval(move, 3000);
	function move(){
		num++;
		if(num==an.length){
			num=0;
		}
		if(num<0){
			num=an.length-1;
		}
		for (var i = 0; i < an.length; i++) {
			tu[i].style.opacity="0";
			an[i].style.background="#7d6851";
		}
		tu[num].style.opacity="1";
		an[num].style.background="#dec962";
		
	}
	da.onmouseover=function(){
		clearInterval(t);
	}
	da.onmouseout=function(){
		t=setInterval(move, 3000);
	}
	for (var j = 0; j < an.length; j++) {
		an[j].index=j;
		an[j].onmouseover=function(){
			num=this.index-1;
			t1=setTimeout(move,500);
		}
		an[j].onmouseout=function(){
			clearTimeout(t1);
		}
	}
	zuo.onclick=function(){
		num=num-2;
		move();
	}
	you.onclick=function(){
		move();
	}
}

// 楼层跳转
function louceng(list,li,lc){
	var flag=true;
	window.onscroll=function(){
		var sTop=document.body.scrollTop;
		if(sTop>400){
			list.style.display="block";
		}else{
			list.style.display="none";
		}
		if(flag){
			if(sTop>400){
			for (var j = 0; j < li.length; j++) {
				li[j].style.cssText="background:#000;color:#fff;"
			}
			li[0].style.cssText="background:#fff;color:#000;";
			}
			if(sTop>900){
				for (var j = 0; j < li.length; j++) {
					li[j].style.cssText="background:#000;color:#fff;"
				}
				li[1].style.cssText="background:#fff;color:#000;";
			}
			if(sTop>1400){
				for (var j = 0; j < li.length; j++) {
					li[j].style.cssText="background:#000;color:#fff;"
				}
				li[2].style.cssText="background:#fff;color:#000;";
			}
			if(sTop>1900){
				for (var j = 0; j < li.length; j++) {
					li[j].style.cssText="background:#000;color:#fff;"
				}
				li[3].style.cssText="background:#fff;color:#000;";
			}
			if(sTop>2400){
				for (var j = 0; j < li.length; j++) {
					li[j].style.cssText="background:#000;color:#fff;"
				}
				li[4].style.cssText="background:#fff;color:#000;";
			}
			flag=false;
		}
		
	}
	for (var i = 0; i < li.length; i++) {
		li[i].index=i;
		li[i].onclick=function(){
			for (var j = 0; j < li.length; j++) {
				li[j].style.cssText="background:#000;color:#fff;"
			}
			li[this.index].style.cssText="background:#fff;color:#000;";
			animate(document.body,{scrollTop:lc[this.index].offsetTop},function(){
				flag=true;
			});
		}	
	}

}

// 选项卡
function xuanxiang(arr1,arr2) {
	for (var i = 0; i < arr2.length; i++) {
		arr1[i].index=i;
		arr1[i].onmouseover=function(){
			for (var j = 0; j < arr2.length; j++) {
				arr2[j].style.display="none";
			}
			arr2[this.index].style.display="block";
		}
		arr1[i].onmouseout=function(){
			for (var l = 0; l < arr2.length; l++) {
				arr2[l].style.display="none";
			}
		}
		arr2[i].index=i;
		arr2[i].onmouseover=function(){
			for (var k = 0; k < arr1.length; k++) {
				arr2[k].style.display="none";
			}
			arr2[this.index].style.display="block";
			arr1[this.index].style.background="#ff6700";
		}
		arr2[i].onmouseout=function(){
			for (var n = 0; n < arr1.length; n++) {
				arr2[n].style.display="none";
				arr1[this.index].style.background="transparent";
			}
		}
	}
}
// 没有移除的选项卡
function xuanxiang1(arr1,arr2){
	// 初始化
	for (var i = 0; i < arr1.length; i++) {
		arr1[i].style.color="#424242";
		arr1[i].style.borderColor="#f5f5f5";
		arr2[i].style.display="none";
	}
	arr1[0].style.color="#ffac13";
	arr1[0].style.borderColor="#ffac13";
	arr2[0].style.display="block";
	
	for (var i = 0; i < arr1.length; i++) {
		arr1[i].index=i;
		arr1[i].onmouseover=function(){
			for (var j = 0; j < arr1.length; j++) {
				arr1[j].style.color="#424242";
				arr1[j].style.borderColor="#f5f5f5";
				arr2[j].style.display="none";
			}
			arr1[this.index].style.color="#ffac13";
			arr1[this.index].style.borderColor="#ffac13";
			arr2[this.index].style.display="block";
		}
	}
}



// 不动的轮播图	
	// 初始化
function budong(arr1,da,zuo,you){
	var flag=true;
	for (var i = 0; i < arr1.length; i++) {
		arr1[i].style.background="#b0b0b0";
		arr1[i].style.borderColor="#fff";
	}
	arr1[0].style.background="#fff";
	arr1[0].style.borderColor="#ff6709";
	da.style.marginLeft="0";

	var num=0;
	function move(){
		num++;
		if(num>=arr1.length-1){
			num=arr1.length-1;
		}
		console.log(num);
		if(num<0){
			num=0;
		}
		for (var i = 0; i < arr1.length; i++) {
			arr1[i].style.background="#b0b0b0";
			arr1[i].style.borderColor="#fff";
		}
		arr1[num].style.background="#fff";
		arr1[num].style.borderColor="#ff6709";
		animate(da,{marginLeft:-295*num},function(){
			flag=true;
		});
	}
	for (var i = 0; i < arr1.length; i++) {
		arr1[i].index=i;
		arr1[i].onclick=function(){
			if(flag){
				num=this.index-1;
				move();
				flag=false;
			}
			
		}
	}
	you.onclick=function(){
		if(flag){
			move();	
			flag=false;
		}
		
	}
	zuo.onclick=function(){
		if(flag){
			num=num-2;
			move();
			flag=false;
		}
		
	}
}


// 不动没原点的左右
function budong1(arr1,da,zuo,you){
	var num=0;
	var flag=true;
	function move(){
		num++;
		// console.log(num);
		if(num>=arr1.length){
			num=arr1.length-1;
		}
		if(num<0){
			num=0;
		}
		
		animate(da,{marginLeft:-1226*num},1000,function(){
			flag=true;
		});
	}
	you.onclick=function(){
		if(flag){
			move();
			flag=false;
		}
		
	}
	zuo.onclick=function(){
		if(flag){
			num=num-2;
			move();
			flag=false;
		}
		
	}
}



// 触摸下拉
function xiala(arr1,arr2) {
	// 初始化
	for (var i = 0; i < arr2.length; i++) {
		arr2[i].h=arr2[i].offsetHeight;
		// console.log(arr2[i].h);
		arr2[i].style.height="0";
		// arr2[i].style.display="none";
	}
	for (var i = 0; i < arr2.length; i++) {
		arr1[i].index=i;
		arr1[i].onmouseover=function(){
			// for (var j = 0; j < arr2.length; j++) {
			// 	animate(arr2[j],{height:0},function(){
			// 		arr2[j].style.display="none";
			// 	});
				
			// }
			// arr2[this.index].style.display="block";
			animate(arr2[this.index],{height:arr2[this.index].h});
		}
		arr1[i].onmouseout=function(){
			for (var l = 0; l < arr2.length; l++) {
				animate(arr2[l],{height:0},function(){
					// this.style.display="none";
				});
			}
		}
	}
}


// 点击下拉
function xiala1(arr1,arr2) {
	// 初始化
	
	for (var i = 0; i < arr2.length; i++) {
		arr2[i].h=arr2[i].offsetHeight;
		// console.log(arr2[i].h);
		arr2[i].style.height="0";
	}
	for (var i = 0; i < arr2.length; i++) {
		arr1[i].index=i;
		arr1[i].flag=true;
		arr1[i].onclick=function(){
			if(this.flag){
				animate(arr2[this.index],{height:arr2[this.index].h});
				this.flag=false;
			}else{
				animate(arr2[this.index],{height:0});
				this.flag=true;
			}
			
		}
	}
}

function dong1(arr1,da,zuo,you){
	var num=0;
	var flag=true;
	var t=setInterval(move,10000);
	function move(){
		num++;
		// console.log(num);
		if(num>arr1.length){
			num=arr1.length-1;
		}
		if(num<0){
			num=0;
		}
		if(num==2){
			num=0;
		}
		animate(da,{marginLeft:-1226*num},1000,function(){
			flag=true;
		});
	}
	zuo.onmouseover=you.onmouseover=da.onmouseover=function(){
		clearInterval(t);
	}
	zuo.onmouseout=you.onmouseout=da.onmouseover=function(){
		t=setInterval(move,3000);
	}
	you.onclick=function(){
		if(flag){
			move();
			flag=false;
		}
		
	}
	zuo.onclick=function(){
		if(flag){
			num=num-2;
			move();
			flag=false;
		}
		
	}
}