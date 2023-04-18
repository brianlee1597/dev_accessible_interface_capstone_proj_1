jQuery(() => {
   $("*").on("focus", (e) => {
        e.preventDefault();

        const id = e.target.id;
        speakText(text[id]);
   })
})

const speakText = (text) => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
}

const text = {
    "main-title": "welcome to our language learning text to speech site",
    "main-options": "this is the introduction and guide section",
    "hover-select": "hover or click to select",
    "space-speech": "press space to play speech",
    "tab-navigate": "press tab to navigate",
    "korean-button": "this is the button to take you to learning page, press enter or click on the button to learn korean",
}