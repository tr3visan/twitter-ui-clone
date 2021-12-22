import styled, { css } from 'styled-components';

import {
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  ExitToApp,
} from '../../icons/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 425px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px;
    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  transition: all 0.2s;
  width: 100%;

  > span {
    display: none;
  }

  padding: 8px 16px;
  outline: 0;

  & + button {
    margin-top: 16px;
  }

  & + button:last-child {
    margin-top: 32px;
    width: 40px;
    height: 40px;

    > span {
      display: none;
    }
  }

  cursor: pointer;
  border-radius: 25px;

  &:hover {
    background: var(--twitter-dark-hover);
  }

  &:hover,
  &.active {
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }

  @media (min-width: 1280px) {
    padding-right: 15px;

    > span {
      display: inline-block;
      margin-left: 19px;
      font-weight: bold;
      font-size: 18px;
    }

    & + button:last-child {
      width: 100%;
      height: unset;
      > span {
        display: inherit;
      }
    }
  }
`;

export const BottomSide = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--gray);
`;

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;

    margin-left: 10px;
    font-size: 14px;

    > span {
      font-size: 13px;
      color: var(--gray);
    }
  }
`;

const iconCSS = css`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  color: var(--white);
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;

export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;

export const EmailIcon = styled(Email)`
  ${iconCSS}
`;

export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconCSS}
`;

export const ProfileIcon = styled(Person)`
  ${iconCSS}
`;

export const ExitIcon = styled(ExitToApp)`
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;
    width: 20px;
    height: 20px;
    color: var(--white);
    cursor: pointer;
    margin-left: 30px;
  }
`;
