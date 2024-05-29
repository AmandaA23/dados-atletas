##dados-atletas.js

Projeto: Dados do atleta

Observações:

Este projeto é continuação do projeto notas-atletas desde usuário.



Foi criada uma classe chamada Atleta, que recebe dentro dela um método construtor que recebe cinco parâmentros:
Nome, Idade, Peso, Altura e Notas.
Logo usamos os "this" para criarmos uma variável de instância e atribuindo a ela, um valor.

    class Atleta {
    constructor(nome, idade, peso, altura, notas){
     this.nome=nome;
     this.idade=idade;
     this.peso=peso;
     this.altura=altura;
     this.notas=notas;
    }
    

 Métodos usados:

calculaCategoria(), para calcular a categoria da classe Atleta, foi preciso ter a seguinte classificação:

    Infantil: 9 a 11 anos
    Juvenil: 12 e 13 anos
    Intermediário: 14 e 15 anos
    Adulto: 16 a 30 anos
    Sem categoria: demais idades

O método calculaCategoria(), foi baseado nas informaçoes de idade do atleta atribuindo uma categoria especifica.
No código, usamos uma série condiçoes "if-else" para cada categoria.

calculaIMC()

Para calculaIMC, utilizamos a Fórmula: imc = peso / (altura x altura), com as informaçoes do peso e altura do atleta.

calculaMediaValida()

Para cacularMediaValida(), foi empregada a mesma metodologia no projeto notas-atletas.js.

obtemNomeAtleta()

obtemNomeAtleta é responsável por retornar o nome do atleta, que acessa o atributo nome do objeto da classe Atleta.

obtemIdadeAtleta()

obtemIdadeAtleta, retorna a idade do atleta, que acessa o atributo idade do objeto da classe.

obtemPesoAtleta()

obtemPesoAtleta, retorna o peso do atleta que acessa o atributo peso do objeto da classe.

obtemNotasAtleta()

obtemNotasAtleta, que retorna as notas do atleta que acessa o atributo notas do objeto da classe.

obtemCategoria()

obtemCategoria, que retorna a função obtemCategoria() com a categoria especifica do atleta.

obtemIMC()

obtemIMC, retorna a função obtemIMC() com o resultado do calculo do Imc do atleta.

obtemMediaValida()

ObtemMediaValida, retorna a função ObtemMediaValida() com o resuldado da operação da media de cada atleta.

Informações ao usuário:

    let atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88])

Essa linha de código está criando um novo objeto atleta com as propriedades nome, idade, peso, altura e notas definidas conforme os valores fornecidos. A instância atleta pode então usar todos os métodos definidos na classe Atleta para calcular categoria, IMC, média válida das notas, e obter as informações individuais do atleta.    

    


