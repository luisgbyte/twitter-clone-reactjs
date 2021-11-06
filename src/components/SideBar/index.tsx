import React from 'react';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';

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
        <List
          title="Talvez você curta"
          elements={[
            <FollowSuggestion name="User1" nickname="@User1" />,
            <FollowSuggestion name="User2" nickname="@User2" />,
            <FollowSuggestion name="User3" nickname="@User3" />,
          ]}
        />
        <List
          title="Talvez você curta"
          elements={[<h1>Test</h1>, <h1>Test</h1>, <h1>Test</h1>]}
        />
      </Body>
    </Container>
  );
};

export default SideBar;
