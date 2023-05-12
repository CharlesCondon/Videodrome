window.addEventListener("DOMContentLoaded", (event) => {
    let imgs = document.querySelectorAll(".thumbnail");
    imgs.forEach(e => {
        e.addEventListener("mouseover", (e) => {
            makeGif(e.target, e.target.id);
        })
        e.addEventListener("mouseout", (e) => {
            makeStill(e.target, e.target.id);
        })
    });
});

function makeGif(i, name) {
    i.src = `./assets/images/${name}.gif`;
}
function makeStill(i, name) {
    i.src = `./assets/images/${name}.jpeg`;
}