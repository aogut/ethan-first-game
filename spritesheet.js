let spritesheet;
let spritedata;

let images = [];

function loadSpriteSheet() {
    spritesheet = loadImage('characters.png');    
}

function prepareAnimatedCharacter() {
    for (let i = 0; i < 23; i++) {
      img = spritesheet.get(i*32, 0, 32, 32);
      images.push(img);
    } 
}