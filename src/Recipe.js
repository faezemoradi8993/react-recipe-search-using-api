import React from 'react';
import style from "./recipe.module.css";
const Recipe=({title , calories , image ,ingredients})=>{
return(
    <div className={style.recipe}>
        <h1>{title}</h1>
        <p>calories : {calories}</p>
        <ol>
            {ingredients.map(x=>(
                <li>{x.text}</li>
            ))}
        </ol>
        <img className={style.image} src={image}/>
    </div>
);
}
export default Recipe;