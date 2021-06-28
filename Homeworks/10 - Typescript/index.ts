interface IPessoa {
  nome: String;
  dataNasc: Date;
  genero: String;
}

class Pessoa {
  private nome: String;
  private dataNasc: Date;
  private genero: String;

  constructor(data: IPessoa) {
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

interface IAluno {
  nome: String;
  dataNasc: Date;
  genero: String;
}

class Aluno extends Pessoa {
  constructor(data: IAluno) {
    super(data);
  }
}

class Disciplina {
  private nome: String;

  constructor(nome) {
    this.nome = nome;
  }

  getNome() {
    return this.nome;
  }
}

interface IProfessor {
  categoria: String;

  nome: String;
  dataNasc: Date;
  genero: String;
}

class Professor extends Pessoa {
  private categoria: String;

  constructor(data: IProfessor) {
    super(data);
    this.categoria = data.categoria;
  }

  getCategoria() {
    return this.categoria;
  }
}

interface ITurma {
  disciplina: Disciplina;
  professor: Professor;
  alunos: Aluno[];
}

class Turma {
  private disciplina: Disciplina;
  private professor: Professor;
  private alunos: Aluno[];

  constructor({ disciplina, professor, alunos }: ITurma) {
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

const addAlunos = (alunos: IAluno[]): Aluno[] => {
  const student: Aluno[] = [];

  alunos.forEach((a) => {
    student.push(new Aluno(a));
  });

  return student;
};

const addTurma = (data: ITurma): Turma => {
  const turma: Turma = new Turma(data);

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
