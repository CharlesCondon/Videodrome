// const density = "Ñ@#W$9876543210?!abc;:+=-,._                    ";
// const density = "                    _.,-=+:;cba!?0123456789$W#@Ñ";
// const density = '       .:-i|=+%O#@
// const density = '        .:░▒▓█';
const density = ' Ñ1'

let video;
let scaler = 7;
let prev;
let particles = [];
let lerpX = 0;
let lerpY = 0;
let motionX = 0;
let motionY = 0;

function setup() {
    createCanvas(windowWidth, windowHeight*.91);
    video = createCapture(VIDEO);
    video.size(width / scaler, height / scaler);
    prev = createImage(video.width, video.height);
    video.hide();
}

function captureEvent(video) {
    prev.copy(video, 0, 0, video.width, video.height, 0, 0, prev.width, prev.height);
    prev.updatePixels();
    video.read();
}

let temp = [...Array(255).keys()];
let avg;

// function makeCircles(x_pos, y_pos){   
//     let tempC = 255;
//     let c = color(tempC);
//     let sz = 8;
//     let s = random(1, 10);
//     particles.push({
//         temp: tempC,
//         x: x_pos,
//         y: y_pos,
//         c: c,
//         sz: sz, 
//         speed: s
//     }) 
// }
// function moveCircles(b, i) {
//     b.sz += (b.speed);
//     b.temp -= (b.speed * 4);
//     b.c = color(b.temp);
//     if ( (b.sz > 50 ) ) {
//         particles.splice(i, 1)
//     }
// }
//function drawCircles(b){
    //noStroke();
    //stroke(b.c);
    //noFill();
    //fill(255);
    //ellipse (b.x, b.y, b.sz, b.sz);
    // stroke(255)
    // strokeWeight(b.sz);
    // point(b.x,b.y);
//}

function mousePressed() {
    prev.copy(video, 0, 0, video.width, video.height, 0, 0, video.width, video.height);
    prev.updatePixels();
}

function distSqr( x1, y1, z1, x2, y2, z2 ) {
    let d = (x2-x1)*(x2-x1) + (y2-y1)*(y2-y1) + (z2-z1)*(z2-z1);
    return d;
}

function draw() {
    video.loadPixels();
    prev.loadPixels();
    
    background(0);

    // let count = 0;
  
    // let avgX = 0;
    // let avgY = 0;
    // let fps = frameRate();
    // fill(255);
    // stroke(0);
    // text("FPS: " + fps.toFixed(2), 10, height - 10);
    // background('rgba(0,0,0, 0.25)');
    loadPixels();
    for (let j = 0; j < video.height; j++) {
        for (let i = 0; i < video.width; i++) {
            const pixelIndex = ( (video.width - i - 2) + (j * video.width)) * 4;

            let pr = prev.pixels[pixelIndex + 0];
            let pg = prev.pixels[pixelIndex + 1];
            let pb = prev.pixels[pixelIndex + 2];
            let pavg = (pr + pg + pb) / 3;

            const r = video.pixels[pixelIndex + 0];
            const g = video.pixels[pixelIndex + 1];
            const b = video.pixels[pixelIndex + 2];
            avg = (r + g + b) / 3;

            var diff = distSqr(r, g, b, pr, pg, pb);

            rectMode(CENTER);
            rect( (i * scaler), (j * scaler), (avg/20));
            //noStroke();
            stroke(0);
            fill(r, g, b);
            // if (diff<25) {
            //     rect( (i * scaler), (j * scaler), (avg));
            //     //fill(0);
            // }

            // if (diff>25) {
            //     avgX += j;
            //     avgY += i;
            //     count++;
            //     pixels[i*j+video.width] = color(255);
                //console.log(pixels[pixelIndex]);
            // }
            // else {
            //     pixels[i*j+video.width] = color(0);
            // }
            //updatePixels();
            
			// if (diff<100){
            //     fill(avg);
            //     circle(i * scaler, j * scaler, avg/15);
            // } else {
                // fill(avg); 
                // circle(i * scaler, j * scaler, avg/10);
                //makeCircles( i*scaler, j*scaler, scaler);
            //}
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

            //draw square
            
            //noStroke();
            
            //draw point
            //point( (i * scaler), (j * scaler));
            // if (avg>125) {
            //     stroke(r,0,0);
            // }
            // else {
            //     stroke(0,0,b);
            // }
            // stroke(avg)
            // strokeWeight(avg/20);

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
    //updatePixels();

    // if (count > 200) { 
    //     motionX = avgX / count;
    //     motionY = avgY / count;
    // }
    
    // lerpX = lerp(lerpX, motionX, 0.1); 
    // lerpY = lerp(lerpY, motionY, 0.1); 
    
    // fill(255, 0, 255);
    // strokeWeight(2.0);
    // stroke(0);
    // ellipse(lerpX, lerpY, 36, 36);
    //prev = video;
    // prev.copy(video, 0, 0, video.width, video.height, 0, 0, video.width, video.height);

    // for (i = particles.length-1; i > 0 ; i--){
    //     let b = particles[i];
    //     drawCircles(b);
    //     moveCircles(b, i);
    // }
}