document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state style on buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const targetCategory = button.getAttribute('data-target');

            // Show or hide cards based on selected category tag
            blogCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (targetCategory === 'all' || cardCategory === targetCategory) {
                    card.classList.remove('hidden-card');
                } else {
                    card.classList.add('hidden-card');
                }
            });
        });
    });
});
