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


fetch('https://rss.nytimes.com/services/xml/rss/nyt/World.xml')
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        let items = data.getElementsByTagName('item');
        let targetElement = document.getElementById('nyt-links');
        targetElement.innerHTML = ''; // clear the placeholder

        // Ensure there are at least three items; if not, adjust the count
        let count = Math.min(items.length, 5);

        for (let i = 0; i < count; i++) {
            let headline = items[i].getElementsByTagName('title')[0].textContent;
            let url = items[i].getElementsByTagName('link')[0].textContent;

            // Extract the publication date and convert it to a Date object
            let pubDate = items[i].getElementsByTagName('pubDate')[0].textContent;
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
        console.error('Error fetching NYT headlines:', error);
    });


fetch('https://cors-anywhere.herokuapp.com/https://www.autosport.com/rss/f1/news/')
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        let items = data.getElementsByTagName('item');
        let targetElement = document.getElementById('aut-links');
        targetElement.innerHTML = ''; // clear the placeholder

        // Ensure there are at least three items; if not, adjust the count
        let count = Math.min(items.length, 5);

        for (let i = 0; i < count; i++) {
            let headline = items[i].getElementsByTagName('title')[0].textContent;
            let url = items[i].getElementsByTagName('link')[0].textContent;

            // Extract the publication date and convert it to a Date object
            let pubDate = items[i].getElementsByTagName('pubDate')[0].textContent;
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
        console.error('Error fetching NYT headlines:', error);
    });


    fetch('https://cors-anywhere.herokuapp.com/https://techcrunch.com/feed/')
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        let items = data.getElementsByTagName('item');
        let targetElement = document.getElementById('tec-links');
        targetElement.innerHTML = ''; // clear the placeholder

        // Ensure there are at least three items; if not, adjust the count
        let count = Math.min(items.length, 5);

        for (let i = 0; i < count; i++) {
            let headline = items[i].getElementsByTagName('title')[0].textContent;
            let url = items[i].getElementsByTagName('link')[0].textContent;

            // Extract the publication date and convert it to a Date object
            let pubDate = items[i].getElementsByTagName('pubDate')[0].textContent;
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
        console.error('Error fetching NYT headlines:', error);
    });




fetch('https://api.rss2json.com/v1/api.json?rss_url=http://rss.cnn.com/rss/cnn_latest.rss')
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



