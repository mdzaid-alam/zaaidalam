// ========================================
// WEBSITE SECURITY PROTECTION
// ========================================

// Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    showSecurityAlert('Right-click is disabled for security reasons.');
    return false;
});

// Disable text selection
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
    return false;
});

// Disable drag and drop
document.addEventListener('dragstart', function(e) {
    e.preventDefault();
    return false;
});

// Disable copy, cut, paste operations
document.addEventListener('copy', function(e) {
    e.preventDefault();
    showSecurityAlert('Copying is disabled for security reasons.');
    return false;
});

document.addEventListener('cut', function(e) {
    e.preventDefault();
    showSecurityAlert('Cutting is disabled for security reasons.');
    return false;
});

document.addEventListener('paste', function(e) {
    e.preventDefault();
    showSecurityAlert('Pasting is disabled for security reasons.');
    return false;
});

// Disable keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Disable Ctrl+A (Select All)
    if (e.ctrlKey && e.key === 'a') {
        e.preventDefault();
        showSecurityAlert('Select All is disabled for security reasons.');
        return false;
    }
    
    // Disable Ctrl+C (Copy)
    if (e.ctrlKey && e.key === 'c') {
        e.preventDefault();
        showSecurityAlert('Copy is disabled for security reasons.');
        return false;
    }
    
    // Disable Ctrl+X (Cut)
    if (e.ctrlKey && e.key === 'x') {
        e.preventDefault();
        showSecurityAlert('Cut is disabled for security reasons.');
        return false;
    }
    
    // Disable Ctrl+V (Paste)
    if (e.ctrlKey && e.key === 'v') {
        e.preventDefault();
        showSecurityAlert('Paste is disabled for security reasons.');
        return false;
    }
    
    // Disable Ctrl+S (Save)
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        showSecurityAlert('Save is disabled for security reasons.');
        return false;
    }
    
    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        showSecurityAlert('View Source is disabled for security reasons.');
        return false;
    }
    
    // Disable F12 (Developer Tools)
    if (e.key === 'F12') {
        e.preventDefault();
        showSecurityAlert('Developer Tools are disabled for security reasons.');
        return false;
    }
    
    // Disable Ctrl+Shift+I (Developer Tools)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        showSecurityAlert('Developer Tools are disabled for security reasons.');
        return false;
    }
    
    // Disable Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        showSecurityAlert('Console is disabled for security reasons.');
        return false;
    }
    
    // Disable Ctrl+Shift+C (Inspect Element)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        showSecurityAlert('Inspect Element is disabled for security reasons.');
        return false;
    }
});

// Disable image dragging
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('dragstart', function(e) {
            e.preventDefault();
            return false;
        });
        img.style.pointerEvents = 'none';
    });
});

// Disable iframe embedding
if (window.self !== window.top) {
    window.top.location = window.self.location;
}

// Disable developer tools detection
setInterval(function() {
    const devtools = {
        open: false,
        orientation: null
    };
    
    const threshold = 160;
    
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    
    if (widthThreshold || heightThreshold) {
        if (!devtools.open) {
            devtools.open = true;
            showSecurityAlert('Developer Tools detected. This website is protected.');
            document.body.innerHTML = '<div style="text-align: center; padding: 50px; font-family: Arial, sans-serif;"><h1>Access Denied</h1><p>Developer Tools are not allowed on this website.</p></div>';
        }
    } else {
        devtools.open = false;
    }
}, 500);

