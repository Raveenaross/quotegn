var quotes = [
    "The struggle you're in today is developing the strength you need for tomorrow",
    "It's not a pretty picture,but there are reasons for hope",
    "Creativity is intelligence having fun",
    "Remember to look up at the STARS and not down at your feet",
    "Love yourself; Believe yourself; Hope is always at your back",
    "Talent is flame.Genius is fire",
    "The Science of today is the technology of Tomorrow"
];
let quoteText = document.querySelector('.quote_text');
function generate() {
    var index = Math.floor(Math.random() * quotes.length);
    var quote = quotes[index];
    quoteText.innerHTML = '"' + quote + '"';
}

