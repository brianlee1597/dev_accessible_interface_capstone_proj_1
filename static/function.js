jQuery(() => {
    let word = null;
    let hover = null;
    let popup = false;

    $("*").on("focus", (e) => {
        e.preventDefault(); 
        speakText(e.target.id);
    })

    $("*").on("mousedown", (e) => {
        e.preventDefault();
    })

    $(".word").on("mouseenter", function () {
        word = this;
    })

    $(".word").on("mouseleave", function () {
        word = null;
    })

    $("*:not(body)").on("mouseenter", function(e) {
        hover = e.target;
    })

    $("*:not(body)").on("mouseleave", function() {
        hover = null;
    })

    $(document).on("keydown", function(e) {      
        if (e.key === "f" || e.key === "F") {
            if (!word) return;

            $("#popup").html($(word).html());
            $("#popup").css("display", "grid").show();
            $("#popup-background").show();
            popup = true;
        }

        if (e.key === "Escape") {
            $("#popup").hide();
            $("#popup-background").hide();
            popup = false;
        }

        if (e.key === " ") {
            e.preventDefault();
            if (!hover || !$(hover).attr("tabindex")) return;
            speakText(hover.id);
        }
        
        if (e.key === "ArrowLeft" && popup) {
            const english = $("#popup").find(".english").text();
            speakText(null, english, "en-US");
            
            $("#popup").find(".english").css({
                background: "pink",
                color: "white",
            })
            $("#popup").find(".korean").css({
                background: "white",
                color: "black",
            })
        }

        if (e.key === "ArrowRight" && popup) {
            const korean = $("#popup").find(".korean").text();
            speakText(null, korean, "ko-KR");

            $("#popup").find(".korean").css({
                background: "pink",
                color: "white",
            })
            $("#popup").find(".english").css({
                background: "white",
                color: "black",
            })
        }
    });
})

const speakText = (id, text, type) => {
    const msg = new SpeechSynthesisUtterance();

    if (id !== null) {
        msg.text = speech[id];
    
        if (id.includes("korean")) {
            msg.lang = "ko-KR";
        }
    
        if (id === "english-sentence-1") {
            msg.lang = "en-GB";
            msg.pitch = 2;
        }
    } else {
        msg.text = text;
        msg.lang = type;
    }

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(msg);
}

const speech = {
    "main-title": "welcome to our language learning text to speech site",
    "main-options": "this is the introduction and guide section",
    "hover-select": "hover or click over an element to select it for text to speech",
    "space-speech": "press space to play speech",
    "tab-navigate": "press tab to navigate the page",
    "learn-button": "this is the button to take you to learning page, press enter or click on the button to learn korean",

    "learn-title": "welcome to the korean language learning page",
    "learn-intro": "here are some guidelines for the page accessibility",
    "learn-tab-navigate": "Use tab key to navigate from top to bottom",
    "learn-f-pair": "press f while hovering over one of the word pairs below to magnify it",
    "learn-hover": "Hover and press space on any word or sentence to activate text to speech",
    "words": "here are some words and phrases for you",

    "word-1": "first word",
    "english-word-1": "hello",
    "korean-word-1": "안녕하세요",

    "word-2": "word two",
    "english-word-2": "good bye",
    "korean-word-2": "안녕히 가세요",

    "word-3": "word three",
    "english-word-3": "love you",
    "korean-word-3": "사랑해요",

    "word-4": "word four",
    "english-word-4": "hungry",
    "korean-word-4": "배고파요",

    "word-5": "word five",
    "english-word-5": "thirsty",
    "korean-word-5": "목말라요",

    "word-6": "word six",
    "english-word-6": "happy",
    "korean-word-6": "행복해요",

    "sentences": "here are some sentences for you",
    
    "sentence-1": "first sentence",
    "english-sentence-1": "hello, my name is harry potter",
    "korean-sentence-1": "안녕하세요, 제 이름은 해리 포터 에요",

    "sentence-2": "sentence two",
    "english-sentence-2": "It was nice to meet you, good bye",
    "korean-sentence-2": "만나서 반가웠어요, 안녕히 가세요",

    "sentence-3": "sentence three",
    "english-sentence-3": "now that I ate, I am happy",
    "korean-sentence-3": "밥먹고 나니까 행복하다",
}