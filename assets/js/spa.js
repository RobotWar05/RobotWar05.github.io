$(document).ready(function() {
    // Use event delegation so links in dynamically loaded components work
    $(document).on('click', 'a', function(e) {
        var href = $(this).attr('href');
        
        if (!href || href.startsWith('http') || href.startsWith('mailto:') || $(this).attr('target') === '_blank') return;
        if (href === '#' || href === '') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        
        var targetComponent = '';
        if (href === 'index.html' || href === 'index.html#portfolio') {
            targetComponent = 'components/home.html';
        } else if (href === 'Resume.html') {
            targetComponent = 'components/resume.html';
        } else if (href === 'Contact.html') {
            targetComponent = 'components/contact.html';
        } else {
            return;
        }

        e.preventDefault();
        
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
                        if (href === 'index.html#portfolio') {
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
    });

    // Initial load - load home component by default
    fetch('components/home.html')
        .then(response => {
             if (!response.ok) throw new Error("HTTP error " + response.status);
             return response.text();
        })
        .then(html => {
            $('#main').html(html);
            document.body.classList.add('home-active');
            if (typeof window.initHomeScripts === 'function') {
                window.initHomeScripts();
            }
        })
        .catch(err => {
            console.error("Initial load error:", err);
            $('#main').html('<p style="padding:2em; color:red;">Error loading content. Please ensure you are running on a local server (e.g., Live Server) to avoid CORS issues.</p>');
        });
});
