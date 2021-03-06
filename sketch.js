//Create variables here
var dog, happyDog, database, foodS, foodStock=20;
var dogImg, happyDogImg;

function preload()
{
  dogImg = loadImage("images/dogImg.png")
  happyDogImg = loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
	createCanvas(500, 500);

  database = firebase.database();

  dog = createSprite(250,250)
  dog.addImage(dogImg)

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  

  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg)
  }
  drawSprites();
  //add styles here
  

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}


