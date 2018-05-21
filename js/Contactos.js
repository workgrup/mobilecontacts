$('#consultarContactos').click(function(){
	$.mobile.loading('Show',{
		text : 'Cargando.....',
		textVisible : true;
		theme : 'b',
		html : ''
	});

	var camposABUSCAR = ['displayName'];


	navigator.contacts.find(camposABUSCAR, contactosExito, contactosError);
});

function contactosExito(){
	for(var i =0; i<contactos.length; i++){
		if (contactos[i].displayName) {
			$('#listaContactos').append('<li>' +contactos[i].displayName+'</li>');

		} 
		
	}
	$('#listaContactos').listview('refresh');
	$.mobile.loading('hide');
}

function contactosError(message){
	alert('Error al cargar contactos: ' +message);
}
