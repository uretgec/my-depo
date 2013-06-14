$(window).on('load resize',function() {
    resizeJwPlayer();
});
function resizeJwPlayer(){
    if(document.getElementById("video_content")) {
        var newWidth = document.getElementById("video_content").clientWidth - 20;
        var newHeight = parseInt((newWidth * 270) / 480);
        jwplayer().resize(newWidth,newHeight);
    }
}

/*
* Jw Player resize for all responsive desing. jwplayer is the best solution for Mobile websites.
*/
