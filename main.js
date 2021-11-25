timer_counter=0;
timer_check="";
draw_sketch="";
answer_holder="";
score=0;
random_no=Math.floor((Math.random()*quick_draw_data_set.length)+1);
console.log(quick_draw_data_set[random_no]);
sketch=quick_draw_data_set[random_no];
document.getElementById("sketch_name").innerHTML="sketch to be drawn" + sketch;


function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");

}


function preload(){

}

function draw(){
    
}