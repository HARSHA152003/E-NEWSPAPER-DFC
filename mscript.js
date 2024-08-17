document.addEventListener('DOMContentLoaded', () => {
    const typewriterTextElement = document.querySelector('.typewriter-text');
    const liveDateElement = document.getElementById('live-date');
    const categories = ['Technology', 'Health', 'Entertainment', 'Sports', 'Politics'];
    let categoryIndex = 0;
    let charIndex = 0;
    const typingSpeed = 90;
    const erasingSpeed = 50;
    const pauseBetweenCategories = 1500;

    function type() {
        if (charIndex < categories[categoryIndex].length) {
            typewriterTextElement.textContent += categories[categoryIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, pauseBetweenCategories);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typewriterTextElement.textContent = categories[categoryIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            categoryIndex = (categoryIndex + 1) % categories.length;
            setTimeout(type, typingSpeed + 1000);
        }
    }

    function updateDate() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        liveDateElement.textContent = now.toLocaleDateString(undefined, options);
    }

    setTimeout(type, 500); // Slight delay before starting typing effect
    updateDate(); // Initial call
    setInterval(updateDate, 60000); // Update the date every minute
});
