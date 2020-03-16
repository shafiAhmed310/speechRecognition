window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.addEventListener('result', (e) => {

    let transcript = [...e.results[0]].map(result => result[0])
    .map(result => result.transcript ).join("");

    if(e.results[0].isFinal){
        p = document.createElement('p');
        template = document.getElementById('template');
        template.appendChild(p).innerHtml = transcript;
    }
    console.log(transcript);
    
});
recognition.addEventListener('end', recognition.start)

recognition.start();