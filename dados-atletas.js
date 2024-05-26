class Atleta {
    constructor(nome, idade, peso, altura, notas){
     this.nome=nome;
     this.idade=idade;
     this.peso=peso;
     this.altura=altura;
     this.notas=notas;
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }
    calculaIMC(){

        let imc =this.peso /(this.altura*this.altura);
        return imc;
    }
    calculaMediaValida(){
    let notasOrdenadas = this.notas.sort((a, b) => a - b);

    let notasEliminadas = notasOrdenadas.slice(1, 4);

    let soma = 0
    for (let i = 0; i < notasEliminadas.length; i++) {
      soma += notasEliminadas[i];
    }
   
    return soma / notasEliminadas.length;

    }
    obtemNomeAtleta(){
        return `Nome: ${this.nome}`
    }
    obtemIdadeAtleta(){
        return `Idade: ${this.idade}`
    }
    obtemPesoAtleta(){
        return `Peso: ${this.peso}`
    }
    obtemAltura(){
        return `Altura: ${this.altura}`
    }
    obtemNotasAtletas(){
        return `Notas: ${this.notas.join(', ')}`
    }
    obtemCategoria(){
        return `Categoria: ${this.calculaCategoria()}`
    }
    obtemIMC(){
        return `IMC: ${this.calculaIMC()}`
    }
    obtemMediaValida(){
        return `Media válida: ${this.calculaMediaValida()}`
    }
}
let atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88])
    
// Exibindo as informações do atleta
console.log(atleta.obtemNomeAtleta());
console.log(atleta.obtemIdadeAtleta());
console.log(atleta.obtemPesoAtleta());
console.log(atleta.obtemAltura());
console.log(atleta.obtemNotasAtletas());
console.log(atleta.obtemCategoria());
console.log(atleta.obtemIMC());
console.log(atleta.obtemMediaValida());
