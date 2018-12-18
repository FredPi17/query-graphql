$.ajax({
    method: "POST",
    url: "http://graphql.ddns.net/console/",
    dataType: "JSON",
    contentType: 'application/graphql',
    data: '{ "user" { "lastname" } }',
    success: function(data) {
      console.log(data);
      //do something when request is successfull
    }
  });