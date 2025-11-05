import forbesInsta from 'Assets/images/forbes.jpeg';
import jessicaInsta from 'Assets/images/jessica.jpg';
import luccaInsta from 'Assets/images/lucca.jpg';
import menegueliInsta from 'Assets/images/menegueli.jpeg';
import perfilJessica from 'Assets/images/perfil-jessica1.jpeg';
import perfilJoao from 'Assets/images/perfil-joao.jpeg';
import perfilLucca from 'Assets/images/perfil-lucca1.jpeg';
import postSerratec from 'Assets/images/post-serratec.jpeg';
import serratec from 'Assets/images/serratec1.jpeg';
import t2m from 'Assets/images/t2m.jpeg';
import flamengo from 'Assets/images/flamengo.jpeg'

import React, { useState } from 'react';
import { HomeWrapper } from './styles';

import Header from 'Components/Header/index.jsx';
import Stories from 'Components/Stories/index.jsx';
import Card from 'Components/Card/index.jsx';
import BottomNav from 'Components/BottomNav/index.jsx';
import ModalNovoPost from 'Components/ModalNovoPost/index.jsx';

const mockStories = [
  {
    id: 1,
    username: 'serratecoficial',
    profilePic: serratec
  },
  {
    id: 2,
    username: 'felipemenegueli',
    profilePic: menegueliInsta
  },
  {
    id: 3,
    username: 'forbesbr',
    profilePic: forbesInsta
  },
  {
    id: 4,
    username: 'luccafaztudo',
    profilePic: perfilLucca
  },
  {
    id: 5,
    username: 'test2market',
    profilePic: t2m
  },
  {
    id: 6,
    username: 'joaobrasio',
    profilePic: perfilJoao
  }
];


function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'jessicaccl',
      profilePic: perfilJessica,
      postImage: jessicaInsta,
      caption: 'Foi um dia de céu doce, abraços apertados e memórias que vão morar pra sempre no coração ❤️ #meucaçulafez1ano',
      musicUrl: 'https://open.spotify.com/intl-pt/track/2qPSa6HXjzwa9sLhNGpA1T?si=4ecf7e588b074b3b'   
    },
    {
      id: 2,
      username: 'luccafaztudo',
      profilePic: perfilLucca,
      postImage: luccaInsta,
      caption: 'Eu e meu irmão 🎉 #1aninho #melhoramigo',
      musicUrl: 'https://open.spotify.com/intl-pt/track/54ME0bn6fvmZTPYu6gnPNq?si=9d88b44b4dfb4cf1'
    },
    {
      id: 3,
      username: 'felipemenegueli',
      profilePic: menegueliInsta,
      postImage: flamengo,
      caption: 'HOJE TEM! Mengão em mais uma missão. #brasileirao #saoxfla',
      musicUrl: 'https://open.spotify.com/intl-pt/track/6Ou3ojmotX0IQ77fnWrikY?si=443d838ea6df4dd6'
    },
    {
      id: 4,
      username: 'serratecoficial',
      profilePic: serratec,
      postImage: postSerratec,
      caption: 'Temos motivo de sobra para comemorar! Fomos reconhecidos como Destaque Nacional #inovação #serratec'
    }
  ]);

  const userProfilePic = perfilJessica;

  const handleAddNewPost = (newPostData) => {
  
  const newPost = {
    id: posts.length + 1, 
    username: 'jessicaccl', 
    profilePic: perfilJessica, 
    postImage: newPostData.imageUrl, 
    caption: newPostData.caption, 
    musicUrl: newPostData.musicUrl  
  };

  setPosts([newPost, ...posts]);

  setIsModalOpen(false);
};

  return (
    <>
      <Header />

      <HomeWrapper>

        <Stories yourStoryPic={userProfilePic}
          storiesData={mockStories}
        />

        {posts.map((post) => (
          <Card
            key={post.id}
            username={post.username}
            profilePic={post.profilePic}
            postImage={post.postImage}
            caption={post.caption}
            musicUrl={post.musicUrl}
          />
        ))}
      </HomeWrapper>

      <BottomNav
        profilePic={userProfilePic}
        onOpenModal={() => setIsModalOpen(true)}
      />

      {isModalOpen && (
        <ModalNovoPost
          onClose={() => setIsModalOpen(false)}
          onPublish={handleAddNewPost}
        />
      )}

    </>
  );
}

export default Home;