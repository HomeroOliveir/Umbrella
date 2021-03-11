$(function(){

    clicarMenu();

    function clicarMenu()
    {
        var menu = $("#subtitulo");
        //var Clicarmenu = $("flexaBaixo");
        var lista = $('.contato');
        lista.hide();
        menu.click(function(e)
        { 
            
            lista.slideDown();
           
             e.stopPropagation();
             
         });
         $(".cancelar").click(function(e){
             lista.slideUp()
             e.stopPropagation();
         })
         /*Clicarmenu.click(function(e)
        { 
            
           lista.hide();
           
             e.stopPropagation();
             
         });*/
         
    }

})
