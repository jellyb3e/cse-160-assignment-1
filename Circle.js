class Circle {
    constructor(position,sizeShape,colorShape,segments) {  // apolocheese for naming conventions
        this.type = 'circle';
        this.pos = position;
        this.size = sizeShape;
        this.color = colorShape;
        this.segs = segments;
    }

    render() {
        const center = this.pos;
        const step_size = 2.0 * Math.PI / this.segs;
        const d = this.size / 200.0;

        gl.uniform4f(u_FragColor,this.color[0],this.color[1],this.color[2],1.0);
        gl.uniform1f(u_Size,this.size);
        
        for (let ang = 0; ang < 2.0 * Math.PI; ang += step_size) {
            drawTriangle([center[0],center[1],center[0]+Math.cos(ang)*d,center[1]+Math.sin(ang)*d,center[0]+Math.cos(ang + step_size)*d,center[1]+Math.sin(ang + step_size)*d]);
        }
    }
}