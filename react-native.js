fetch('http://graphql.ddns.net/v1alpha1/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({query: "{ user {lastname} }"})
  })
    .then(r => r.json())
    .then(data => console.log('data returned:', data));