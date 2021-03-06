console.log("main.js is called")

// calls objects
let G = new Grid(width,height, 25, colArray[0][2],0.3);
let C = new ControlObject(canvas,450, 25, 475, 600);
let A_0 = new InteractiveButton(25,25,200,54,colArray[0][1],colArray[0][0], colArray[0][0], colArray[0][2], 'Rectangle', colArray[0][2])
let A_1 = new InteractiveButton(25,79,200,54,colArray[0][1],colArray[0][0], colArray[0][0], colArray[0][2], 'Ellipse', colArray[0][2])
let A_2 = new InteractiveButton(25,133,200,54,colArray[0][1],colArray[0][0], colArray[0][0], colArray[0][2], 'Star', colArray[0][2])
let A_3 = new InteractiveButton(25,187,200,54,colArray[0][1],colArray[0][0], colArray[0][0], colArray[0][2], 'Triangle', colArray[0][2])
let A_4 = new InteractiveButton(25,241,200,54,colArray[0][1],colArray[0][0], colArray[0][0], colArray[0][2], 'Heart', colArray[0][2])
let A_5 = new InteractiveButton(25,295,200,54,colArray[0][1],colArray[0][0], colArray[0][0], colArray[0][2], 'Diamond', colArray[0][2])
let A_6 = new InteractiveButton(275,25,150,54,colArray[0][1],colArray[0][0], colArray[0][0], colArray[0][2], 'Line', colArray[0][2])
let U_1 = new InteractiveButton(50,550,150,50,colArray[0][1],colArray[0][0], colArray[0][0], colArray[0][2], 'Undo', colArray[0][2])
let U_2 = new InteractiveButton(250,550,150,50,colArray[0][1],colArray[0][0], colArray[0][0], colArray[0][2], 'Clear', colArray[0][2])

let S_1 = new Size(275,100,50,50,colArray[0][1],colArray[0][0], colArray[0][0], colArray[0][2], 'S', colArray[0][2],0.5)
let S_2 = new Size(325,100,50,50,colArray[0][1],colArray[0][0], colArray[0][0], colArray[0][2], 'M', colArray[0][2],1)
let S_3 = new Size(375,100,50,50,colArray[0][1],colArray[0][0], colArray[0][0], colArray[0][2], 'L', colArray[0][2],3)

let swatch_set = []
for(let i = 0; i<colArray.length; i++) {
    for (let j = 0; j < colArray[i].length; j++) {
        let temp = new Swatch(25 + 33.33 * j, 400+33.33 * i, 33.33, 33.33, colArray[i][j],colArray[0][1],colArray[0][2],colArray[0][2])
        swatch_set.push(temp);
    }
}

let buttonSet = [A_0, A_1,A_2,A_3, A_4,A_5,A_6]
let undoSet = [U_1,U_2]
let sizeSet = [S_1,S_2,S_3]

function animate(t){
    ctx.clearRect(0,0, width, height);
    //updates for canvas
    G.update();
    C.update();

    for(let i=0; i<buttonSet.length; i++){
        buttonSet[i].update();
    }

    for(let i=0; i<sizeSet.length; i++){
        sizeSet[i].update();
    }

    for(let i=0; i<undoSet.length; i++){
        undoSet[i].update();
    }

    for(let i = 0; i<swatch_set.length; i++){
        swatch_set[i].update()
    }

    window.requestAnimationFrame(animate);
}
animate();
