/*==================== MAIN JS - ABENEZER LIBAMU PORTFOLIO ====================*/
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');
        setTimeout(() => {
            preloader.classList.add('hide');
        }, 1500);
    });

    // Initialize particles.js for hero section
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#00ffa3", "#ff00a0", "#00c3ff"]
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00ffa3",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 0.5
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Add glitch effect to elements with glitch-effect class
    const glitchElements = document.querySelectorAll('.glitch-effect');
    glitchElements.forEach(element => {
        element.setAttribute('data-text', element.textContent);
    });

    // Add data-text attribute to logo for glitch effect
    const logoText = document.querySelector('.logo-text');
    if (logoText) {
        logoText.setAttribute('data-text', logoText.textContent);
    }

    // Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('show-menu');
        });
    }

    // Close menu when clicking on nav links
    const navLinks = document.querySelectorAll('.nav-link');
    
    function linkAction() {
        // Close menu
        menuToggle.classList.remove('active');
        navMenu.classList.remove('show-menu');
    }
    
    navLinks.forEach(link => link.addEventListener('click', linkAction));

    // Change Header Background on Scroll
    function scrollHeader() {
        const header = document.getElementById('header');
        if (this.scrollY >= 80) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
    }
    
    window.addEventListener('scroll', scrollHeader);

    // Typing Effect
    const typedTextSpan = document.querySelector('.typed-text');
    const cursorSpan = document.querySelector('.cursor');
    
    const textArray = ['Full Stack Web Developer', 'Frontend Developer', 'Backend Developer', 'JavaScript Expert', 'Node.js Developer'];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;
    
    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if (!cursorSpan.classList.contains('typing')) {
                cursorSpan.classList.add('typing');
            }
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            cursorSpan.classList.remove('typing');
            setTimeout(erase, newTextDelay);
        }
    }
    
    function erase() {
        if (charIndex > 0) {
            if (!cursorSpan.classList.contains('typing')) {
                cursorSpan.classList.add('typing');
            }
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            cursorSpan.classList.remove('typing');
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) {
                textArrayIndex = 0;
            }
            setTimeout(type, typingDelay + 1100);
        }
    }
    
    if (textArray.length && typedTextSpan) {
        setTimeout(type, newTextDelay + 250);
    }

    // Skills Tabs
    const tabs = document.querySelectorAll('.skills-tab');
    const tabContents = document.querySelectorAll('.skills-group');
    
    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to current tab and content
            tab.classList.add('active');
            const target = tab.dataset.target;
            document.querySelector(target).classList.add('active');
        });
    });

    // Project Filtering
    const filterItems = document.querySelectorAll('.filter-item');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all filter items
            filterItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to current filter item
            item.classList.add('active');
            
            const filterValue = item.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 200);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 500);
                }
            });
        });
    });

    // Scroll to Top Button
    function scrollTop() {
        const scrollTopButton = document.getElementById('scroll-top');
        if (this.scrollY >= 560) {
            scrollTopButton.classList.add('show-scroll');
        } else {
            scrollTopButton.classList.remove('show-scroll');
        }
    }
    
    window.addEventListener('scroll', scrollTop);

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active Link on Scroll
    const sections = document.querySelectorAll('section[id]');
    
    function scrollActive() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav-link[href*=' + sectionId + ']').classList.add('active');
            } else {
                document.querySelector('.nav-link[href*=' + sectionId + ']').classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', scrollActive);

    // Form Validation
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const project = document.getElementById('project').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !project || !message) {
                showFormAlert('Please fill in all fields', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormAlert('Please enter a valid email address', 'error');
                return;
            }
            
            // If validation passes, you would normally send the form data to a server
            // For this demo, we'll just show a success message
            showFormAlert('Message sent successfully!', 'success');
            contactForm.reset();
        });
    }

    // Form Alert Function
    function showFormAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `form-alert ${type}`;
        alertDiv.textContent = message;
        
        // Add to DOM
        contactForm.appendChild(alertDiv);
        
        // Remove after 3 seconds
        setTimeout(() => {
            alertDiv.classList.add('hide');
            setTimeout(() => {
                alertDiv.remove();
            }, 500);
        }, 3000);
    }

    // Add CSS for form alerts
    const style = document.createElement('style');
    style.textContent = `
        .form-alert {
            padding: 10px 15px;
            margin-top: 15px;
            border-radius: 4px;
            font-size: 14px;
            transition: all 0.3s ease;
        }
        
        .form-alert.success {
            background-color: rgba(0, 255, 163, 0.2);
            border: 1px solid #00ffa3;
            color: #00ffa3;
        }
        
        .form-alert.error {
            background-color: rgba(255, 0, 160, 0.2);
            border: 1px solid #ff00a0;
            color: #ff00a0;
        }
        
        .form-alert.hide {
            opacity: 0;
            transform: translateY(-10px);
        }
    `;
    document.head.appendChild(style);

    // Image Lightbox for Fullstack Showcase
    const showcaseImages = document.querySelectorAll('.fullstack-images-grid img');
    const body = document.body;
    
    showcaseImages.forEach(image => {
        image.addEventListener('click', () => {
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            
            const lightboxImg = document.createElement('img');
            lightboxImg.src = image.src;
            
            const closeBtn = document.createElement('span');
            closeBtn.classList.add('lightbox-close');
            closeBtn.innerHTML = '&times;';
            
            lightbox.appendChild(lightboxImg);
            lightbox.appendChild(closeBtn);
            body.appendChild(lightbox);
            
            // Prevent scrolling when lightbox is open
            body.style.overflow = 'hidden';
            
            // Close lightbox when clicking on close button or outside the image
            lightbox.addEventListener('click', (e) => {
                if (e.target !== lightboxImg) {
                    body.removeChild(lightbox);
                    body.style.overflow = 'auto';
                }
            });
        });
    });

    // Add CSS for lightbox
    const lightboxStyle = document.createElement('style');
    lightboxStyle.textContent = `
        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(5, 6, 24, 0.95);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        }
        
        .lightbox img {
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
            border: 2px solid #00ffa3;
            box-shadow: 0 0 20px rgba(0, 255, 163, 0.5);
        }
        
        .lightbox-close {
            position: absolute;
            top: 20px;
            right: 30px;
            color: #00ffa3;
            font-size: 40px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .lightbox-close:hover {
            color: #ff00a0;
            transform: rotate(90deg);
        }
    `;
    document.head.appendChild(lightboxStyle);

    // Code Syntax Highlighting
    const codeBlocks = document.querySelectorAll('.code-snippet code');
    
    codeBlocks.forEach(block => {
        // Simple syntax highlighting
        const content = block.innerHTML;
        
        // Highlight keywords
        const highlightedContent = content
            // JavaScript keywords
            .replace(/\b(const|let|var|function|return|if|else|for|while|class|import|export|from|try|catch|async|await)\b/g, '<span class="keyword">$1</span>')
            // Strings
            .replace(/(["'`])(.*?)\1/g, '<span class="string">$1$2$1</span>')
            // Comments
            .replace(/(\/\/.*)/g, '<span class="comment">$1</span>')
            // Numbers
            .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
            // Function names
            .replace(/(\w+)(?=\s*\()/g, '<span class="function">$1</span>')
            // Object properties
            .replace(/(\.\w+)\b/g, '<span class="property">$1</span>');
        
        block.innerHTML = highlightedContent;
    });

    // Add CSS for syntax highlighting
    const syntaxStyle = document.createElement('style');
    syntaxStyle.textContent = `
        .code-snippet .keyword {
            color: #ff00a0;
        }
        
        .code-snippet .string {
            color: #00ffa3;
        }
        
        .code-snippet .comment {
            color: #666;
            font-style: italic;
        }
        
        .code-snippet .number {
            color: #00c3ff;
        }
        
        .code-snippet .function {
            color: #f8f8f2;
            font-weight: bold;
        }
        
        .code-snippet .property {
            color: #9580ff;
        }
    `;
    document.head.appendChild(syntaxStyle);

    // Animate skills bars on scroll
    const skillsBars = document.querySelectorAll('.skills-percentage-bar');
    
    const animateSkillBars = () => {
        skillsBars.forEach(bar => {
            const percentage = bar.style.width;
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.width = percentage;
            }, 200);
        });
    };
    
    // Trigger animation when skills section is in view
    const skillsSection = document.getElementById('skills');
    
    const checkSkillsInView = () => {
        if (!skillsSection) return;
        
        const sectionPosition = skillsSection.getBoundingClientRect();
        const screenPosition = window.innerHeight;
        
        if (sectionPosition.top < screenPosition && sectionPosition.bottom > 0) {
            animateSkillBars();
            window.removeEventListener('scroll', checkSkillsInView);
        }
    };
    
    window.addEventListener('scroll', checkSkillsInView);
    checkSkillsInView(); // Check on initial load

    // Scroll Reveal Animation
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 200
    });
    
    sr.reveal('.hero-content', {});
    sr.reveal('.hero-social', {delay: 600});
    sr.reveal('.about-image', {origin: 'left'});
    sr.reveal('.about-text', {origin: 'right'});
    sr.reveal('.skills-container', {});
    sr.reveal('.project-card', {interval: 200});
    sr.reveal('.fullstack-header', {});
    sr.reveal('.fullstack-showcase', {delay: 200});
    sr.reveal('.fullstack-details', {delay: 400});
    sr.reveal('.timeline-item', {interval: 200});
    sr.reveal('.contact-info', {origin: 'left'});
    sr.reveal('.contact-form', {origin: 'right'});

    // Dark Mode Toggle (Optional feature)
    const createDarkModeToggle = () => {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'dark-mode-toggle';
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        toggleBtn.setAttribute('aria-label', 'Toggle Dark Mode');
        
        document.body.appendChild(toggleBtn);
        
        // Add CSS for dark mode toggle
        const darkModeStyle = document.createElement('style');
        darkModeStyle.textContent = `
            .dark-mode-toggle {
                position: fixed;
                bottom: 5rem;
                right: 1.5rem;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: var(--card-color);
                border: 1px solid var(--primary-color);
                color: var(--primary-color);
                font-size: 1.2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                z-index: var(--z-tooltip);
                transition: all var(--transition-fast);
                box-shadow: var(--neon-shadow-primary);
            }
            
            .dark-mode-toggle:hover {
                transform: translateY(-3px);
                box-shadow: 0 0 15px rgba(0, 255, 163, 0.5);
            }
            
            body.light-mode {
                --dark-color: #f0f0f0;
                --darker-color: #ffffff;
                --text-color: #333333;
                --text-color-light: #666666;
                --card-color: rgba(255, 255, 255, 0.7);
            }
            
            body.light-mode .dark-mode-toggle i {
                transform: rotate(180deg);
            }
        `;
        document.head.appendChild(darkModeStyle);
        
        // Toggle dark/light mode
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            
            if (document.body.classList.contains('light-mode')) {
                toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('theme', 'light');
            } else {
                toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('theme', 'dark');
            }
        });
        
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
            toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }
    };
    
    // Uncomment to enable dark mode toggle
    // createDarkModeToggle();

    // Matrix Rain Effect (Easter Egg)
    const createMatrixRain = () => {
        const canvas = document.createElement('canvas');
        canvas.id = 'matrix-canvas';
        canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:-2;opacity:0.15;pointer-events:none;display:none;';
        document.body.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        
        const columns = Math.floor(width / 20);
        const drops = [];
        
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }
        
        const matrix = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, width, height);
            
            ctx.fillStyle = '#00ffa3';
            ctx.font = '15px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const text = String.fromCharCode(Math.floor(Math.random() * 128));
                ctx.fillText(text, i * 20, drops[i] * 20);
                
                if (drops[i] * 20 > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                
                drops[i]++;
            }
        };
        
        let matrixInterval;
        
        // Konami Code: up, up, down, down, left, right, left, right, b, a
        const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        let konamiIndex = 0;
        
        document.addEventListener('keydown', (e) => {
            if (e.key === konamiCode[konamiIndex]) {
                konamiIndex++;
                
                if (konamiIndex === konamiCode.length) {
                    const matrixCanvas = document.getElementById('matrix-canvas');
                    
                    if (matrixCanvas.style.display === 'none') {
                        matrixCanvas.style.display = 'block';
                        matrixInterval = setInterval(matrix, 50);
                    } else {
                        matrixCanvas.style.display = 'none';
                        clearInterval(matrixInterval);
                    }
                    
                    konamiIndex = 0;
                }
            } else {
                konamiIndex = 0;
            }
        });
        
        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });
    };
    
    // Initialize Matrix Rain Easter Egg
    createMatrixRain();
});

