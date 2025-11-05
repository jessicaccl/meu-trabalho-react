import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

import { 
  ModalBackdrop, 
  ModalContent, 
  ModalHeader, 
  CloseButton, 
  ModalBody 
} from './styles.js'; 

import Button from '../Button/index.jsx'; 

function ModalNovoPost({ onClose, onPublish }) {
  
  const [imageUrl, setImageUrl] = useState('');
  const [caption, setCaption] = useState('');

  const [musicUrl, setMusicUrl] = useState(''); 
  
  const handlePublish = () => {
    // Verificação simples
    if (!imageUrl || !caption) {
      alert('Por favor, preencha a URL da imagem e uma legenda.');
      return; 
    }

    onPublish({ imageUrl, caption, musicUrl }); 

    onClose(); 
  }; 

  return (
    <ModalBackdrop onClick={onClose}> 
      
      <ModalContent onClick={(e) => e.stopPropagation()}> 
        
        <ModalHeader>
          <span style={{ width: '20px' }}></span> 
          <h3>Criar nova publicação</h3>
          <CloseButton onClick={onClose}>
            <FiX />
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          
          <input 
            type="text" 
            placeholder="URL da imagem (ex: /images/post.jpg ou https://...)"
            value={imageUrl} 
            onChange={(e) => setImageUrl(e.target.value)} 
          />
          <textarea 
            placeholder="Escreva uma legenda..."
            value={caption} 
            onChange={(e) => setCaption(e.target.value)} 
          />

          <input 
            type="text" 
            placeholder="Caminho da música (ex: /music/som.mp3) (Opcional)"
            value={musicUrl} 
            onChange={(e) => setMusicUrl(e.target.value)} 
          />

          <Button onClick={handlePublish}>Publicar</Button>

        </ModalBody>

      </ModalContent>
    </ModalBackdrop>
  );

}

export default ModalNovoPost;