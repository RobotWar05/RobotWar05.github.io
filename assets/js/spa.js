function loadPage(href, isPopState) {
    if (!href) href = 'index.html';
    
    // Convert path to just the filename to handle subdirectories cleanly if any
    var filename = href.split('/').pop() || 'index.html';
    if (filename.includes('#')) filename = filename.split('#')[0];
    
    var targetComponent = '';
    if (filename === 'index.html' || filename === '') {
        targetComponent = 'components/home.html';
    } else if (filename === 'Resume.html') {
        targetComponent = 'components/resume.html';
    } else if (filename === 'Contact.html') {
        targetComponent = 'components/contact.html';
    } else {
        targetComponent = 'components/home.html';
    }

    if (!isPopState) {
        history.pushState({ path: href }, '', href);
    }

    var $main = $('#main');
    
    $main.children().fadeOut(200).promise().done(function() {
        fetch(targetComponent)
            .then(response => {
                if (!response.ok) throw new Error("HTTP error " + response.status);
                return response.text();
            })
            .then(html => {
                $main.html(html);
                
                document.body.className = document.body.className.replace(/\b\w+-active\b/g, '').trim();
                document.body.classList.add(targetComponent.replace('components/', '').replace('.html', '') + '-active');
                
                if (targetComponent === 'components/home.html') {
                    if (typeof window.initHomeScripts === 'function') {
                        window.initHomeScripts();
                    }
                }

                $main.children().hide().fadeIn(300, function() {
                    if (href.includes('#portfolio')) {
                        window.scrollTo({ top: $('#portfolio').length ? $('#portfolio').offset().top : 500, behavior: 'smooth' });
                    } else {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                });
            })
            .catch(err => {
                console.error("Error loading component:", err);
                $main.html('<p>Error loading content. Please ensure you are running on a local server (e.g., Live Server) to avoid CORS issues.</p>');
                $main.children().hide().fadeIn(300);
            });
    });
}

$(document).ready(function() {
    // Handle browser back/forward buttons
    window.addEventListener('popstate', function(e) {
        var href = e.state && e.state.path ? e.state.path : location.pathname;
        loadPage(href, true);
    });

    // Use event delegation so links in dynamically loaded components work
    $(document).on('click', 'a', function(e) {
        var href = $(this).attr('href');
        
        if (!href || href.startsWith('http') || href.startsWith('mailto:') || $(this).attr('target') === '_blank' || $(this).hasClass('no-spa')) return;
        if (href === '#' || href === '') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        
        e.preventDefault();
        loadPage(href, false);
    });

    // Initial load
    var initialPath = location.pathname.split('/').pop() || 'index.html';
    history.replaceState({ path: initialPath }, '', initialPath);
    loadPage(initialPath, true);
});
