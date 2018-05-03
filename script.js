$(document).ready(function(){
    $("#itemForm").click(function(){
        var barcode = $('#barcode').val();
        $.ajax({
            method: 'GET',
            url: "https://item-lookup.libapps.uncw.edu/" + barcode,
            success: function(resultData) { 
                $('#titleSpan').html(resultData);
                console.log(JSON.stringify(resultData)); 
            },
            error: function(err){
                console.log(JSON.stringify(err));
            }
        });
    });
});
