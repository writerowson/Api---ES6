// btn event handler setup
// get input value
// error handing for string
// video 1:43;36

const main = document.getElementById("main");
const searchButton = () => {
    const input = document.getElementById('input-value');
    const error = document.getElementById('error')

    const inputValue = parseInt(input.value);

    if (isNaN(inputValue) || inputValue === "") {
        // alert('plz input a number')
        error.innerText = 'plz input a number'
        input.value = ''
        main.innerHTML = ''
    }
    else if (inputValue <= 0) {
        error.innerText = 'plz input a positive number';
        input.value = ''
        main.innerHTML = ''
    }
    else {
        main.innerHTML = ""
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
            .then(res => res.json())
            .then(data => carddisplay(data.cards));
        input.value = ''
        main.innerHTML = ''
    }
}

const carddisplay = (cards) => {

    for (let card of cards) {
        console.log(card.code)
        const div = document.createElement("div");
        // div.className = "col-lg-4"
        div.className = "mb-5"
        div.className = "mt-5"
        div.classList.add("col-lg-4")
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${card.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${card.suit}</h5>
                <p class="card-text">${card.code}</p >
                <button onclick="cardDetails('${card.code}')" class="btn btn-primary">See Details</button>
        </div >
    `;
        main.appendChild(div)
    }
}

const cardDetails = (code) => {
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
        .then(res => res.json())
        .then(data => {
            const allcCards = data.cards;
            const singleCard = allcCards.find(card => card.code === code)
            const div = document.createElement("div")
            main.innerHTML = ""
            div.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img src="${singleCard.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${singleCard.suit}</h5>
                <p class="card-text">${singleCard.code}</p >

            </div >
            `
            main.appendChild(div)

        })
}

