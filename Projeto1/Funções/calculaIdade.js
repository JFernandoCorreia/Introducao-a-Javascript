function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Amelia',
	idade: 23,
};

const pessoa2 = {
	nome: 'Márcia',
	idade: 20,
};

const pessoa3 = {
	nome: 'Jonas',
	idade: 13,
};
const pessoa4 = {
	nome: 'Miguel',
	idade: 1,
};

console.log(calculaIdade.call(pessoa1, 40));
console.log(calculaIdade.apply(pessoa4, [24]));