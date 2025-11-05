import React, { useState } from 'react';
import { FiHeart, FiMessageCircle, FiSend, FiBookmark } from 'react-icons/fi';
import { FaHeart, FaBookmark } from 'react-icons/fa';

import {
  CardContainer,
  CardHeader,
  ProfilePic,
  Username,
  PostImage,
  Caption,
  CardActions,
  IconGroup,
  Icon
} from './styles.js';

function Card({ username, profilePic, postImage, caption, musicUrl }) {

  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  const renderMusicPlayer = () => {
    console.log(`Card do ${username} recebeu musicUrl:`, musicUrl);

    if (!musicUrl || musicUrl === "") {
      return null;
    }

    if (musicUrl.includes('spotify.com')) {
      const embedUrl = musicUrl.replace('/track/', '/embed/track/');

      return (
        <iframe
          title={`Spotify Player for ${username}'s post`}
          style={{ borderRadius: '12px', marginTop: '10px' }}
          src={embedUrl}
          width="100%"
          height="80"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      );
    }

    return (
      <audio
        controls
        src={musicUrl}
        style={{ width: '100%', marginTop: '10px' }}
      >
        Seu navegador não suporta o elemento de áudio.
      </audio>
    );
  };

  return (
    <CardContainer>

      <CardHeader>
        <ProfilePic src={profilePic} alt={`${username} profile pic`} />
        <Username>{username}</Username>
      </CardHeader>

      <PostImage src={postImage} alt="Post" />

      <Caption>
        <Username as="span">{username}</Username>
        {caption}
      </Caption>

      {renderMusicPlayer()}

      <CardActions>
        <IconGroup>
          <Icon
            className={isLiked ? 'liked' : ''}
            onClick={handleLike}
          >
            {isLiked ? <FaHeart /> : <FiHeart />}
          </Icon>
          <Icon>
            <FiMessageCircle />
          </Icon>
          <Icon>
            <FiSend />
          </Icon>
        </IconGroup>
        <Icon
          className={isSaved ? 'saved' : ''}
          onClick={handleSave}
        >
          {isSaved ? <FaBookmark /> : <FiBookmark />}
        </Icon>
      </CardActions>

    </CardContainer>
  );
}

export default Card;