export class Point {
    constructor(centerX,centerY, radius, rota, index) {
        this.x,this.X1,this.X2, this.y,this.Y1,this.Y2;
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
        this.radian = rota * (Math.PI / 180);
        this.index = index;

        this.speed = (Math.random() * 8 + 1);// 포인트의 이동 속도
        this.r = Math.random() * 0.5 + 0.3; // 포인트의 동작 범위
        this.rota = 0;

        if (index == 0) {this.b =  90*Math.PI/180 , this.B = 217*0.5, this.radius = 324;}
        if (index == 1) {this.b = 160*Math.PI/180 , this.B = 121*0.5, this.radius = 255;}
        if (index == 2) {this.b = 180*Math.PI/180 , this.B = 99*0.5, this.radius = 211;}
        if (index == 3) {this.b = 215*Math.PI/180 , this.B = 130*0.5, this.radius = 244;}
        if (index == 4) {this.b = 250*Math.PI/180 , this.B = 225*0.5, this.radius = 206;}
        if (index == 5) {this.b = 315*Math.PI/180 , this.B = 212*0.5, this.radius = 329;}
        if (index == 6) {this.b =  30*Math.PI/180 , this.B = 115*0.5, this.radius = 284;}
        if (index == 7) {this.b =  10*Math.PI/180 , this.B = 184*0.5, this.radius = 237;}
    }

    update() {
        var plus = Math.cos(this.rota * (Math.PI / 180)) * (this.r);
        // this.radian += 0.003;//축 회전
        // this.b += 0.003;//축 회전
        this.radius += plus;//이게 증가1

        var cos = Math.cos(this.radian) * this.radius;
        var sin = Math.sin(this.radian) * this.radius;

        this.x = cos + this.centerX;
        this.y = sin + this.centerY;
        this.rota += this.speed;//이게 증가2
        
        if (this.rota > 360) { this.rota -= 360; }
        
        this.X1 = this.x + Math.cos(this.b)*this.B;
        this.Y1 = this.y + Math.sin(this.b)*this.B;
        
        this.X2 = this.x - Math.cos(this.b)*this.B;
        this.Y2 = this.y - Math.sin(this.b)*this.B;
    }
}