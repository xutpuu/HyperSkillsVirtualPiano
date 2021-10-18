function addListener(key){
    document.addEventListener("keydown", function(event) {
        if (event.code === key) {
            let audio = document.createElement("AUDIO");
            audio.src = "white_keys/" + event.key.toUpperCase() + ".mp3";
            audio.play();
            console.log("The '" + event.key.toUpperCase() + "' key is pressed.");
        }
    });
}

let keys = ["KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyW","KeyE","KeyT","KeyY","KeyU"]
for (const key in keys){
    addListener(keys[key]);
}

