<!--
function tab (mod,cursor,n){
	for(i=1;i<=n;i++){
		var nav=document.getElementById(mod+i);
		var cont=document.getElementById(mod+"_"+"cont"+i);
		nav.className=(i==cursor)?"current":"";
		cont.style.display=(i==cursor)?"block":"none";
	}
}

function tabs (mod,cursor,n,type){
	for(i=1;i<=n;i++){
		var nav=document.getElementById(mod+i+"_"+type);
		var cont=document.getElementById(mod+"_"+"cont"+i+"_"+type);
		nav.className=(i==cursor)?"current":"";
		cont.style.display=(i==cursor)?"block":"none";
	}
}
//-->

//select all
function CheckAll(eName){
		var checks = document.getElementsByName(eName);
		var chkAll = document.getElementsByName("chkAll")
		if (chkAll.checked) {
		chkAll.checked="";
		}else{
		chkAll.checked="checked";
		}
		for (var i=0;i<checks.length;i++){
		checks[i].checked=chkAll.checked;
		}
		}
		
		
 $(document).ready(function(){
	/*首页banner图切换*/
	(function(){
		var curr = 0;
		$(".banner_nav .trigger").each(function(i){
			$(this).click(function(){
				curr = i;
				$(".bn_img a").eq(i).fadeIn("slow").siblings("a").hide();
				$(this).siblings(".trigger").removeClass("imgSelected").end().addClass("imgSelected");
				return false;
			});
		});
		
		var pg = function(flag){
			//flag:true表示前翻， false表示后翻
			if (flag) {
				if (curr == 0) {
					todo = 1;
				} else {
					todo = (curr - 1) % 3;
				}
			} else {
				todo = (curr + 1) % 3;
			}
			$(".banner_nav .trigger").eq(todo).click();
		};
		//自动翻
		var timer = setInterval(function(){
			todo = (curr + 1) % 3;
			$(".banner_nav .trigger").eq(todo).click();
		},5000);
		
		//鼠标悬停在触发器上时停止自动翻
		$(".banner_nav span").hover(function(){
				clearInterval(timer);
			},
			function(){
				timer = setInterval(function(){
					todo = (curr + 1) % 3;
					$(".banner_nav .trigger").eq(todo).click();
				},5000);			
			}
		);
	})();
		

	
});