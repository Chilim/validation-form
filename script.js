$(function() {
    
    $.validator.addMethod("strongPassword", function(value, element) {
        return value.length >=7;
    }, "<em>Please enter a password that contains at least 7 characters</em>");
    
    $.validator.addMethod("correctFirstName", function(value, element) {
        return value.length >=2;
    }, "<em>Please write your first name that contains at least 2 characters</em>");
    
    
    $("#register-form").validate({    
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                strongPassword: true
            },
            firstName: {
                required: true,
                correctFirstName: true
            },
            lastName: {
                required: true,  
            }
        },
        messages: {
            email: {
                required: "   <em>Please write down an email address</em>",
                email: "   <em>Please write down a valid email address</em>"
            },
            password: {
                required: "  <em>Please enter your password</em>",
            },
            firstName: {
                required: "   <em>Please write down your first name</em>",
            },
            lastName: "  <em>Please write down your last name</em>"
            
        }
    });
});

