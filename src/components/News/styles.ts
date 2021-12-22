import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--secondary);
  border-radius: 12px;
`;

export const Item = styled.a`
  cursor: pointer;
  & + div {
    border-top: 1px solid var(--outline);
  }

  > p {
    font-size: 14px;
    color: var(--gray);
  }
`;

export const Title = styled.h3`
  margin-bottom: 4px;
  font-size: 14px;
`;