// Security alert function
function showSecurityAlert(message) {
    // Create a temporary alert element
    const alert = document.createElement('div');
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #ff4444;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 10000;
        font-family: Arial, sans-serif;
        font-size: 14px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        animation: slideIn 0.3s ease;
    `;
    alert.textContent = message;
    
    // Add animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(alert);
    
    // Remove alert after 3 seconds
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

// Disable console access
console.log = function() {};
console.warn = function() {};
console.error = function() {};
console.info = function() {};

// Disable alert, confirm, prompt
window.alert = function() {};
window.confirm = function() {};
window.prompt = function() {};

// Show success message after form submission
function showSuccessMessage() {
    const formContainer = document.querySelector('.contact-form-container');
    const form = document.getElementById('contactForm');
    
    // Create success message HTML
    const successHTML = `
        <div class="success-message">
            <div class="success-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for reaching out to me. I've received your message and will get back to you within 24 hours.</p>
            <div class="success-details">
                <p><strong>What happens next?</strong></p>
                <ul>
                    <li>I'll review your message and respond promptly</li>
                    <li>You'll receive a reply at the email address you provided</li>
                    <li>For urgent matters, feel free to connect with me on LinkedIn</li>
                </ul>
            </div>
            <button class="btn btn-primary send-another-btn" onclick="resetContactForm()">
                <i class="fas fa-plus"></i> Send Another Message
            </button>
        </div>
    `;
    
    // Replace form with success message
    formContainer.innerHTML = successHTML;
}

// Reset contact form to allow new submission
function resetContactForm() {
    const formContainer = document.querySelector('.contact-form-container');
    
    // Restore original form HTML
    formContainer.innerHTML = `
        <div class="form-header">
            <h3>Send Me a Message</h3>
            <p>I typically respond within 24 hours</p>
        </div>
        
        <form class="contact-form" id="contactForm" action="https://formspree.io/f/xovlypev" method="POST">
            <div class="form-group">
                <label for="name">Full Name *</label>
                <div class="input-wrapper">
                    <input type="text" id="name" name="name" placeholder="Your full name" required>
                    <i class="fas fa-user input-icon"></i>
                    <div class="input-focus-border"></div>
                </div>
            </div>
            
            <div class="form-group">
                <label for="email">Email Address *</label>
                <div class="input-wrapper">
                    <input type="email" id="email" name="email" placeholder="your.email@example.com" required>
                    <i class="fas fa-envelope input-icon"></i>
                    <div class="input-focus-border"></div>
                </div>
            </div>
            
            <div class="form-group">
                <label for="contactType">Contact Type</label>
                <div class="input-wrapper">
                    <select id="contactType" name="contactType">
                        <option value="">Select a category</option>
                        <option value="Project Collaboration">Project Collaboration</option>
                        <option value="Internship Opportunity">Internship Opportunity</option>
                        <option value="Research Discussion">Research Discussion</option>
                        <option value="Networking">Networking</option>
                        <option value="Other">Other</option>
                    </select>
                    <i class="fas fa-list input-icon"></i>
                    <div class="input-focus-border"></div>
                </div>
            </div>
            
            <div class="form-group">
                <label for="message">Your Message *</label>
                <div class="input-wrapper">
                    <textarea id="message" name="message" placeholder="Tell me about your project, opportunity, or just say hello! I'm excited to hear from you." rows="6" required></textarea>
                    <div class="input-focus-border"></div>
                </div>
                <div class="char-counter">
                    <span class="current-count">0</span>/500 characters
                </div>
            </div>
            
            <div class="form-submit">
                <button type="submit" class="btn btn-primary submit-btn">
                    <span class="btn-text">Send Message</span>
                    <span class="btn-icon"><i class="fas fa-paper-plane"></i></span>
                </button>
            </div>
        </form>

        <div class="form-status">
            <div class="status-indicator"></div>
            <span class="status-text">Ready to connect</span>
        </div>
    `;
    
    // Re-attach event listeners
    attachFormEventListeners();
}

// ========================================
// EXISTING WEBSITE FUNCTIONALITY
// ========================================

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 15, 35, 0.98)';
    } else {
        navbar.style.background = 'rgba(15, 15, 35, 0.95)';
    }
});

// Interactive Contact Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    
    // Character counter for message
    const messageTextarea = document.getElementById('message');
    const charCounter = document.querySelector('.char-counter .current-count');
    
    if (messageTextarea && charCounter) {
        messageTextarea.addEventListener('input', () => {
            const currentLength = messageTextarea.value.length;
            charCounter.textContent = currentLength;
            
            if (currentLength > 450) {
                charCounter.style.color = '#f87171';
            } else if (currentLength > 400) {
                charCounter.style.color = '#fbbf24';
            } else {
                charCounter.style.color = '#667eea';
            }
        });
    }
    
    // Contact info copy functionality
    const contactItems = document.querySelectorAll('.contact-item[data-tooltip]');
    contactItems.forEach(item => {
        item.addEventListener('click', () => {
            const value = item.querySelector('.contact-value').textContent;
            navigator.clipboard.writeText(value).then(() => {
                showNotification(`${value} copied to clipboard!`, 'success');
            }).catch(() => {
                showNotification('Failed to copy to clipboard', 'error');
            });
        });
    });
    
    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        const contactType = formData.get('contactType');
        
        if (!name || !email || !message) {
            showNotification('Please fill in all required fields', 'error');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        const submitBtn = this.querySelector('.submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const statusText = document.querySelector('.form-status .status-text');
        const statusIndicator = document.querySelector('.form-status .status-indicator');
        
        btnText.textContent = 'Sending...';
        submitBtn.disabled = true;
        statusText.textContent = 'Sending your message...';
        statusIndicator.style.background = '#fbbf24';
        
        // Submit to Formspree
        fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                showNotification('Thank you for your message! I will get back to you within 24 hours.', 'success');
                this.reset();
                
                // Show success message instead of form
                showSuccessMessage();
            } else {
                throw new Error('Failed to send message');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showNotification('Failed to send message. Please try again or contact me directly.', 'error');
            btnText.textContent = 'Send Message';
            submitBtn.disabled = false;
            statusText.textContent = 'Failed to send message';
            statusIndicator.style.background = '#f87171';
            
            setTimeout(() => {
                statusText.textContent = 'Ready to connect';
                statusIndicator.style.background = '#4ade80';
            }, 3000);
        });
    });
}



// Scroll Effects and Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Disable heavy runtime effects to improve scroll performance
function handleParallax() {}
function handleMouseMove() {}
function handleSectionTransitions() {}

// Observe elements for 3D animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.scroll-fade-in, .about-content, .portfolio-item, .blog-card, .timeline-item, .certificate-card');
    
    animatedElements.forEach(el => {
        el.classList.add('scroll-fade-in');
        observer.observe(el);
    });
    
    // Remove continuous listeners to avoid jank
});

// Portfolio item hover effects
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Blog card hover effects
document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Skill tags animation
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
});

// Removed hero parallax to improve performance

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Download functionality for portfolio items (skip real downloads)
document.querySelectorAll('.btn-outline:not(.real-download)').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const fileName = this.closest('.portfolio-content').querySelector('h3').textContent;
        alert(`Downloading ${fileName}...`);
    });
});

// Social media links
document.querySelectorAll('.social-links a, .social-links-contact a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Add tracking or analytics here if needed
        console.log('Social link clicked:', this.href);
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Certificate Modal Functionality
const certificateData = {
    python_ml: {
        title: "Fundamentals of Python for ML, Data Science & Web Development",
        organization: "iHUB DivyaSampark, IIT Roorkee",
        image: "python.jpg",
        details: {
            "Awarded to": "MD Zaid Alam",
            "Duration": "40 hrs",
            "Date": "07/04/2024"
        }
    },
    c_training: {
        title: "C Programming Training Completion",
        organization: "IIT Bombay - Spoken Tutorial Project",
        image: "c.jpg",
        details: {
            "Institution": "Government Engineering College Nawada",
            "Score": "80.00% (2 Credits)",
            "Date": "July 30, 2024"
        }
    },
    cyber_intern: {
        title: "Cyber Security Internship Completion",
        organization: "Prodigy InfoTech",
        image: "55.jpg", // Keep the image reference for modal display
        details: {
            "Duration": "15th May, 2025 – 15th June, 2025",
            "Date": "16/06/2025"
        }
    },
    tata_forage: {
        title: "Cybersecurity Analyst Job Simulation",
        organization: "Tata, Forage",
        image: "tata.jpg",
        details: {
            "Date of Issue": "May 10th, 2025",
            "Key learning": "IAM fundamentals, IAM strategy, crafting IAM solutions, and platform integration"
        }
    },
    bootcamp: {
        title: "Illuminate Entrepreneurship Bootcamp",
        organization: "E-Cell, IIT Bombay",
        image: "illuminate.jpg",
        details: {
            "Role": "Organizer, GEC Nawada",
            "Date": "29th November 2024"
        }
    },
    nec_top50: {
        title: "Top 50, National Entrepreneurship Challenge 2024 (Advanced Track)",
        organization: "E-Cell, IIT Bombay",
        image: "iib.jpg",
        details: {}
    },
    startup_summit: {
        title: "Startup & Business Summit 2025",
        organization: "GEC Nawada",
        image: "bihar.jpg",
        details: {
            "Date": "18th May 2025"
        }
    },
    ieee6g: {
        title: "IEEE International Symposium on 6G Mobile Wireless Communication",
        organization: "IIT Patna",
        image: "6g.jpg",
        details: {
            "Event": "Millimeter, Sub-Terahertz Antenna and System",
            "Dates": "June 2–3, 2025"
        }
    },
    pitch_deck: {
        title: "Pitch Deck Competition",
        organization: "Government Engineering College Nawada",
        image: "pitch.jpg",
        details: {
            "Date": "27th February 2024"
        }
    },
    induction_coordinator: {
        title: "Student Induction Program (2023–24) — Coordinator",
        organization: "Government Engineering College Nawada",
        image: "coordinator.jpg",
        details: {}
    },
    dist_science_fair: {
        title: "जिला स्तरीय विज्ञान मेला — Certificate of Recognition",
        organization: "",
        image: "nawadascience.jpg",
        details: {
            "Date": "27/10/2024"
        }
    },
    youth_festival: {
        title: "राज्य स्तरीय युवा उत्सव 2024, बिहार — Science Exhibition",
        organization: "Nawada",
        image: "projecr.jpg",
        details: {
            "Dates": "30 Nov–2 Dec 2024"
        }
    }
};

// Modal elements
const modal = document.getElementById('certificate-modal');
const modalImage = document.getElementById('modal-certificate-image');
const modalTitle = document.getElementById('modal-title');
const modalOrganization = document.getElementById('modal-organization');
const modalDetails = document.getElementById('modal-details');
const closeModal = document.querySelector('.close-modal');

// Open modal function
function openCertificateModal(certificateId) {
    const certData = certificateData[certificateId];
    if (!certData) return;

    // Set modal content
    modalImage.src = certData.image;
    modalImage.alt = certData.title;
    modalTitle.textContent = certData.title;
    modalOrganization.textContent = certData.organization;
    
    // Clear and populate details
    modalDetails.innerHTML = '';
    Object.entries(certData.details).forEach(([key, value]) => {
        const detailElement = document.createElement('p');
        detailElement.innerHTML = `<strong>${key}:</strong> ${value}`;
        modalDetails.appendChild(detailElement);
    });

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal function
function closeCertificateModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners for certificate cards
document.addEventListener('DOMContentLoaded', function() {
    // View certificate buttons
    const viewButtons = document.querySelectorAll('.view-certificate-btn');
    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const certificateCard = this.closest('.certificate-card');
            const certificateId = certificateCard.dataset.certificate;
            openCertificateModal(certificateId);
        });
    });

    // Close modal
    closeModal.addEventListener('click', closeCertificateModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeCertificateModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeCertificateModal();
        }
    });

    // Download certificate functionality (card and modal)
    function handleDownload(certId) {
        const certData = certificateData[certId];
        if (certData) {
            const link = document.createElement('a');
            link.href = certData.image;
            link.download = `${certData.title.replace(/\s+/g, '_')}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showNotification('Certificate downloaded successfully!', 'success');
        }
    }
    document.querySelectorAll('.download-certificate').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const certId = this.dataset.cert || this.closest('.certificate-card')?.dataset.certificate;
            handleDownload(certId);
        });
    });
    document.querySelector('.download-modal-certificate')?.addEventListener('click', function(e) {
        e.preventDefault();
        const src = modalImage.src;
        const certId = Object.keys(certificateData).find(id => certificateData[id].image === src.split('/').pop());
        if (certId) handleDownload(certId);
    });


});

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">&times;</button>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 10px;
        max-width: 300px;
        animation: slideInRight 0.3s ease;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Add notification animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
        padding: 0;
        margin-left: 10px;
    }
    .notification-content {
        display: flex;
        align-items: center;
        gap: 8px;
    }
