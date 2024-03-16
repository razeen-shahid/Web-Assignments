// Contact Form Validation
document.addEventListener("DOMContentLoaded", function() 
{
    console.log("DOM Working!") // Test Case 
    const form = document.querySelector(".contact__form");

    form.addEventListener("submit", function(event) 
    {
        event.preventDefault(); 
        console.log("Your form has been submitted"); // Test Case

        const nameInput = document.querySelector(".contact__input[name='name']");
        const emailInput = document.querySelector(".contact__input[name='email']");
        const messageInput = document.querySelector(".contact__input[name='message']");
        let isValid = true;

        if (nameInput.value.trim() === "") 
        {
            isValid = false;
            displayError(nameInput, "Name is required.");
        } else 
        {
            removeError(nameInput);
        }
        
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(emailInput.value.trim())) 
        {
            isValid = false;
            displayError(emailInput, "Please enter a valid email address.");
        } else 
        {
            removeError(emailInput);
        }
        
        if (messageInput.value.trim() === "") 
        {
            isValid = false;
            displayError(messageInput, "Message is required.");
        } else 
        {
            removeError(messageInput);
        }
        
        // Now Submit if all okay
        if (isValid)
        {
        
            form.submit();
            alert("Form submitted successfully!");
        }
    });

    function displayError(input, message) 
    {
        const errorElement = document.createElement("p");
        errorElement.textContent = message;
        errorElement.classList.add("error-message");

        const parent = input.parentElement;
        parent.appendChild(errorElement);
    }

    function removeError(input) 
    {
        const parent = input.parentElement;
        const error = parent.querySelector(".error-message");
        if (error) 
        {
            parent.removeChild(error);
        }
    }
});


// Smooth Scrolling for Anchor Links
document.addEventListener('DOMContentLoaded', function () 
{
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(anchorLink => 
        {
        anchorLink.addEventListener('click', function (e) 
        {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) 
            {
                const yOffset = -80; // Header Height
                const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        });
    });
});



// Toggle Navigation Menu for Responsiveness
document.addEventListener('DOMContentLoaded', function () 
{
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) 
    {
        navToggle.addEventListener('click', function () 
        {
            navMenu.classList.toggle('show');
        });
    }
});

// Scroll to the top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.setAttribute('id', 'scrollToTopBtn');
scrollToTopBtn.classList.add('scroll-top-btn');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.style.display = 'none'; // Initially hide the button

document.body.appendChild(scrollToTopBtn);
window.addEventListener('scroll', toggleScrollToTopBtn);

function toggleScrollToTopBtn() 
{
    if (window.pageYOffset > 300) 
    {
        scrollToTopBtn.style.display = 'block';
    } 
    else 
    {
        scrollToTopBtn.style.display = 'none';
    }
}

scrollToTopBtn.addEventListener('click', scrollToTop);

function scrollToTop() 
{
    window.scrollTo
    ({
        top: 0,
        behavior: 'smooth'
    });
}

