var database, position, form;

function setup(){
    createCanvas(500, 500);
    
    form = new Form(100, 200);
}

function draw(){
    background("#c68767");
    form.display();
}