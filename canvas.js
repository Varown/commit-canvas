let canvas = document.getElementById('canvas');
let cv = canvas.getContext('2d');

let manage = false;
let rubber = false;
let coordinate = {x: undefined, y: undefined};
view();

function view() {
    let pageWidth = document.documentElement.clientWidth;
    let pageHeight = document.documentElement.clientHeight;
    canvas.width = pageWidth;
    canvas.height = pageHeight;
}

if (document.body.ontouchstart !== undefined) {

    canvas.ontouchstart = function (e) {

        manage = true;

        let x = e.touches[0].clientX;
        let y = e.touches[0].clientY;

        if (rubber) {
            cv.clearRect(x - 20, y - 20, 40, 40)
        }
        coordinate = {x: x, y: y};
    };
    canvas.ontouchmove = function (e) {
        let x = e.touches[0].clientX;
        let y = e.touches[0].clientY;
        let newPoint = {x: x, y: y};
        if (manage) {
            if (rubber) {
                cv.clearRect(x - 15, y - 15, 30, 30)
            } else {
                drawLine(coordinate.x, coordinate.y, newPoint.x, newPoint.y);
            }
            coordinate = newPoint;
        }
    };
    canvas.ontouchend = function () {
        manage = false;
    };

}else{

    canvas.onmousedown = function (e) {
        let x = e.offsetX;
        let y = e.offsetY;
        manage = true;

        if (rubber) {
            cv.clearRect(x - 15, y - 15, 30, 30)
        }

        coordinate = {x: x, y: y};
    };


    canvas.onmousemove = function (e) {
        let x = e.offsetX;
        let y = e.offsetY;

        let newPoint = {x: x, y: y};
        if (manage) {
            if (rubber) {
                cv.clearRect(x - 15, y - 15, 30, 30)
            } else {
                drawLine(coordinate.x, coordinate.y, newPoint.x, newPoint.y);
            }
            coordinate = newPoint;
        }
    };

    canvas.onmouseup = function () {
        manage = false;
    };
}


function drawLine(xStart, yStart, xEnd, yEnd) {
    cv.beginPath();
    cv.lineWidth = 2;
    cv.moveTo(xStart, yStart);
    cv.lineTo(xEnd, yEnd);
    cv.stroke();
    cv.closePath();
}







black.onclick = function () {
    cv.strokeStyle = 'black';
    canvas.classList.add('cursor1');
    canvas.classList.remove('cursor2');
    canvas.classList.remove('cursor3');
    canvas.classList.remove('cursor4');
    canvas.classList.remove('cursor5');
    canvas.classList.remove('xiangpica');
    rubber = false;
    eraser.classList.remove('active');
};
red.onclick = function () {
    cv.strokeStyle = 'red';
    canvas.classList.add('cursor2');
    canvas.classList.remove('cursor1');
    canvas.classList.remove('cursor3');
    canvas.classList.remove('cursor4');
    canvas.classList.remove('cursor5');
    canvas.classList.remove('xiangpica');
    rubber = false;
    eraser.classList.remove('active');
};
orange.onclick = function () {
    cv.strokeStyle = 'orange';
    canvas.classList.add('cursor3');
    canvas.classList.remove('cursor2');
    canvas.classList.remove('cursor1');
    canvas.classList.remove('cursor4');
    canvas.classList.remove('cursor5');
    canvas.classList.remove('xiangpica');
    rubber = false;
    eraser.classList.remove('active');
};
green.onclick = function () {
    cv.strokeStyle = 'green';
    canvas.classList.add('cursor4');
    canvas.classList.remove('cursor2');
    canvas.classList.remove('cursor3');
    canvas.classList.remove('cursor1');
    canvas.classList.remove('cursor5');
    canvas.classList.remove('xiangpica');
    rubber = false;
    eraser.classList.remove('active');
};
blue.onclick = function () {
    cv.strokeStyle = 'blueviolet';
    canvas.classList.add('cursor5');
    canvas.classList.remove('cursor2');
    canvas.classList.remove('cursor3');
    canvas.classList.remove('cursor4');
    canvas.classList.remove('cursor1');
    canvas.classList.remove('xiangpica');
    rubber = false;
    eraser.classList.remove('active');
};

eraser.onclick = function () {
    rubber = true;
    eraser.classList.add('active');
    brush.classList.remove('active');
    canvas.classList.add('xiangpica');
};
brush.onclick = function () {
    rubber = false;
    brush.classList.add('active');
    eraser.classList.remove('active');
    canvas.classList.remove('xiangpica');
};


clear.onclick = function() {
    cv.fillStyle = '#C5C5C5';
    cv.fillRect(0,0,canvas.width,canvas.height);
};


save.onclick = function() {
    let url = canvas.toDataURL('image/jpg');
    let a = document.createElement('a');
    document.body.appendChild(a);
    a.href = url;
    a.download = '草稿纸';
    a.target = '_blank';
    a.click()
};





