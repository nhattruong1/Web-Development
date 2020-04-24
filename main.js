$.ajax({
    dataType: 'json',
    url: 'http://demo6370041.mockable.io/getcourses',
    async: true,
    success: function ({ data }) {
      var table = document.getElementById('myTable');
      data.forEach((el) => {
        var row = `<tr class="header" onclick = "functionX(${el.id})">
                              <td>${el.id}</td>
                              <td>${el.name}</td>
                          </tr>
                          <tr>
                              <td colspan = "2" class = "val${el.id}"></td>
                          </tr>`;
        table.innerHTML += row;
        $('tr.header').click(function () {
          $(this)
            .nextUntil('tr.header')
            .css('display', function (i, v) {
              return this.style.display === 'table-row' ? 'none' : 'table-row';
            });
        });
      });
      // for (var i = 0; i <= result.data.length; i++) {
      //   console.log(result.data[i].id);
      //   var row = `<tr class="header" onclick = "functionX(${result.data[i].id})">
      //                         <td>${result.data[i].id}</td>
      //                         <td>${result.data[i].name}</td>
      //                     </tr>
      //                     <tr>
      //                         <td colspan = "2" class = "val${result.data[i].id}"></td>
      //                     </tr>`;
      //   table.innerHTML += row;
      //   $('tr.header').click(function () {
      //     $(this)
      //       .nextUntil('tr.header')
      //       .css('display', function (i, v) {
      //         return this.style.display === 'table-row' ? 'none' : 'table-row';
      //       });
      //   });
      // }
    },
    complete: function () {
        pageSize = 5;
  var pageCount =  $(".header").length / pageSize;
   for(var i = 0 ; i<pageCount;i++){
  
     $("#pagin").append('<li><a>'+(i+1)+'</a></li> ');
   }
      $("#pagin li").first().find("a").addClass("current")
  showPage = function(page) {
      $(".header").hide();
      $(".header").each(function(n) {
          if (n >= pageSize * (page - 1) && n < pageSize * page)
              $(this).show();
      });
  }
  
  showPage(1);
  
  $("#pagin li a").click(function() {
      $("#pagin li a").removeClass("current");
      $(this).addClass("current");
      showPage(parseInt($(this).text()))
  });;
    },
  });
  function functionX(x) {
    $.ajax({
      dataType: 'json',
      url: 'http://demo6370041.mockable.io/course/' + x,
      async: true,
      beforeSend: function () {
        $('.val' + x).text('loading....');
      },
      success: function (result) {
        var text = $('.val' + x).text(
          'Description: ' +
            result.description +
            '\n\n' +
            'Textbook: ' +
            result.textbook
        );
        text.html(text.html().replace(/\n/g, '<br/>'));
      },
      complete: function () {
        //after completed request then this method will be called.
        console.log('done');
      },
    });
  }
  
  