// const data = [
// 	{
// 		id: 1,
// 		title: "The Lord of the Rings",
// 		publicationDate: "1954-07-29",
// 		author: "J. R. R. Tolkien",
// 		genres: [
// 			"fantasy",
// 			"high-fantasy",
// 			"adventure",
// 			"fiction",
// 			"novels",
// 			"literature",
// 		],
// 		hasMovieAdaptation: true,
// 		pages: 1216,
// 		translations: {
// 			spanish: "El señor de los anillos",
// 			chinese: "魔戒",
// 			french: "Le Seigneur des anneaux",
// 		},
// 		reviews: {
// 			goodreads: {
// 				rating: 4.52,
// 				ratingsCount: 630994,
// 				reviewsCount: 13417,
// 			},
// 			librarything: {
// 				rating: 4.53,
// 				ratingsCount: 47166,
// 				reviewsCount: 452,
// 			},
// 		},
// 	},
// 	{
// 		id: 2,
// 		title: "The Cyberiad",
// 		publicationDate: "1965-01-01",
// 		author: "Stanislaw Lem",
// 		genres: [
// 			"science fiction",
// 			"humor",
// 			"speculative fiction",
// 			"short stories",
// 			"fantasy",
// 		],
// 		hasMovieAdaptation: false,
// 		pages: 295,
// 		translations: {},
// 		reviews: {
// 			goodreads: {
// 				rating: 4.16,
// 				ratingsCount: 11663,
// 				reviewsCount: 812,
// 			},
// 			librarything: {
// 				rating: 4.13,
// 				ratingsCount: 2434,
// 				reviewsCount: 0,
// 			},
// 		},
// 	},
// 	{
// 		id: 3,
// 		title: "Dune",
// 		publicationDate: "1965-01-01",
// 		author: "Frank Herbert",
// 		genres: ["science fiction", "novel", "adventure"],
// 		hasMovieAdaptation: true,
// 		pages: 658,
// 		translations: {
// 			spanish: "",
// 		},
// 		reviews: {
// 			goodreads: {
// 				rating: 4.25,
// 				ratingsCount: 1142893,
// 				reviewsCount: 49701,
// 			},
// 		},
// 	},
// 	{
// 		id: 4,
// 		title: "Harry Potter and the Philosopher's Stone",
// 		publicationDate: "1997-06-26",
// 		author: "J. K. Rowling",
// 		genres: ["fantasy", "adventure"],
// 		hasMovieAdaptation: true,
// 		pages: 223,
// 		translations: {
// 			spanish: "Harry Potter y la piedra filosofal",
// 			korean: "해리 포터와 마법사의 돌",
// 			bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
// 			portuguese: "Harry Potter e a Pedra Filosofal",
// 		},
// 		reviews: {
// 			goodreads: {
// 				rating: 4.47,
// 				ratingsCount: 8910059,
// 				reviewsCount: 140625,
// 			},
// 			librarything: {
// 				rating: 4.29,
// 				ratingsCount: 120941,
// 				reviewsCount: 1960,
// 			},
// 		},
// 	},
// 	{
// 		id: 5,
// 		title: "A Game of Thrones",
// 		publicationDate: "1996-08-01",
// 		author: "George R. R. Martin",
// 		genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
// 		hasMovieAdaptation: true,
// 		pages: 835,
// 		translations: {
// 			korean: "왕좌의 게임",
// 			polish: "Gra o tron",
// 			portuguese: "A Guerra dos Tronos",
// 			spanish: "Juego de tronos",
// 		},
// 		reviews: {
// 			goodreads: {
// 				rating: 4.44,
// 				ratingsCount: 2295233,
// 				reviewsCount: 59058,
// 			},
// 			librarything: {
// 				rating: 4.36,
// 				ratingsCount: 38358,
// 				reviewsCount: 1095,
// 			},
// 		},
// 	},
// ]

// function getBooks() {
// 	return data
// }

// function getBook(id) {
// 	return data.find(d => d.id === id)
// }

// const books = getBooks()

// // // const title = book.title
// // // const author = book.author

// // const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
// // 	book

// // console.log(author, title, genres)

// // // const primaryGenres = genres[0]
// // // const secondaryGenres = genres[1]

// // const [primaryGenres, secondaryGenres, ...otherGenres] = genres

// // console.log(primaryGenres, secondaryGenres, otherGenres)

// // const newGenres = [...genres, "test"]
// // console.log(newGenres)

// // const updatedBook = { ...book, moviePublicationDate: "2001-12-19", pages: 1201 }
// // updatedBook

// // const getYear = date => date.split("-")[0]
// // const result = getYear(publicationDate)
// // result

// // const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${result}`

// // summary

// // const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000"
// // pagesRange

// // // function getYear(date){
// // // 	return date.split('-')[0]
// // // }

// // console.log(true && "some string")

// // console.log(false && "some string")

// // console.log(true || "some string")

// // console.log(false || "some string")

// // console.log(hasMovieAdaptation && "this book has a movie")

// // console.log("jonas" && "some string")
// // console.log(0 && "some string")

// // console.log(book.translations.spanish)

// // const spanishTranslation = book.translations.spanish || "not translated"
// // spanishTranslation

// // // console.log(book.reviews.librarything.reviewsCount)

// // const countWrong = "no data"

// // // const count = book.reviews.librarything.reviewsCount ?? countWrong

// // // count

// function getTotalReviewsCount(book) {
// 	const goodreads = book.reviews?.goodreads.reviewsCount
// 	goodreads
// 	const librarything = book.reviews?.librarything?.reviewsCount ?? 0
// 	return goodreads + librarything
// }
// // console.log(getTotalReviewsCount())

// const x = [1, 2, 3, 4, 5].map(el => el * 2)
// console.log(x)

// const titles = books.map(book => book.title)

// titles

// const essentialData = books.map(book => ({
// 	title: book.title,
// 	author: book.author,
// 	reviewsCount: getTotalReviewsCount(book),
// }))
// essentialData

// const numberedBooks = books.map((book, index) => {
// 	return `${index + 1}. ${book.title}`
// })
// numberedBooks

// const thickBooksWithMovie = books
// 	.filter(book => book.pages > 500)
// 	.filter(book => book.hasMovieAdaptation)
// thickBooksWithMovie

// const adventureBooks = books
// 	.filter(book => book.genres.includes("adventure"))
// 	.map(book => book.title)
// adventureBooks

// const sumAllPages = books.reduce((acc, cur) => {
// 	return (acc += cur.pages)
// }, 0)

// sumAllPages

// const numbers = [3, 7, 1, 9, 6]

// const sorted = numbers.slice().sort((a, b) => a - b)
// sorted
// numbers

// const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages)
// sortedByPages

// // 1) Add book object to array

// const newBook = {
// 	id: 6,
// 	title: "Harry Potter and the Chamber of Secrets",
// 	author: "J.K. Rowling",
// }

// const booksAfterAdd = [...books, newBook]
// booksAfterAdd

// // 2) Delete book object from array

// const booksAfterDelete = booksAfterAdd.filter(book => book.id !== 3)
// booksAfterDelete

// // 3) Update book object in the array

// const bookAfterUpdate = booksAfterDelete.map(book =>
// 	book.id === 2
// 		? { ...book, genres: book.genres.filter(genre => genre !== "fantasy") }
// 		: book
// )

// bookAfterUpdate

// fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json()).then(data => console.log(data))

// console.log("Monika")


async function getTodos() {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos");
	const data = await res.json()
	return data
}

const todos = getTodos()
console.log(todos);