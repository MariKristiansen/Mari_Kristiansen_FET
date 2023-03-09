$(document).ready(function() {
    $("#changeInfo").click(function() {
        // Store user input in the three variables:
        var email;
        var telephone_number;
        var address;
        

        //I would have preferred if the email prompt returned null when cancelled, like the telephone_number and address prompt, but I had to compromise.. 
        while (true) {
            email = prompt("Please enter your email:");
            if (email.includes("@") && email.includes(".")){
                break;
            } alert("You must enter a valid email address.");
        }

        while (true) {
            telephone_number = prompt("Please enter your telephone number:");
            if (!isNaN(telephone_number) && telephone_number != "") {
                break;
            } alert("You must enter a vaild telephone number.");
        }

        while (true) {
            address = prompt("Please enter you address:");
            if (address != "") {
                break;
            } alert("You must enter an address.");
        }


        // Change current contact info with the input data from the variables:
        $(".text-muted").text(function() {
            return $(this).text().replace("1-123-456-789", telephone_number);
        });

        $(".text-muted").text(function() {
            return $(this).text().replace("me@fakemail.com", email);
        });
                // The used replace() method didn't overwrite the whole text (maybe because the address in the HTML file is in two lines?). So I had to use the replace method twice.
        $(".text-muted").text(function() {
            return $(this).text().replace("1445 West Norwood Avenue in", address);
        })
        $(".text-muted").text(function() {
            return $(this).text().replace("Itasca, Illinois", "");
        })


        // Print the data in the console:
        console.log("From: " + email);
        console.log("Contact: " + telephone_number);
        console.log("Address: " + address);
    });
});
