$(documnet).on("ready",inicio);

function inicio(){
	$("span.help-block").hide();
	$("$btnAceptarR").click(validar);
}

function validar(){
	var usuario= documnet.getElementById("userRegistrar").value;
	if(usuario ==null||usuario.lenghy<5|| /^\s+$/.test(usuario)){
		$("userRegistrar").parent().parent.attr("class","form-group has error");
		$("userRegistrar").parent().children("span").text("Debe ingresar usuario").show();
		$("userRegistrar").parent().append();
	}
}