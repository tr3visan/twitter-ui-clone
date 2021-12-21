import React from 'react';

import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Dot,
  Header,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Wagner Trevisan</strong>
            <span>@tr3visan</span>
            <Dot />
            <time>27 Março</time>
          </Header>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              34
            </Status>
            <Status>
              <LikeIcon />
              +999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
