class Form{
    constructor(x, y){
        this.inputi = createInput("YOUR EMAIL");
        this.inputi.position(x, y - 50);

        this.input = createInput("Think About The Environment Day");
        this.input.position(x, y);

        this.button = createButton("SUBMIT");
        this.button.position(this.input.position.x, this.input.position.y + 20);

        this.greeting = createElement("h3");
        this.greeting.position(x, y);
    }
    
    display(){
        this.button.mousePressed(() => {
            this.button.hide();
            this.input.hide();

            var survey = this.input.value();

            this.greeting.html("THANK YOU FOR TAKING THIS SURVEY");


            for(var i = 1; i <= 4; i++){
                var Surveys = "players/player"+i;
                database.ref(Surveys).set({
                Surveys: survey
                })
            }
        })
    }

    hide(){
        this.button.hide();
        this.input.hide();
        this.greeting.hide();
    }
    
}