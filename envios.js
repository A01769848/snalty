function dispon(){
	edo=document.f_edo.estado.value;
	if(edo<5){
		document.f_edo.salida_dispon.value="No disponible";
	}//if
	else{
		document.f_edo.salida_dispon.value="Disponible";	
		}//else
}//función dispon

function ejecutar(){
	es=document.f_edo.estado.value;
	if(es<5){
		document.f_edo.salida_costo.value="$500";
	}//if
	else{
		document.f_edo.salida_costo.value="$350";	
		}//else
}//función costo



