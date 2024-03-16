 // SignIn Form Validation
$(document).ready(function () 
{
    $("#signin-form").submit(function (event) 
    {
        event.preventDefault();
        var username = $("#signin-username").val().trim();
        var password = $("#signin-password").val().trim();

        if (username === "") 
        {
            $("#signin-username-error").text("Username is required");
        } 
        else 
        {
            $("#signin-username-error").text("");
        }

        if (password === "") 
        {
            $("#signin-password-error").text("Password is required");
        } 
        else 
        {
            $("#signin-password-error").text("");
        }

         // All validations are okay, submit the form
        if ($("#signin-username-error").text() === "" && $("#signin-password-error").text() === "") 
        {
            // Test Cases
            console.log("SignIn Form submitted successfully!");
            console.log("Username:", username);
            console.log("Password:", password);
            alert("SignIn Form submitted successfully!");
           // this.submit(); // Send data to server in URL
        }
    });


    // SignUp Form Validation
    $("#signup-form").submit(function (event) 
    {
        event.preventDefault();
        var username = $("#signup-username").val().trim();
        var password = $("#signup-password").val().trim();
        var email = $("#signup-email").val().trim();
        var age = $("#signup-age").val().trim();
        var phone = $("#signup-phone").val().trim();
        var address = $("#signup-address").val().trim();
        var city = $("#signup-city").val().trim();
        var country = $("#signup-country").val().trim();

        if (username === "") 
        {
            $("#signup-username-error").text("Username is required");
        } 
        else
        {
            $("#signup-username-error").text("");
        }

        if (password === "")
        {
            $("#signup-password-error").text("Password is required");
        } 
        else 
        {
            $("#signup-password-error").text("");
        }

        if (email === "") 
        {
            $("#signup-email-error").text("Email is required");
        } 
        else 
        {
            $("#signup-email-error").text("");
        }

        if (age === "") 
        {
            $("#signup-age-error").text("Age is required");
        } 
        else if (isNaN(age) || age <= 0 || age > 150) 
        {
            $("#signup-age-error").text("Invalid age");
        } 
        else 
        {
            $("#signup-age-error").text("");
        }

        if (phone === "") 
        {
            $("#signup-phone-error").text("Phone number is required");
        } 
        else 
        {
            $("#signup-phone-error").text("");
        }

        if (address === "") 
        {
            $("#signup-address-error").text("Address is required");
        } 
        else 
        {
            $("#signup-address-error").text("");
        }

        if (city === "") 
        {
            $("#signup-city-error").text("City is required");
        } 
        else 
        {
            $("#signup-city-error").text("");
        }

        if (country === "") 
        {
            $("#signup-country-error").text("Country is required");
        } 
        else 
        {
            $("#signup-country-error").text("");
        }

        // All validations are okay, submit the form
        if ($("#signup-username-error").text() === "" && $("#signup-password-error").text() === "" && $("#signup-email-error").text() === "" && $("#signup-age-error").text() === "" && $("#signup-phone-error").text() === "" && $("#signup-address-error").text() === "" && $("#signup-city-error").text() === "" && $("#signup-country-error").text() === "") {
            
            // Test Cases
            console.log("SignUp Form submitted successfully!");
            console.log("Username:", username);
            console.log("Password:", password);
            console.log("Email:", email);
            console.log("Age:", age);
            console.log("Phone:", phone);
            console.log("Address:", address);
            console.log("City:", city);
            console.log("Country:", country);
            alert("SignUp Form submitted successfully!");
            // this.submit(); // Send data to server in URL
        }
    });
});

