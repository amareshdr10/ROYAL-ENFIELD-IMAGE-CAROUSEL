let timeoutId; // Variable to store the timeout ID

function changeImage(newImageSrc, variantName) {
    const mainImage = document.getElementById('main-bike-image');
    const titleElement = document.querySelector('.Ex-india-price .color-title'); // Target the h4 for the variant name

    // Clear any ongoing fade-out transitions to avoid conflict
    if (timeoutId) {
        clearTimeout(timeoutId);
    }

    // Step 1: Fade out the current image
    mainImage.style.opacity = '0';

    // Step 2: After the fade-out completes, change the image and update the variant name
    timeoutId = setTimeout(() => {
        // Change the image source (with a unique timestamp to force reload)
        mainImage.src = `${newImageSrc}?t=${new Date().getTime()}`;
        
        // Update the variant name in h4
        titleElement.textContent = variantName;

        // Step 3: Fade in the new image
        mainImage.style.opacity = '1';
    }, 500); // Delay should match the fade-out duration (0.5s)
}
