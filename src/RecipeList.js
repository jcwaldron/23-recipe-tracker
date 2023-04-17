import React from "react";

function RecipeList({recipes, deleteRecipe}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  function EachRecipe({recipes, deleteRecipe}) {
    return (
      <tr>
        <td>{recipes.name}</td>
        <td>{recipes.cuisine}</td>
        <td><img src={recipes.photo} /></td>
        <td className="content_td"><p>{recipes.ingredients}</p></td>
        <td className="content_td"><p>{recipes.preparation}</p></td>
        <td><button name="delete" className="btn" onClick={() => deleteRecipe(recipes)}>
            Delete
          </button>
        </td>
      </tr>
    )
  }

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Cuisine</th>
          <th>Photo</th>
          <th id="wideCol">Ingredients</th>
          <th id="wideCol">Preparation</th>
          <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {recipes.map((recipe, index) => <EachRecipe key={index} recipes={recipe} deleteRecipe={deleteRecipe} />)}       
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
