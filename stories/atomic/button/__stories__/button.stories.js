import { Button } from '../button';
import SearchSVG from '../../symbol/icons/search.svg';
import { StoryContainer } from './parts';

export default {
  title: 'Atomic/Button',
  component: Button,
};

export const Usage = () => (
  <StoryContainer>
    <Button>Button text</Button>
    <Button>
      <SearchSVG width="20" height="20" />
      Search
    </Button>
  </StoryContainer>
);
