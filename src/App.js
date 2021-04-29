import React,{useState,useEffect} from "react";
// import logo from './logo.svg';
import './App.css';
import Recipe from "./Recipe";


function App() {
  const APP_KEY="0e720f8940278b9a65fc8c7be3368104";
  const APP_ID="be1456a9";
  // const exampleReq=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState("");


  useEffect(()=>{
    getRecipes();
  },[query]);

  const queryHandler=(e)=>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  const getRecipes=async ()=>{
      const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data=await response.json();

      setRecipes(data.hits);
      console.log(data);
      // console.log(data.hits[0]);
  }

  return (
    <div className="App">
      <form onSubmit={queryHandler}className="search-form">
        <input className="search-bar" placeholder="Search your favourite dish..." value={search} onChange={(e)=>{
    setSearch(e.target.value);}} type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
     <div className="recipes">
     {
        recipes.map(recipe => (
          <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
        ))
      }
       </div>
       
    </div>
  );
}

export default App;
