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
    "body": "welcome to language learner",
    "nav": "this is the navigation bar section",
    "nav-logo": "navigation logo",
    "nav-learning": "learning page link",
    "nav-quiz": "quiz page link",

    "main": "this is the languager learner home section",
    
}