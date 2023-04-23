function encripta(cadena){
	abc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	llave="defghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abc"
	cont=0;
	salida="";
	while(cont<cadena.length){
		letra=cadena.charAt(cont);
		pos=abc.indexOf(letra);
		salida=salida+llave.charAt(pos);
		cont++;
	}
	return(salida);
}

function valida(){
	v_cta=document.f_is.cta.value;
	v_pass=document.f_is.pass.value;
	if(v_cta.length==0){
		alert("Se debe indicar la cuenta");
		document.f_is.cta.style.background="gray";
	}
	else{
		if(v_pass.length==0){
			alert("Se debe indicar la contraseña");
			document.f_is.pass.style.background="gray";
		}
			else{
				cta_encri=encripta(v_cta);
				pass_encri=encripta(v_pass);
				//alert(cta_encri+" "+pass_encri);
				if((cta_encri=="D34a9cb7b")&&(pass_encri=="456789a")){
					alert("Acceso permitido")
					location.href="inicio_3.html";
				}
				else{
					alert("Acceso denegado");
				}

			}
		}
	}

function ocultar(){
	document.f_is.pass.type="password";
}
function mostrar(){
	document.f_is.pass.type="text";
}

function campos_verdes(){
	document.f_is.cta.style.background="#81a969";
	document.f_is.pass.style.background="#81a969";
}