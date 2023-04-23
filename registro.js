function valida(){
	nom=document.f_regis.nom.value;
	ap=document.f_regis.ape.value;
	cta=document.f_regis.cta.value;
	pas=document.f_regis.pas.value;
	pass=document.f_regis.pass.value;
	//alert(nom+" "+ap+" "+cor+" "+pas);
	if(nom.length==0){//Valida longitid del nombre
		alert("Error, se debe indicar un nombre");
		document.f_regis.nom.style.background="gray";
	}//valida nombre
	else{
		if(ap.length==0){
		alert("Error, se debe indicar al menos un apellido");
		document.f_regis.ape.style.background="gray";	
		}//if valida ap
		else{
			if(cta.length==0){
			alert("Error, se debe indicar una cuenta");
			document.f_regis.corr.style.background="gray";		
			}//if am
			else{
				if(pas.length==0){
					alert("Error, se debe indicar una contaseña");
					document.f_regis.pas.style.background="gray";	
				}//if fecha
				else{
					if (pass.length==0) {
					alert("Error, se debe verificar la contaseña");
					document.f_regis.pass.style.background="gray";
					}//if second pass
					else{
						if(pas==pass){
						alert("Gracias por registrate, en unos instantes te llegará un correo de verificación para que puedas ingresar a Snalty");
						 document.f_regis.reset();
						}
						else{
						alert("Revisa que hayas escrito bien la contraseña al verificarla, pues al parecer no son iguales");

						}//sixth else
					}//fifth else
				}//fourth else
			}//third else
		}// second else
	}//else
}//valida función

function campos_verdes(){
	document.f_regis.nom.style.background="#81a969";
	document.f_regis.ape.style.background="#81a969";
	document.f_regis.cta.style.background="#81a969";
	document.f_regis.pas.style.background="#81a969";
	document.f_regis.pass.style.background="#81a969";
}
function mostrar_pas(){
	document.f_regis.pas.type="text";
}

function ocultar_pas(){
	document.f_regis.pas.type="password";
}

function mostrar_pass(){
	document.f_regis.pass.type="text";
}

function ocultar_pass(){
	document.f_regis.pass.type="password";
}
