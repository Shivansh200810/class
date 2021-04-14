class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
      
    }
    
   
  }
  play(){
    
    form.hide();
    //background(trackimgp)
    Player.getPlayerInfo();
   image(trackimgp, 0,-displayHeight*4,displayWidth/2+600,displayHeight/2+200);
    car=createSprite(240,500);
    car.addImage("car",carimg);
    car1 = createSprite(440,500);
    car1.addImage("car1",car1img);
    car2 = createSprite(660,500);
    car2.addImage("car2",car2img);
    car3 = createSprite(880,500);
    car3.addImage("car3",car3img);
    
    if(allPlayers !== undefined){
    //  background(rgb(198,135,103));
   
      //var display_position = 100;
    
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;
        cararr = [car, car1, car2, car3];
        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cararr[index-1].x = x;
        cararr[index-1].y = y;
        console.log(index, player.index)

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
       
        //textSize(15);
       // text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown('up') && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 3860){
      gameState = 2;
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
  }
}

 
