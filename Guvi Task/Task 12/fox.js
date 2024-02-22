document.addEventListener('DOMContentLoaded', () => {
    const apiURL = "https://randomfox.ca/floof/";
    const imageArea = document.getElementById('Fox-Image');
    const overlayElement = document.getElementById("overlay");
    const nextButton = document.getElementById("nextButton");

    const loadFox = ({ image }) => {
        const imgElement = document.createElement("img");
        imgElement.src = image;
        imgElement.className = "object-fit-md-contain border rounded";
        imageArea.innerHTML = ""; // Clears the existing content
        imageArea.append(imgElement);
    };

    const getRandomFox = async () => {
        try {
            // Showing loading Spinner
            overlayElement.style.display = "flex";

            const response = await fetch(apiURL);
            if (!response.ok) {
                throw new Error(`Failed to fetch fox: ${response.status}`);
            }
            const data = await response.json();
            // Hiding loading spinner
            overlayElement.style.display = "none";
            loadFox(data);
        } catch (error) {
            console.error(error);
            // Hide loading spinner in case of an error
            overlayElement.style.display = "none";
        }
    };

    nextButton.addEventListener('click', getRandomFox);

    // loading spinner for 3 seconds, then fetch and display fox image
    setTimeout(() => {
        getRandomFox();
    }, 3000);
});
