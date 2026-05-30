let galeria;
let pagina = 1;
let fuente;
let inventario = ["objeto inicial"];
let objetoSostenido = null;
let enemigos = {
  5: true,  // Enemigo de la página 5 vivo
  9: true,  // Enemigo de la página 9 vivo
  10: true, // Enemigo de la página 10 vivo
};


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

  if (inventario.length > 0) {
    fill(0, 255, 0); // Lo pintamos de verde por ahora para reconocerlo CANDE TENDRIAS Q BORRARLO Y CAMBIARLO POR UN PNG ACA Y EN EL RESTO DE OBJ
    rect(25, 65, 50, 50); // Se dibuja sobre el primer recuadro gris
  }


  // esto habria q cambiarlo por imagenes
  if (objetoSostenido !== null) {
    
    // Le asignamos el color según el objeto que tengamos agarrado
    if (objetoSostenido === "ObjetoInicial") {
      fill(0, 255, 0); // Verde
    } else if (objetoSostenido === "ObjetoRojo") {
      fill(255, 0, 0); // Rojo
    } else if (objetoSostenido === "ObjetoAzul") {
      fill(0, 0, 255); // Azul
    }

    noStroke();
    rectMode(CENTER);
    rect(mouseX, mouseY, 30, 30); // El cuadradito que sigue al cursor
    rectMode(CORNER);
  }

  // Verificamos si la página actual tiene un enemigo asignado y si está vivo
  if (enemigos[pagina] !== undefined && enemigos[pagina] === true) {
    fill(255, 100, 100);
    noStroke();
    ellipse(500, 200, 60, 60); 
    
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(10);
    text("ENEMIGO", 500, 200);
  }


  //SELECCIÓN DE OBJETOS RECOMPENSA (Solo en 5, 9 y 10 CUANDO EL ENEMIGO MUERE)
 if ((pagina == 5 && enemigos[5] === false && inventario.length == 1) ||
      (pagina == 9 && enemigos[9] === false && inventario.length == 2) ||
      (pagina == 10 && enemigos[10] === false && inventario.length == 2)) {
        
    textAlign(CENTER, CENTER);
    textSize(12);
    fill(255);
    text("Elige un objeto para tu inventario:", 300, 150);

    // Objeto A (Rojo)
    fill(255, 0, 0);
    ellipse(200, 200, 40, 40);
    
    // Objeto B (Azul)
    fill(0, 0, 255);
    ellipse(400, 200, 40, 40);
  }


  // --- DIBUJO DINÁMICO DE LOS OBJETOS EQUIPADOS ---

  // CASILLERO 1 (Índice 0): Tu objeto inicial (Verde)
  if (inventario.length > 0) {
    fill(0, 255, 0); 
    rect(25, 65, 50, 50); 
  }
  
  // pintamos el 2do objeto
  if (inventario.length > 1) {
    if (inventario[1] === "ObjetoRojo") {
      fill(255, 0, 0); // Si elegiste Rojo, se pinta rojo
    } else if (inventario[1] === "ObjetoAzul") {
      fill(0, 0, 255); // Si elegiste Azul, se pinta azul
    }
    rect(25, 130, 50, 50); // Se dibuja en el segundo slot
  }
  
  // pintamos el tercer objeto
  if (inventario.length > 2) {
    if (inventario[2] === "ObjetoRojo") {
      fill(255, 0, 0);
    } else if (inventario[2] === "ObjetoAzul") {
      fill(0, 0, 255);
    }
    rect(25, 195, 50, 50); // Se dibuja en el tercer slot
  }

  console.log (pagina);




}

















//___________________GALERIA DE PAGINAS______________________

function crearGaleria () {


      galeria = [
          {}, // puse un valor vacio q podemos llenar con un PLAY o algo asi
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


// clcik inventario slot 1
      if (mouseX > 25 && mouseX < 75 && mouseY > 65 && mouseY < 115) {
        if (inventario.length > 0) {
          if (objetoSostenido === null) {
            objetoSostenido = inventario[0]; // Agarramos el Objeto Inicial (Verde)
          } else {
            objetoSostenido = null; // Lo soltamos
          }
        }
        return;
      }

      // clcik inventario slot 2
      if (mouseX > 25 && mouseX < 75 && mouseY > 130 && mouseY < 180) {
        if (inventario.length > 1) {
          if (objetoSostenido === null) {
            objetoSostenido = inventario[1]; // Agarramos el objeto que elegiste en la pág 5
          } else {
            objetoSostenido = null;
          }
        }
        return;
      }

      // clcik inventario slot 3
      if (mouseX > 25 && mouseX < 75 && mouseY > 195 && mouseY < 245) {
        if (inventario.length > 2) {
          if (objetoSostenido === null) {
            objetoSostenido = inventario[2]; // Agarramos el objeto que elegiste en la pág 9
          } else {
            objetoSostenido = null;
          }
        }
        return;
      }

      //ATACAR AL ENEMIGO
      // Si la página actual tiene un enemigo y está vivo, y además tenemos un objeto en la mano
      if (enemigos[pagina] === true && objetoSostenido !== null) {
        let distEnemigo = dist(mouseX, mouseY, 500, 200);
        
        if (distEnemigo < 30) {
          enemigos[pagina] = false; // Derrotamos SOLO al enemigo de esta página
          objetoSostenido = null;   // Soltamos el objeto
          return; 
        }
      }

      // Solo permite elegir si el enemigo muere
        if ((pagina == 5 && enemigos[5] === false && inventario.length == 1) ||
          (pagina == 9 && enemigos[9] === false && inventario.length == 2) ||
          (pagina == 10 && enemigos[10] === false && inventario.length == 2)) {
        
        let distObjetoA = dist(mouseX, mouseY, 200, 200);
        let distObjetoB = dist(mouseX, mouseY, 400, 200);
        
        if (distObjetoA < 20) {
          inventario.push("ObjetoRojo"); // Se guarda en el array
          return; // Al meter el objeto, inventario.length sube y todo desaparece en el próximo frame
        }
        
        if (distObjetoB < 20) {
          inventario.push("ObjetoAzul"); // Se guarda en el array
          return;
        }
      }

      let radioBoton1 = 30;
      let boton1 = dist(mouseX, mouseY, 250, 380);

      let radioBoton2 = 30;
      let boton2 = dist(mouseX, mouseY, 350, 380);

      if (boton1 < radioBoton1 && pagina < 13) {

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
