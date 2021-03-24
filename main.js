var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
text = document.getElementById("textbox");
function start(){
    recognition.start();
    text.innerHTML = "";
    
}
recognition.onresult = function(ev){
    console.log(ev);
    var x = ev.results[0][0].transcript;
    text.innerHTML = x;
    console.log(x);
    if(x == "take my selfie"){
        console.log("taking your selfie");
        speak();
    }
}
function speak(){
    var synth = window.speechSynthesis;
    var y = "taking your selfie in 5 seconds";
    var a = new SpeechSynthesisUtterance(y);
    synth.speak(a);
    Webcam.attach(camera);
}
camera = document.getElementById("camera");
Webcam.set({
    width: 360,
height: 250,
image_format: "png",
png_quality: 90
});