var blank = document.getElementById("blank");// Pega o "item" que tem id blank no html
var blue = document.getElementById("blue");// Pega o "item" que tem id blue no html
var purple = document.getElementById('purple');

blank.style.right = "1000px";// define a posição dos items, por que dependendo do que for, o JS não pega do blank
blue.style.right = "50px";// define a posição dos items, por que dependendo do que for, o JS não pega do blank
// purple.style.right = "50px;" // define 

// blank.style.transition = "1s";// Isso aqui acho q nem precisa pq já tem no blank, mas coloquei, é a transição
// blue.style.transition = "1s";// Isso aqui acho q nem precisa pq já tem no blank, mas coloquei, é a transição

var marcarBlank = 0;// criei uma varial com valor 0
var marcarBlue = 0;// criei uma varial com valor 0
var marcarPurple = 0;


// Troca do blank com blue
console.log('vai mostrar o style do blank ' + blank.style);// só pra testar se ta tudo certo
blank.addEventListener('click', function () {// quando clicar no blank vai fazer essa função


    //------------- Aumentando de tamanho -----------------------
    blank.style.width = "120px";// o blank tem 100px aqui ele vai ficar com 120px, ou seja ele aumenta um pouco
    marcarBlank++;// adiciona um na variavel que era 0, pois toda vez que clica no blank ele adiciona um
    console.log('aumentando o tamanho ' + marcarBlank);// pra ver no console se toda vez que eu clico no blank ele aumenta um numero


    // ------- Se clicar duas vezes ---------------
    if (marcarBlank === 2) {// se o blank for clicado 2 vezes, porque ele soma um toda vez, ele vai voltar ao resultado normal, e sem nada para resetar a seleção
        blank.style.width = "100px";// lembra que o blank tinha sido aumentado na linha 16, daí ele volta ao normal
        marcarBlank = 0;// e a marcarblank fica em 0, porque antes dessa linha tava 2
    }


    // -------- Fazer a troca -------------
    if (marcarBlue === 1 && marcarBlank === 1) {// se o marcarBlue e o marcarblank estiverem 1 ele vai trocar de lugar // se os dois tiverem 1, ele vai executar o if
        var guardarPos;// variavel vazia para guardar a posição de um deles para eles trocarem de lugar
        console.log("Os dois estão no 1");// mostra no que o marcarBlue e o marcarblank estão no 1
        guardarPos = blank.style.right;// guarda a posição right do blank;
        blank.style.right = blue.style.right;// agora o blank vai para a posição do blue
        blue.style.right = guardarPos;// e o blue vai para a posição guardada do blank antes
        console.log(guardarPos);// para ver a posição no console
        blue.style.width = "100px";// aqui eles voltam para 100px
        blank.style.width = "100px";// aqui eles voltam para 100px
        marcarBlue = 0;// os dois macar volta pro 0, e assim volta tudo do inicio, só que cada uma no lugar da outra
        marcarBlank = 0;// os dois macar volta pro 0, e assim volta tudo do inicio, só que cada uma no lugar da outra
    }
});

// Troca do blue e blank
//           É IGUAL PARA O blue

blue.addEventListener('click', function () {// quando clicar no blue vai fazer essa função
    blue.style.width = "120px";// oblue tem 100px aqui ele vai ficar com 120px, ou seja ele aumenta um pouco
    marcarBlue++;// adiciona um na variavel que era 0, pois toda vez que clica no blue ele adiciona um
    if (marcarBlue === 2) {// se o blank for clicado 2 vezes, porque ele soma um toda vez, ele vai voltar ao resultado normal, e sem nada para resetar a seleção
        blue.style.width = "100px";// lembra que o blue tinha sido aumentado na linha 40, daí ele volta ao normal
        marcarBlue = 0;// e a marcarblank fica em 0, porque antes dessa linha tava 2
    }
    if (marcarBlue === 1 && marcarBlank === 1) {// se o marcarBlue e o marcarblank estiverem 1 ele vai trocar de lugar // se os dois tiverem 1, ele vai executar o if
        var guardarPos;// variavel vazia para guardar a posição de um deles para eles trocarem de lugar
        console.log("Os dois de 1");// mostra no que o marcarBlue e o marcarblank estão no 1
        guardarPos = blue.style.right;// guarda a posição right do blue;
        blue.style.right = blank.style.right;// agora o blue vai para a posição do blank
        blank.style.right = guardarPos;// o blank vaia para a posição guardada do blue
        console.log(guardarPos);// para ver a posição no console
        blue.style.width = "100px";// aqui eles voltam para 100px
        blank.style.width = "100px";// aqui eles voltam para 100px
        marcarBlue = 0;// os dois macar volta pro 0, e assim volta tudo do inicio, só que cada uma no lugar da outra
        marcarBlank = 0;// os dois macar volta pro 0, e assim volta tudo do inicio, só que cada uma no lugar da outra
    }
});

