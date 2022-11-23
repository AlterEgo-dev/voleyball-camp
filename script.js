$(window).load(function() {
        $(".carga-pagina").fadeOut("slow");
});

function entrar(){

        if (document.iniciosesion.password.value=='12345' && document.iniciosesion.login.value=='Bruno'){ 
                document.iniciosesion.submit(); 
            } 
            else{ 
                 alert("Nombre de usuario y contraseña incorrectos."); 
            }
        } 
        
        function omitir(){
            document.omitirinicio.submit();
        
        }