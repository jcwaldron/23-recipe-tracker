import React, { useState } from "react";



function RecipeCreate({addRecipe}) {

  let initialFormData = {
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: ''
  }

  const [formData, setFormData] = useState(initialFormData);

  function handleInput(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    addRecipe(formData);
    setFormData({...initialFormData})
  }

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleFormSubmit}>
      <table>
        <tbody>
          <tr>
            <td id="nameID">
              <input id="name" name="name" required={true} placeholder="Name" onChange={handleInput} />
            </td>
            <td id="cuisineID">
             <input id="cuisine" name="cuisine" required={true} placeholder="Cuisine" onChange={handleInput} />
            </td>
            <td id="photoID">
             <input id="photo" name="photo" type="url" required={true} placeholder="URL" onChange={handleInput} />
            </td>
            <td id="ingredientsID">
             <textarea id="ingredients" name="ingredients" required={true} placeholder="Ingredients" onChange={handleInput} />
            </td>
            <td id="preparationID">
             <textarea id="preparation" name="preparation" required={true} placeholder="Preparation" onChange={handleInput} />
            </td>
            <td id="submBtnID">
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
