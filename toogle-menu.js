/* 
* toggle function 
* when click toogleId selector's area, other open toggle menu closed.
*/
/* toogleId Name : toogleClass Name */
var toogleList = {
    'tabMenu'      : 'tab_menu_acildi',
    'filtrele'     : 'filtrele_open',
    'sirala'       : 'sirala_open'
};
var toggleMe = function (toogleList) {
    var mouseOver = false;
    var IdList = [];
    var ClassList = [];
    $.each( toogleList, function( toogleId, toogleValue ) {
        //console.log(toogleId);
        IdList.push("#"+toogleId);
        ClassList.push("."+toogleValue);
    });
    getIdList = IdList.join(", ");
    getClassList = ClassList.join(", ");
    getClassListVisible = ClassList.join(":visible, ");
    $(getIdList).on('click',function(event){
        event.preventDefault();
        findId = $(this).attr("id");
        currentClass = "."+toogleList[findId];
        var fid = $("#"+findId);
        if(!fid.is(".menu-open")) {
            $(getIdList).removeClass("menu-open");
            $(getClassListVisible).hide();
        }
        $(currentClass).toggle();
        fid.toggleClass("menu-open");
    });
    $(getIdList).mouseup(function() { return false; });
    $(getClassListVisible).mouseover(function(e) { mouseOver = true; });
    $(getClassListVisible).mouseout(function(e) { mouseOver = false; });
    $(document).mouseup(function(e) { if(!mouseOver) { $(getIdList).removeClass("menu-open"); $(getClassListVisible).hide(); } });
};
toggleMe(toogleList);
