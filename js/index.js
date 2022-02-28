function loadDog() {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data => displayDog(data))
}
// loadDog()
const displayDog = (doglist) => {
    const main = document.getElementById('main');
    const first10Data = doglist.slice(10, 15);

    for (const dog of first10Data) {
        const div = document.createElement('div');
        div.className = "col-lg-4"
        div.innerHTML = `
            <h1>${dog.name}</h1>;
            <p>${dog.temperament}</p>;
            <h4>${dog.weight.imperial}</h4>
            <img width="400px" height="250px" src="${dog.image.url}"/>
            `
        main.appendChild(div)
    }
}