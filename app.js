function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value ;

    // Se campoPesquisa for uma string sem nada
    if (!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado. Você não fez uma pesquisa!</p>"
        return
    };

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa formatados em HTML.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados (assumindo que 'dados' seja um array de objetos).
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // cria um novo elemnro
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
        // Concatena uma nova div com as informações do dado atual à string 'resultados'.
        // A sintaxe de template literal (``) permite a interpolação de variáveis dentro de strings.

    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    };

    // Atribui o conteúdo da string 'resultados' ao HTML interno da seção.
    section.innerHTML = resultados;
}