document.addEventListener("DOMContentLoaded", function(){
    const main = document.getElementById("sprawl");
    const clear = document.getElementById("clear");
    const back = document.getElementById("back");

    // Fetch the saved quotes from localStorage
    const savedQuotes = JSON.parse(localStorage.getItem("savedQuotes")) || [];

    // Display saved quotes
    savedQuotes.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `Author: ${item.author}`;
        main.appendChild(div);

    div.addEventListener("click", function(){
        localStorage.setItem("clickedAuthor", item.author);
        localStorage.setItem("clickedQuote", item.quote);
        window.location.href = '../index.html';
    })
    });
    clear.addEventListener("click", function(){
        localStorage.removeItem("savedQuotes");
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }
        alert("Saved quotes cleared successfully!");
    })
    window.addEventListener('popstate', function(event) {
        window.location.href = '../index.html';
    });
    
    back.addEventListener("click", function(){
        window.location.href = '../index.html';
    })
});