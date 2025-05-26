import { useState} from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import css from './SearchBar.module.css';

type SearchBarProps = {
  handleChangeQuery: (query: string) => void;
};

const SearchBar = ({ handleChangeQuery }: SearchBarProps) => {
  const [query, setQuery] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleChangeQuery(query);
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;