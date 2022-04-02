import React from "react";

function RecipeList({ recipes, deleteRecipeHandler }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  const ingredientList = recipes.map((item, index) => {
    const { name, cuisine, photo, ingredients, preparation } = item;
    return (
      <tr key={index}>
        <td className="content_td">
          <p>{name}</p>
        </td>
        <td className="content_td">
          <p>{cuisine}</p>
        </td>
        <td className="content_td">
          <img src={photo} alt={name} />
        </td>
        <td className="content_td">
          <p>{ingredients}</p>
        </td>
        <td className="content_td">
          <p>{preparation}</p>
        </td>
        <td>
          <button onClick={deleteRecipeHandler}>Delete</button>
        </td>
      </tr>
    );
  });

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{ingredientList}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
