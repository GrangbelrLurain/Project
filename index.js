var x = 0
var rightButton = function(){
  var galleryMove = document.getElementById('gallery').style;
    if(x>=0){x += document.body.clientWidth;
              galleryMove.right = x+'px';}
}
var leftButton = function(){
  var galleryMove = document.getElementById('gallery').style;
    if(x>0){x -= document.body.clientWidth;
              galleryMove.right = x+'px';}
}
