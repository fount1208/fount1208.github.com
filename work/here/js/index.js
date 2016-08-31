/**
 * Created by Administrator on 2016/2/15.
 */
window.onload=function(){
    var aLi=document.getElementById('cirle').getElementsByTagName('li');

    for(var i=0;i<aLi.length;i++)
    {
        ;(function(){
            aLi[i].onmouseover=function(){
                var r=rnd(0,255); // 0 - 255
                var g=rnd(0,255); // 0 - 255
                var b=rnd(0,255); // 0 - 255
                this.style.backgroundColor='rgb('+r+', '+g+', '+b+')';
                this.style.transition='1s all ease';
                this.style.opacity=1;
            }
        })();

        ;(function(){
        aLi[i].onmouseout=function(){
            var r=rnd(0,255); // 0 - 255
            var g=rnd(0,255); // 0 - 255
            var b=rnd(0,255); // 0 - 255
            this.style.backgroundColor='rgb('+r+', '+g+', '+b+')';
            this.style.transition='1s all ease';
            this.style.opacity=0.3;
        }
        })();
    }
    function rnd(n,m){
        return parseInt(Math.random()*(m-n)+n);
    }
}