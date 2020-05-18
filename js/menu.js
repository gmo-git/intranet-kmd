var btnmenu = document.getElementById('btn-menu');
var lista = document.getElementById('menu');
var cuerpo = document.getElementById('cuerpo');
var pie = document.getElementById('pie');

btnmenu.addEventListener('click', function(){
	lista.classList.toggle('mostrar-menu');
})
btnmenu.addEventListener('click',function(){
	cuerpo.classList.toggle('mover');
})
btnmenu.addEventListener('click',function(){
	pie.classList.toggle('mover');
})
$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 120){
			$('#menu').addClass('menu-fijo');
		}
		else{
			$('#menu').removeClass('menu-fijo');
		}
	});
});