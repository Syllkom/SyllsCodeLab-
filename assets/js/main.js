document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.mobile-menu').addEventListener('click', function() {
        const nav = document.querySelector('nav')
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block'
    })
    
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement
            faqItem.classList.toggle('active')
        })
    })
    
    const sections = document.querySelectorAll('section[id]')
    const navLinks = document.querySelectorAll('nav ul li a')
    
    function updateActiveLink() {
        const scrollPosition = window.scrollY
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100
            const sectionHeight = section.offsetHeight
            const sectionId = section.getAttribute('id')
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active')
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active')
                    }
                })
            }
        })
    }
    
    window.addEventListener('scroll', updateActiveLink)
    updateActiveLink()

    function revealOnScroll() {
        const elementsToReveal = document.querySelectorAll('.service-card, .portfolio-item, .blog-card, .testimonial-card, .timeline-item')
        
        elementsToReveal.forEach(element => {
            const elementTop = element.getBoundingClientRect().top
            const windowHeight = window.innerHeight
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible')
            }
        })
    }
    
    const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .blog-card, .testimonial-card, .timeline-item')
    animatedElements.forEach(element => {
        element.classList.add('animate-on-scroll')
    })
    
    window.addEventListener('scroll', revealOnScroll)
    revealOnScroll()
})

function updateHeaderOnScroll() {
    const header = document.querySelector('header')
    if (window.scrollY > 50) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
}

window.addEventListener('scroll', updateHeaderOnScroll)
updateHeaderOnScroll();

let lastScrollTop = 0;

function handleHeaderVisibility() {
    const header = document.querySelector('header')
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop
    
    if (currentScroll > lastScrollTop && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)'
    } else {
        header.style.transform = 'translateY(0)'
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll
}

window.addEventListener('scroll', handleHeaderVisibility)
