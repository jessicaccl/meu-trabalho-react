// Local: src/Components/Card/styles.js
import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #FFFFFF;
  border: 1px solid #DBDBDB;
  border-radius: 3px;
  width: 100%;
  max-width: 614px; 
  margin-bottom: 20px;
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 14px 16px;
`;

export const ProfilePic = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 14px;
`;

export const Username = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #262626;
`;

export const PostImage = styled.img`
  width: 100%;
  height: auto;
`;

export const Caption = styled.div`
  padding: 12px 16px;
  font-size: 14px;
  
  span {
    font-weight: 600;
    margin-right: 5px;
  }
`;
export const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px 12px 16px;
`;

export const IconGroup = styled.div`
  display: flex;
  gap: 15px; 
`;

export const Icon = styled.div`
  font-size: 24px;
  cursor: pointer;

  svg {
    color: #262626; 
  }

  &.liked svg {
    color: #ED4956; 
  }

  &.saved svg {
    fill: #262626; 
  }
`;