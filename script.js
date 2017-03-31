var quotes = [
  ['<span class="lato">Traveler, there is no path. The path is made by walking.</span> <br><br>', ' - Antonio Machado'],
  ['<span class="lato">Wish in one hand and crap in the other. <br>Guess which one fills up first.</span> <br>', '- My grandmother <br> (it sounds more profound in Polish. Also, she didn\'t say "crap.")'],
  ['<span class="lato">There is no try. There is only do. </span><br><br>', '-Yoda'],
  ['<span class="lato">Dude, sucking at something is the first step in becoming sort of good at something.</span> <br><br>', '- Jake the Dog, Adventure Time'],
  ['<span class="lato">Nothing real can defeat us. Nothing unreal exists.</span> <br><br>', '- B. Banzai'],
  ['<span class="lato2">If you can\'t take a little bloody nose, maybe you oughtta go back home and crawl under your bed. It\’s not safe out here. It is wondrous, with treasures to satiate desires both subtle and gross, but it\’s not for the timid. </span><br><br>', '— Q, Star Trek: The Next Generation'],
  ['<span class="lato">Nil desperandum, my dear lady. Across the desert lies the promised land... </span><br> <br>', '- Willy Wonka'],
  ['<span class="lato">The Dude abides.</span> <br><br>', '- The Big Lebowski'],
  ['<span class="lato2">In Italy for 30 years under the Borgias they had warfare, terror, murder, and bloodshed, but they produced Michelangelo, Leonardo da Vinci, and the Renaissance. In Switzerland they had brotherly love – 500 years of democracy and peace, and what did that produce? <br>The cuckoo clock. </span><br><br>', '– Harry Lime, The Third Man'],
  ['<span class="lato">Fall down seven times, stand up eight. </span><br><br>', '- Daruma, Way of the Warrior']

]
var textToTweet = null;
function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber][0];
  document.getElementById('author').innerHTML = quotes[randomNumber][1];
  document.getElementById('inspire').innerHTML = 'Inspire me again!';
  textToTweet = quotes[randomNumber][0];
}

function tweetText() {
  if(textToTweet.length > 140){
    alert ('Sorry, this quote is too long to tweet!');
  } else {
    var tweetQuote = document.getElementById('quoteDisplay').innerText + document.getElementById('author').innerText;
    var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(tweetQuote);
     window.open(twtLink,'_blank');
      }
}
