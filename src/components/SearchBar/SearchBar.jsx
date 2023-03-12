// import { ErrorMessage, Formik } from 'formik';
// import { useState } from 'react';
// import { object, string } from 'yup';
import { GoSearch } from 'react-icons/go';

// import {
//   SearchbarInput,
//   SearchBox,
//   SearchButton,
//   SearchForm,
// } from './SearchBar.styled';

// const initialValues = { name: '' };
// const userSchema = object({ name: string() });

const SearchBar = ({ onSubmit }) => {
  return (
    // <SearchBox>
    //   <Formik
    //     initialValues={initialValues}
    //     onSubmit={onSubmit}
    //     validationSchema={userSchema}
    //   >
    //     <SearchForm>
    //       <SearchButton type="submit">
    //         <GoSearch />
    //       </SearchButton>
    //       <SearchbarInput
    //         type="text"
    //         name="name"
    //         autoComplete="off"
    //         autoFocus
    //         placeholder="Search movie"
    //       />
    //       <ErrorMessage name="name" />
    //     </SearchForm>
    //   </Formik>
    // </SearchBox>
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button>
          <GoSearch />
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
