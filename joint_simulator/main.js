

class RigidBody {
    constructor(scene, type, size, density, pos, angles, fontSize = 0.0) {
        this.type = type;
        this.size = new THREE.vector3

    }
}

class VisualDistance {

}

class VisualFrame {

}

class Joint {

}

class Constraint {
    constructor() {
        
    }
}

class Simulator {

}


class SceneImporter {
    
}


class SceneRenderer {

}



function ApplyLinearCorrection(int ) {


    return 
}



function solve() {

}


function main() {
    let run = true;
    let Nr_substeps = 10;
    let Constraints = [];
    let Bodies = [];

    while(run) {
        for(var n = 0; n < Nr_substeps; n++) {
            for(var i = 0; i < length(Bodies); i++) {
                B = Bodies[i];
                  
            };
            
            // Solve for corrections based on constraints
            for(var i = 0; i < length(Constraints); i++) {
                C = Constraints[i];
                
            };

            // Update velocitites
            for(var i = 0; i < length(Bodies); i++) {
                B = Bodies[i];
                
            };

        }
    }
}







