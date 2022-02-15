// MatchEnabledDebug.js
// Version: 0.0.1
// Event: Lens Initialized
// Description: Get the enable status of the target and apply it to follower object
// this script is only running in Lens Studio to help you with better workflow

// @input SceneObject followerObject
// @input SceneObject targetObject

function onUpdate() {
    if (!global.deviceInfoSystem.isEditor()) {
        return;
    }
    if (script.followerObject && script.targetObject) {
        script.followerObject.enabled = script.targetObject.enabled;
    }
}


var updateEvent = script.createEvent("UpdateEvent");
updateEvent.bind(onUpdate);