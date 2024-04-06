// chatbot.js

function getResponse(message) {
  // Pre-defined responses
  const responses = {
      "hi": "Hello!",
      "hello": "Hi there!",
      "how are you?": "I'm just a bot, but thanks for asking!",
      "what's your name?": "I'm a chatbot. You can call me Bot.",
      "who created you?": "I was created by [Your Name].",
      "what can you do?": "I can answer simple questions and chat with you!",
      "nice to meet you": "Nice to meet you too!",
      "how's the weather?": "I'm not sure. You might want to check a weather website!",
      "goodbye": "Goodbye! Have a great day!",
      "see you later": "See you later!",
      "thanks": "You're welcome!",
      "thank you": "You're welcome!",
      "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
      "how old are you?": "I'm a virtual assistant, so I don't have an age!",
      "do you like pizza?": "I don't have taste buds, but I hear pizza is popular!",
      "what's your favorite color?": "I don't have eyes, so I don't have a favorite color!",
      "what's the meaning of life?": "That's a tough question! Different people have different answers.",
      "where do you live?": "I live in the digital world!",
      "do you have siblings?": "I'm the only chatbot in this conversation!",
      "can you help me with something?": "Of course! Just ask your question.",
      "are you a robot?": "Yes, I am a robot. Beep boop!",
      "are you human?": "No, I'm a virtual assistant programmed to assist you.",
      "tell me something interesting": "Did you know that the shortest war in history was between Britain and Zanzibar on August 27, 1896? It lasted only 38 minutes!",
      "do you sleep?": "No, I don't sleep. I'm always here to chat with you!",
  };

  // Check if the message has a pre-defined response
  const response = responses[message.toLowerCase()];
  
  // If a pre-defined response exists, return it. Otherwise, return a default response.
  return response ? response : "I'm sorry, I didn't understand that.";
}

module.exports = { getResponse };
