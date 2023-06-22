function processChatCommands(commands) {
    let chat = [];
  
    for (let i = 0; i < commands.length; i++) {
      let command = commands[i].split(' ');
      let action = command[0];
  
      if (action === 'end') {
        break;
      }
  
      let message = command[1];
  
      switch (action) {
        case 'Chat':
          chat.push(message);
          break;
  
        case 'Delete':
          if (chat.includes(message)) {
            let index = chat.indexOf(message);
            chat.splice(index, 1);
          }
          break;
  
        case 'Edit':
          let editedMessage = command[2];
          if (chat.includes(message)) {
            let index = chat.indexOf(message);
            chat[index] = editedMessage;
          }
          break;
  
        case 'Pin':
          if (chat.includes(message)) {
            let index = chat.indexOf(message);
            chat.splice(index, 1);
            chat.push(message);
          }
          break;
  
        case 'Spam':
          let messages = command.slice(1);
          chat = chat.concat(messages);
          break;
  
        default:
          break;
      }
    }
  
    console.log(chat.join('\n'));
  }
  

  
  processChatCommands([
    'Chat Hello',
    'Chat darling',
    'Edit darling Darling',
    'Spam how are you',
    'Delete Darling',
    'end'
  ]);
  