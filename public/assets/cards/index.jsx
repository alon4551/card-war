const cardsNames = [
    "2_of_clubs.svg",
    "2_of_diamonds.svg",
    "2_of_hearts.svg",
    "2_of_spades.svg",
    "3_of_clubs.svg",
    "3_of_diamonds.svg",
    "3_of_hearts.svg",
    "3_of_spades.svg",
    "4_of_clubs.svg",
    "4_of_diamonds.svg",
    "4_of_hearts.svg",
    "4_of_spades.svg",
    "5_of_clubs.svg",
    "5_of_diamonds.svg",
    "5_of_hearts.svg",
    "5_of_spades.svg",
    "6_of_clubs.svg",
    "6_of_diamonds.svg",
    "6_of_hearts.svg",
    "6_of_spades.svg",
    "7_of_clubs.svg",
    "7_of_diamonds.svg",
    "7_of_hearts.svg",
    "7_of_spades.svg",
    "8_of_clubs.svg",
    "8_of_diamonds.svg",
    "8_of_hearts.svg",
    "8_of_spades.svg",
    "9_of_clubs.svg",
    "9_of_diamonds.svg",
    "9_of_hearts.svg",
    "9_of_spades.svg",
    "10_of_clubs.svg",
    "10_of_diamonds.svg",
    "10_of_hearts.svg",
    "10_of_spades.svg",
    "ace_of_clubs.svg",
    "ace_of_diamonds.svg",
    "ace_of_hearts.svg",
    "ace_of_spades.svg",
    "jack_of_clubs.svg",
    "jack_of_diamonds.svg",
    "jack_of_hearts.svg",
    "jack_of_spades.svg",
    "king_of_clubs.svg",
    "king_of_diamonds.svg",
    "king_of_hearts.svg",
    "king_of_spades.svg",
    "queen_of_clubs.svg",
    "queen_of_diamonds.svg",
    "queen_of_hearts.svg",
    "queen_of_spades.svg",
]
export const extractCardsToArray = () => {
    let cardsInfo = []
    cardsNames.map((item) => {
        cardsInfo.push(getCardInfo(item))
    })
    return cardsInfo
}
const getCardInfo = (name) => {
    let card = {
        value: 0,
        path: name
    }
    name = name.split('_')
    switch (name[0]) {
        case 'ace':
            card.value = 1
            break
        case 'jack':
            card.value = 11
            break
        case 'queen':
            card.value = 12
            break
        case 'king':
            card.value = 13
            break
        default:
            card.value = Number(name[0])
            break
    }
    return card
}
export const shuffleCards = () => {
    let array = extractCardsToArray()
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
export const splitCards = (players, cards) => {
    let array = []
    for (let i = 0; i < players; i++)
        array.push([])
    for (let i = 0, j = 0; i < cards.length; i++, j++) {
        if (j >= array.length) j = 0
        array[j].push(cards[i])
    }
    console.log(array)
    return array
}
export const shuffledDeck = splitCards(2,shuffleCards())
export default () => { };
