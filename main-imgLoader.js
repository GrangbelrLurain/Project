var gallery = ["http://codex-themes.com/scalia/wp-content/uploads/2015/03/10-scalia-gallery-fullwidth.jpg",
               "http://www.wednesdayjournal.net/PEG/14381603616806.jpg",
               "http://res.thegear.co.kr/images/20171019/20171019154352463376.jpg"]
function imgLoader(){
  setTimeout(function(){
    document.getElementById('gallery').innerHTML = for (i = 0; i < gallery.length; i++) {
      '<img src="'+gallery[i]+'" alt="x">';
    };
  };,0);
};
imgLoader();
