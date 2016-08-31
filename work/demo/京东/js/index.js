// JavaScript Document

$(function(){
		$('.ban-btn li').mouseover(function(){
			$('.ban-btn li').removeClass('active');
			$('.ban-list').animate({'margin-left':-730*$(this).index()},500,'linear');

			$(this).addClass('active');
		});
		$('.youhui div').click(function(){
			$('.youhui').css('display','none')
		});
		huan('.yilou-nav>li','.ulbox>ul','.ylxxk-btn active')
		huan('.ylxxk-btn>li','.ylxxk-list>li','.ylxxk-btn active')
		huan('.yilou-r-btn i','.yilou-r-xxk li','.yilou-r-btn active')
		huan('.erlou-nav>li','.erulbox>ul','.erxxk-btn active')
		huan('.erxxk-btn>li','.erxxk-list>li','.erxxk-btn active')
		huan('.erlou-r-btn i','.erlou-r-xxk li','.erlou-r-btn active')
		huan('.sanlou-nav>li','.sanloubox>ul','.sanxxk-btn active')
		huan('.sanlou-r-btn i','.sanlou-r-xxk li','.sanlou-r-btn active')
		huan('.silou-nav>li','.siulbox>ul','.sixxk-btn active')
		huan('.sixxk-btn>li','.sixxk-list>li','.sixxk-btn active')
		huan('.silou-r-btn i','.silou-r-xxk li','.silou-r-btn active')
		huan('.wulou-nav>li','.wuulbox>ul','.wuxxk-btn active')
		huan('.wuxxk-btn>li','.wuxxk-list>li','.wuxxk-btn active')
		huan('.wulou-r-btn i','.wulou-r-xxk li','.wulou-r-btn active')
		huan('.liulou-nav>li','.liuulbox>ul','.liuxxk-btn active')
		huan('.liuxxk-btn>li','.liuxxk-list>li','.liuxxk-btn active')
		huan('.qilou-nav>li','.qiulbox>ul','.qixxk-btn active')
		huan('.qixxk-btn>li','.qixxk-list>li','.qixxk-btn active')
		huan('.balou-nav>li','.baulbox>ul','.baxxk-btn active')
		huan('.baxxk-btn>li','.baxxk-list>li','.baxxk-btn active')
		huan('.balou-r-btn li','.balou-r ol','.balou-r-btn active')
		function huan(a,b,c){
			$(a).mouseover(function(){
			$(a).removeClass(c);
			$(b).hide();
			$(b).eq($(this).index()).show();
			$(this).addClass(c);
		});
		};
	});