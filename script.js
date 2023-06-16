//const parrafito = document.getElementsByClassName ('parrafito'); // get significa conseguir

const h1 = document.querySelector('h1'); //query significa consulta
const input1 = document.querySelector ('#calculo1');
const input2 = document.querySelector ('#calculo2');
const btn = document.querySelector ('#btnCalcular');
const resultado = document.querySelector('#result');

btn.addEventListener('click', btnOnClick);

function btnOnClick(){
    resultado.innerHTML= "El resultado es: " + (Number(input1.value) + Number(input2.value));
};


//input.value = '456'; //le da un valor por defecto "456" al elemento input
//console.log(input.value);
//h1.innerHTML ='Patito Feo'; //modifica el h1 en html
//h1.setAttribute('class', 'rojo'); //cambia el atributo class de h1 en HTML
//h1.classList.add('verde'); //agrega una clase a la etiqueta h1 de html
//h1.classList.remove('rojo'); //elimina una clase a la etiqueta h1 de html




//const img = document.createElement('img'); //crea el elemento img (imagen) en html
//img.setAttribute('src', 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600');
//pid.append(img); //append significa adjuntar