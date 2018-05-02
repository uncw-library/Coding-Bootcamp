$(document).ready(function(){
    $("#itemForm").click(function(){
        $.ajax({
            url: "https://libcat.uncw.edu/iii/sierra-api/v5/token",
            headers: {'Access-Control-Allow-Origin': '*'},
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
