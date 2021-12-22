import React from 'react';
import Button from '../Button';
import {
  Container,
  TopSide,
  MenuButton,
  BottomSide,
  Avatar,
  ProfileData,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <MenuButton>
          <HomeIcon />
          <span>Início</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </TopSide>

      <BottomSide>
        <Avatar />
        <ProfileData>
          <strong>Wagner Trevisan</strong>
          <span>@tr3visan</span>
        </ProfileData>

        <ExitIcon />
      </BottomSide>
    </Container>
  );
};

export default MenuBar;
