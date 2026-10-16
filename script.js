const addBtn = document.querySelector("#addBtn")
const cardContainer = document.querySelector("#cardContainer")
const cardCount = document.querySelector("#cardCount")


let cardNum = 0;
let cardCountNum = 0;

addBtn.addEventListener('click', function () {


    // create button
    const card = document.createElement("div");

    card.classList.add("card");

    cardNum++;
    card.textContent = `Card ${cardNum}`
    cardCountNum++;

    // delete buttonn

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'X';


    card.append(deleteBtn);

    deleteBtn.addEventListener('click', function () {

        cardCountNum--;
        cardCount.textContent = `Cards: ${cardCountNum}`;
        card.remove();
    })


    // counter part

    cardCount.textContent = `Cards: ${cardCountNum}`;



    // appending card into container
    cardContainer.append(card);
})



