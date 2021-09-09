var css = document.getElementById("css");
    var php = document.getElementById("php");
    css.style.right = "1000px";
    php.style.right = "0px";
    css.style.transition = "1s";
    php.style.transition = "1s";

    var marcarCSS = 0;
    var marcarPHP = 0;
    console.log(css.style);
    css.addEventListener('click',function(){
        css.style.width = "120px";
        marcarCSS++;
        console.log(marcarCSS);
        if(marcarCSS === 2){
            css.style.width = "100px";
            marcarCSS = 0;
        }
        if(marcarPHP === 1 && marcarCSS === 1){
            var guardarPos;
            console.log("Os dois de 1");
            guardarPos = css.style.right;
            css.style.right = php.style.right;
            php.style.right = guardarPos;
                console.log(guardarPos);
                php.style.width = "100px";
                css.style.width = "100px";
            marcarPHP = 0;
            marcarCSS = 0;
        }
    });
    php.addEventListener('click',function(){
        php.style.width = "120px";
        marcarPHP++;
        console.log(marcarPHP);
        if(marcarPHP === 2){
            php.style.width = "100px";
            marcarPHP = 0;
        }
        if(marcarPHP === 1 && marcarCSS === 1){
            var guardarPos;
            console.log("Os dois de 1");
            guardarPos = php.style.right;
            php.style.right = css.style.right;
            css.style.right = guardarPos;
                console.log(guardarPos);
                php.style.width = "100px";
                css.style.width = "100px";
            marcarPHP = 0;
            marcarCSS = 0;
        }
    });
