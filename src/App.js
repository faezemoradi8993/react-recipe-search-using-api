import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from "./Recipe";

const App = () => {
  const App_ID = "c634960c";
  const App_Key = "0d3f509be6cad281d894b9dc5ca08065";
  const [recipes, setricepis] = useState([]);
  const [search, setsearch] = useState("");
  const [query, setquery] = useState("chicken");

  useEffect(() => {
    getRecepies();
  }, [query]);

  const getRecepies = async () => {
    const respons = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_Key}`);
    const data = await respons.json(respons);
    setricepis(data.hits);
    console.log(data.hits);
  }
  const updatesearch = e => {
    setsearch(e.target.value);
  }
  const getsearch = e => {
    e.preventDefault();
    setquery(search);
    setsearch("");
  }
  return (
    <div className="App">
      <h1>Search Recipe</h1>
      <form onSubmit={getsearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updatesearch} />
        <button className="search-button" type="submit" >search</button>

      </form>
      <div className="recipes">

        {recipes.map(x => (
          <Recipe key={x.recipe.label} title={x.recipe.label} image={x.recipe.image} calories={x.recipe.calories} ingredients={x.recipe.ingredients} />

        ))}
      </div>
    </div>

  );
}

export default App;


