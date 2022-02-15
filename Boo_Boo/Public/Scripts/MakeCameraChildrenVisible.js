// MakeCameraChildrenVisible.js
// Version: 0.0.1
// Event: Lens Initialized
// Description: Apply Camera RenderLayer To Camera's Children

//@ui {"widget":"label", "label":"Apply Camera RenderLayer To Camera's Children"}

// @input Component.Camera camera

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

    setLayer(meshComps, script.camera);
    setLayer(textComps, script.camera);
}

function onUpdate() {
    if (global.deviceInfoSystem.isEditor() && isInit) {
        setLayer(meshComps, script.camera);
        setLayer(textComps, script.camera);
    }
}

function setLayer(objectsToBeSetLayer, cameraToGetLayer) {
    for (var i = 0; i < objectsToBeSetLayer.length; i++) {
        objectsToBeSetLayer[i].getSceneObject().layer = cameraToGetLayer.renderLayer;
    }
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
    if (!script.camera) {
        print("ERROR: Make sure a Camera exist and set it to the script.");
        return false;
    }

    var cameraObject = script.camera.getSceneObject();
    var childCount = cameraObject.getChildrenCount();

    for (var i = 0; i < childCount; i++) {
        objectToSetLayer[i] = cameraObject.getChild(i);
    }

    return true;
}

var startEvent = script.createEvent("OnStartEvent");
startEvent.bind(onStart);

var updateEvent = script.createEvent("UpdateEvent");
updateEvent.bind(onUpdate);