// const name = 'Pawełek'
// const imie = 'Piotrek Gilewicz'
// console.log(name)
// console.log(imie)
// //-------------------------------------
let age = 54
console.log(age)
// //--------------------------------------
let color = 'red'
console.log(color)
if (color == 'red') {
	console.log('kolor jet ok czyli czerwony')
} else {
	console.log('kolor jest zły')
}
// //-------------------------------------
// let dey = 'mondey'
// console.log(dey)
// // -----------------------------------------
// if (age == 54) {
// 	console.log('Masz 54 lata')
// } else if (age < 54) {
// 	console.log('jesteś małolat')
// } else {
// 	console.log('starszy')
// }
// // ---------------------------------------
// const wynik = 9
// if (wynik == 10) {
// 	console.log('wynik jest dokładnie 10')
// } else if (wynik < 10) {
// 	console.log(`wynik jest poniżej wartości 10 i wynosi: ${wynik} 💥`)
// } else {
// 	console.log(`jest dokładnie ${wynik} i jest to więcej niż 10`)
// }
// ---------------------------------------
// const promocja = '40'
// switch (promocja) {
// 	case '10':
// 		console.log('Promocja na dziś to 10%!😀')
// 		break
// 	case '20':
// 		console.log('Promocja na dziś to aż 20%!🤣😀')
// 		break
// 	case '30':
// 		console.log('Niesamowite promocja sięga aż 30%!😇😀😆')
// 		break
// 	default:
// 		console.log(`I stało się mamy ${promocja} zniżki tak trzymać 👍`)
// }
//----------------------------------------
// const animals = ['🫥', '😻', '👍', '👎']

// for (let i = 0; i < animals.length; i++) {
// 	console.log(animals[i])
// }
// console.log(animals)

// for (i = 0; i < 4; i++) {
// 	console.log(animals[i])
// }
// // ---------------------------------------------------
// const user = 'krzysztof'
// const newuser = user.toUpperCase() //zmiana na wielkie litery nowa zmienna newuser
// console.log(newuser)
// //----------------------------------------------------
const userName = 'krzysio'
const newuserName = userName.charAt(0).toUpperCase() + userName.slice(1)
console.log(newuserName)
//nowa zmienna newuserName, wyciąga 1 znak (k) i zamiana na dużą litere,
//dołącza pozostale od znak 2 (r)zmiennej userName
////--------------------------------------------------------

// /*
//         Metody do wykorzystania
// */
// const text1 = 'powiększ mnie!' //.toUpperCase()
// const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI' //.toLowerCase()
// const text3 = '$#%#^ wytnij te dziwne znaki na początku!' //.slice(5)
// const text4 = 'sprawdź, czy zawieram słowo "czy"' //.includes('czy)   wynik TRUE
// const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"' //.charAt(2)
// const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
// //.replaceAll('pies','kot') .replace ('pies') tylko pierwsze
// const text7 = 'podziel, ten, string, od, przecinków' //.split(',') utworzy tablice z 5 rekordami

// console.log(text1.toUpperCase())
// console.log(text2.toLowerCase())
// console.log(text3.slice(6))
// console.log(text4.includes('czy'))
// console.log(text5.charAt(2))
// console.log(text6.replaceAll('pies', 'kot'))
// console.log(text7.split(','))
