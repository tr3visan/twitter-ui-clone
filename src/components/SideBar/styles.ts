import styled from 'styled-components';
import { Search } from '../../icons/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 996px) {
    display: flex;
    flex-direction: column;
    width: min(399px, 100%);
  }
`;

export const SearchWrapper = styled.div`
  padding: 10px 24px;
  width: min(399px, 100%);
  background: var(--primary);
  position: fixed;
  top: 0;
  z-index: 2;
  max-height: 57px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 38px;
  font-size: 14px;
  padding: 0 10px 0 52px;
  border-radius: 20px;
  background: var(--search);
  position: relative;

  &::placeholder {
    color: var(--gray);
  }

  &:focus,
  &:focus-visible {
    outline: 0;
    border: 1px solid var(--twitter);

    ~ svg {
      fill: var(--twitter);
    }
  }

  ~ svg {
    position: relative;
    top: -30px;
    left: 16px;
    z-index: 1;
  }
`;

export const SearchIcon = styled(Search)`
  width: 24px;
  height: 24px;
  fill: var(--gray);
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 24px 200px;
  margin-top: 3px;

  > div + div {
    margin-top: 16px;
  }
`;
