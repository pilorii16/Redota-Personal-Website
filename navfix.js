document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const nav = document.querySelector('.nav-right');

    // Create toggle button
    const toggleButton = document.createElement('button');
    toggleButton.textContent = '☰';
    toggleButton.style.fontSize = '1.8rem';
    toggleButton.style.background = 'none';
    toggleButton.style.border = 'none';
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.display = 'none';
    toggleButton.style.zIndex = '1100';

    header.insertBefore(toggleButton, nav);

    const handleResize = () => {
        if (window.innerWidth <= 768) {
            toggleButton.style.display = 'block';
            nav.style.display = 'none';
            nav.style.flexDirection = 'column';
            nav.style.alignItems = 'flex-start';
            nav.style.gap = '0';
            nav.style.backgroundColor = '#ffce52';
            nav.style.padding = '0.5rem 1rem';
            nav.style.position = 'absolute';
            nav.style.top = header.offsetHeight + 'px';
            nav.style.right = '1rem';
            nav.style.borderRadius = '0 0 8px 8px';
            nav.style.width = '160px'; // consistent width

            // Apply full-width and padding to links for clean tap targets
            nav.querySelectorAll('a').forEach(a => {
                a.style.padding = '0.5rem 0';
                a.style.width = '100%';
                a.style.textAlign = 'left';
            });
        } else {
            toggleButton.style.display = 'none';
            nav.style.display = 'flex';
            nav.style.flexDirection = 'row';
            nav.style.alignItems = 'center';
            nav.style.gap = '1.5rem';
            nav.style.position = 'static';
            nav.style.backgroundColor = 'transparent';
            nav.style.padding = '0';
            nav.style.width = 'auto';


            nav.querySelectorAll('a').forEach(a => {
                a.style.padding = '0';
                a.style.width = 'auto';
                a.style.textAlign = 'center';
            });
        }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    toggleButton.addEventListener('click', () => {
        if (nav.style.display === 'none' || nav.style.display === '') {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    });

    document.querySelectorAll('.nav-right a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                nav.style.display = 'none';
                nav.style.flexDirection = 'row';
                nav.style.alignItems = 'center';
                nav.style.gap = '1.5rem';
            }
        });
    });
});
