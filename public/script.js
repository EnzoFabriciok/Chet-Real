const botaoEnviar = document.getElementById('enviar');
const caixaMensagem = document.getElementById('texto');
const chat = document.getElementById('mensagens');

const socket = io();

botaoEnviar.addEventListener('click', () => {
    if (caixaMensagem.value !=="") {
        socket.emit('nova mensagem', caixaMensagem.value);
        caixaMensagem.value = "";
    }
});

socket.addEventListener('nova mensagem', (msg) => {
    const elementoMensagem = document.createElement('li'); //<li></li>
    elementoMensagem.classList.add('mensagem'); //<li class='mensagem'>conteudo</li>
    elementoMensagem.textContent = msg; //<li>Conteudo</li>
    chat.appendChild(elementoMensagem); //<div id='mensagens'><li class='mensagem'>conteudo</li></div>
})