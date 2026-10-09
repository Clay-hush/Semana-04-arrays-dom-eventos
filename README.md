Semana 04 - Arrays, DOM e Eventos
Descrição do projeto

Este projeto foi desenvolvido como atividade prática da Semana 04 de Desenvolvimento Web. O objetivo é praticar os métodos de arrays em JavaScript, a manipulação do DOM e o tratamento de eventos no navegador.

Tecnologias utilizadas
HTML5
CSS3
JavaScript
Bloco 1 - Arrays e métodos

Foram utilizados arrays de nomes, preços e produtos para demonstrar diferentes métodos do JavaScript.

forEach()

Percorre os elementos de um array e executa uma função para cada elemento. Foi utilizado para exibir mensagens de saudação e imprimir os nomes e preços dos produtos.

map()

Percorre um array e retorna um novo array com os resultados de uma transformação. Foi utilizado para converter nomes em letras maiúsculas e extrair os nomes dos produtos.

filter()

Retorna um novo array contendo apenas os elementos que atendem a uma condição. Foi utilizado para selecionar preços acima de 20 e produtos com preço menor que 50.

reduce()

Percorre os elementos de um array e acumula um resultado em um único valor. Foi utilizado para calcular a soma dos preços.

Bloco 2 - Manipulação do DOM

O DOM permite acessar e modificar os elementos HTML por meio do JavaScript.

querySelector(): seleciona o primeiro elemento que corresponde ao seletor informado.
querySelectorAll(): seleciona todos os elementos que correspondem ao seletor.
textContent: altera ou consulta o conteúdo textual de um elemento.
innerHTML: insere conteúdo HTML dentro de um elemento.
createElement(): cria novos elementos HTML.
append(): adiciona elementos ao final de outro elemento.
classList.add(): adiciona uma classe CSS.
classList.contains(): verifica se uma classe existe no elemento.

Esses recursos foram utilizados para modificar o título, ler os parágrafos, criar itens de lista e aplicar classes CSS.

Bloco 3 - Eventos e Event Delegation

O método addEventListener() permite executar funções em resposta a eventos, como cliques, movimentos do mouse, teclas pressionadas e envio de formulários.

O formulário utiliza preventDefault() para impedir o recarregamento da página. O método trim() remove espaços em branco das extremidades do texto, permitindo ignorar tarefas vazias.

Event Delegation

Event Delegation consiste em adicionar um único listener a um elemento pai para tratar eventos originados em seus elementos filhos.

Neste projeto, o listener de clique é adicionado à lista #lista. A propriedade e.target identifica o elemento clicado, e a verificação e.target.tagName === "LI" garante que apenas itens da lista sejam tratados.

Essa técnica reduz a quantidade de listeners, facilita a manutenção do código e permite que elementos criados dinamicamente também respondam aos eventos sem a necessidade de registrar um novo listener para cada item.

Estudante de Análise e Desenvolvimento de Sistemas

