$(document).ready(function(){
    $("#itemForm").click(function(){
        $.ajax({
            type: 'POST',
            url: "https://libcat.uncw.edu:443/iii/sierra-api/v5/token",
            headers: {'Authorization': 'Basic M21pQ0Y2aW1VQk1OcE95WXE3ekwvZ2M4YUcrTjpmcmVlemVyYXk='},
            success: function(resultData) { 
                $('#titleSpan').html(resultData.title);
                console.log(JSON.stringify(resultData)); 
            }
        });
    });
});
