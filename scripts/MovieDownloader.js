
// http://www.etnassoft.com/2011/05/20/el-patron-singleton-en-javascript/

var MovieDownloader = function() {
  return {
    download: function(title) {
      console.log("Downloading " + title + "..." );
    }
  };
};
