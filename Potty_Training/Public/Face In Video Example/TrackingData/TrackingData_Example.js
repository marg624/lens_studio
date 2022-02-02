var animData = {};
animData.positions = [ new vec2(0,-0.01),
    new vec2(0,-0.019),
    new vec2(0,-0.023),
    new vec2(0,-0.01),
    new vec2(0,-0.023),  
    new vec2(0,-0.029),
    new vec2(0,-0.023),
    new vec2(0,-0.019),
    new vec2(0,-0.01),
    new vec2(0,-0.019)
];
animData.scales = [ new vec3(100,100,100),
    new vec3(100,100,100),
    new vec3(100,100,100),
    new vec3(100,100,100),
    new vec3(100,100,100),
    new vec3(100,100,100),
    new vec3(100,100,100),
    new vec3(100,100,100),
    new vec3(100,100,100),
    new vec3(100,100,100)
];
animData.rotations = [  new vec3(0,0,0),
    new vec3(0,0,0),
    new vec3(0,0,0),
    new vec3(0,0,0),
    new vec3(0,0,0),
    new vec3(0,0,0),
    new vec3(0,0,0),
    new vec3(0,0,0),
    new vec3(0,0,0),
    new vec3(0,0,0)
];
animData.duration = 9;
animData.compHeight = 1280;
animData.compWidth = 720;
animData.frameRate = 9;
animData.layerHeight = 100;
animData.layerWidth = 100;
script.api.animData = animData;