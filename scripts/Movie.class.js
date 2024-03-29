function Movie(title, rating, id){
    
    this.title = title;
    this.rating = rating;
    this.id = id;
    
    this.actores = new Array();
}

Movie.prototype.getTitle = function(){
    return this.title; 
}

Movie.prototype.setTitle = function(title){
    this.title = title;
}

Movie.prototype.getRating = function(){
    return this.getRating();
}

Movie.prototype.setRating = function(rating){
    this.rating = rating;
}

Movie.prototype.getId = function(){
    return this.id;
}

Movie.prototype.setId = function(id){
    this.id = id;
}

Movie.prototype.play = function(){
    // return "playing " + this.title + "...";
    $.publish("movies", ["play",this.title]);
}

Movie.prototype.stop = function(){
    // return "stopped " + this.title + "...";
    $.publish("movies", ["stop",this.title]);
}

Movie.prototype.getCast = function(){
    return this.actores;
}

Movie.prototype.setCast = function(cast){
    this.actores = cast;
}

/************* MODULE ****************/


 var myMovie = (function(title, rating, id){

  /** var myPrivateVar = 0;
  var myPrivateMethod = function( someText ){
    console.log(someText);
  }; **/
  
  this.title = title;
  
  return {
	
	/**
    myPublicVar: "foo",  
    myPublicFunction: function(bar){
      myPrivateVar++;
      myPrivateMethod(bar);
    } **/
	
    getTitle:function(){
		return  this.title
		},
    setTitle: function(title){
		this.title = title
		},
    getRating: function(){  
		return  this.rating 
		},
    setRating: function(rating){ 
		this.rating = rating
		}, 
    getId: function(){
		return  this.id 
		},
    setId: function(id){ 
		this.id = id
		}
  };
})();

