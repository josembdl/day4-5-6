//http://javis.wordpress.com/2006/11/22/herencia-en-javascript/


function DownloadableMovie(title, rating, id){
    
    this.setTitle(title);
    this.setRating(rating);
    this.setId(id);
    
    var downloader = MovieDownloader();
    
    this.download = function(){
        //console.log("Downloading " + this.title + "..." );
        downloader.download(this.getTitle());
    }
}

DownloadableMovie.prototype = new Movie();
