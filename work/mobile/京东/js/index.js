document.addEventListener('DOMContentLoaded',function(){
	//轮播图
	(function(){
		var oUl=document.querySelector('.scrollPg .nav');
		var aLi=oUl.children;
		var aDot=document.querySelectorAll('.scrollPg .navList li');
		
		var iNow=1;
		var iDot=0;
		x=-iNow*aLi[0].offsetWidth;
		var timer=null;
		oUl.style.WebkitTransform='translate3d('+x+'px,0px,0px)';
		var bReady=false;
		oUl.addEventListener('touchstart',function(ev){
			if(bReady)return;
			bReady=true;
			clearInterval(timer);
			var downX=ev.targetTouches[0].pageX;
			var disX=downX-x;
			function fnMove(ev)
			{
				x=ev.targetTouches[0].pageX-disX;
				oUl.style.WebkitTransform='translate3d('+x+'px,0px,0px)';
			}
			function fnEnd(ev)
			{
				oUl.removeEventListener('touchmove',fnMove,false);
				oUl.removeEventListener('touchend',fnEnd,false);
				//加运动效果
				oUl.style.WebkitTransition='.4s all ease';
				//做判断
				var upX=ev.changedTouches[0].pageX;
				if(Math.abs(upX-downX)>50)
				{
					if(downX>upX)
					{
						iNow++;
					}else{
						iNow--;
					}
				}
				x=-iNow*aLi[0].offsetWidth;
				oUl.style.WebkitTransform='translate3d('+x+'px,0px,0px)';
				function tEnd()
				{
					
					//清除运动效果
					oUl.style.WebkitTransition='none';

					oUl.removeEventListener('transitionend',tEnd,false);
					if(iNow==aLi.length-1)
					{
						iNow=1;
						x=-iNow*aLi[0].offsetWidth;
						oUl.style.WebkitTransform='translate3d('+x+'px,0px,0px)';
					}else if(iNow==0)
					{
						iNow=aLi.length-2;
						x=-iNow*aLi[0].offsetWidth;
						oUl.style.WebkitTransform='translate3d('+x+'px,0px,0px)';
					}

					dot();
					
					bReady=false;
					timer=setInterval(tick,3000);
				}
				oUl.addEventListener('transitionend',tEnd,false);
			}
			oUl.addEventListener('touchmove',fnMove,false);
			oUl.addEventListener('touchend',fnEnd,false);
			
			ev.preventDefault();
		},false);

		function dot()
		{
			//图下面的小点
			for(var i=0;i<aDot.length;i++)
			{
				aDot[i].className='';
			}
			if(iNow>=1&&iNow<=aLi.length-2)
			{
				aDot[iNow-1].className='active';
			}else if(iNow==0)
			{
				aDot[aLi.length-2].className='active';
			}else if(iNow==aLi.length-1)
			{
				aDot[0].className='active';
			}
		}
		
		
		timer=setInterval(tick,3000);

		function tick()
		{
			iNow++;
			x=-iNow*aLi[0].offsetWidth;
			oUl.style.WebkitTransition='.4s all ease';
			oUl.style.WebkitTransform='translate3d('+x+'px,0px,0px)';

			function tEnd()
			{
				
				//清除运动效果
				oUl.style.WebkitTransition='none';

				oUl.removeEventListener('transitionend',tEnd,false);
				if(iNow==aLi.length-1)
				{
					iNow=1;
					x=-iNow*aLi[0].offsetWidth;
					oUl.style.WebkitTransform='translate3d('+x+'px,0px,0px)';
				}else if(iNow==0)
				{
					iNow=aLi.length-2;
					x=-iNow*aLi[0].offsetWidth;
					oUl.style.WebkitTransform='translate3d('+x+'px,0px,0px)';
				}

				dot();
				
				bReady=false;
			}
			oUl.addEventListener('transitionend',tEnd,false);
		}
	})();
	
	//吸顶条
	
	
},false);