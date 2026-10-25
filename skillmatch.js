function contadorDeAnalises() {
    let total = 0;
    return () => {
        total = total + 1;
        return total;
    };
}
const incrementarAnalise = contadorDeAnalises();
 
// RF01: Objeto candidato
const candidato = {
    nome: "Manuel Alejandro Garcia Manrique",
    areaDeInteresse: "Front-end",
    experienciaAnos: 0.6,
    habilidades: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub", "React", "Node.js"]
};
 
// RF02: Array de vagas (dados que "estão no servidor")
const dadosVagas = [
    {
        id: 1,
        nomeDaEmpresa: "Empresa X",
        cargo: "Desenvolvedor Front-end",
        requisitos: ["HTML5", "CSS3", "JavaScript", "React"]
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
 
// RF09: Classe base
class Vaga {
    constructor(id, nomeDaEmpresa, cargo, requisitos) {
        this.id = id;
        this.nomeDaEmpresa = nomeDaEmpresa;
        this.cargo = cargo;
        this.requisitos = requisitos;
    }
 
    // RF11: método que usa 'this'
    obterResumo() {
        return `${this.cargo} na empresa ${this.nomeDaEmpresa} (${this.requisitos.length} requisitos)`;
    }
}
 
// RF10: Herança
// VagaFrontEnd é uma Vaga (relação "é um") e acrescenta o nível da vaga
class VagaFrontEnd extends Vaga {
    constructor(id, nomeDaEmpresa, cargo, requisitos, nivel) {
        super(id, nomeDaEmpresa, cargo, requisitos);
        this.nivel = nivel;
    }
 
    // Sobrescrita do método do pai
    obterResumo() {
        return `[${this.nivel}] ${super.obterResumo()}`;
    }
}
 
// RF14: Promise que simula a busca no servidor
function buscarVagasNoServidor() {
    return new Promise((resolve, reject) => {
        // setTimeout simula o atraso da resposta do servidor
        setTimeout(() => {
            if (dadosVagas.length === 0) {
                reject("Nenhuma vaga encontrada no servidor.");
            } else {
                // RF08 (map): transforma cada dado em uma instância da classe
                const vagas = dadosVagas.map((vaga) => {
                    return new VagaFrontEnd(vaga.id, vaga.nomeDaEmpresa, vaga.cargo, vaga.requisitos, "Júnior");
                });
                resolve(vagas);
            }
        }, 1200);
    });
}
 
// RF03 e RF05: Compatibilidade e habilidades faltantes
function analisarCompatibilidade(candidato, vaga) {
    // RF08 (filter): separa o que o candidato tem e o que falta
    const atendidas = vaga.requisitos.filter((requisito) => candidato.habilidades.includes(requisito));
    const faltantes = vaga.requisitos.filter((requisito) => !candidato.habilidades.includes(requisito));
 
    // Percentual = requisitos atendidos / total de requisitos * 100 (arredondado para baixo)
    const percentual = Math.floor((atendidas.length / vaga.requisitos.length) * 100);
 
    return { vaga, percentual, atendidas, faltantes };
}
 
// RF04: Classificação (if / else)
function classificarCompatibilidade(percentual) {
    if (percentual >= 80) {
        return "Alta compatibilidade";
    } else if (percentual >= 50) {
        return "Média compatibilidade";
    } else {
        return "Baixa compatibilidade";
    }
}
 
// RF06: Vaga com maior compatibilidade
function encontrarMelhorVaga(resultados) {
    // RF08 (reduce): guarda a melhor vaga encontrada até o momento
    return resultados.reduce((melhor, atual) => {
        return atual.percentual > melhor.percentual ? atual : melhor;
    }, resultados[0]);
}
 
// RF07: Recomendação de estudo
// Critério: as habilidades que faltam na vaga MAIS compatível são as prioritárias,
// pois é a vaga que o candidato está mais perto de conquistar.
function gerarRecomendacaoEstudo(faltantes) {
    if (faltantes.length === 0) {
        return "Parabéns! Você possui todas as habilidades necessárias.";
    }
    return `Estude primeiro: ${faltantes.join(", ")}.`;
}
 
// RF12: Callback (aoFinalizar é chamada quando o relatório termina)
function exibirRelatorio(resultados, aoFinalizar) {
    for (let i = 0; i < resultados.length; i++) {
        const resultado = resultados[i];
        const numeroAnalise = incrementarAnalise();
        const faltantes = resultado.faltantes.length === 0 ? "nenhuma" : resultado.faltantes.join(", ");
 
        console.log(`\nAnálise nº ${numeroAnalise}`);
        console.log(resultado.vaga.obterResumo());
        console.log(`Compatibilidade: ${resultado.percentual}% (${classificarCompatibilidade(resultado.percentual)})`);
        console.log(`Habilidades atendidas: ${resultado.atendidas.join(", ")}`);
        console.log(`Habilidades faltantes: ${faltantes}`);
    }
 
    aoFinalizar();
}
 
// Função principal (async/await)
async function executarSkillMatch() {
    try {
        console.log("Iniciando SkillMatch, por favor espere...");
        console.log(`Candidato: ${candidato.nome} | Área: ${candidato.areaDeInteresse} | Experiência: ${candidato.experienciaAnos} ano(s)`);
        console.log(`Habilidades: ${candidato.habilidades.join(", ")}`);
 
        const vagas = await buscarVagasNoServidor();
        console.log(`\n${vagas.length} vagas encontradas. Analisando compatibilidade...`);
 
        const resultados = vagas.map((vaga) => analisarCompatibilidade(candidato, vaga));
 
        exibirRelatorio(resultados, () => {
            const melhor = encontrarMelhorVaga(resultados);
            console.log("\ VAGA MAIS COMPATÍVEL");
            console.log(melhor.vaga.obterResumo());
            console.log(`Compatibilidade: ${melhor.percentual}%`);
            console.log(gerarRecomendacaoEstudo(melhor.faltantes));
        });
    } catch (erro) {
        console.log("Erro ao carregar as vagas:", erro);
    }
}
 
executarSkillMatch();