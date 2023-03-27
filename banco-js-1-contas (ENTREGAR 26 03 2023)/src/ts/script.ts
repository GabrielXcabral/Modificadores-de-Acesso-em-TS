/*7. Altere o arquivo script.ts para criar um objeto tipo Pessoa, 
tipo PessoaFisica e tipo PessoaJuridica, com valores que você quiser, 
e imprima no console cada atributo de cada objeto.*/

let p1 = new Pessoa ("Gabriel", 23, new Date('2000-03-21'));
console.log(p1.toString());

let pf1 = new PessoaFisica ("Pedro", 21, new Date('2002-01-01'), '123-456');
console.log(pf1.toString());

let pj1 = new PessoaJuridica("João",40,new Date('1947-06-14'),'7894561-11');
console.log(pj1.toString())