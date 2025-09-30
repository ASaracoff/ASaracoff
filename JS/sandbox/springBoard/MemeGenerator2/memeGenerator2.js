// source: https://www.youtube.com/watch?v=io5FcMAdLyQ
// 8:02 start
// 8:14 JS start

const imageFileInput = document.querySelector('#imageFileInput');
const topTextInput = document.querySelector('#topTextInput');
const bottomTextInput = document.querySelector('#bottomTextInput');
const canvas = document.querySelector('#meme');

let image;

imageFileInput.addEventListener("change", () => {
    // generates an url
    const imageDataUrl = URL.createObjectURL(imageFileInput.files[0]);

    // <img>
    image = new Image();
    image.src = imageDataUrl;

    image.addEventListener("load", () =>{
        updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
    }
    // load only once
    , {once: true});
})

topTextInput.addEventListener("change", () =>{
    updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
})

bottomTextInput.addEventListener("change", () =>{
    updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
})

function updateMemeCanvas(canvas, image, topText, bottomText){
    // grab context of canvas
    const ctx = canvas.getContext("2d");
    const width = image.width;
    const height = image.height;
    
    // make font size relative to image width
    const fontSize = Math.floor(width/10)

    // space between top of image and top of text
    const yOffSet = height/25;

    // update canvas background
    canvas.width = width;
    canvas.height = height;
    // draw image at
    ctx.drawImage(image, 0, 0);

    // prepare text
    // black outline
    ctx.strokeStylr = "black";
    // border - text stroke width
    ctx.lineWidth = Math.floor(fontSize/4);
    // white text
    ctx.fillStyle = "white";
    // the text itself that'll be displayed
    ctx.textAlign = "center";
    // no weird spikes in the text
    ctx.lineJoin = "round";
    // font size and style
    ctx.font = `${fontSize}px sans-serif`

    // add top text - gives margin off the top
    ctx.textBaseline = "top";
    // width/2 is x
    ctx.strokeText(topText, width/2, yOffSet);
    ctx.fillText(topText,width/2,yOffSet)

    // add top text - gives margin off the top
    ctx.textBaseline = "bottom";
    // width/2 is x
    ctx.strokeText(bottomText, width/2, height-yOffSet);
    ctx.fillText(bottomText,width/2, height-yOffSet)

}
