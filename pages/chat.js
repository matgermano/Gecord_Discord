import { Box, Button, TextField } from '@skynexui/components';
import React, { useState } from 'react';
import appConfig from '../config.json';
import Header from '../src/components/Header';
import MessageList from '../src/components/MessageList';

export default function ChatPage() {
  const [ message, setMessage ] = useState('');
  const [ messagesList, setMessagesList ] = useState([]);

  function handleChange(event) {
    setMessage(event.target.value)
  }

  function handleKeyPress(event, message) {
    if (event.key === 'Enter') {
      event.preventDefault()
      sendMessage(message)
    }
  }
  
  function sendMessage(newMensagem) {
    const message = {
      id: messagesList.length + 1,
      from: 'Matgermano',
      text: newMensagem
    }

    setMessagesList([ message, ...messagesList ])
    setMessage('')
  }

  return (
    <Box
      styleSheet={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: appConfig.theme.colors.neutrals[300],
        backgroundImage: `url(https://get.wallhere.com/photo/anime-One-Piece-1395055.jpg)`,
        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        color: appConfig.theme.colors.neutrals['000']
      }}
    >
      <Box
        styleSheet={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
          borderRadius: '5px',
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: '100%',
          maxWidth: '95%',
          maxHeight: '95vh',
          padding: '32px',
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: 'relative',
            display: 'flex',
            flex: 1,
            height: '80%',
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: 'column',
            borderRadius: '5px',
            padding: '16px',
          }}
        >

          <MessageList messages={messagesList} setMessagesList={setMessagesList} />

          <Box
            as="form"
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <TextField
              value={message}
              onChange={handleChange}
              onKeyPress={event => handleKeyPress(event, message)}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                overflow: 'hidden',
                width: '100%',
                border: '0',
                resize: 'none',
                borderRadius: '5px',
                padding: '6px 8px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: '12px',
                color: appConfig.theme.colors.neutrals[200],
              }}
            />
            <Button
              type='button'
              label='Enter'
              colorVariant='light'
              styleSheet={{    
                height: '100%',
              }}
              onClick={() => sendMessage(message)}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}