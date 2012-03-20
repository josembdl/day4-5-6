/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function Actor(nombre, biografia){
    
    this.nombre = nombre;
    this.biografia = biografia;
    
    this.getName = function(){
        return this.nombre;
    }
    
    this.setName = function(nombre){
        this.nombre = nombre;
    } 
    
    this.getBiography = function(){
        return this.biografia;
    }
    
    this.setBiography = function(biografia){ 
        this.biografia = biografia;
    } 
}

