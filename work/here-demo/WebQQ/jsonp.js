/**
 *  Author:strive
 *  Date: 2016/1/13
 */
function json2url(json){
    var arr=[];
    for(var name in json){
        arr.push(name+'='+json[name]);
    }
    return arr.join('&');
}
function jsonp(json){
    json=json|| {};
    if(!json.url)return;
    json.cbName=json.cbName || 'cb';
    json.data=json.data || {};

    var fnName='jsonp'+Math.random();
    fnName=fnName.replace('.','');

    json.data[json.cbName]=fnName;

    var oS=document.createElement('script');
    oS.src=json.url+'?'+json2url(json.data);
    var oHead=document.getElementsByTagName('head')[0];
    oHead.appendChild(oS);

    window[fnName]=function(data){
        json.success && json.success(data);

        oHead.removeChild(oS);
    };
}
