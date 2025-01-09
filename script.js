function filterCategories() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const categories = document.querySelectorAll('main ul li');
    categories.forEach(category => {
        const text = category.textContent.toLowerCase();
        category.style.display = text.includes(searchInput) ? '' : 'none';
    });
}
