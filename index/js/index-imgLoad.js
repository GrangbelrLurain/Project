var i = 0;
var gallery = ["http://codex-themes.com/scalia/wp-content/uploads/2015/03/10-scalia-gallery-fullwidth.jpg",
              "http://www.wednesdayjournal.net/PEG/14381603616806.jpg",
              "http://res.thegear.co.kr/images/20171019/20171019154352463376.jpg"];

var imgLoader = function(i){
      setTimeout(function(i) {if(0 <= i < gallery.length){
        document.getElementById('gallery').innerHTML =  '<img src="'+gallery[i]+'" alt="x">';
        } else {console.log("no data")}
      }, 0, i);
    };

/*갤러리 이미지 변경*/
var rightButton = function(imgLoader){
  console.log(i);
  ++i
  imgLoader(i);
};

var leftButton = function(imgLoader){
  console.log(i);
  --i;
  imgLoader(i);
};

/*function leftButton (){
                      if(0 <= i < gallery.length){
                        (function(index){
                          console.log("rightButton is return")
                          setTimeout(function() {
                            i -= 1
                            document.getElementById('gallery').innerHTML =  '<img src="'+gallery[index]+'" alt="x">';
                          }, i);
                        })(i);
                      } else {break};
                    ];*/
imgLoader(i);
