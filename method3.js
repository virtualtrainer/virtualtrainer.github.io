
const audioCtx = new AudioContext();
const audio = new Audio("https://nodetts.herokuapp.com/?text=Hello Myself Aco, How can I help you?");
const source = audioCtx.createMediaElementSource(audio);
source.connect(audioCtx.destination);
audio.play();
