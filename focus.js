// ==UserScript==
// @name Focus
// @match https*://reddit.com
// @match https*://www.reddit.com
// @run-at document-start
// ==/UserScript==

  var gradientArray = [
    'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
    'linear-gradient(to right, #780206, #061161)',
    'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
    'linear-gradient(180deg, #52ACFF 25%, #FFE32C 100%)',
    'linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)',
    'linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)',
    'linear-gradient(132deg, #F4D03F 0%, #16A085 100%)',
    'linear-gradient(132deg, #F4D03F 0%, #16A085 100%)',
    'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)'
  ];

  var quoteArray = [
    "Opportunity is missed by most people because it is dressed in overalls and looks like work. – Thomas Edison",
    "It seems the harder I work, the more luck I have. – Thomas Jefferson",
    "Hard work spotlights the character of people: some turn up their sleeves, some turn up their noses, and some don’t turn up at all. – Sam Ewing",
    "Nobody’s a natural. You work hard to get good and then work to get better. It’s hard to stay on top. – Paul Coffey",
    "The only place success comes before work is in the dictionary. – Vincent “Vince” Lombardi",
    "It is the working man who is the happy man. It is the idle man who is the miserable man. – Benjamin Franklin",
    "If you are going to achieve excellence in big things, you develop the habit in little matters. Excellence is not an exception, it is a prevailing attitude. – Charles R. Swindoll",
    "The secret of getting ahead is getting started. – Mark Twain",
    "You can’t use up creativity. The more you use, the more you have. – Maya Angelou",
    "Be miserable. Or motivate yourself. Whatever has to be done, it’s always your choice. – Wayne Dyer",
    "Even if you fall on your face, you’re still moving forward. – Victor Kiam",
    "Problems are not stop signs, they are guidelines. – Robert H. Schuller",
    "Opportunity does not knock, it presents itself when you beat down the door. – Kyle Chandler",
    "Act as if what you do makes a difference. It does. – William James",
    "Quality is not an act, it is a habit. – Aristotle",
    "Don’t wait. The time will never be just right. – Napoleon Hill",
    "True happiness involves the full use of one’s power and talents. – John W. Gardner",
    "Small deeds done are better than great deeds planned. – Peter Marshall",
    "Build your own dreams, or someone else will hire you to build theirs.– Farrah Gray",
    "Everything you’ve ever wanted is on the other side of fear. – George Addair",

    "You can always find a distraction if you're looking for one. – Tom Kite",
    "The Internet is a big distraction. – Ray Bradbury",
    "Work is hard. Distractions are plentiful. And time is short. – Adam Hochschild",
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. – Henry Ford",
    "Nothing will work unless you do. – Maya Angelou",
    "The difference between the greats and the legends is their ability to focus for longer periods of time. – Jordan Burroughs"
  ];

  //append motivating elements
  function appendElements() {
    var div = `
      <div class="background" style="position:fixed;height:100vh;width:100vw;z-index:351;left:0;top:0;"></div>
      <div class="inspire-content" style="display: block;text-align: center;padding-top: 50px;text-align: center;z-index:352;font-weight: 900;position: relative;min-height: 1px;padding-right: 15px;padding-left: 15px;">
        <div class="quote-message" style="color: white;font-family: Montserrat, 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 2.5vw;margin-left: 10%;margin-right: 10%; margin-top: 10%;"></div>
      </div>`;
      document.body.innerHTML = div;
  };

  //choose a random quote
  function randomQuote() {
    var quote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
    var quote_div = "<div style='margin: 0 -0.4em;padding: 0.1em 0.4em; border-radius: 0.8em 0.3em; background: transparent; background-image: linear-gradient( to right, rgba(44, 130, 201, 0.1), rgba(44, 130, 201, 0.7) 4%, rgba(44,130, 201, 0.3) );-webkit-box-decoration-break: clone;'>"+quote+"</div>"
    document.getElementsByClassName('quote-message')[0].innerHTML = quote_div;
  };

  //add a gradient to the website until the image loads
  function randomGradient() {
    var gradient = gradientArray[Math.floor(Math.random() * gradientArray.length)];
    document.getElementsByClassName('background')[0].style.background = gradient;
  };

  //when the image loads, append it to the website
  function randomImage() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var img2 = new Image();
    img2.onload = function() {
      document.getElementsByClassName('background')[0].appendChild(this);
    }
    img2.src = 'https://source.unsplash.com/random/'+w+'x'+h+'/?wallpapers';
  };

  appendElements();
  randomGradient();
  randomQuote();
  randomImage();
