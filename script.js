window.SpeechRecognition = window.SpeechRecognition ||
window.webkitSpeechRecognition;

let recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.start();

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

function onSpeak(e) {
	const trans = Array.from(e.results)
	.map(result=> result[0])
	.map(res => res.transcript)
	.join('');
	p.textContent = trans;
	if(e.results[0].isFinal){
		p = document.createElement('p');
		words.appendChild(p);
	}
	if(trans.includes('единорог')){
		console.log('unicorn');
	}
	// const msg = e.results[0][0].transcript;
	// console.log(trans);
}

recognition.addEventListener('result', onSpeak);
recognition.addEventListener('end', recognition.start);
