// Mapeia todos os elementos com a classe 'item'
const list = document.querySelectorAll('.item');

// Mapeia os botões de próxima e anterior
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

// Obtém o número total de itens
const count = list.length;

// Variável para rastrear o índice do item ativo
let activeItem = 0;

// Adiciona um ouvinte de evento para o clique no botão 'next'
nextButton.onclick = () => {
    // Remove a classe 'Active' do item atual
    let activeOld = document.querySelector('.Active');
    activeOld.classList.remove('Active');

    // Atualiza o índice para o próximo item (com loop)
    activeItem = activeItem >= count - 1 ? 0 : activeItem + 1;

    // Adiciona a classe 'Active' ao novo item
    list[activeItem].classList.add('Active');
};

// Adiciona um ouvinte de evento para o clique no botão 'prev'
prevButton.onclick = () => {
    // Remove a classe 'Active' do item atual
    let activeOld = document.querySelector('.Active');
    activeOld.classList.remove('Active');

    // Atualiza o índice para o item anterior (com loop)
    activeItem = activeItem <= 0 ? count - 1 : activeItem - 1;

    // Adiciona a classe 'Active' ao novo item
    list[activeItem].classList.add('Active');
};