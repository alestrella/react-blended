import styled from 'styled-components';

export const GalleryItem = styled.li`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  padding: 8px;
  background-color: #eaeaf0;
  border-radius: 5px;
`;

export const Poster = styled.img`
  display: block;
  width: 100%;
`;

export const WatchedFlag = styled.span`
  font-weight: bold;
  color: ${props => (props.children === 'true' ? 'green' : 'red')};
`;
