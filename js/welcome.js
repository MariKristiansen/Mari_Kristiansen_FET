// Toast when "Like"-button is clicked:
$("#liveToastBtn").click(function() {
    $("#liveToast").toast("show");
});


// GET Request when "I'm bored"-button is clicked:
$("#boredBtn").click(function() {
    $.ajax({
        url: 'https://www.boredapi.com/api/activity/',
        success: function(response) {
            console.log(response);
        }
    })
})