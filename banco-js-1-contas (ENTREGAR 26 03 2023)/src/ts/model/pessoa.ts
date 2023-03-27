/*3. Crie a classe Pessoa, com os atributos: nome (privado), idade (privado), dataNascimento(privado) 
(escolha os tipos apropriados para cada um. Pesquise o tipo Date de Typescript). 
Deve ter métodos acessadores e modificadores;*/

class Pessoa{
    protected _nome:string;
    private _idade:number;
    private _dataNascimento: Date;

    constructor(nome:string, idade:number, dataNascimento: Date){
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
    }

    get nome(): string{
        return this._nome;
    }

    get idade(): number{
        return this._idade;
    }

    get dataNacimento(): Date{
        return this._dataNascimento
    }

    toString():string{
        return `${this.nome} \n
        Idade: ${this.idade} \n
        Data de Nascimento: ${this.dataNacimento}`
    }
}