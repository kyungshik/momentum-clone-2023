const body = document.querySelector("body");
const images = [];

for(var x = 0 ; x < 13; x++){
    images.push(`${x}.jpeg`);
}

const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImage = `url(img/${chosenImage})`;

document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundImage = bgImage;