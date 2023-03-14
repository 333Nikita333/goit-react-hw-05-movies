import { GoSearch } from 'react-icons/go';
import PropTypes from 'prop-types';
import {
  SearchBox,
  SearchForm,
  SearchButton,
  SearchbarInput,
} from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  return (
    <SearchBox>
      <SearchForm onSubmit={onSubmit}>
        <SearchbarInput
          type="text"
          name="name"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <SearchButton>
          <GoSearch />
        </SearchButton>
      </SearchForm>
    </SearchBox>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
