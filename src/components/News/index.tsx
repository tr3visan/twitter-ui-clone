import React from 'react';

import { Container, Item, Title } from './styles';

interface Props {
  title: string;
  description: string;
}

const News: React.FC<Props> = ({ title, description }) => {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
        <p>{description}</p>
      </Item>
    </Container>
  );
};

export default News;
