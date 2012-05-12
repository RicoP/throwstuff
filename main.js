//(function() { 
"use strict"; 

//= objloader.js/lib/util/util.js 

//MAIN 

var gl;

//var ball = UTIL.shapes


function gameloop(info) { 
	if(info) {
		update(info); 
		draw(info); 
	}
	else {
		setup(); 
	}

	UTIL.requestGameFrame(gameloop); 
}

function update() {}
function draw() {}
function setup() {
	gl = UTIL.createContext(1024, 600); 

	if(!gl) {
		var message = "WebGL not supported :("; 
		alert(message); 
		throw new Error(message); 
	}

    gl.enable( gl.DEPTH_TEST );
    gl.depthFunc( gl.LEQUAL );
    gl.enable( gl.BLEND );
    try {
        gl.blendFunc( gl.FUNC_ADD );
    } catch(e) {
        gl.blendFunc( gl.FUNC_ADD, null ); // <-- Duh?! 
    }
    gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );

	gl.clearColor(0,0,0,1); 
	gl.clear(gl.COLOR_BUFFER_BIT); 
}

gameloop(null); 
//END
//}()); 

