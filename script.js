function resetCanvas() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((div) => {
        div.style.backgroundColor = 'white';
    });
}

function newCanvas() {
    const parent = document.querySelector('.canvas');
    let n = Number(prompt('Enter the resolution'));
    if (n > 64) {
        n = 64;
    }
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    mkCanvas(n);
}

function mkCanvas(n) {
    for (let i = 1; i <= n; i++) {
        const div = document.createElement('div');
        div.setAttribute('id', 'row' + i);
        div.setAttribute('class', 'row');
        canvas.appendChild(div);
        for (let j = 1; j <= n; j++) {
            const div = document.createElement('div');
            div.setAttribute('class', 'pixel');
            div.setAttribute('id', 'pixel'+i+j);
            div.addEventListener('mouseover', function (e){
                if (isDrawing === true) e.target.style.backgroundColor = 'black';
            });
            const row = document.querySelector('#row' + i)
            row.appendChild(div);
        }
    }
}

const canvas = document.querySelector('.canvas');
let isDrawing = false;

window.addEventListener('mousedown', () => {
    isDrawing = true;
});

window.addEventListener('mouseup', () => {
    isDrawing = false;
});

const resetButton = document.querySelector('#reset');
const newButton = document.querySelector('#new');
resetButton.addEventListener('click', resetCanvas);
newButton.addEventListener('click', newCanvas);

let n = 16;

mkCanvas(n);


