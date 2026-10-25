function contadorDeAnalises() {
    let total = 0;
    return () => ++total;
}
const incrementarAnalise = contadorDeAnalises();

// RF01: Objeto candidato (habilidades padronizadas)
const candidato = {
    nome: "Seu Nome Aqui",
    areaDeInteresse: "Front-end",
    experienciaAnos: 0.5,
    habilidades: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub", "React", "Node.js"],
};

// RF02: Array das vagas
const dadosVagas = [
    {
        id: 1,
        nomeDaEmpresa: "Empresa X",
        cargo: "Desenvolvedor Front-end",
        requisitos: ["HTML5", "CSS3", "JavaScript", "React"],
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

// PARTE 2: CLASSES, HERANÇA E THIS (POO)

// RF09: Classe base
class Vaga {
    constructor(id, nomeDaEmpresa, cargo, requisitos) {
        this.id = id;
        this.nomeDaEmpresa = nomeDaEmpresa;
        this.cargo = cargo;
        this.requisitos = requisitos;
    }

    // RF11: Método utilizando 'this'
    obterResumo() {
        return `${this.cargo} na empresa ${this.nomeDaEmpresa} (${this.requisitos.length} requisitos)`;
    }
}

// RF10: Herança (Classe Filha)
class VagaFrontEnd extends Vaga {
    constructor(id, nomeDaEmpresa, cargo, requisitos, nivelExperiencia = "Júnior") {
        super(id, nomeDaEmpresa, cargo, requisitos);
        this.nivelExperiencia = nivelExperiencia;
    }

    // Sobrescrita usando super e this
    obterResumo() {
        return `[${this.nivelExperiencia.toUpperCase()}] ${super.obterResumo()}`;
    }
}

const vagaExemplo = new VagaFrontEnd(
    1,
    dadosVagas[0].nomeDaEmpresa,
    dadosVagas[0].cargo,
    dadosVagas[0].requisitos
);

// PROMISE E ASYNC/AWAIT.----------

function buscarVagasNoServidor() {
    return new Promise((resolve) => {
        console.log("Buscando vagas no servidor por favor espere...");

 //Simulando 1.2 segundo de delay.-----------

        setTimeout(() => {
            const vagasInstanciadas = dadosVagas.map(
                (vaga) => new VagaFrontEnd(vaga.id, vaga.nomeDaEmpresa, vaga.cargo, vaga.requisitos)
            );
            resolve(vagasInstanciadas);
        }, 1200);
    });
}

// Função principal que executa o fluxo assíncrono.----------

async function executarSkillMatch() {
    console.log("Iniciando SkillMatch, por favor espere...");

    const vagas = await buscarVagasNoServidor();
    const numAnalise = incrementarAnalise();

    console.log(`${vagas.length} vagas encontradas. Analisando compatibilidade com o candidato... (Análise nº ${numAnalise})`);

    console.log(`Primeira vaga recibida: ${vagas[0].obterResumo()}`);
    }

    executarSkillMatch();