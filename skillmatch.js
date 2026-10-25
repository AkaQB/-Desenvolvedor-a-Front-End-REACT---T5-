function contadorDeAnalises() {
    let total = 0;
    return () => ++total;
}
const incrementarAnalises = contadorDeAnalises();


//Objeto candidato.--------
const candidato = {
    nome: "Digite seu nome",
    areaDeInteresse: "Front-end",
    experienciaAnos: 0.5,
    habilidades: ["HTML", "CSS3", "JavaScript", "Git", "gitHub", "React", "Node.js"],
};

//Array das vagas.----------
const dadosVagas = [
    {
    id: 1,
    nomeDaEmpresa: "Empresa X",
    cargo: "Desenvolvedor Front-end",
    requisitos: ["HTML", "CSS3", "JavaScript", "React"],
    },
    {
    id: 2,
    nomeDaEmpresa: "Empresa Y",
    cargo: "Front-End Developer Jr",
    requisitos: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Git"]
  },
  {
    id: 3,
    nomeDaEmpresa: "Empresa Z",
    cargo: "Engenheiro Front-End Jr",
    requisitos: ["JavaScript", "TypeScript", "React", "Next.js", "Git", "Jest"]
  }
];

class Vaga {
    constructor(id, nomeDaEmpresa, cargo, requisitos) {
        this.id = id;
        this.nomeDaEmpresa = nomeDaEmpresa;
        this.cargo = cargo;
        this.requisitos = requisitos;
    }
  }

  // Classes, herança e This.----------------

  class Vaga {
    constructor(id, nomeDaEmpresa, cargo, requisitos) {
        this.id = id;
        this.nomeDaEmpresa = nomeDaEmpresa;
        this.cargo = cargo;
        this.requisitos = requisitos;
    }
  }