/* 
* show more 
* little dirty show more function. 
*/
var showMore = function(){
    var moreButton = $(".devamini_oku");
    var shadow = $(".devami-golge");
    var contentBlock = $("#show_m_l");
    var blockHeight = contentBlock.height();
    if(blockHeight > 100) {
        contentBlock.addClass("show_less");
        moreButton.on('click',function(){
            textButton =($(this).text() == 'DAHA FAZLA GÃ–STER') ? 'DAHA AZ GÃ–STER' : 'DAHA FAZLA GÃ–STER';
            moreButton.text(textButton);
            contentBlock.toggleClass("show_less");
            return false;
        });
    } else {
        moreButton.remove();
        shadow.remove();
    }
    //console.log(blockHeight);
};
showMore();

<a href="#" class="devamini_oku">DAHA FAZLA GÖSTER</a>
