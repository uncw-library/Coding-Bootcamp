$(document).ready(function(){
    $("#itemForm").click(function(){
        $.ajax({
            type: 'POST',
            url: "https://libcat.uncw.edu/iii/sierra-api/swagger/index.html/v5/token",
            headers: {
                   'Access-Control-Allow-Origin': '*',
                   'Access-Control-Request-Method': 'POST'            
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader ("Authorization", "Basic M21pQ0Y2aW1VQk1OcE95WXE3ekwvZ2M4YUcrTjpmcmVlemVyYXk=");
            },
            success: function(resultData) { 
                $('#titleSpan').html(resultData.title);
                console.log(JSON.stringify(resultData)); 
            }
        });
    });
});
