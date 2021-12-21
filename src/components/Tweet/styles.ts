import styled, { css } from 'styled-components';
import { Comment, Retweet, Favorite } from '../../icons/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 16px;
  border-bottom: 1px solid var(--outline);
  max-width: 100%;
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: var(--gray);
  margin-left: 65px;

  > svg {
    margin-right: 8px;
    > path {
      color: var(--gray);
    }
  }
`;

export const Body = styled.div`
  display: flex;
  margin-top: 3px;
  position: relative;
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);
  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2px;
  padding-left: 68px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  white-space: nowrap;

  > strong {
    margin-right: 5px;
  }

  > span,
  time {
    color: var(--gray);
  }

  > strong,
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Dot = styled.div`
  background: var(--gray);
  width: 3px;
  height: 3px;
  border-radius: 6px;
  margin: 0 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;

export const ImageContent = styled.div`
  margin-top: 12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));
  background: var(--outline);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.1s;
  &:hover {
    opacity: 0.7;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;

  > div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (min-width: 425px) {
    width: 63%;
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;
  color: var(--gray);

  > svg {
    margin-right: 6px;
    > path {
      color: var(--gray);
    }
  }

  /* &:nth-child(1) {
    &,
    > svg path {
      color: var(--gray);
    }
  }
  &:nth-child(2) {
    color: var(--retweet);
    > svg path {
      fill: var(--retweet);
    }
  }
  &:nth-child(3) {
    color: var(--like);

    > svg {
      fill: var(--like);
    }
  } */
`;

const iconCSS = css`
  width: 20px;
  height: 20px;
`;

export const RetweetIcon = styled(Retweet)`
  ${iconCSS}
`;

export const CommentIcon = styled(Comment)`
  ${iconCSS}
`;

export const LikeIcon = styled(Favorite)`
  ${iconCSS}
`;
