let nome = prompt("Qual seu nome ?");
alert("Bem vindo " + nome);
let h1 = document.getElementsByClassName("nome");
let nova = (h1.innertHTML[1] = nome.length > 1 ? nome : "sem nome");
let anoNascimento = prompt(`Qual seu ano de nascimento?`);
alert("Seu ano de nascimento é " + anoNascimento);
alert(`Sua idade é ${2023 - anoNascimento}`);
let cidade = prompt("Qual sua cidade?");
alert("Sua cidade é " + cidade);
alert(nova);
