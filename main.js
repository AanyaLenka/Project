var canvas=new fabric.Canvas('myCanvas');

player_x=10;
player_y=10;

block_width=30;
block_height=30;

var block_image="";
var player_image="";

function player_image_update(){
fabric.Image.fromURL("https://drive.google.com/file/d/1fGz6T2OZeGqzLGfhN1fZ2VffCG-OzWxL/view?usp=sharing",function(Img){
player_image=Img;
player_image.scaleToWidth(150);
player_image.scaleToHeight(140);
player_image.set({
top:player_y,
left:player_x
});
canvas.add(player_image);
});
}

function new_image(get_image)
{
fabric.Image.fromURL(get_image,function(Img){
block_image=Img;
block_image.scaleToWidth(block_width);
block_image.scaleToHeight(block_height);
block_image.set({
top:player_y,
left:player_x
});
canvas.add(block_image);
});
if(key_Pressed=='38')
{
new_image('thor_face.png');
console.log("Thor's Face");
}
if(key_Pressed=='40')
{
new_image('hulkd_body.png');
console.log("Hulk's Body");
}
if(key_Pressed=='37')
{
new_image('spiderman_left_hand.png');
console.log("Spiderman's Left Hand");
}
if(key_Pressed=='39')
{
new_image('ironman_right_hand.png');
console.log("Ironman's Right Hand");
}
if(key_Pressed=='76')
{
new_image('hulk_legs.png');
console.log("Hulk's Legs");
}
}