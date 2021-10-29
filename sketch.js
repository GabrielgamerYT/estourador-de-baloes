var arco , flecha,  planoFundo;
var imagemArco, imagemFlecha, imagem_balaoVerde, imagem_balaoVermelho, imagem_balaoRosa ,imagem_balaoAzul, imagemPlanoFundo;
var pontuacao
pontuacao = 0
var brosa,bvermelho,bverde,bazul,bflecha
function preload(){
  
  imagemPlanoFundo = loadImage("background0.png");
  imagemFlecha = loadImage("arrow0.png");
  imagemArco = loadImage("bow0.png");
  imagem_balaoVermelho = loadImage("red_balloon0.png");
  imagem_balaoAzul = loadImage("blue_balloon0.png");
  imagem_balaoVerde = loadImage("green_balloon0.png");
  imagem_balaoRosa = loadImage("pink_balloon0.png");
  
  
}



function setup() {
  createCanvas(400, 400);
  
  //criando plano de fundo background
  cenario = createSprite(0,0,400,400);
  cenario.addImage(imagemPlanoFundo);
  cenario.scale = 2.5
  
  //var arrow = createSprite(300, 100, 60, 10);
  ImagemFlecha = loadImage("arrow0.png");
  
  // criando arco para lançar a fecha
  arco = createSprite(380,220,20,50);
  arco.addImage(imagemArco); 
  arco.scale = 1;
  

bvermelho = new Group();
  bazul = new Group();
  brosa = new Group();
  bverde = new Group();
  bflecha = new Group();
}
function draw() {
 
  background(0);
  
  // movendo o solo
    cenario.velocityX = -3 

    if (cenario.x < 0){
      cenario.x = cenario.width/2;
    }
  
  //movendo o arco
  arco.y = World.mouseY
  
   // lançar flecha quando tecla de espaço é pressionada
  if (keyDown("space")) {
    criarFlecha();
    
  }
  
  //criando balões contínuos
  var selecionar_balao = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (selecionar_balao == 1) {
      balaoVermelho();
    }
  } else if (World.frameCount % 95 == 0) {
    if (selecionar_balao == 2) {
      balaoAzul();
    }    
  } else if (World.frameCount % 90 == 0) {
    if (selecionar_balao == 3) {
      balaoVerde();
    }   
  } else if (World.frameCount % 85 == 0) {
    if (selecionar_balao == 4) {
      balaoRosa();
  }
  }
  if(brosa.collide(bflecha)){
    brosa.destroyEach();
    pontuacao = pontuacao + 2
    bflecha.destroyEach();
  }
  if(bazul.collide(bflecha)){
    bazul.destroyEach();
    pontuacao = pontuacao + 1
    bflecha.destroyEach();
  }
  if(bvermelho.collide(bflecha)){
    bvermelho.destroyEach();
    pontuacao = pontuacao + 3
    bflecha.destroyEach();
  }
  if(bverde.collide(bflecha)){
    bverde.destroyEach();
    pontuacao = pontuacao + 1.5
  bflecha.destroyEach();
  }
  drawSprites();
  textSize = 40
  text("pontuação:"+pontuacao, 270, 30)
  
}


// Criando flechas para o arco
 function criarFlecha() {
  var flecha = createSprite(100, 100, 60, 10);
  flecha.addImage("r",ImagemFlecha);
  flecha.x = 360;
  flecha.y=arco.y;
  flecha.velocityX = -4;
  flecha.lifetime = 100;
  flecha.scale = 0.3;
  bflecha.add(flecha)
 }


function balaoVermelho() {
  var vermelho = createSprite(0,Math.round(random(20, 370)), 10, 10);
  vermelho.addImage(imagem_balaoVermelho);
  vermelho.velocityX = 3;
  vermelho.lifetime = 150;
  vermelho.scale = 0.1;
  bvermelho.add(vermelho)
}

function balaoAzul() {
  //escreva o código para gerar os balões azuis
 var azul = createSprite(0,Math.round(random(20, 370)), 10, 10);
  azul.addImage(imagem_balaoAzul);
  azul.velocityX = 3;
  azul.lifetime = 150;
  azul.scale = 0.1;
  bazul.add(azul)

}

function balaoVerde() {
  //escreva o código para gerar os balões verdes
var verde = createSprite(0,Math.round(random(20, 370)), 10, 10);
  verde.addImage(imagem_balaoVerde);
  verde.velocityX = 3;
  verde.lifetime = 150;
  verde.scale = 0.1;
  bverde.add(verde)
}

function balaoRosa() {
  //escreva o código para gerar os balões cor-de-rosa
var rosa = createSprite(0,Math.round(random(20, 370)), 10, 10);
  rosa.addImage(imagem_balaoRosa);
  rosa.velocityX = 3;
  rosa.lifetime = 150;
  rosa.scale = 1.3;
  brosa.add(rosa)
}
