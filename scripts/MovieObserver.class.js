function MovieObserver() {

	this.peliculas = function(evento, estado, movie) {
		if (estado == "play") {
			console.log("Playing " + movie + "...");
		} else if (estado == "stop") {
			console.log("Stopped " + movie + "...");
		}
	}	
	$.subscribe("movies",this.peliculas);
}

(function ($){
	var obj = $({});
	$.subscribe = obj.on.bind(obj);
	$.unsubscribe = obj.off.bind(obj);
	$.publish = obj.trigger.bind(obj);
}(jQuery));