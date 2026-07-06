// SPA View Switcher
$(document).ready(function() {
    $('a').on('click', function(e) {
        var href = $(this).attr('href');
        
        // Ignore external links, mailto, etc.
        if (!href || href.startsWith('http') || href.startsWith('mailto:') || $(this).attr('target') === '_blank') return;
        
        // Internal page navigation
        var targetView = '';
        if (href === 'index.html' || href === 'index.html#portfolio' || href === '') {
            targetView = '.view-home';
        } else if (href === 'Resume.html') {
            targetView = '.view-resume';
        } else if (href === 'Contact.html') {
            targetView = '.view-contact';
        } else {
            return; // Ignore other links
        }

        e.preventDefault();
        
        // Fade crossfade
        var $currentView = $('.spa-view:visible');
        if ($currentView.first().hasClass(targetView.replace('.', ''))) {
            // Already on this view, just scroll if needed
            if (href === 'index.html#portfolio') {
                window.scrollTo({ top: $('#portfolio').offset().top || 500, behavior: 'smooth' });
            }
            return;
        }

        $currentView.fadeOut(300, function() {
            document.body.classList.remove('view-home-active', 'view-resume-active', 'view-contact-active');
            document.body.classList.add(targetView.replace('.', '') + '-active');
            
            $(targetView).fadeIn(300, function() {
                if (href === 'index.html#portfolio') {
                    window.scrollTo({ top: $('#portfolio').offset() ? $('#portfolio').offset().top : 500, behavior: 'smooth' });
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });
    });
});
