window.onload=function(){
	//图片
	var oBanner=document.getElementById('banner');
	var oClose=document.getElementById('close-btn');
	var oBanlist=document.getElementById('banner-list');
	var oChange=document.getElementById('change-btn');
	
	
	//搜索框
	var oTxt=document.getElementById('txt');
	var oInpot=document.getElementById('import');
	
	oInpot.onclick=function(){
		oInpot.style.display='none';
		oTxt.focus();
	};
	oTxt.onfocus=function(){
		oInpot.style.display='none';
	};
	oTxt.onblur=function (){
		if (oTxt.value.length == 0)
		{
			oInpot.style.display='block';
		}
	};
	
	var oIcon=document.getElementById('m-icon-small');
	var aIcona=oIcon.getElementsByTagName('a');
	for(var i=0; i<aIcona.length; i++)
	{
		aIcona[i].onmouseover=function(){
			this.className='active';
		};
		aIcona[i].onmouseout=function(){
			this.className='';
		};
	}
	var aM3LeftCon=document.getElementsByClassName('m3-main1');
	for(var i=0;i<aM3LeftCon.length;i++){
		aM3LeftCon[i].onmouseover=function(){
			for(var i=0;i<aM3LeftCon.length;i++){
				aM3LeftCon[i].style.borderColor='#eee';	
			}
			this.style.borderColor='#1ebda7';	
		};
	}
};