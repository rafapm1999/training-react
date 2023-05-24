//import './Home.css';
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  for (const p of searchParams) {
    console.log(p);
  }
  console.log(searchParams.toString());

  useEffect(() => {
    if (searchParams.get("page")) {
      setPage(parseInt(searchParams.get("page")));
    }
  }, [searchParams]);
  return (
    <>
      <h2>Home</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, rem.
      </p>
      <Link to={`/?page=${page - 1}`}>Prev</Link>
      <Link to={`/?page=${page + 1}`}>Next</Link>
    </>
  );
}

export default Home;
