function buscarLivros(categoria) {
    return fetch(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${categoria}`
    )
        .then((resposta) => {
            if (resposta.ok) {
                return resposta.json(); // Retornar a Promise para o JSON
            } else {
                throw new Error("A solicitação falhou");
            }
        })
        .then((dados) => {
            return capturaDados(dados.items); // Tratar os dados JSON aqui
        })
        .catch((erro) => {
            console.error(erro); // Lidar com erros
        });
}

function capturaDados(livros) {
    const listaLivros = [];
    livros.forEach((livro) => {
        const objLivro = {
            titulo: livro.volumeInfo.title, // string de título
            autor: livro.volumeInfo.authors, // array de autores
            idioma: livro.volumeInfo.language, // string de idioma (sigla)
            data: livro.volumeInfo.publishedDate, // string de data em diversos formatos, favor padronizar
            editora: livro.volumeInfo.publisher, // string de editora
            descricao: livro.volumeInfo.description, // string de descrição
            urlFoto: livro.volumeInfo.imageLinks.thumbnail, // string de url da foto da capa (pode acabar ficando vazio, favor tratar)
        };
        listaLivros.push(objLivro);
    });
    return listaLivros;
}

export { buscarLivros };
