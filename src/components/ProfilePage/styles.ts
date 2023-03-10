import styled, { css } from 'styled-components';
import { LocationOn, Cake } from '../../icons/Icons';
import Button from '../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: min(33vw, 199px);

  background: var(--twitter);
  position: relative;
`;

export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));
  border: 3px solid var(--primary);
  background: var(--gray);
  border-radius: 50%;
  position: absolute;
  bottom: max(-60px, -10vw);
  left: 16px;
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 16px;
  display: flex;
  flex-direction: column;
  position: relative;

  > h1 {
    font-size: 18px;
  }
  > h2 {
    font-weight: normal;
    font-size: 15px;
    color: var(--gray);
  }
  > p {
    font-size: 15px;
    margin-top: 12px;
    > a {
      text-decoration: none;
      color: var(--twitter);
    }
  }
  > ul {
    list-style: none;
    margin-top: 10px 0 10px;

    > li {
      font-size: 15px;
      color: var(--gray);

      display: flex;
      align-items: center;

      > svg {
        fill: var(--gray);
        margin-right: 5px;
      }
    }
  }
`;

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 8px;

  padding: 4px 16px;
  font-size: 13px;
  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;

const iconCss = css`
  width: 20px;
  height: 20px;
  color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
  ${iconCss}
`;

export const CakeIcon = styled(Cake)`
  ${iconCss}
`;

export const Followage = styled.div`
  display: flex;
  margin-top: 8px;

  > span {
    font-size: 15px;
    color: var(--gray);

    & + span {
      margin-left: 20px;
    }
  }
`;
