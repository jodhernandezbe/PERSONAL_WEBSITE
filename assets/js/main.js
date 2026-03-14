document.addEventListener('DOMContentLoaded', function() {
    // Get navigation elements
    var toggleButton = document.querySelector('.greedy-nav__toggle');
    var hiddenLinks = document.querySelector('.hidden-links');

    // Simple mobile navigation toggle
    if (toggleButton && hiddenLinks) {
        // Toggle mobile menu when hamburger is clicked
        toggleButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            // Toggle menu visibility
            var isHidden = hiddenLinks.classList.contains('hidden');

            if (isHidden) {
                hiddenLinks.classList.remove('hidden');
                toggleButton.classList.add('close');
            } else {
                hiddenLinks.classList.add('hidden');
                toggleButton.classList.remove('close');
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.greedy-nav')) {
                hiddenLinks.classList.add('hidden');
                toggleButton.classList.remove('close');
            }
        });

        // Close mobile menu when clicking on a link
        var menuLinks = hiddenLinks.querySelectorAll('a');
        menuLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                hiddenLinks.classList.add('hidden');
                toggleButton.classList.remove('close');
            });
        });
    }
});