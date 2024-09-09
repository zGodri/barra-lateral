const buttons = document.querySelectorAll('.filter-button');
const items = document.querySelectorAll('.item');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        
        buttons.forEach(btn => {
            btn.classList.remove('selecionado');
        });

        
        button.classList.add('selecionado');

        
        const target = button.getAttribute('data-target');

        items.forEach(item => {
            if (target === 'all') {
                item.style.display = 'block';
            } else if (item.classList.contains(target)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
