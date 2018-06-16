(function(w){
// 
function shield(){
	return false;
}
// ?
document.addEventListener('touchstart',shield,false);
document.oncontextmenu=shield;
// DOMContentLoaded 
document.addEventListener('DOMContentLoaded',function(){
	document.body.onselectstart=shield;
	prettyPrint();
},false);
})(window);