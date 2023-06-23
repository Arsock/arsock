const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var posicion = undefined;

class cosa{
    constructor(x = 0,y = 0,v = 1){
        this.x = x;
        this.y = y;
        this.w = 20;
        this.h = 20;
        this.d = 'run';
        this.d2 = 'run';
        this.v = v;
    }
    draw(){
        if(posicion == 'right' && this.d == 'run'){
            if (this.x >= 130) {
                this.d = 'stop';
            }
            this.x = this.x + this.v;
            this.d2 = 'run';
        } else if(posicion == 'left' && this.d2 == 'run'){
            if (this.x <= 0) {
                this.d2 = 'stop';
            }
            this.x = this.x - this.v;
            this.d = 'run';
        }

        ctx.fillRect(this.x,this.y,this.w,this.h);
    }
}


var cubeOne = new cosa(0,130,1);

addEventListener("keypress",(e)=>{
    if(e.code === "KeyD" && posicion == undefined){
        posicion = 'right';
    } else if(e.code === "KeyA" && posicion == undefined){
        posicion = 'left';
    }
})
addEventListener("keyup",(e)=>{
        posicion = undefined;
})

const update = ()=>{
    ctx.clearRect(0, 0, 150, 150);
    cubeOne.draw();
}

const time = setInterval(update,16.6666666667);
