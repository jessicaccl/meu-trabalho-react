import styled from 'styled-components';

export const StoriesWrapper = styled.div`
  width: 100%;
  max-width: 614px; 
  background-color: #FFFFFF;
  border: 1px solid #DBDBDB;
  border-radius: 3px;
  
  display: flex;
  overflow-x: auto; 
  padding: 16px;
  margin-bottom: 20px;

   &::-webkit-scrollbar {
    display: none;
  }
`;

export const StoryCircle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
  
  min-width: 66px;
`;

export const StoryImageBorder = styled.div`
  width: 66px;
  height: 66px;
  border-radius: 50%;
  
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StoryImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #FFFFFF; 
`;

export const StoryUsername = styled.span`
  font-size: 12px;
  color: #262626;
  margin-top: 5px;
  
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

export const YourStoryImageWrapper = styled.div`
  position: relative; 
  width: 66px; 
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlusIcon = styled.div`
  position: absolute; 
  bottom: 0;
  right: 0;

  background-color: #0095F6; 
  color: #FFFFFF; 

  width: 24px;
  height: 24px;
  border-radius: 50%; 

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;

  border: 2px solid #FFFFFF;
`;