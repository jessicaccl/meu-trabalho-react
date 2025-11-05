import React from 'react';
import {
  StoriesWrapper,
  StoryCircle,
  StoryImageBorder,
  StoryImage,
  StoryUsername,

  YourStoryImageWrapper,
  PlusIcon
} from './styles.js';

function Stories({ yourStoryPic, storiesData }) {
  return (
    <StoriesWrapper>

      <StoryCircle>
        <YourStoryImageWrapper>

          <StoryImage src={yourStoryPic} alt="Seu story" />

          <PlusIcon>+</PlusIcon>

        </YourStoryImageWrapper>

        <StoryUsername>Seu story</StoryUsername>
      </StoryCircle>

      {storiesData.map(story => (
        <StoryCircle key={story.id}>

          <StoryImageBorder>
            <StoryImage src={story.profilePic} alt={story.username} />
          </StoryImageBorder>
          <StoryUsername>{story.username}</StoryUsername>

        </StoryCircle>
      ))}
    </StoriesWrapper>
  );
}

export default Stories;