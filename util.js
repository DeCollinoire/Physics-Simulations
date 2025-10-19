


class Vec {
    constructor(composants) {
        this.length = composants.length;
        this.vec = composants;
    }
    
    get x() { return this.vec[0];     }
    get y() { if (this.length > 1) { return this.vec[1]; } else {return 0}    }
    get z() { if (this.length > 2) { return this.vec[2]; } else {return 0}      }

    add(other) {
        var newVec = this.vec;
        for(i=0; i<this.length; i++) {
            newVec[i] = newVec[i] + other[i];
        }
        return newVec;
    }

    sub(other) {
        var newVec = new Vec(this.vec);
        for(i=0; i<this.length; i++) {
            newVec.vec[i] = newVec.vec[i] - other.vec[i];
        }
        return newVec;
    }

    scale(scalar) {
        var newVec = this.vec;
        for(i=0; i<this.length; i++) {
            newVec[i] = newVec[i]*scalar;
        }
        return newVec;
    }

    dot(other) {
        var dotProd = 0;
        for(i=0; i<this.length; i++) {
            dotProd = dotProd + newVec[i] * other[i];
        }
        return dotProd;
    }

    magnitude() {
        return Math.sqrt(this.dot(this));
    }

    normal() {
        var Magnitude = this.magnitude();
        var Normal = this.scale(1/Magnitude);
        return Normal;
    }

    perp() {
        if (this.length == 2) {
            return new Vec([-this.y, this.x])
        }
    }

}

class Line {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    eval(t) {
        var b_a = this.end.sub( this.start ).scale(t);
        return this.start.add(temp);
    }

    findClosestPoint(point) {
        var b_a = this.end.sub(this.start);
        t =  b_a.dot(b_a);
        if (t == 0.0) {
            return this.start.clone();
        }
        var p_a = point.sub(this.start);
        var t = p_a.dot(b_a) / t;
        t = Math.max(Math.min(t), 1)
        return this.start.add(b_a.scale(t));
    }
}


