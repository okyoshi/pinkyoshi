document.addEventListener("DOMContentLoaded", function() {
    const visitorCountElement = document.getElementById("visitorCount");
    let visitorCount = localStorage.getItem("visitorCount") || 0;
    visitorCount++;
    localStorage.setItem("visitorCount", visitorCount);
    visitorCountElement.textContent = visitorCount;
});




function decodeHtml(html) {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
.then(response => response.json())
.then(data => {
    // Extract, format to 2 decimal places, and display the Bitcoin price in USD, GBP, and EUR
    let usdPrice = decodeHtml(data.bpi.USD.symbol) + parseFloat(data.bpi.USD.rate.replace(/,/g, '')).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    let gbpPrice = decodeHtml(data.bpi.GBP.symbol) + parseFloat(data.bpi.GBP.rate.replace(/,/g, '')).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    let eurPrice = decodeHtml(data.bpi.EUR.symbol) + parseFloat(data.bpi.EUR.rate.replace(/,/g, '')).toLocaleString('en-EU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    document.getElementById('btc-usd').innerText = usdPrice;
    document.getElementById('btc-gbp').innerText = gbpPrice;
    document.getElementById('btc-eur').innerText = eurPrice;
})
.catch(error => {
    console.error('Error fetching Bitcoin price:', error);
});



fetch('https://api.rss2json.com/v1/api.json?rss_url=https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml')
    .then(response => response.json())
    .then(data => { 
        let items = data.items;

        // Sort items by date in descending order (newest first)
        items.sort((a, b) => {
            let dateA = new Date(a.pubDate);
            let dateB = new Date(b.pubDate);
            return dateB - dateA;
        });

        let targetElement = document.getElementById('nyt-links');
        targetElement.innerHTML = ''; // clear the placeholder

        // Ensure there are at least five items; if not, adjust the count
        let count = Math.min(items.length, 5);

        for (let i = 0; i < count; i++) {
            let headline = items[i].title;
            let url = items[i].link;

            // Extract the publication date and convert it to a Date object
            let pubDate = items[i].pubDate;
            let dateObj = new Date(pubDate);

            // Adjust for UTC+1 timezone (3600000 milliseconds = 1 hour)
            dateObj.setTime(dateObj.getTime() + 3600000);

            // Format the time as HH:mm
            let hours = dateObj.getUTCHours().toString().padStart(2, '0');
            let minutes = dateObj.getUTCMinutes().toString().padStart(2, '0');
            let formattedTime = `${hours}:${minutes}`;

            // Append the time to the headline
            headline += ` - ${formattedTime}`;

            // Create a new anchor element for each headline
            let linkElem = document.createElement('a');
            linkElem.href = url;
            linkElem.target = '_blank';
            linkElem.textContent = headline;
            linkElem.classList.add('nyt-article-link');  // Optional: for styling

            // Create a new div to hold the anchor and append to the target element
            let divElem = document.createElement('div');
            divElem.appendChild(linkElem);
            targetElement.appendChild(divElem);
        }
    })
    .catch(error => {
        console.error('Error fetching headlines:', error);
    });


fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.autosport.com/rss/f1/news/')
    .then(response => response.json())
    .then(data => { 
        let items = data.items;

        // Sort items by date in descending order (newest first)
        items.sort((a, b) => {
            let dateA = new Date(a.pubDate);
            let dateB = new Date(b.pubDate);
            return dateB - dateA;
        });

        let targetElement = document.getElementById('aut-links');
        targetElement.innerHTML = ''; // clear the placeholder

        // Ensure there are at least five items; if not, adjust the count
        let count = Math.min(items.length, 5);

        for (let i = 0; i < count; i++) {
            let headline = items[i].title;
            let url = items[i].link;

            // Extract the publication date and convert it to a Date object
            let pubDate = items[i].pubDate;
            let dateObj = new Date(pubDate);

            // Adjust for UTC+1 timezone (3600000 milliseconds = 1 hour)
            dateObj.setTime(dateObj.getTime() + 3600000);

            // Format the time as HH:mm
            let hours = dateObj.getUTCHours().toString().padStart(2, '0');
            let minutes = dateObj.getUTCMinutes().toString().padStart(2, '0');
            let formattedTime = `${hours}:${minutes}`;

            // Append the time to the headline
            headline += ` - ${formattedTime}`;

            // Create a new anchor element for each headline
            let linkElem = document.createElement('a');
            linkElem.href = url;
            linkElem.target = '_blank';
            linkElem.textContent = headline;
            linkElem.classList.add('nyt-article-link');  // Optional: for styling

            // Create a new div to hold the anchor and append to the target element
            let divElem = document.createElement('div');
            divElem.appendChild(linkElem);
            targetElement.appendChild(divElem);
        }
    })
    .catch(error => {
        console.error('Error fetching headlines:', error);
    });

    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://techcrunch.com/feed/')
    .then(response => response.json())
    .then(data => { 
        let items = data.items;

        // Sort items by date in descending order (newest first)
        items.sort((a, b) => {
            let dateA = new Date(a.pubDate);
            let dateB = new Date(b.pubDate);
            return dateB - dateA;
        });

        let targetElement = document.getElementById('tec-links');
        targetElement.innerHTML = ''; // clear the placeholder

        // Ensure there are at least five items; if not, adjust the count
        let count = Math.min(items.length, 5);

        for (let i = 0; i < count; i++) {
            let headline = items[i].title;
            let url = items[i].link;

            // Extract the publication date and convert it to a Date object
            let pubDate = items[i].pubDate;
            let dateObj = new Date(pubDate);

            // Adjust for UTC+1 timezone (3600000 milliseconds = 1 hour)
            dateObj.setTime(dateObj.getTime() + 3600000);

            // Format the time as HH:mm
            let hours = dateObj.getUTCHours().toString().padStart(2, '0');
            let minutes = dateObj.getUTCMinutes().toString().padStart(2, '0');
            let formattedTime = `${hours}:${minutes}`;

            // Append the time to the headline
            headline += ` - ${formattedTime}`;

            // Create a new anchor element for each headline
            let linkElem = document.createElement('a');
            linkElem.href = url;
            linkElem.target = '_blank';
            linkElem.textContent = headline;
            linkElem.classList.add('nyt-article-link');  // Optional: for styling

            // Create a new div to hold the anchor and append to the target element
            let divElem = document.createElement('div');
            divElem.appendChild(linkElem);
            targetElement.appendChild(divElem);
        }
    })
    .catch(error => {
        console.error('Error fetching headlines:', error);
    });

    fetch('https://api.rss2json.com/v1/api.json?rss_url=http://rss.cnn.com/rss/edition.rss')
    .then(response => response.json())
    .then(data => { 
        let items = data.items;

        // Sort items by date in descending order (newest first)
        items.sort((a, b) => {
            let dateA = new Date(a.pubDate);
            let dateB = new Date(b.pubDate);
            return dateB - dateA;
        });

        let targetElement = document.getElementById('cnn-links');
        targetElement.innerHTML = ''; // clear the placeholder

        // Ensure there are at least five items; if not, adjust the count
        let count = Math.min(items.length, 5);

        for (let i = 0; i < count; i++) {
            let headline = items[i].title;
            let url = items[i].link;

            // Extract the publication date and convert it to a Date object
            let pubDate = items[i].pubDate;
            let dateObj = new Date(pubDate);

            // Adjust for UTC+1 timezone (3600000 milliseconds = 1 hour)
            dateObj.setTime(dateObj.getTime() + 3600000);

            // Format the time as HH:mm
            let hours = dateObj.getUTCHours().toString().padStart(2, '0');
            let minutes = dateObj.getUTCMinutes().toString().padStart(2, '0');
            let formattedTime = `${hours}:${minutes}`;

            // Append the time to the headline
            headline += ` - ${formattedTime}`;

            // Create a new anchor element for each headline
            let linkElem = document.createElement('a');
            linkElem.href = url;
            linkElem.target = '_blank';
            linkElem.textContent = headline;
            linkElem.classList.add('nyt-article-link');  // Optional: for styling

            // Create a new div to hold the anchor and append to the target element
            let divElem = document.createElement('div');
            divElem.appendChild(linkElem);
            targetElement.appendChild(divElem);
        }
    })
    .catch(error => {
        console.error('Error fetching headlines:', error);
    });

    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.theverge.com/rss/index.xml')
    .then(response => response.json())
    .then(data => { 
        let items = data.items;

        // Sort items by date in descending order (newest first)
        items.sort((a, b) => {
            let dateA = new Date(a.pubDate);
            let dateB = new Date(b.pubDate);
            return dateB - dateA;
        });

        let targetElement = document.getElementById('ver-links');
        targetElement.innerHTML = ''; // clear the placeholder

        // Ensure there are at least five items; if not, adjust the count
        let count = Math.min(items.length, 5);

        for (let i = 0; i < count; i++) {
            let headline = items[i].title;
            let url = items[i].link;

            // Extract the publication date and convert it to a Date object
            let pubDate = items[i].pubDate;
            let dateObj = new Date(pubDate);

            // Adjust for UTC+1 timezone (3600000 milliseconds = 1 hour)
            dateObj.setTime(dateObj.getTime() + 3600000);

            // Format the time as HH:mm
            let hours = dateObj.getUTCHours().toString().padStart(2, '0');
            let minutes = dateObj.getUTCMinutes().toString().padStart(2, '0');
            let formattedTime = `${hours}:${minutes}`;

            // Append the time to the headline
            headline += ` - ${formattedTime}`;

            // Create a new anchor element for each headline
            let linkElem = document.createElement('a');
            linkElem.href = url;
            linkElem.target = '_blank';
            linkElem.textContent = headline;
            linkElem.classList.add('nyt-article-link');  // Optional: for styling

            // Create a new div to hold the anchor and append to the target element
            let divElem = document.createElement('div');
            divElem.appendChild(linkElem);
            targetElement.appendChild(divElem);
        }
    })
    .catch(error => {
        console.error('Error fetching headlines:', error);
    });


// Sample quotes from The Simpsons
const simpsonsQuotes = [
    "Remember, Dad, all glory is fleeting.",
"Kids, just because I don’t care doesn’t mean I’m not listening.",
"Don’t you see? Getting what you want all the time will ultimately leave you unfulfilled and joyless.",
"I believe that children are our future. Unless we stop them now.",
"I’ve learned that life is one crushing defeat after another until you just wish Flanders was dead.",
"It’s so simple to be wise—just think of something stupid to say and then don’t say it.",
"Our differences are only skin deep, but our sames go down to the bone.",
"The problem in the world today is communication—too much communication.",
"Maybe there is no moral. Maybe it’s just a bunch of stuff that happened.",
"I can’t believe it! Reading and writing actually paid off!",
"I never apologize—I’m sorry but that’s the way I am.",
"Fame was like a drug, but what was even more like a drug were the drugs.",
"Dad, just for once don’t you want to try something new?",
"I’ve said it before and I’ll say it again: democracy simply doesn’t work.",
"Kids are great. You can teach them to hate what you hate and, with the Internet and all, they practically raise themselves.",
"Your ideas are intriguing to me, and I wish to subscribe to your newsletter.",
"All right, brain. You don’t like me and I don’t like you, but let’s just do this, and I can get back to killing you with beer.",
"I’m a white male, age 18 to 49. Everyone listens to me, no matter how dumb my suggestions are.",
"There’s only one thing to do at a moment like this: strut!",
"I guess some people never change. Or, they quickly change and then quickly change back.",
"When will I learn? The answer to life’s problems aren’t at the bottom of a bottle, they’re on TV!",
"Son, if you really want something in this life, you have to work for it. Now quiet! They’re about to announce the lottery numbers.",
"Weaseling out of things is important to learn; it’s what separates us from the animals—except the weasel.",
"A gun is not a weapon, it’s a tool, like a hammer or a screwdriver or an alligator.",
"Facts are meaningless. You can use facts to prove anything that’s even remotely true.",
"I want to share something with you: the three little sentences that will get you through life. Number one: cover for me. Number two: oh, good idea, boss! Number three: it was like that when I got here.",
"History is written by the winners, Dad.",
"I thought it was written by losers.",
"Son, I know this seems like the biggest disappointment of your life, but trust me, there are going to be so many more. What you’ve got to remember is—oh my God, 13 men in the field! Review it, review it, review it! Yes! Play stands!",
"That’s very nice, Dad, but it’s wrong for you to reward violent, competitive behavior. However, I will sit upfront with you if it’s a fatherly gesture of love.",
"Marge, you’re my wife of 10 years and I love you, but I must observe the teachings of this man I just met tonight.",
"Homer, I like to think that I’m a patient, tolerant woman and that there was no line that you could cross that would make me stop loving you. But last night you didn’t just cross that line, you threw up on it!",
"It takes two to lie; one to lie, and one to listen.",
"I’m not normally a praying man, but if you’re up there, please save me, Superman.",
"Well, I hope you’ve learned your lesson, Lisa: never help anyone.",
"To alcohol! The cause of, and solution to, all of life’s problems.",
"Lisa, if you don’t like your job you don’t strike. You just go in every day and do it really half-assed. That’s the American way.",
"Kids, you tried your best and you failed miserably. The lesson is, never try.",
"As soon as you stop this car, I’m gonna hug you, and kiss you, and then I’ll never be able to let you go!",
"Marriage is like a coffin and each kid is another nail.",
"If God didn’t want me to eat chicken in church, then he would have made gluttony a sin.",
"Between your genius and my nothing we make a great team, come on give me a hug!",
"Look Moe, the least you can let me do is anything I want.",
"If anyone asks you something you don’t understand, just say protons.",
"Just sit through this NRA meeting Marge, and if you still don’t think guns are great then we’ll argue some more.",
"No, no honey, I love everything you force me to do.",
"A boy without mischief is like a bowling ball without a liquid center.",
"You’re going to stay your current age for the rest of your lives.",
"I’m so embarrassed I wish there was a hole I could just crawl into and die.",
"I guess one person can make a difference. But most of the time, they probably shouldn’t.",
"If you raised three children who can knock out and hogtie a perfect stranger you must be doing something right.",
"You know the courts might not work anymore, but as long as everyone is videotaping everyone else justice will be done!",
"Halloween is a very strange holiday. Personally, I don’t understand it. Kids worshipping ghosts, pretending to be devils.",
"I can’t promise I’ll try, but I’ll try to try.",
"Hey, cool, I’m dead.",
"Everything changes when you get to the big one-o. Your legs start to go, candy doesn’t taste as good anymore.",
"You’re asking the wrong guy, Milhouse, you’re asking the wrong guy.",
"She’s like a Milk Dud, Lis. Sweet on the outside, poison on the inside.",
"That’s not fair! I’m 10 times the Krusty fan you are. I even have the Krusty Home Pregnancy test!",
"Prayer. The last refuge of a scoundrel.",
"Mom, look, I found something more fun than complaining!",
"Does it make you feel superior to tear down people’s dreams?",
"Come on, Bart. Cartoons don’t have to be 100% realistic.",
"If you take away our cartoons, we’ll grow up without a sense of humor and be robots.",
"I think you need Skinner, Bart. Everybody needs a nemesis.",
"Dad, as intelligence goes up, happiness often goes down. In fact, I made a graph.",
"I tried the coat hanger again. I don’t understand why we can only try ideas once.",
"Don’t you think we ought to attack the roots of our social problems instead of jamming people into overcrowded prisons?",
"My brother is using worms. But I, who feel the tranquility far outweighs the actual catching of fish, am using nothing.",
"Bart, the only reason to apologize is if you look deep down inside yourself and you find a spot, something you wish wasn’t there, because you feel bad you hurt your sister’s feelings.",
"They want sentiment? I’ll pump ’em so full of sap they’ll have to blow their nose with a pancake!",
"I always knew someday Mom would violently rise up and cast off the shackles of our male oppressors.",
"I learned that beneath my goody-two-shoes lies some very dark socks.",
"It’s not funny, Bart. Millions of girls will grow up thinking that this is the right way to act—that they can never be more than vacuous ninnies whose only goal is to look pretty, land a rich husband, and spend all day on the phone with their equally vacuous friends talking about how damn terrific it is to look pretty and have a rich husband!",
"There are some things we don’t want to know. Important things.",
"Spend less time on your back and more time on your knees.",
"Well I can’t say for sure, but as a Christian, I assume the worst.",
"Call me Delta Airlines, because I can’t handle all your extra baggage.",
"That sounds salty, but you seem sweet. I’m going to call you kettle corn.",
"I’ve done everything the Bible says, even the stuff that contradicts the other stuff!",
"Homer Simpson, I show you pity, and how do you repay me? With a kick in the kididdlehopper!",
"Just tell them that God wants them to ignore everything in their bodies that God is making happen.",
"Can I make my famous mimosa? A little sparkling water in a glass full of regular water?",
"Sorry is not just the most exciting board game ever devised, it’s a word I need to hear from you!",
"Bless the grocer for this wonderful meat, the middleman who jacked up the price, and let’s not forget the humane but determined boys at the slaughterhouse.",
"This family has had its differences and we’ve squabbled, but we’ve never had knife fights before. And I blame this house.",
"What if you pretended that this couch was a bar? Then you could spend more nights at home with us. Huh?",
"Lisa, you’re learning many lessons tonight. And one of them is to always give your mother the benefit of the doubt.",
"The key to parenting is don’t overthink it. Because overthinking leads to—what we’re talking about?",
"These are Homer’s friends and family. They don’t want him dead. They just want him to suffer.",
"I think the saddest day of my life was when I realized I could beat my dad at most things, and Bart experienced that at the age of four.",
"I’m sorry, Marge, but sometimes I think we’re the worst family in town.",
"Operator! Give me the number for 911!",
"Me, fail English? That’s unpossible.",
"You can have all the money in the world, but there’s one thing you will never have—a dinosaur.",
"I’ll make the money by selling one of my livers—I can get by with one.",
"Oh, I have three kids and no money. Why can’t I have no kids and three money?",
"For once, maybe someone will call me ‘sir’ without adding, ‘you’re making a scene.’",
"Stupidity got us into this mess, and stupidity will get us out.",
"I am so smart! I am so smart! S-M-R-T, I mean S-M-A-R-T!",
"Stupid bus that can’t even go to the stupid place it’s supposed to stupid go.",
"Volunteering is for suckers. Did you know that volunteers don’t even get paid for the stuff they do?",
"I think women and seamen don’t mix.",
"Even communism works—in theory.",
"Why do my actions have consequences?",
"You don’t win friends with salad.",
"Lord help me, I’m just not that bright.",
"If he’s so smart, how come he’s dead?",
"Roads are just a suggestion, Marge, just like pants.",
"Don’t eat me. I have a wife and kids. Eat them.",
"Shoplifting is a victimless crime. Like punching someone in the dark."
];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * simpsonsQuotes.length);
    return `"${simpsonsQuotes[randomIndex]}"`;
}