// // purple com blank
// purple.addEventListener('click', function() {
//     purple.style.width = '120px';
//     marcarPurple++;
//     console.log(marcarPurple)
//     if (marcarPurple === 2) {
//         // console.log('apertei uma vez')
//         purple.style.width = '100px';
//         // console.log('aumentou 50px')
//         marcarPurple = 0;
//         // console.log('volta pro zero')
//     }
//     if (marcarPurple === 1 && marcarBlank === 1) {
//         var guardarPosicaoDoPurple;
//         console.log('Os dois foram prescionados uma vez cada')
//         guardarPosicaoDoPurple = purple.style.right; // guarda a posição right do blue;
//         purple.style.right = blank.style.right; // agora o purple vai para a posição do blank
//         blank.style.right = guardarPosicaoDoPurple; // o blank vai guardar a posição do purple
//         console.log(guardarPosicaoDoPurple);
//         purple.style.width = '100px'; // voltam para 100px
//         blank.style.width = '100px';
//         marcarPurple = 0;
//         marcarblank = 0;
//     }
// })

// blank.addEventListener('click', function() {
//     blank.style.width = '120px';
//     marcarBlank++;
//     console.log('aumentando o tamanho '+ marcarBlank)
//     // ------- Se clicar duas vezes ---------------
//     if (marcarBlank === 2) {// se o blank for clicado 2 vezes, porque ele soma um toda vez, ele vai voltar ao resultado normal, e sem nada para resetar a seleção
//         blank.style.width = "100px";// lembra que o blank tinha sido aumentado na linha 16, daí ele volta ao normal
//         marcarBlank = 0;// e a marcarblank fica em 0, porque antes dessa linha tava 2
//     }
//     if (marcarPurple === 1 && marcarBlank === 1) {
//         var guardarPosicaoDoBlank;
//         console.log('OS DOIS FORAM PRESCIONADOS')
//         guardarPosicaoDoBlank = blank.style.right;
//         blank.style.right = purple.style.right;
//         purple.style.right = guardarPosicaoDoBlank;
//         console.log(guardarPosicaoDoBlank);
//         blank.style.width = '100px';
//         purple.style.width = '100px';
//         marcarPurple = 0;
//         marcarBlank = 0;
//     }
// })


//////////////////////////////////////////////////
var css = document.getElementById("css");// Pega o "item" que tem id css no html
var php = document.getElementById("php");// Pega o "item" que tem id php no html

css.style.right = "1000px";// define a posição dos items, por que dependendo do que for, o JS não pega do CSS
php.style.right = "0px";// define a posição dos items, por que dependendo do que for, o JS não pega do CSS
css.style.transition = "1s";// Isso aqui acho q nem precisa pq já tem no CSS, mas coloquei, é a transição
php.style.transition = "1s";// Isso aqui acho q nem precisa pq já tem no CSS, mas coloquei, é a transição

var marcarCSS = 0;// criei uma varial com valor 0
var marcarPHP = 0;// criei uma varial com valor 0



console.log(css.style);// só pra testar se ta tudo certo
css.addEventListener('click', function () {// quando clicar no css vai fazer essa função
    css.style.width = "120px";// o css tem 100px aqui ele vai ficar com 120px, ou seja ele aumenta um pouco
    marcarCSS++;// adiciona um na variavel que era 0, pois toda vez que clica no css ele adiciona um
    console.log(marcarCSS);// pra ver no console se toda vez que eu clico no css ele aumenta um numero
    if (marcarCSS === 2) {// se o css for clicado 2 vezes, porque ele soma um toda vez, ele vai voltar ao resultado normal, e sem nada para resetar a seleção
        css.style.width = "100px";// lembra que o css tinha sido aumentado na linha 16, daí ele volta ao normal
        marcarCSS = 0;// e a marcarCSS fica em 0, porque antes dessa linha tava 2
    }
    if (marcarPHP === 1 && marcarCSS === 1) {// se o marcarPHP e o marcarCSS estiverem 1 ele vai trocar de lugar // se os dois tiverem 1, ele vai executar o if
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

php.addEventListener('click', function () {// quando clicar no php vai fazer essa função
    php.style.width = "120px";// ophp tem 100px aqui ele vai ficar com 120px, ou seja ele aumenta um pouco
    marcarPHP++;// adiciona um na variavel que era 0, pois toda vez que clica no php ele adiciona um
    if (marcarPHP === 2) {// se o css for clicado 2 vezes, porque ele soma um toda vez, ele vai voltar ao resultado normal, e sem nada para resetar a seleção
        php.style.width = "100px";// lembra que o php tinha sido aumentado na linha 40, daí ele volta ao normal
        marcarPHP = 0;// e a marcarCSS fica em 0, porque antes dessa linha tava 2
    }
    if (marcarPHP === 1 && marcarCSS === 1) {// se o marcarPHP e o marcarCSS estiverem 1 ele vai trocar de lugar // se os dois tiverem 1, ele vai executar o if
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