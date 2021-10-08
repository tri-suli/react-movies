import React, { useEffect, useState } from "react";
import { debounce } from 'debounce';
import './Home.style.css';

import Layout from '../components/layout/Layout';
import SearchBox from "../components/search-box/SearchBox";
import CardList from "../components/card-list/CardList";

function Home ({ request }) {
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('Batman');
  const [movies, setMovies] = useState([])
  const onSearchMovie = debounce(handleSearchKeywordChange, 300)

  async function fetchMovies (k, p) {
    const req = await request(k, p);

    if (req.Response === "True") {
      setMovies(req.Search);
    } else {
      setMovies([]);
    }
  }

  function handleSearchKeywordChange (e) {
    setKeyword(e.target.value);
  }

  useEffect(() => {
    fetchMovies(keyword, page);
  }, []);

  useEffect(() => {
    fetchMovies(keyword, page);
  }, [keyword]);

  return (
    <Layout>
      <h1>IMDB Movie List</h1>
      <SearchBox hint={"Search Title"} handleChange={onSearchMovie} />
      <CardList movies={movies} />
    </Layout>
  );
}

export default Home;
