$.ajax({
    type: "GET",
    url: 'https://jsonplaceholder.typicode.com/todos/',
    dataType: 'json',
    success: function (obj) {
  
            $('#example').DataTable({
                data: obj,
                columns: [
                    { data: "id" },
                    { data: "title" },
                    { data: "completed"},
                    { data: "id" , render : function ( data ) {
                        return "<button onclick = display(" + data + "); style='background-color:green; color: white; padding: 5px 20px 5px 20px; border: none; border-radius: 10px;'>View Details</button>";
                    }}
                ]
            });
    },
    error: function (obj) {
        alert(obj.msg);
    }
});
function display(id) {
    $.ajax({
        type: "GET",
        url: 'https://jsonplaceholder.typicode.com/todos/'+ id +'',
        dataType: 'json',
        datasrc: '',
        success: function (obj) {
            document.getElementById("d").innerText = "Details for the selected row are below...";
            document.getElementById("uId").innerText = "UserId: " + obj.userId + "";
            document.getElementById("Id").innerText = "Id: " + obj.id + "";
            document.getElementById("Title").innerText = "Title: " + obj.title + "";
            document.getElementById("Completed").innerText = "Completed: " + obj.completed + "";
        }
        ,
            error: function (obj) {
                alert(obj.msg);
            }               
        });
}
