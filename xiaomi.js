/**
 * Created by hansheming on 2016/7/20.
 */
(function(){
var oDiv=document.getElementById('first');
var aDiv=oDiv.getElementsByTagName('div')[0];
var oGw=oDiv.getElementsByTagName('div')[1];
var oGwc=oDiv.getElementsByTagName('div')[2];
 oGw.onmouseover=function(){
    oGwc.style.display='block'
};
oGw.onmouseout=function(){
    oGwc.style.display='none'
};
})();