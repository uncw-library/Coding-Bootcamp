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
                xhr.setRequestHeader ("Authorization", "Basic " + btoa('3miCF6imUBMNpOyYq7zL/gc8aG+N' + ':' + 'freezeray'));
            },
            success: function(resultData) { 
                $('#titleSpan').html(resultData.title);
                console.log(JSON.stringify(resultData)); 
            }
        });
    });
});
