document.addEventListener("DOMContentLoaded", function() {
    function saveQuote() {
        const quote = quoteContainer.innerText;
        const author = authorContainer.innerText;

        // Retrieve existing saved quotes from localStorage
        let savedQuotes = JSON.parse(localStorage.getItem("savedQuotes")) || [];

        // Add the current quote to the array of saved quotes
        savedQuotes.push({ quote: quote, author: author });

        // Convert savedQuotes to JSON string
        const jsonData = JSON.stringify(savedQuotes);

        // Save JSON data to localStorage
        localStorage.setItem("savedQuotes", jsonData);

        alert("Quote saved successfully!");
    }

    function loadSavedQuotes() {
        window.location.href = './savefile/savefile.html';
    }

    // Define getColor function
    function getColor() { 
        return "hsl(" + 360 * Math.random() + ',' +
                   (25 + 70 * Math.random()) + '%,' + 
                   (85 + 10 * Math.random()) + '%)';
    }

    // Define loadQuote function
    function loadQuote() {
        const clickedQuote = localStorage.getItem("clickedQuote");
        const clickedAuthor = localStorage.getItem("clickedAuthor");

        // If there is a clicked quote in localStorage, display it
        if (clickedQuote && clickedAuthor) {
            quoteContainer.innerText = clickedQuote;
            authorContainer.innerText = clickedAuthor;
            localStorage.removeItem("clickedQuote");
            localStorage.removeItem("clickedAuthor");
        } else {
            // Otherwise, load a random quote
            fetch('index.json')
            .then(response => response.json())
            .then(json => {
                let num = Math.floor(Math.random() * json.length);
                let quote = json[num].q;
                let author = json[num].a;
                quoteContainer.innerText = quote;
                authorContainer.innerText = author;
            })
            .catch(error => console.error('Error fetching quotes:', error));
        }
    }

    // Get DOM elements
    const quoteContainer = document.getElementById("quote");
    const authorContainer = document.getElementById("author");
    const background = document.getElementById("background");
    const reload = document.getElementById("reload");
    const save = document.getElementById("save");
    const savefile = document.getElementById("savefile");

    // Load quote and set background color on DOMContentLoaded
    loadQuote();
    background.style.backgroundColor = getColor();

    // Attach click event listener to reload button
    reload.addEventListener("click", function() {
        // Call loadQuote function when reload button is clicked
        loadQuote();
        background.style.backgroundColor = getColor();
    });

    save.addEventListener("click", function() {
        // Call saveQuote function when save button is clicked
        saveQuote();
    });

    savefile.addEventListener("click", function() {
        // Call loadSavedQuotes function when savefile button is clicked
        loadSavedQuotes();
    });
});
