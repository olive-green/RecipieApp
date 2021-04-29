import React from 'react'
import style from "./RecipeCss.module.css";
export default function Recipe({title,calories,image,ingredients}) {
    return (
        <div className={style.recipe}>
            <h1 className="title">{title}</h1>

            <ol>Ingredients
                {ingredients.map((ingredient,index) =>(
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ol>
            
            <p><span>Calories :- </span>{ Math.round(calories)}</p>
            <img src={image} alt=""/>
        </div>
    )
}