// Display the random quote
document.getElementById("quote").innerText = getRandomQuote();




function fetchAppleStockPrice() {
    // Using the Financial Modeling Prep API endpoint for Apple stock price
    fetch('https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=1UobQJMMxubVCDiX0BDz7ei0DpLIX5Hq    ')
      .then(response => response.json())
      .then(data => {
        const stockPrice = data[0].price;
        document.getElementById('aapl').textContent = `$${stockPrice.toLocaleString()}`;
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        document.getElementById('aapl').textContent = 'Failed to load price';
      });
  }

  // Fetch the Apple stock price on page load
  fetchAppleStockPrice();

  // Optional: Set an interval to refresh the price every minute (60000 milliseconds)


  function fetchDisneyStockPrice() {
    // Using the Financial Modeling Prep API endpoint for Apple stock price
    fetch('https://financialmodelingprep.com/api/v3/quote-short/DIS?apikey=1UobQJMMxubVCDiX0BDz7ei0DpLIX5Hq    ')
      .then(response => response.json())
      .then(data => {
        const stockPrice = data[0].price;
        document.getElementById('dis').textContent = `$${stockPrice.toLocaleString()}`;
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        document.getElementById('dis').textContent = 'Failed to load price';
      });
  }

  // Fetch the Apple stock price on page load
  fetchDisneyStockPrice();

  // Optional: Set an interval to refresh the price every minute (60000 milliseconds)





    function fetchTeslaStockPrice() {
    // Using the Financial Modeling Prep API endpoint for Apple stock price
    fetch('https://financialmodelingprep.com/api/v3/quote-short/TSLA?apikey=1UobQJMMxubVCDiX0BDz7ei0DpLIX5Hq    ')
      .then(response => response.json())
      .then(data => {
        const stockPrice = data[0].price;
        document.getElementById('tsla').textContent = `$${stockPrice.toLocaleString()}`;
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        document.getElementById('tsla').textContent = 'Failed to load price';
      });
  }

  // Fetch the Apple stock price on page load
  fetchTeslaStockPrice();

