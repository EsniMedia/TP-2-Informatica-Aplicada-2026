let galeria;
let pagina = 0;
let fuente;

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
    fuente = loadFont("fonts/Metamorphous-Regular.ttf")


}




function setup() {
  createCanvas(600, 400);

  crearGaleria ();
}

function draw() {
  background(220);
  textFont(fuente);



  //imagen y texto de prueba para probar funcionamiento de páginas
  /*después vos tomi hacelo como te parezca el display, si no se entiende
  algo de lo que hice me preguntas y lo charlamos para que funcione
  pero creo que vas a estar bien */

  image (galeria[pagina].imagen, 0, 0, 600, 400);
  text (galeria[pagina].texto, 400, 400);

 //caja de texto
  let degradado = drawingContext.createLinearGradient(0, 285, 0, 400); //declaramos un valor para degradado
  degradado.addColorStop(0, 'rgba(0, 0, 0, 0.35)'); // arranca en 35%
  degradado.addColorStop(1, 'rgba(0, 0, 0, 1.0)');  // termina en negro 100%

  drawingContext.fillStyle = degradado;//rellenamos la proxima forma
  noStroke();
  rect(0, 285, 600, 115); // dibujamos el rectángulo que se le aplica el degradado


  //texto narrativo
  noStroke();
  fill(255);
  textSize(10);
  textAlign(LEFT, TOP);
  textWrap(WORD); 
  text(galeria[pagina].texto, 25, 295, 550, 60);
  //texto botones
  textAlign(CENTER, CENTER);
  textSize(12);
  text("¿Qué decides hacer?", 300, 355);



  //botones tomy. hice un rect con border redondeados.
  /*HAY QUE HACER Q EL TEXTO DE LOS BOTONS Y EL NARRATIVO CAMBIE SEGUN LA PAGINA Y EL CONTENIDO */
  // boton izuqierda
  fill(220);
  rectMode(CENTER);
  rect(250, 380, 80, 23, 10);
  
  // boton derecha
  rect(350, 380, 80, 23, 10);

  
  rectMode(CORNER); // reseteo el modo de rect para no romper otras cosas

  // Texto de los botones
  textAlign(CENTER, CENTER);
  fill(0); // Texto negro adentro de los botones
  textSize(11);
  text("Entrar", 250, 380);
  text("Ignorar", 350, 380);







  // ESTE ES EL INVENTARIO DE OBJETOS, SI AGARRAMOS UN OBJETO LO TENDRIAMOS Q UBICAR EN ESTOS CUADRADOS
  textAlign(LEFT, TOP);
  textSize(14); 
  fill(255);
  stroke(0); 
  strokeWeight(3);     
  text("Objetos", 25, 35);

  noStroke();
  fill(50, 50, 50, 200); 
  
  rect(25, 65, 50, 50);  
  
  rect(25, 130, 50, 50); 
  
  rect(25, 195, 50, 50);


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

      let radioBoton1 = 30;
      let boton1 = dist(mouseX, mouseY, 250, 380);

      let radioBoton2 = 30;
      let boton2 = dist(mouseX, mouseY, 350, 380);

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
