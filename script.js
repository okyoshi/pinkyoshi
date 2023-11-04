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



fetch('https://api.rss2json.com/v1/api.json?rss_url=https://rss.nytimes.com/services/xml/rss/nyt/World.xml')
    .then(response => response.json())
    .then(data => {
        let items = data.items;
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






fetch('https://api.rss2json.com/v1/api.json?rss_url=http://rss.cnn.com/rss/edition_world.rss')
    .then(response => response.json())
    .then(data => {
        let items = data.items;
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
    "Dad, as intelligence goes up, happiness often goes down. In fact, I made a graph."
];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * simpsonsQuotes.length);
    return `"${simpsonsQuotes[randomIndex]}"`;
}

// Display the random quote
document.getElementById("quote").innerText = getRandomQuote();
