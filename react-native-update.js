fetch('http://graphql.ddns.net/v1alpha1/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({query: 'mutation {update_user(where: {id: {_eq: 5}},_set:{ nickname: "AurelieBuillet"} ){affected_rows returning{id firstname lastname password}}}'})
})
    .then(r => r.json())
    .then(data => console.log('data returned:', data));