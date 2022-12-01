const booksCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segregos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Lecther",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos eficazes",
        author: "Covey",
      },
    ],
  },
];

const totalCategories = booksCategory.length;
console.log(totalCategories);

for (let category of booksCategory) {
  console.log("total de livros categoria ", category.category);
  console.log(category.books.length);
}

function countAuthors() {
  let authors = [];

  for (let category of booksCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) == -1) authors.push(book.author);
    }
  }

  console.log("total de autores", authors.length);
}

countAuthors();
