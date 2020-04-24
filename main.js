$.ajax({ 
    dataType: "json",
    url: "http://demo6370041.mockable.io/getcourses",
    async: true,
    success: function(result) {
        function buildTable(data){
            var table = document.getElementById('myTable')
            for (var i = 0; i <= data.length; i++){
                var row = `<tr class="header" onclick = "functionX(${data[i].id})">
                                <td>${data[i].id}</td>
                                <td>${data[i].name}</td>
                            </tr>
                            <tr>
                                <td colspan = "2" class = "val${data[i].id}"></td>
                            </tr>
                            `
                table.innerHTML += row
                $('tr.header').click(function(){
                    $(this).nextUntil('tr.header').css('display', function(i,v){
                        return this.style.display === 'table-row' ? 'none' : 'table-row';
                    });
                });
            }
        }
        buildTable(result.data)
    }              
});
function functionX(x){
    $.ajax({ 
        dataType: "json",
        url: "http://demo6370041.mockable.io/course/"+x,
        async: true,
        beforeSend: function() {
            $('.val'+x).text('loading....')
        },
        success: function(result) {
            var text = $('.val'+x).text("Description: "+result.description +'\n\n'+"Textbook: " +result.textbook)
            text.html(text.html().replace(/\n/g,'<br/>'));
        }                     
    });
}

// Pagination
