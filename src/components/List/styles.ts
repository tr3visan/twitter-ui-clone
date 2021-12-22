import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--secondary);
  border-radius: 12px;
`;

export const Item = styled.div`
  padding: 10px 16px;
  & + div {
    border-top: 1px solid var(--outline);
  }

  &:first-child {
    padding: 16px;
  }

  &:last-child {
    padding-bottom: 16px;
  }
`;

export const Title = styled.h2`
  font-size: 19px;
`;
