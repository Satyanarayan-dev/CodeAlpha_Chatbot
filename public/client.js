// client.js

const socket = io();

const form = document.querySelector('form');
const input = document.querySelector('#input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        
        displayUserMessage(input.value);
     
        socket.emit('chat message', input.value);
        input.value = '';
    }
});

socket.on('chat message', (msg) => {

    displayChatbotResponse(msg);
});

// Function to display chatbot response
function displayChatbotResponse(message) {
    const messages = document.getElementById('messages');
    const item = document.createElement('li');
    item.classList.add('bot-message');
    item.textContent = message;
    messages.appendChild(item);
}

// Function to display user's message
function displayUserMessage(message) {
    const messages = document.getElementById('messages');
    const item = document.createElement('li');
    item.classList.add('user-message');
    item.textContent = message;
    messages.appendChild(item);
}
