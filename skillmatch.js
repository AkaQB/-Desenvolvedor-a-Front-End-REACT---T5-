function contadorDeAnalises() {
    let total = 0;
    return () => ++total;
}
const incrementarAnalises = contadorDeAnalises();


//Objeto candidato.--------
const candidato = {
    nome: "Digite seu nome",
    areaDeInterese: "Front-end",
    experienciaAnos: 0.5,
    habilidades: ["HTML", "CSS3", "JavaScript", "Git", "gitHub", "React", "Node.js"],
};

//Array das vagas.----------
const vagas = [
    {
        id: 1,
        nomeDaEmpresa: "Empresa X",
        cargo: "Desenvolvedor Front-end",
        requisitos: ["HTML", "CSS3", "JavaScript", "React"],
        