// EnableAlphaRecursively.js
// Version: 0.0.1
// Event: Lens Initialized
// Description: Enable alpha channel on root object recursively

//@ui {"widget":"label", "label":"Enable alpha channel on root object recursively"}
// @input SceneObject rootObject

var isInit = false;
var meshComps = [];
var textComps = [];
var objectToSetLayer = [];

function onStart() {
    isInit = validateInputs();
    if (!isInit) {
        return;
    }
    for (var i in objectToSetLayer) {
        getComponentsRecursive(objectToSetLayer[i], "Component.BaseMeshVisual", meshComps);
        getComponentsRecursive(objectToSetLayer[i], "Component.Text", textComps);
    }

    var meshPass = getMeshPass(meshComps);
    renderAlphaPass(meshPass);
    renderAlphaPass(textComps);
}

function renderAlphaPass(pass) {
    for (var i = 0; i < pass.length; i++) {
        pass[i].colorMask = new vec4b(true, true, true, true);
    }
}

function getMeshPass(meshObjects) {
    var pass = [];
    for (var i = 0; i < meshObjects.length; i++) {
        pass[i] = meshObjects[i].mainMaterial.mainPass;
    }
    return pass;
}

function getComponentsRecursive(sceneObject, typeName, resultList) {
    resultList = resultList || [];
    var ret = sceneObject.getComponents(typeName);
    var i;
    for (i = 0; i < ret.length; i++) {
        resultList.push(ret[i]);
    }
    for (i = 0; i < sceneObject.getChildrenCount(); i++) {
        getComponentsRecursive(sceneObject.getChild(i), typeName, resultList);
    }
    return resultList;
}


function validateInputs() {
    if (!script.rootObject) {
        print("ERROR: Make sure the to set an object that you want the alpha to be enabled on.");
        return false;
    }

    var childCount = script.rootObject.getChildrenCount();

    for (var i = 0; i < childCount; i++) {
        objectToSetLayer[i] = script.rootObject.getChild(i);
    }

    return true;
}

var startEvent = script.createEvent("OnStartEvent");
startEvent.bind(onStart);