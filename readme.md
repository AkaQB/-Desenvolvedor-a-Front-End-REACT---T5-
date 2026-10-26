SkillMatch JS

Mini-projeto avaliativo do Módulo 01, Semana 07 (Desenvolvedor Front-End React, SCTEC/IFSC).

Autor: Manuel Alejandro Garcia Manrique

-----------------O que é o projeto---------------

O SkillMatch JS é um programa simples em JavaScript que compara as habilidades de uma pessoa candidata com os requisitos de algumas vagas de front-end júnior (todas fictícias).

Para cada vaga, o programa mostra:

as habilidades que eu tenho e que a vaga pede
as habilidades que ainda me faltam
o percentual de compatibilidade e a classificação (alta, média ou baixa)

No final, ele diz qual é a vaga mais compatível comigo e o que eu devo estudar primeiro.

-------------------Como executar-----------------

Precisa ter o Node.js instalado. Depois é só abrir a pasta do projeto no terminal e rodar:

node skillmatch.js
Arquivos
skillmatch.js: todo o código do projeto
README.md: este arquivo
Como o programa funciona
Eu criei um objeto com os meus dados (nome, área de interesse, experiência e habilidades) e um array com 3 vagas.
A função principal simula a busca das vagas em um servidor, usando uma Promise com setTimeout e async/await. Se der erro, o try/catch mostra uma mensagem.
Cada vaga vira um objeto da classe VagaFrontEnd.
O programa calcula a compatibilidade de cada vaga, classifica e lista o que falta.
Quando o relatório termina, um callback mostra a melhor vaga e a recomendação de estudo.
Decisões que eu tomei
Como calculei a compatibilidade

Eu divido a quantidade de requisitos que eu atendo pelo total de requisitos da vaga e multiplico por 100. Exemplo: se a vaga pede 6 coisas e eu tenho 5, o resultado é 83%.

Usei Math.floor para arredondar para baixo, assim um valor como 79,9% não vira 80% e não sobe de faixa sem merecer. A mesma regra vale para todas as vagas. Como a comparação diferencia maiúsculas de minúsculas, escrevi os nomes das habilidades sempre do mesmo jeito (por exemplo, "JavaScript").

Classificação
de 80% a 100%: alta compatibilidade
de 50% a 79%: média compatibilidade
de 0% a 49%: baixa compatibilidade

Usei if, else if e else.

Vaga com maior compatibilidade

Usei o reduce. Ele passa por todos os resultados e guarda o maior percentual. Se duas vagas empatarem, fica a primeira da lista.

-------------------Recomendação de estudo-----

O critério que eu defini foiram as habilidades que faltam na vaga mais compatível são as que devo estudar primeiro, porque é a vaga que está mais perto de ser conquistada. Se não faltar nada, o programa mostra uma mensagem de parabéns.

Por que usei herança

Criei a classe Vaga com os dados que qualquer vaga tem (id, empresa, cargo e requisitos). Depois criei a classe VagaFrontEnd, que herda da Vaga e acrescenta o nível da vaga (Júnior). Ela também sobrescreve o método obterResumo para mostrar esse nível. Assim eu não repito código e, se um dia quiser criar outro tipo de vaga, já tenho a base pronta.

-----------------Onde cada requisito está no código-------

RF01, perfil do candidato: objeto candidato
RF02, lista de vagas: array dadosVagas
RF03, cálculo da compatibilidade: função analisarCompatibilidade
RF04, classificação: função classificarCompatibilidade
RF05, habilidades faltantes: também na função analisarCompatibilidade
RF06, vaga mais compatível: função encontrarMelhorVaga, com reduce
RF07, recomendação de estudo: função gerarRecomendacaoEstudo
RF08, métodos de array: map, filter e reduce
RF09, classe: Vaga
RF10, herança: VagaFrontEnd
RF11, uso do this: método obterResumo
RF12, callback: função exibirRelatorio recebe a função aoFinalizar
RF13, closure: função contadorDeAnalises
RF14, Promise e async/await: buscarVagasNoServidor e executarSkillMatch
Sobre var, let e const

Usei const para valores que não mudam e let quando o valor muda. Não usei var porque ele não respeita o escopo de bloco e permite declarar a mesma variável duas vezes sem avisar, o que pode esconder erros.

Internet e cliente-servidor

Quando abrimos um site, o navegador (o cliente) pede os dados para um servidor pela internet, e o servidor responde. Esse pedido demora um tempo que não dá para prever, então o programa não pode ficar parado esperando. Por isso se usa código assíncrono.

No meu projeto, eu simulei isso: a função buscarVagasNoServidor devolve uma Promise que demora 1,2 segundo para responder, e o await espera a resposta chegar.

-------------------------Ferramentas-----------
VS Code como editor
Extensões: Prettier e GitLens (troque pelas que você realmente usou)
Node.js para rodar o código
Git e GitHub para o versionamento
Git e GitHub

Trabalhei em uma branch separada chamada feature/skillmatch (troque pelo nome real da sua branch) e no final juntei tudo na main. As mensagens de commit descrevem o que cada passo entregou.