var css = document.getElementById("css");// Pega o "item" que tem id css no html
    var php = document.getElementById("php");// Pega o "item" que tem id php no html
    
    css.style.right = "1000px";// define a posição dos items, por que dependendo do que for, o JS não pega do CSS
    php.style.right = "0px";// define a posição dos items, por que dependendo do que for, o JS não pega do CSS
    // css.style.transition = "1s";// Isso aqui acho q nem precisa pq já tem no CSS, mas coloquei, é a transição
    // php.style.transition = "1s";// Isso aqui acho q nem precisa pq já tem no CSS, mas coloquei, é a transição

    var marcarCSS = 0;// criei uma varial com valor 0
    var marcarPHP = 0;// criei uma varial com valor 0



    console.log(css.style);// só pra testar se ta tudo certo
    css.addEventListener('click',function(){// quando clicar no css vai fazer essa função
        css.style.width = "120px";// o css tem 100px aqui ele vai ficar com 120px, ou seja ele aumenta um pouco
        marcarCSS++;// adiciona um na variavel que era 0, pois toda vez que clica no css ele adiciona um
        console.log(marcarCSS);// pra ver no console se toda vez que eu clico no css ele aumenta um numero
        if(marcarCSS === 2){// se o css for clicado 2 vezes, porque ele soma um toda vez, ele vai voltar ao resultado normal, e sem nada para resetar a seleção
            css.style.width = "100px";// lembra que o css tinha sido aumentado na linha 16, daí ele volta ao normal
            marcarCSS = 0;// e a marcarCSS fica em 0, porque antes dessa linha tava 2
        }
        if(marcarPHP === 1 && marcarCSS === 1){// se o marcarPHP e o marcarCSS estiverem 1 ele vai trocar de lugar // se os dois tiverem 1, ele vai executar o if
            var guardarPos;// variavel vazia para guardar a posição de um deles para eles trocarem de lugar
            console.log("Os dois de 1");// mostra no que o marcarPHP e o marcarCSS estão no 1
            guardarPos = css.style.right;// guarda a posição right do css;
            css.style.right = php.style.right;// agora o css vai para a posição do php
            php.style.right = guardarPos;// e o php vai para a posição guardada do css antes
                console.log(guardarPos);// para ver a posição no console
                php.style.width = "100px";// aqui eles voltam para 100px
                css.style.width = "100px";// aqui eles voltam para 100px
            marcarPHP = 0;// os dois macar volta pro 0, e assim volta tudo do inicio, só que cada uma no lugar da outra
            marcarCSS = 0;// os dois macar volta pro 0, e assim volta tudo do inicio, só que cada uma no lugar da outra
        }
    });

        //           É IGUAL PARA O PHP

    php.addEventListener('click',function(){// quando clicar no php vai fazer essa função
        php.style.width = "120px";// ophp tem 100px aqui ele vai ficar com 120px, ou seja ele aumenta um pouco
        marcarPHP++;// adiciona um na variavel que era 0, pois toda vez que clica no php ele adiciona um
        if(marcarPHP === 2){// se o css for clicado 2 vezes, porque ele soma um toda vez, ele vai voltar ao resultado normal, e sem nada para resetar a seleção
            php.style.width = "100px";// lembra que o php tinha sido aumentado na linha 40, daí ele volta ao normal
            marcarPHP = 0;// e a marcarCSS fica em 0, porque antes dessa linha tava 2
        }
        if(marcarPHP === 1 && marcarCSS === 1){// se o marcarPHP e o marcarCSS estiverem 1 ele vai trocar de lugar // se os dois tiverem 1, ele vai executar o if
            var guardarPos;// variavel vazia para guardar a posição de um deles para eles trocarem de lugar
            console.log("Os dois de 1");// mostra no que o marcarPHP e o marcarCSS estão no 1
            guardarPos = php.style.right;// guarda a posição right do php;
            php.style.right = css.style.right;// agora o php vai para a posição do css
            css.style.right = guardarPos;// o css vaia para a posição guardada do php
                console.log(guardarPos);// para ver a posição no console
                php.style.width = "100px";// aqui eles voltam para 100px
                css.style.width = "100px";// aqui eles voltam para 100px
            marcarPHP = 0;// os dois macar volta pro 0, e assim volta tudo do inicio, só que cada uma no lugar da outra
            marcarCSS = 0;// os dois macar volta pro 0, e assim volta tudo do inicio, só que cada uma no lugar da outra
        }
    });
// não se se ajudou, mas espero que sim
    