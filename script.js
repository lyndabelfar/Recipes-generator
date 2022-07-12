const seeBtn = document.querySelector('.see-name-btn');
const nameRecipe = document.querySelector('.name-of-recipe');
const container = document.querySelector('.container');
const ingredientsDiv = document.querySelector('.ingrediens-div');
const recipeDiv = document.querySelector('.recipe-div');
const seeIngrediensBtn = document.querySelector('.see-ingrediens-btn');
const seeRecipeBtn = document.querySelector('.see-recipe-btn');
let clicks =0;



async function get(){
    let response = await fetch("https://api.spoonacular.com/recipes/random?apiKey=eb74726f981c4660840fcb83a72a0db1");
    let data = await response.json();
    console.log(data);
    seeBtn.addEventListener('click', seeNameRecipe);
    function seeNameRecipe(){
        clicks++;
        nameRecipe.classList.add('active');
        nameRecipe.innerHTML = data.recipes[0].title;

        seeIngrediensBtn.classList.add('active');

        seeIngrediensBtn.addEventListener('click', seeIngrediens);

    
        function seeIngrediens(){
            ingredientsDiv.classList.add('active');
            ingredientsDiv.innerHTML = data.recipes[0].extendedIngredients.map(ingredient => ingredient.name);;

            seeRecipeBtn.classList.add('active');

            seeRecipeBtn.addEventListener('click', seeRecipe);

            function seeRecipe(){
                recipeDiv.classList.add('active');
                recipeDiv.innerHTML = data.recipes[0].instructions;
            }
        }
    }
}
get()


