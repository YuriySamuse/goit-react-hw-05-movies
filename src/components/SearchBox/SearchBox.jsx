import { Wrapper, Input, Icon } from './SearchBox.styled';

const SearchBox = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Icon />
      <Input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value.toLowerCase())}
      />
    </Wrapper>
  );
};

export default SearchBox;
