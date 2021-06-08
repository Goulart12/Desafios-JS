/*var nota = 95

if (nota >= 90) {
    console.log("Nota A")
} else if (nota >= 80 && nota <= 89 ) {
    console.log("Nota B")
} else if (nota >= 70 && nota <= 79) {
    console.log("Nota C")
} else if (nota >= 60 && nota <= 69) {
    console.log("Nota D")
} else if (nota < 60) {
    console.log("Nota E")
}*/

/*var gastos = {
    receitas: [500, 200, 250.43, 360.45],
    despesas: [320.34, 128.45, 176.87, 1450.00]
}

function soma(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total;
}

function calcularGastos() {
    const calcularReceitas = soma(gastos.receitas);
    const calcularDespesas = soma(gastos.despesas);

    const total = calcularReceitas - calcularDespesas;

    if (total > 0) {
        console.log("A família está com as contas no azul.")
    } else if (total <= 0 ) {
        console.log("A família está com as contas no vermelho.")
    }
}

calcularGastos()*/

/*function transformarTemp(temp) {
    const celsiusExiste = temp.toUpperCase().includes('C')
    const fahrenheitExiste = temp.toUpperCase().includes('F')

    if (!celsiusExiste && !fahrenheitExiste) {
        throw new Error('Grau não identificado')
    }

    let updatedDegree = Number(temp.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C' 

    if (celsiusExiste) {
        updatedDegree = Number(temp.toUpperCase().replace("C", ""));
        formula = (celsius) => celsius * 9/5 + 32
        degreeSign = 'F' 
    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformarTemp('50F'))
    console.log(transformarTemp('10C'))
    transformarTemp('50Z')
} catch (error) {
    console.log(error.message)
}*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length

console.log(totalCategories)
for (let category of booksByCategory) {
    console.log('Total de livros de categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log('Total de autores: ', authors.length)
}
countAuthors();

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${author}:  ${books.join(", ")}`)
}
booksOfAuthor('Augusto Cury');