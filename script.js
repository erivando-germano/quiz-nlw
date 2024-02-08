const perguntas = [
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        respostas: [
            "var",
            "let",
            "const",
        ],
        correta: 2
    },
    {
        pergunta: "Qual função é usada para imprimir algo no console?",
        respostas: [
            "log()",
            "print()",
            "console.log()",
        ],
        correta: 2
    },
    {
        pergunta: "Qual operador é usado para comparar igualdade de valor e tipo em JavaScript?",
        respostas: [
            "==",
            "===",
            "!=",
        ],
        correta: 1
    },
    {
        pergunta: "Qual dessas estruturas de controle é usada para executar um bloco de código se uma condição for verdadeira?",
        respostas: [
            "if",
            "for",
            "while",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o método usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "add()",
            "append()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
        respostas: [
            "parseInt()",
            "stringToInt()",
            "toInteger()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "pop()",
            "removeLast()",
            "deleteLast()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual operador lógico é usado para negar uma expressão booleana em JavaScript?",
        respostas: [
            "&&",
            "||",
            "!",
        ],
        correta: 2
    },
    {
        pergunta: "Qual estrutura de dados é usada para armazenar uma coleção de elementos não ordenados e únicos em JavaScript?",
        respostas: [
            "Array",
            "Object",
            "Set",
        ],
        correta: 2
    },
    {
        pergunta: "Qual método é usado para concatenar dois ou mais arrays em JavaScript?",
        respostas: [
            "concat()",
            "merge()",
            "join()",
        ],
        correta: 0
    },
];

const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector("#acertos span");
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// Loop para criar as questões
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector("h3").textContent = item.pergunta;

    // Loop para criar as respostas

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector("dl dt").cloneNode(true);
        dt.querySelector("span").textContent = resposta;
        dt.querySelector("input").setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
        dt.querySelector("input").value = item.respostas.indexOf(resposta);


        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta;

            corretas.delete(item);
            if(estaCorreta) {
                corretas.add(item);
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }


        quizItem.querySelector("dl").appendChild(dt);
    }


    // remove a resposta correta
    quizItem.querySelector('dl dt').remove();


    // coloca as perguntas na tela
    quiz.appendChild(quizItem);
}