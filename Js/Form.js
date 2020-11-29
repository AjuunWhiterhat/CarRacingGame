class Form{
    constructor(){
        this.title = createElement("H2");
        this.input = createInput().attribute("placeholder","Enter Name");
        this.button = createButton("Play");
        this.greeting = createElement("H3");
        this.reset = createButton("Reset");

    }

    display(){
        this.title.html("Car racing game Form");
        this.title.position(displayWidth/2-50,0);
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.reset.position(displayWidth-100,100);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount= playerCount+1;
            player.index = playerCount;
            player.updateCount(playerCount);
            player.update();
            this.greeting.html("Hello "+player.name);
            this.greeting.position(displayWidth/2-70,displayHeight/4);
            this.title.hide();


        })

        this.reset.mousePressed(()=>{
           game.update(0);
           player.updateCount(0); 
           Player.deletePlayers();
           Player.updateCarsAtEnd(0);
        })
    }

    hide(){

        this.title.hide();
        this.input.hide();
        this.button.hide();
        this.greeting.hide();

    }
}