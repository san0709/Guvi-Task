document.addEventListener('DOMContentLoaded', () => {
    const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?limit=18';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3faeeb4f3amsh936eb5c15b884eep1db07djsn70faf35e213c',
            'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
        }
    };

    const displayQuote = ({ chapter_number, name_meaning, chapter_summary }) => {
        const paraElement = document.createElement("p");
        paraElement.innerHTML = `<strong>${chapter_number} : ${name_meaning}</strong>:${chapter_summary}`;

        const quoteContainer = document.getElementById("quoteContainer");
        quoteContainer.innerHTML = ""; // Clears the existing content
        quoteContainer.append(paraElement);
    };

    const getRandomQuote = async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json(); // Parse the JSON response
            const randomIndex = Math.floor(Math.random() * result.length);
            const randomChapter = result[randomIndex];
            displayQuote(randomChapter);
        } catch (error) {
            console.error(error);
        }
    };

    const nextButton = document.getElementById('nextButton');
    nextButton.addEventListener('click', getRandomQuote);
});
