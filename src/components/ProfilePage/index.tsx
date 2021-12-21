import React from 'react';
import Feed from '../Feed';
import {
  Container,
  Banner,
  EditButton,
  Avatar,
  ProfileData,
  LocationIcon,
  Followage,
  CakeIcon,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Wagner Trevisan</h1>
        <h2>@tr3visan</h2>
        <p>
          Front-end at{' '}
          <a
            href="http://superlogica.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            @superlogicatec
          </a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            <span>Piracicaba - SP</span>
          </li>
          <li>
            <CakeIcon />
            <span>Nascido(a) em 27 de Março de 1987</span>
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>37</strong>
          </span>
          <span>
            <strong>456</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
