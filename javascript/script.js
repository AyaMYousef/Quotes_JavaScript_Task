
var lastRandom = -1;

function getQuote() {

    var element = document.getElementById('quote');
    var quote = listOfQuotes();
    element.innerHTML = quote;


}


function listOfQuotes() {

    var list = ["Be yourself; everyone else is already taken.",
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "A room without books is like a body without a soul.",
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        "Be the change that you wish to see in the world.",
        "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        "Don’t walk in front of me… I may not followDon’t walk behind me… I may not leadWalk beside me… just be my friend",
        "If you tell the truth, you don't have to remember anything.",
        "Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself . . .",
        "A friend is someone who knows all about you and still loves you.",
        "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."
    ]
    var random = getRandom(list.length)
    random = parseInt(random);
    console.log(list[random])
    while (random === lastRandom) {
        getRandom(list.length);
    }
    lastRandom = random;
    return list[random];
}

function getRandom(max) {
    console.log('getRandom', parseInt(Math.floor(Math.random() * max)));
    return Math.floor(Math.random() * max);
}