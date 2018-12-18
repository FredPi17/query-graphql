$.ajax({
    method: "POST",
    url: "http://graphql.ddns.net/v1alpha1/graphql",
    dataType: "json",
    contentType: "application/json",
    data: '{ "query": "{ user{ id lastname firstname } }" }',
    success: function(data) {
      console.log(data);
      //do something when request is successfull
    }
  });