`;
document.head.appendChild(style);

// Image loading optimization
function optimizeCertificateImages() {
    const certificateImages = document.querySelectorAll('.certificate-image img');
    certificateImages.forEach(img => {
        // Add loading animation
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.addEventListener('error', function() {
            this.style.opacity = '0.5';
            this.alt = 'Certificate image not available';
        });
    });
}
document.addEventListener('DOMContentLoaded', optimizeCertificateImages);

// Mobile-specific enhancements and optimizations
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Mobile-specific optimizations
    if (isMobile || isTouchDevice) {
        // Disable hover effects on mobile
        const hoverElements = document.querySelectorAll('.certificate-card, .portfolio-item, .timeline-content, .skill-tag, .btn');
        hoverElements.forEach(element => {
            element.style.transition = 'none';
        });
        
        // Add touch feedback for interactive elements
        const touchElements = document.querySelectorAll('.nav-link, .btn, .skill-tag, .certificate-card, .portfolio-item, .contact-item, .social-link');
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
                this.style.opacity = '0.8';
            });
            
            element.addEventListener('touchend', function() {
                this.style.transform = '';
                this.style.opacity = '';
            });
        });
        
        // Improve mobile navigation
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        
        // Close menu when clicking outside
        document.addEventListener('touchstart', function(e) {
            if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
        
        // Add swipe to close mobile menu
        let startX = 0;
        let startY = 0;
        
        navMenu.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });
        
        navMenu.addEventListener('touchmove', function(e) {
            if (!startX || !startY) return;
            
            const diffX = startX - e.touches[0].clientX;
            const diffY = startY - e.touches[0].clientY;
            
            if (Math.abs(diffX) > Math.abs(diffY) && diffX > 50) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                startX = 0;
                startY = 0;
            }
        });
        
        // Optimize scroll performance on mobile
        let ticking = false;
        function updateOnScroll() {
            if (!ticking) {
                requestAnimationFrame(() => {
                    // Update navbar background
                    const navbar = document.querySelector('.navbar');
                    if (window.scrollY > 100) {
                        navbar.style.background = 'rgba(15, 15, 35, 0.98)';
                    } else {
                        navbar.style.background = 'rgba(15, 15, 35, 0.95)';
                    }
                    
                    // Update active navigation
                    const sections = document.querySelectorAll('section[id]');
                    const navLinks = document.querySelectorAll('.nav-link');
                    
                    let current = '';
                    sections.forEach(section => {
                        const sectionTop = section.offsetTop;
                        const sectionHeight = section.clientHeight;
                        if (window.pageYOffset >= sectionTop - 200) {
                            current = section.getAttribute('id');
                        }
                    });
                    
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${current}`) {
                            link.classList.add('active');
                        }
                    });
                    
                    ticking = false;
                });
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', updateOnScroll, { passive: true });
        
        // Optimize form interactions on mobile
        const formInputs = document.querySelectorAll('input, textarea, select');
        formInputs.forEach(input => {
            // Prevent zoom on focus for iOS
            input.addEventListener('focus', function() {
                if (window.innerWidth <= 768) {
                    this.style.fontSize = '16px';
                }
            });
            
            // Restore font size on blur
            input.addEventListener('blur', function() {
                this.style.fontSize = '';
            });
        });
        
        // Improve mobile modal experience
        const modal = document.getElementById('certificate-modal');
        if (modal) {
            // Add touch gestures for modal
            let modalStartY = 0;
            
            modal.addEventListener('touchstart', function(e) {
                modalStartY = e.touches[0].clientY;
            });
            
            modal.addEventListener('touchmove', function(e) {
                if (!modalStartY) return;
                
                const diffY = e.touches[0].clientY - modalStartY;
                const modalContent = this.querySelector('.modal-content');
                
                if (diffY > 50) {
                    modalContent.style.transform = `translateY(${diffY}px)`;
                }
            });
            
            modal.addEventListener('touchend', function(e) {
                const diffY = e.changedTouches[0].clientY - modalStartY;
                const modalContent = this.querySelector('.modal-content');
                
                if (diffY > 100) {
                    closeCertificateModal();
                } else {
                    modalContent.style.transform = '';
                }
                
                modalStartY = 0;
            });
        }
        
        // Optimize certificate grid for mobile
        const certificateGrid = document.querySelector('.certificates-grid');
        if (certificateGrid && window.innerWidth <= 768) {
            certificateGrid.style.gridTemplateColumns = '1fr';
        }
        
        // Add pull-to-refresh prevention
        let refreshStartY = 0;
        document.addEventListener('touchstart', function(e) {
            refreshStartY = e.touches[0].clientY;
        }, { passive: true });
        
        document.addEventListener('touchmove', function(e) {
            if (window.scrollY === 0 && e.touches[0].clientY > refreshStartY) {
                e.preventDefault();
            }
        }, { passive: false });
        
        // Optimize images for mobile
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
            
            // Add lazy loading for mobile
            if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            if (img.dataset.src) {
                                img.src = img.dataset.src;
                                img.removeAttribute('data-src');
                            }
                            observer.unobserve(img);
                        }
                    });
                });
                
                imageObserver.observe(img);
            }
        });
        
        // Improve mobile button accessibility
        const buttons = document.querySelectorAll('.btn, .nav-link, .skill-tag');
        buttons.forEach(button => {
            button.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            });
            
            button.addEventListener('touchend', function() {
                this.style.transform = '';
            });
        });
        
        // Add mobile-specific smooth scrolling
        const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
        smoothScrollLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (navMenu.classList.contains('active')) {
                        hamburger.classList.remove('active');
                        navMenu.classList.remove('active');
                    }
                }
            });
        });
        
        // Optimize mobile form validation
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            const inputs = contactForm.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.addEventListener('blur', function() {
                    if (this.hasAttribute('required') && !this.value.trim()) {
                        this.style.borderColor = '#f87171';
                    } else {
                        this.style.borderColor = '';
                    }
                });
                
                input.addEventListener('input', function() {
                    if (this.style.borderColor === 'rgb(248, 113, 113)') {
                        this.style.borderColor = '';
                    }
                });
            });
        }
        
        // Add mobile-specific loading states
        window.addEventListener('load', function() {
            document.body.classList.add('mobile-loaded');
        });
        
        // Optimize mobile performance
        if ('serviceWorker' in navigator) {
            // Register service worker for better mobile performance
            navigator.serviceWorker.register('/sw.js').catch(function(err) {
                console.log('ServiceWorker registration failed: ', err);
            });
        }
        
        // Add mobile-specific CSS classes
        document.body.classList.add('mobile-device');
        
        // Optimize mobile animations
        const animatedElements = document.querySelectorAll('.scroll-fade-in');
        const mobileObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -20px 0px'
        });
        
        animatedElements.forEach(el => {
            mobileObserver.observe(el);
        });
    }
    
    // Add mobile-specific error handling
    window.addEventListener('error', function(e) {
        console.error('Mobile error:', e.error);
    });
    
    // Add mobile-specific performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData && perfData.loadEventEnd - perfData.loadEventStart > 3000) {
                    console.warn('Slow mobile load time detected');
                }
            }, 1000);
        });
    }
});

