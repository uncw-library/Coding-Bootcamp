$(document).ready(function(){
    $("#itemForm").click(function(){
        var barcode = $('#barcode').val();
        console.log(barcode);
        $.ajax({
            method: 'GET',
            url: "https://item-lookup.libapps.uncw.edu/" + barcode,
            success: function(resultData) { 
                console.log(resultData);
                if (resultData.bib_record) {
                    $('#titleSpan').html(resultData.bib_record.title);
                    $('#authorSpan').html(resultData.bib_record.author);
                    $('#callNumberSpan').html(resultData.item_record.callNumber);
                    $('#statusSpan').html(resultData.item_record.status.display);
                    $('#locationSpan').html(resultData.item_record.location.name);
                }
                //$('#statusSpan').html(resultData.status.display);
            },
            error: function(err){
                console.log(JSON.stringify(err));
            }
        });
    });
});
