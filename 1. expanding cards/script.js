const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveAttributes();
        panel.classList.add('active');
    })
})

function removeActiveAttributes() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}