// Mobile-specific utility functions
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
}

function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

function optimizeForMobile() {
    if (isMobileDevice() || isTouchDevice()) {
        // Disable heavy animations
        const heavyAnimations = document.querySelectorAll('.float-animation, .card-3d');
        heavyAnimations.forEach(el => {
            el.style.animation = 'none';
            el.style.transform = 'none';
        });
        
        // Optimize images
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (img.src.includes('unsplash.com')) {
                img.src = img.src + '&w=400&q=80'; // Optimize for mobile
            }
        });
        
        // Reduce motion for accessibility
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.body.style.setProperty('--transition-duration', '0s');
        }
    }
}

// Call optimization function
document.addEventListener('DOMContentLoaded', optimizeForMobile);

// Mobile-specific event listeners
if (isMobileDevice() || isTouchDevice()) {
    // Prevent double-tap zoom on buttons
    const buttons = document.querySelectorAll('.btn, .nav-link');
    buttons.forEach(button => {
        button.addEventListener('touchend', function(e) {
            e.preventDefault();
            this.click();
        });
    });
    
    // Add mobile-specific keyboard handling
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('certificate-modal');
            if (modal && modal.style.display === 'block') {
                closeCertificateModal();
            }
            
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu && navMenu.classList.contains('active')) {
                document.querySelector('.hamburger').classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    });
}
