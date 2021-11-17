
$('#add_user').submit(function(event){
    alert("Date Inserted Successfully!")
})

$('#update_user').submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {};
    const PORT = process.env.PORT || 3000

    $.map(unindexed_array, function(n, i) {
        data[n['name']] = n['value']
    })
    
    var request = {
        "url" : `http://localhost:${PORT}/api/users/${data.id}`,
        "method": "PUT",
        "data": data
    } 

    $.ajax(request).done(function(response){
        alert("Date Updated Successfully!")
    })
})

if(window.location.pathname == '/') {
    $ondelete = $("table tbody td a.delete");
    $ondelete.click(function() {
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:${PORT}/api/users/${id}`,
            "method": "DELETE",
        } 

        if(confirm("Do you really want to delete this recoed?")) {
            $.ajax(request).done(function(response) {
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }
    })
}

$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});