// ScrollReveal Library (Minified)
const ScrollReveal=function(){"use strict";var r={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};var n={success:function(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})},failure:function(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}};function o(e){return"object"==typeof window.Node?e instanceof window.Node:null!==e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName}function u(e,t){if(void 0===t&&(t=document),e instanceof Array)return e.filter(o);if(o(e))return[e];if(n=e,i=Object.prototype.toString.call(n),"object"==typeof window.NodeList?n instanceof window.NodeList:null!==n&&"object"==typeof n&&"number"==typeof n.length&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(i)&&(0===n.length||o(n[0])))return Array.prototype.slice.call(e);var n,i;if("string"==typeof e)try{var r=t.querySelectorAll(e);return Array.prototype.slice.call(r)}catch(e){return[]}return[]}function s(e){return null!==e&&e instanceof Object&&(e.constructor===Object||"[object Object]"===Object.prototype.toString.call(e))}function f(n,i){if(s(n))return Object.keys(n).forEach(function(e){return i(n[e],e,n)});if(n instanceof Array)return n.forEach(function(e,t){return i(e,t,n)});throw new TypeError("Expected either an array or object literal.")}function h(e){for(var t=[],n=arguments.length-1;0<n--;)t[n]=arguments[n+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+e;t.forEach(function(e){return i+="\n — "+e}),console.log(i,"color: #ea654b;")}}function t(){var n=this,i={active:[],stale:[]},t={active:[],stale:[]},r={active:[],stale:[]};try{f(u("[data-sr-id]"),function(e){var t=parseInt(e.getAttribute("data-sr-id"));i.active.push(t)})}catch(e){throw e}f(this.store.elements,function(e){-1===i.active.indexOf(e.id)&&i.stale.push(e.id)}),f(i.stale,function(e){return delete n.store.elements[e]}),f(this.store.elements,function(e){-1===r.active.indexOf(e.containerId)&&r.active.push(e.containerId),e.hasOwnProperty("sequence")&&-1===t.active.indexOf(e.sequence.id)&&t.active.push(e.sequence.id)}),f(this.store.containers,function(e){-1===r.active.indexOf(e.id)&&r.stale.push(e.id)}),f(r.stale,function(e){var t=n.store.containers[e].node;t.removeEventListener("scroll",n.delegate),t.removeEventListener("resize",n.delegate),delete n.store.containers[e]}),f(this.store.sequences,function(e){-1===t.active.indexOf(e.id)&&t.stale.push(e.id)}),f(t.stale,function(e){return delete n.store.sequences[e]})}function N(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(16===e.length)return e;if(6!==e.length)throw new RangeError("Expected array with either 6 or 16 values.");var t=z();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}function z(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function F(e,t){for(var n=N(e),i=N(t),r=[],o=0;o<4;o++)for(var s=[n[o],n[o+4],n[o+8],n[o+12]],a=0;a<4;a++){var c=4*a,l=[i[c],i[c+1],i[c+2],i[c+3]],d=s[0]*l[0]+s[1]*l[1]+s[2]*l[2]+s[3]*l[3];r[o+c]=d}return r}function D(e,t){var n=z();return n[0]=e,n[5]="number"==typeof t?t:e,n}var S=function(){var n={},i=document.documentElement.style;function e(e,t){if(void 0===t&&(t=i),e&&"string"==typeof e){if(n[e])return n[e];if("string"==typeof t[e])return n[e]=e;if("string"==typeof t["-webkit-"+e])return n[e]="-webkit-"+e;throw new RangeError('Unable to find "'+e+'" style property.')}throw new TypeError("Expected a string.")}return e.clearCache=function(){return n={}},e}();function p(e){var t=window.getComputedStyle(e.node),n=t.position,i=e.config,r={},o=(e.node.getAttribute("style")||"").match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];r.computed=o?o.map(function(e){return e.trim()}).join("; ")+";":"",r.generated=o.some(function(e){return e.match(/visibility\s?:\s?visible/i)})?r.computed:o.concat(["visibility: visible"]).map(function(e){return e.trim()}).join("; ")+";";var s,a,c,l,d,u,f,h,p,m,y,v,g,b=parseFloat(t.opacity),w=isNaN(parseFloat(i.opacity))?parseFloat(t.opacity):parseFloat(i.opacity),E={computed:b!==w?"opacity: "+b+";":"",generated:b!==w?"opacity: "+w+";":""},j=[];if(parseFloat(i.distance)){var T="top"===i.origin||"bottom"===i.origin?"Y":"X",k=i.distance;"top"!==i.origin&&"left"!==i.origin||(k=/^-/.test(k)?k.substr(1):"-"+k);var O=k.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),x=O[0];switch(O[1]){case"em":k=parseInt(t.fontSize)*x;break;case"px":k=x;break;case"%":k="Y"===T?e.node.getBoundingClientRect().height*x/100:e.node.getBoundingClientRect().width*x/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}"Y"===T?j.push((c=k,(l=z())[13]=c,l)):j.push((s=k,(a=z())[12]=s,a))}i.rotate.x&&j.push((d=i.rotate.x,u=Math.PI/180*d,(f=z())[5]=f[10]=Math.cos(u),f[6]=f[9]=Math.sin(u),f[9]*=-1,f)),i.rotate.y&&j.push((h=i.rotate.y,p=Math.PI/180*h,(m=z())[0]=m[10]=Math.cos(p),m[2]=m[8]=Math.sin(p),m[2]*=-1,m)),i.rotate.z&&j.push((y=i.rotate.z,v=Math.PI/180*y,(g=z())[0]=g[5]=Math.cos(v),g[1]=g[4]=Math.sin(v),g[4]*=-1,g)),1!==i.scale&&(0===i.scale?j.push(D(2e-4)):j.push(D(i.scale)));var R={};if(j.length){R.property=S("transform"),R.computed={raw:t[R.property],matrix:function(e){if("string"==typeof e){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t)return N(t[2].split(", ").map(parseFloat))}return z()}(t[R.property])},j.unshift(R.computed.matrix);var q=j.reduce(F);R.generated={initial:R.property+": matrix3d("+q.join(", ")+");",final:R.property+": matrix3d("+R.computed.matrix.join(", ")+");"}}else R.generated={initial:"",final:""};var A={};if(E.generated||R.generated.initial){A.property=S("transition"),A.computed=t[A.property],A.fragments=[];var P=i.delay,L=i.duration,M=i.easing;E.generated&&A.fragments.push({delayed:"opacity "+L/1e3+"s "+M+" "+P/1e3+"s",instant:"opacity "+L/1e3+"s "+M+" 0s"}),R.generated.initial&&A.fragments.push({delayed:R.property+" "+L/1e3+"s "+M+" "+P/1e3+"s",instant:R.property+" "+L/1e3+"s "+M+" 0s"}),A.computed&&!A.computed.match(/all 0s|none 0s/)&&A.fragments.unshift({delayed:A.computed,instant:A.computed});var I=A.fragments.reduce(function(e,t,n){return e.delayed+=0===n?t.delayed:", "+t.delayed,e.instant+=0===n?t.instant:", "+t.instant,e},{delayed:"",instant:""});A.generated={delayed:A.property+": "+I.delayed+";",instant:A.property+": "+I.instant+";"}}else A.generated={delayed:"",instant:""};return{inline:r,opacity:E,position:n,transform:R,transition:A}}function m(r,e){e.split(";").forEach(function(e){var t=e.split(":"),n=t[0],i=t.slice(1);n&&i&&(r.style[n.trim()]=i.join(":"))})}function y(e){var i,r=this;try{f(u(e),function(e){var t=e.getAttribute("data-sr-id");if(null!==t){i=!0;var n=r.store.elements[t];n.callbackTimer&&window.clearTimeout(n.callbackTimer.clock),m(n.node,n.styles.inline.generated),e.removeAttribute("data-sr-id"),delete r.store.elements[t]}})}catch(e){return h.call(this,"Clean failed.",e.message)}if(i)try{t.call(this)}catch(e){return h.call(this,"Clean failed.",e.message)}}function v(n){for(var e=[],t=arguments.length-1;0<t--;)e[t]=arguments[t+1];if(s(n))return f(e,function(e){f(e,function(e,t){s(e)?(n[t]&&s(n[t])||(n[t]={}),v(n[t],e)):n[t]=e})}),n;throw new TypeError("Target must be an object literal.")}function g(e){return void 0===e&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var e,b=(e=0,function(){return e++});function w(){var n=this;t.call(this),f(this.store.elements,function(e){var t=[e.styles.inline.generated];e.visible?(t.push(e.styles.opacity.computed),t.push(e.styles.transform.generated.final),e.revealed=!0):(t.push(e.styles.opacity.generated),t.push(e.styles.transform.generated.initial),e.revealed=!1),m(e.node,t.filter(function(e){return""!==e}).join(" "))}),f(this.store.containers,function(e){var t=e.node===document.documentElement?window:e.node;t.addEventListener("scroll",n.delegate),t.addEventListener("resize",n.delegate)}),this.delegate(),this.initTimeout=null}function c(e,t){void 0===t&&(t={});var n=t.pristine||this.pristine,i="always"===e.config.useDelay||"onload"===e.config.useDelay&&n||"once"===e.config.useDelay&&!e.seen,r=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;return t.reveal||r?function(e,t){var n=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?n.push(e.styles.transition.generated.delayed):n.push(e.styles.transition.generated.instant);e.revealed=e.seen=!0,m(e.node,n.filter(function(e){return""!==e}).join(" ")),a.call(this,e,t)}.call(this,e,i):t.reset||o?function(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,m(e.node,t.filter(function(e){return""!==e}).join(" ")),a.call(this,e)}.call(this,e):void 0}function a(e,t){var n=this,i=t?e.config.duration+e.config.delay:e.config.duration,r=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,s=0;e.callbackTimer&&(s=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),r(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&y.call(n,e.node)},i-s)}}function l(e,t){if(void 0===t&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return c.call(this,e,{reset:!0});var n=this.store.sequences[e.sequence.id],i=e.sequence.index;if(n){var r=new d(n,"visible",this.store),o=new d(n,"revealed",this.store);if(n.models={visible:r,revealed:o},!o.body.length){var s=n.members[r.body[0]],a=this.store.elements[s];if(a)return j.call(this,n,r.body[0],-1,t),j.call(this,n,r.body[0],1,t),c.call(this,a,{reveal:!0,pristine:t})}if(!n.blocked.head&&i===[].concat(o.head).pop()&&i>=[].concat(r.body).shift())return j.call(this,n,i,-1,t),c.call(this,e,{reveal:!0,pristine:t});if(!n.blocked.foot&&i===[].concat(o.foot).shift()&&i<=[].concat(r.body).pop())return j.call(this,n,i,1,t),c.call(this,e,{reveal:!0,pristine:t})}}function E(e){var t=Math.abs(e);if(isNaN(t))throw new RangeError("Invalid sequence interval.");this.id=b(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1}}function d(e,i,r){var o=this;this.head=[],this.body=[],this.foot=[],f(e.members,function(e,t){var n=r.elements[e];n&&n[i]&&o.body.push(t)}),this.body.length&&f(e.members,function(e,t){var n=r.elements[e];n&&!n[i]&&(t<o.body[0]?o.head.push(t):o.foot.push(t))})}function j(e,t,n,i){var r=this,o=["head",null,"foot"][1+n],s=e.members[t+n],a=this.store.elements[s];e.blocked[o]=!0,setTimeout(function(){e.blocked[o]=!1,a&&l.call(r,a,i)},e.interval)}function i(e,a,t){var c=this;void 0===a&&(a={}),void 0===t&&(t=!1);var l,d=[],n=a.interval||r.interval;try{n&&(l=new E(n));var i=u(e);if(!i.length)throw new Error("Invalid reveal target.");f(i.reduce(function(e,t){var n={},i=t.getAttribute("data-sr-id");i?(v(n,c.store.elements[i]),m(n.node,n.styles.inline.computed)):(n.id=b(),n.node=t,n.seen=!1,n.revealed=!1,n.visible=!1);var r=v({},n.config||c.defaults,a);if(!r.mobile&&g()||!r.desktop&&!g())return i&&y.call(c,n),e;var o,s=u(r.container)[0];if(!s)throw new Error("Invalid container.");return s.contains(t)&&(null===(o=function(t){var e=[],n=arguments.length-1;for(;0<n--;)e[n]=arguments[n+1];var i=null;return f(e,function(e){f(e,function(e){null===i&&e.node===t&&(i=e.id)})}),i}(s,d,c.store.containers))&&(o=b(),d.push({id:o,node:s})),n.config=r,n.containerId=o,n.styles=p(n),l&&(n.sequence={id:l.id,index:l.members.length},l.members.push(n.id)),e.push(n)),e},[]),function(e){(c.store.elements[e.id]=e).node.setAttribute("data-sr-id",e.id)})}catch(e){return h.call(this,"Reveal failed.",e.message)}f(d,function(e){c.store.containers[e.id]={id:e.id,node:e.node}}),l&&(this.store.sequences[l.id]=l),!0!==t&&(this.store.history.push({target:e,options:a}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(w.bind(this),0))}var T,k=Math.sign||function(e){return(0<e)-(e<0)||+e},O=(T=Date.now(),function(e){var t=Date.now();16<t-T?e(T=t):setTimeout(function(){return O(e)},0)}),x=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||O;function R(e,t){for(var n=t?e.node.clientHeight:e.node.offsetHeight,i=t?e.node.clientWidth:e.node.offsetWidth,r=0,o=0,s=e.node;isNaN(s.offsetTop)||(r+=s.offsetTop),isNaN(s.offsetLeft)||(o+=s.offsetLeft),s=s.offsetParent;);return{bounds:{top:r,right:o+i,bottom:r+n,left:o},height:n,width:i}}function q(e,t){var i=this;void 0===e&&(e={type:"init"}),void 0===t&&(t=this.store.elements),x(function(){var n="init"===e.type||"resize"===e.type;f(i.store.containers,function(e){n&&(e.geometry=R.call(i,e,!0));var t=function(e){var t,n;return n=e.node===document.documentElement?(t=window.pageYOffset,window.pageXOffset):(t=e.node.scrollTop,e.node.scrollLeft),{top:t,left:n}}.call(i,e);e.scroll=t}),f(t,function(e){n&&(e.geometry=R.call(i,e)),e.visible=function(e){void 0===e&&(e={});var t=this.store.containers[e.containerId];if(t){var n=Math.max(0,Math.min(1,e.config.viewFactor)),i=e.config.viewOffset,r=e.geometry.bounds.top+e.geometry.height*n,o=e.geometry.bounds.right-e.geometry.width*n,s=e.geometry.bounds.bottom-e.geometry.height*n,a=e.geometry.bounds.left+e.geometry.width*n,c=t.geometry.bounds.top+t.scroll.top+i.top,l=t.geometry.bounds.right+t.scroll.left-i.right,d=t.geometry.bounds.bottom+t.scroll.top-i.bottom,u=t.geometry.bounds.left+t.scroll.left+i.left;return r<d&&u<o&&c<s&&a<l||"fixed"===e.styles.position}}.call(i,e)}),f(t,function(e){e.sequence?l.call(i,e):c.call(i,e)}),i.pristine=!1})}var A,P,L,M,I,C,W,Y,$="4.0.9";function H(e){var t;if(void 0===e&&(e={}),void 0===this||Object.getPrototypeOf(this)!==H.prototype)return new H(e);if(!H.isSupported())return h.call(this,"Instantiation failed.","This browser is not supported."),n.failure();try{t=v({},C||r,e)}catch(e){return h.call(this,"Invalid configuration.",e.message),n.failure()}try{if(!u(t.container)[0])throw new Error("Invalid container.")}catch(e){return h.call(this,"Invalid configuration.",e.message),n.failure()}return!(C=t).mobile&&g()||!C.desktop&&!g()?(h.call(this,"This device is disabled.","desktop: "+C.desktop,"mobile: "+C.mobile),n.failure()):(n.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,A=A||q.bind(this),P=P||function(){var n=this;f(this.store.elements,function(e){m(e.node,e.styles.inline.generated),e.node.removeAttribute("data-sr-id")}),f(this.store.containers,function(e){var t=e.node===document.documentElement?window:e.node;t.removeEventListener("scroll",n.delegate),t.removeEventListener("resize",n.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}.bind(this),L=L||i.bind(this),M=M||y.bind(this),I=I||function(){var t=this;f(this.store.history,function(e){i.call(t,e.target,e.options,!0)}),w.call(this)}.bind(this),Object.defineProperty(this,"delegate",{get:function(){return A}}),Object.defineProperty(this,"destroy",{get:function(){return P}}),Object.defineProperty(this,"reveal",{get:function(){return L}}),Object.defineProperty(this,"clean",{get:function(){return M}}),Object.defineProperty(this,"sync",{get:function(){return I}}),Object.defineProperty(this,"defaults",{get:function(){return C}}),Object.defineProperty(this,"version",{get:function(){return $}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),Y||(Y=this))}return H.isSupported=function(){return("transform"in(t=document.documentElement.style)||"WebkitTransform"in t)&&("transition"in(e=document.documentElement.style)||"WebkitTransition"in e);var e,t},Object.defineProperty(H,"debug",{get:function(){return W||!1},set:function(e){return W="boolean"==typeof e?e:W}}),H(),H}();
