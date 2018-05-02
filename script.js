$(document).ready(function(){
    $("#itemForm").click(function(){
        $.ajax({
            type: 'POST',
            data: {
                'grant_type': 'client_credentials'
            },
            url: "https://libcat.uncw.edu:443/iii/sierra-api/swagger/index.html/v5/token",
            headers: {
                   'Access-Control-Allow-Origin': '*'  
            },
            beforeSend: function (xhr) {
                console.log(btoa('3miCF6imUBMNpOyYq7zL/gc8aG+N' + ':' + 'freezeray'))
                xhr.setRequestHeader ("Authorization", "Basic " + btoa('3miCF6imUBMNpOyYq7zL/gc8aG+N' + ':' + 'freezeray'));
            },
            success: function(resultData) { 
                $('#titleSpan').html(resultData.title);
                console.log(JSON.stringify(resultData)); 
            }
        });
    });
});
