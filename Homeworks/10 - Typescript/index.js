class Pessoa {
    constructor(data) {
        this.nome = data.nome;
        this.dataNasc = data.dataNasc;
        this.genero = data.genero;
    }
    getNome() {
        return this.nome;
    }
    getDataNasc() {
        return this.dataNasc;
    }
    getGenero() {
        return this.genero;
    }
}
class Aluno extends Pessoa {
    constructor(data) {
        super(data);
    }
}
class Disciplina {
    constructor(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
}
class Professor extends Pessoa {
    constructor(data) {
        super(data);
        this.categoria = data.categoria;
    }
    getCategoria() {
        return this.categoria;
    }
}
class Turma {
    constructor({ disciplina, professor, alunos }) {
        this.disciplina = disciplina;
        this.professor = professor;
        this.alunos = alunos;
    }
    getTurma() {
        return {
            disciplina: this.disciplina,
            professor: this.professor,
            alunos: this.alunos,
        };
    }
}
const addAlunos = (alunos) => {
    const student = [];
    alunos.forEach((a) => {
        student.push(new Aluno(a));
    });
    return student;
};
const addTurma = (data) => {
    const turma = new Turma(data);
    return turma;
};
const turma = addTurma({
    professor: new Professor({
        nome: "Professor Baldochi",
        dataNasc: new Date("1985-03-22"),
        genero: "Masculino",
        categoria: "Doutorado",
    }),
    disciplina: new Disciplina({
        nome: "COM222 - Desenvolvimento em sistemas web",
    }),
    alunos: addAlunos([
        {
            nome: "Rodrigo Duarte",
            dataNasc: new Date("1981-02-20"),
            genero: "Masculino",
        },
        {
            nome: "Rafaela",
            dataNasc: new Date("1971-08-11"),
            genero: "Feminino",
        },
        {
            nome: "Sofia",
            dataNasc: new Date("1958-08-14"),
            genero: "Feminino",
        },
        {
            nome: "Rodolfo",
            dataNasc: new Date("1945-07-24"),
            genero: "Masculino",
        },
        {
            nome: "Anderson",
            dataNasc: new Date("1961-01-21"),
            genero: "Masculino",
        },
    ]),
});
console.log(turma);
