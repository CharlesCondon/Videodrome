// const density = "Ñ@#W$9876543210?!abc;:+=-,._                    ";
// const density = "                    _.,-=+:;cba!?0123456789$W#@Ñ";
// const density = '       .:-i|=+%O#@
// const density = '        .:░▒▓█';
const density = ' Ñ1'

let video;
let scaler = 10;
let prev;
let particles = [];

function setup() {
    createCanvas(windowWidth, windowHeight*.91);
    video = createCapture(VIDEO);
    video.size(width / scaler, height / scaler);
    prev = createImage(video.width, video.height);
    video.hide();
}

let temp = [...Array(255).keys()];
let avg;

function makeCircles(x_pos, y_pos){   
    let tempC = 255;
    let c = color(tempC);
    let sz = 8;
    let s = random(1, 10);
    particles.push({
        temp: tempC,
        x: x_pos,
        y: y_pos,
        c: c,
        sz: sz, 
        speed: s
    }) 
}
function moveCircles(b, i) {
    b.sz += (b.speed);
    b.temp -= (b.speed * 4);
    b.c = color(b.temp);
    if ( (b.sz > 50 ) ) {
        particles.splice(i, 1)
    }
}
function drawCircles(b){
    //noStroke();
    stroke(b.c);
    noFill();
    //fill(255);
    ellipse (b.x, b.y, b.sz, b.sz);
    // stroke(255)
    // strokeWeight(b.sz);
    // point(b.x,b.y);
}

function distSqr( x1, y1, z1, x2, y2, z2 ) {
    let d = (x2-x1)*(x2-x1) + (y2-y1)*(y2-y1) + (z2-z1)*(z2-z1);
    return d;
}

function draw() {
    video.loadPixels();
    prev.loadPixels();
    background(0);
    // let fps = frameRate();
    // fill(255);
    // stroke(0);
    // text("FPS: " + fps.toFixed(2), 10, height - 10);
    // background('rgba(0,0,0, 0.25)');
    for (let j = 0; j < video.height; j++) {
        for (let i = 0; i < video.width; i++) {
            const pixelIndex = ( (video.width - i - 1) + (j * video.width)) * 4;

            let pr = prev.pixels[pixelIndex + 0];
            let pg = prev.pixels[pixelIndex + 1];
            let pb = prev.pixels[pixelIndex + 2];
            let pavg = (pr + pg + pb) / 3;

            const r = video.pixels[pixelIndex + 0];
            const g = video.pixels[pixelIndex + 1];
            const b = video.pixels[pixelIndex + 2];
            avg = (r + g + b) / 3;

            var diff = distSqr(r, g, b, pr, pg, pb);
            
			if (diff<900){
                //fill(0);
                //circle(i * scaler, j * scaler, scaler);
            } else {
                //fill(avg); 
                //circle(i * scaler, j * scaler, scaler);
                makeCircles( i*scaler, j*scaler, scaler);
                //circle(i * scaler, j * scaler, scaler);

            }
            //noStroke();
            //circle(i * scaler, j * scaler, scaler);
            // if ((i%2==0) && (j%2==0)) {
            //     square( (i * video.width + video.width * 0.5)/6, (j * video.height + video.height *0.5)/6, (avg/20));
            //     fill(255,0,0) 
            // }
            // else if (!(i%2==0) && !(j%2==0)) {
            //     square( (i * video.width + video.width * 0.5)/6, (j * video.height + video.height *0.5)/6, (avg/20));
            //     fill(255,0,0) 
            // }
            // else {
            //     fill(0,0,255);
            // }
            //rectMode(CENTER);
            //rect( (i * video.width + video.width * 0.5)/6, (j * video.height + video.height *0.5)/6, (avg/15));
            //fill(255)
            //draw square
            //stroke(avg)
            //noStroke();
            
            //draw point
            //point( (i * video.width + video.width * 0.5)/6, (j * video.height + video.height *0.5)/6);
            // if (avg>125) {
            //     stroke(r,0,0);
            // }
            // else {
            //     stroke(0,0,b);
            // }
            //stroke(avg)
            //strokeWeight(avg/40);

            //const newTemp = temp.reverse();
            //const newAvg = floor(avg);
            //stroke(newAvg/2);
            //strokeWeight((newTemp[newAvg])/15);
            
            // textSize(5);
            // textAlign(CENTER, CENTER);
            // text(`${i}`, (i * video.width + video.width * 0.5)/6, (j * video.height +video.height *0.5)/6);
            // fill(avg);
        }
    }
    //prev = video;
    prev.copy(video, 0, 0, video.width, video.height, 0, 0, video.width, video.height);

    for (i = particles.length-1; i > 0 ; i--){
        let b = particles[i];
        drawCircles(b);
        moveCircles(b, i);
    }
}