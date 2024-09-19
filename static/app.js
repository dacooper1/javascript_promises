// // PART ONE 

// let numbersBaseUrl =  'http://numbersapi.com/'
let cardsBaseURL = 'https://deckofcardsapi.com/api/deck';
// // // 1
// // $.getJSON(`${numbersBaseUrl}7?json`).then(data => {
// //     console.log(data)
// // })

// // //2 
// // $.getJSON(`${numbersBaseUrl}0..3`).then(batchData => {
// //     console.log(batchData)
// // })

// // //3
// // let promiseArray = []
// // for (let i = 0; i <=3; i++) {
// //     promiseArray.push($.getJSON(`${numbersBaseUrl}7?json`))
// // }

// // Promise.all(promiseArray).then(data => {
// //     data.forEach( resp => console.log(resp))
// // })


// // PART TWO


// //1 
// let drawOneCard = `https://deckofcardsapi.com/api/deck/new/draw/?count=1`
// $.getJSON(drawOneCard).then(data => {
//     console.log(`${data.cards[0].value} of ${data.cards[0].suit}`)
// })

// //2
// let firstDraw = undefined;
//   $.getJSON(`${cardsBaseURL}/new/draw/?count=1`)
//     .then(data => {
//       firstDraw = data.cards[0];
//       let deckId = data.deck_id;
//       return $.getJSON(`${cardsBaseURL}/${deckId}/draw/?count=1`);
//     })
//     .then(data => {
//       let secondDraw = data.cards[0];
//       [firstDraw, secondDraw].forEach(card => {
//         console.log(
//           `${card.value} of ${card.suit}`
//         );
//       });
//     });

    // I sometimes get the wrong output, such as, SPADES of DIAMONDS

//3
let deckId;

$(document).ready(function () {
    $.getJSON(`${cardsBaseURL}/new/draw/?count=1`)
    .then(data => {
      deckId = data.deck_id;
      console.log(deckId)
    })
})

function drawCard() {
    $.getJSON(`${cardsBaseURL}/${deckId}/draw/?count=1`).then( resp => {
        let card = (resp.cards[0])
        displayCard(card)
    })

}

function displayCard(card){
    if (!card) {
        $('img').remove()
        $('#cardContainer').html('<h2> All cards have been drawn </h2>')
    } 
    else {
    $('img').attr('src',card.image).attr('alt',card.value + 'of' + card.suit)
    }
}

$('#newCard').on('click', drawCard)





