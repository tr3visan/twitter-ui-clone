import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import News from '../News';
import FollowSugestion from '../FollowSugestion';
import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSugestion name="Wagner Trevisan" nickname="@tr3visan" />,
              <FollowSugestion name="Hugo Fabrício" nickname="@hugofabricio" />,
              <FollowSugestion name="Murilo Gama" nickname="@murigama" />,
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[
              <News
                title="Twitter lança nova feature"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />,
              <News
                title="Elon Musk bate o carro"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />,
              <News
                title="Bill Gates compra Apple"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />,
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[
              <FollowSugestion name="Wagner Trevisan" nickname="@tr3visan" />,
              <FollowSugestion name="Hugo Fabrício" nickname="@hugofabricio" />,
              <FollowSugestion name="Murilo Gama" nickname="@murigama" />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
