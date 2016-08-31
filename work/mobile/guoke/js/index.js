//果壳网

(function(win,doc){
            win.onload=win.onresize=function(){
                doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/320+'px'
            };
        })(window,document);
        
document.addEventListener('DOMContentLoaded',function(){
	var oUl=document.querySelector('.card .nav');
	var aLi=oUl.children;
	
	var iNow=0;
	w=aLi[0].offsetWidth;
	setInterval(function(){
		iNow++;
		x=-iNow*aLi[0].offsetWidth;
		oUl.style.WebkitTransition='.4s all ease';
		oUl.style.webkitTransform='translate3d('+x+'px,0px,0px)';
		function tEnd()
		{
			oUl.removeEventListener('transitionend',tEnd,false);
			if(iNow==aLi.length-1)  //
			{
				iNow=0;
				x=-iNow*aLi[0].offsetWidth;
				oUl.style.WebkitTransition='none';
				oUl.style.webkitTransform='translate3d('+x+'px,0px,0px)';
			}
		}
		oUl.addEventListener('transitionend',tEnd,false);
	},3000);
},false);










