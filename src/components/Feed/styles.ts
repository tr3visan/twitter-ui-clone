import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  padding: 11px 15px;
  font-weight: bold;
  font-size: 15px;
  outline: none;
  cursor: pointer;
  color: var(--twitter);
  border-bottom: 2px solid var(--twitter);
  text-align: center;
  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;
