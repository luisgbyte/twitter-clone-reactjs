import React from 'react';

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
        <SearchInput placeholder="Burcar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <p>{'Lorem Ipsum'.repeat(10)}</p>
      </Body>
    </Container>
  );
};

export default SideBar;
