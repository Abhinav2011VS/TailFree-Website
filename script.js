// Scroll-triggered Typing Animation
window.addEventListener('scroll', () => {
    const typingSection = document.querySelector('.typing-effect');
    const typingText = document.querySelector('.typing-text');
    
    const sectionPosition = typingSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (sectionPosition < screenPosition) {
        typingText.classList.add('start-typing');
        document.querySelector('.typing-description').style.animationPlayState = 'running'; 
    }
});
