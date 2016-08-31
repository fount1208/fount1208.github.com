// JavaScript Document

window.onload=function(){
	var oDetImg=document.getElementById('mt2-det-img');
	var oDetImg2=document.getElementById('mt2-det-img2')
	var oImg=document.getElementById('img1');
	var oSpan=document.getElementById('mt2-det-k');
	
	var maxLeft=0;
	var maxTop=0;
	var maxImgLeft=0;
	var maxImgTop=0;
	
	oDetImg.onmouseover=function(){
		oSpan.style.display='block';
		oDetImg2.style.display='block';
		
		maxLeft=oDetImg.offsetWidth-oSpan.offsetWidth;
		maxTop=oDetImg.offsetHeight-oSpan.offsetHeight;
		maxImgLeft=oImg.offsetWidth-oDetImg2.offsetWidth;
		maxImgTop=oImg.offsetHeight-oDetImg2.offsetHeight;
		
		
	};
	oDetImg.onmouseout=function(){
		oSpan.style.display='none';
		oDetImg2.style.display='none';
	};
	
	oDetImg.onmousemove=function (ev)
	{
		var oEvent=ev || event;
		
		var left=oEvent.clientX - oDetImg.offsetParent.offsetLeft - oSpan.offsetWidth/2;
		var top=oEvent.clientY - oDetImg.offsetParent.offsetTop - oSpan.offsetHeight/2
		
		if(left <=0)
		{
			left=0;
		}
		else if(left > maxLeft)
		{
			left=maxLeft;
		}
		
		if(top <=0)
		{
			top=0;
		}
		else if(top > maxTop)
		{
			top=maxTop;
		}
		
		oSpan.style.left=left+'px';
		oSpan.style.top=top+'px';
		
		oImg.style.left=-(left/maxLeft*maxImgLeft)+'px';
		oImg.style.top=-(top/maxTop*maxImgTop)+'px';
	};
	
};