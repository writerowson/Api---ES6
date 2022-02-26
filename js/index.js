fetch('https://api.thedogapi.com/v1/breeds')
    .then(res => res.json)
    .then(data => console.log(data))