let galeria;
let pagina = 0;

let imagen1;
let imagen2;
let imagen3;
let imagen4;
let imagen5;
let imagen6;
let imagen7;
let imagen8;
let imagen9;
let imagen10;
let imagen11;
let imagen12;
let imagen13;



function preload () {

    imagen1 = loadImage ("img/1.jpg");
    imagen2 = loadImage ("img/2.jpg");
    imagen3 = loadImage ("img/3.jpg");
    imagen4 = loadImage ("img/4.jpg");
    imagen5 = loadImage ("img/5.jpg");
    imagen6 = loadImage ("img/6.jpg");
    imagen7 = loadImage ("img/7.jpg");
    imagen8 = loadImage ("img/8.jpg");
    imagen9 = loadImage ("img/9.jpg");
    imagen10 = loadImage ("img/10.jpg");
    imagen11 = loadImage ("img/11.jpg");
    imagen12 = loadImage ("img/12.jpg");
    imagen13 = loadImage ("img/13.jpg");


}




function setup() {
  createCanvas(600, 400);

  crearGaleria ();
}

function draw() {
  background(220);



  //imagen y texto de prueba para probar funcionamiento de páginas
  /*después vos tomi hacelo como te parezca el display, si no se entiende
  algo de lo que hice me preguntas y lo charlamos para que funcione
  pero creo que vas a estar bien */

  image (galeria[pagina].imagen, 200, 200, 200, 200);
  text (galeria[pagina].texto, 400, 400);

  //boton de prueba para ver funcionamiento páginas

  //boton1
  ellipse (100, 100, 100, 100)
  //boton2
  ellipse (300, 100, 100, 100)

  console.log (pagina);




}

















//___________________GALERIA DE PAGINAS______________________

function crearGaleria () {


      galeria = [

          {imagen: imagen1, texto: "texto1",},
          {imagen: imagen2, texto: "texto2",},
          {imagen: imagen3, texto: "texto3",},
          {imagen: imagen4, texto: "texto4",},
          {imagen: imagen5, texto: "texto5",},
          {imagen: imagen6, texto: "texto6",},
          {imagen: imagen7, texto: "texto7",},
          {imagen: imagen8, texto: "texto8",},
          {imagen: imagen9, texto: "texto9",},
          {imagen: imagen10, texto: "texto10",},
          {imagen: imagen11, texto: "texto11",},
          {imagen: imagen12, texto: "texto12",},
          {imagen: imagen13, texto: "texto13",},


      ]

}


//___________________FUNCIONES PARA CAMBIAR PAGINAS______________________

/* hice una que suma una página y después para cada bifurcación una que 
actualiza directamente el valor de la variable página a la página correspondiente
solo habría que llamar a cada función en el valor de página adecuado junto con
el mouseClicked*/

function pasarPagina () {

  pagina++;

}

function pasarPagina5 () {

  pagina = 4;

}

function pasarPagina8 () {

  pagina = 7;

}

function pasarPagina10 () {

  pagina = 9;

}

function pasarPagina11 () {

  pagina = 10;

}

function pasarPagina13 () {

  pagina = 12;

}

//________FUNCIONES PARA DETERMINAR CUANDO SE LLAMA A CADA PAGINA______________________

/*hay que ver bien si las páginas están correctas 
pero masomenos este sería el sistema, se puede agregar que aparezcan o
desaparezcan botones (que sería la idea), pero lo deje así para que se entienda
y poder probarlo bien*/

 function mousePressed () {

      let radioBoton1 = 50;
      let boton1 = dist(mouseX, mouseY, 100, 100);

      let radioBoton2 = 50;
      let boton2 = dist(mouseX, mouseY, 300, 100);


      if (boton1 < radioBoton1 && pagina < 12) {

        pasarPagina ();

      } else if  (boton2 < radioBoton2 && pagina == 2) {

        pasarPagina5 ();

      } else if (boton2 < radioBoton2 && pagina == 5) {

        pasarPagina8 ();

      } else if (boton2 < radioBoton2 && pagina == 7) {

        pasarPagina10 ();

      } else if (boton1 < radioBoton1 && pagina == 8) {

        pasarPagina11 ();

      } else if (boton2 < radioBoton2 && pagina == 10) {

        pasarPagina13 ();

      }

  }
