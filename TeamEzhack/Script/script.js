document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('active');
});
const searchIcon = document.getElementById('search-icon');
const viewReceipe = document.getElementById('receipe-btn');
const recipeDetail=document.querySelector('.recipe-detail');
const recipeBtn=document.querySelector('.recipe-close');
const recipeDetailContainer=document.querySelector('.recipe-detail-container');
const kherBtn=document.querySelector('.kher-btn');
const dhidoBtn=document.querySelector('.dhido-btn');
const sekuwaBtn=document.querySelector('.sekuwa-btn');
const yomariBtn=document.querySelector('.yomari-btn');
const dhirkiBtn=document.querySelector('.dhirki-btn');
const selrotiBtn=document.querySelector('.selroti-btn');
const dalbatBtn=document.querySelector('.dalbat-btn');



// Search icon event listener
searchIcon.addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    fetchRecipes(query);
});

function fetchRecipes(query) {
    const appId = '1e7719d7';
    const appKey = '79aebf8b8a823e5241d20d49926791ce';
    const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayRecipes(data.hits);
        })
        .catch(error => console.error("Error while fetching recipe:", error));
        
    }
    
    function displayRecipes(recipes) {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = ''; // Clear previous results

    recipes.forEach(recipeData => {
        const recipe = recipeData.recipe; // Access the recipe object
        console.log(recipe);
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe'); // Added correct class name
        
        recipeElement.innerHTML = `
            <h2>${recipe.label}</h2>
            <img src="${recipe.image}" alt="${recipe.label}">
            <p><strong>Source:</strong> ${recipe.source}</p> `
            const button=document.createElement('button')
            button.textContent="view recipe";
            recipeElement.appendChild(button);

            button.addEventListener('click',()=>{
                openRecipePopup(recipe);
                console.log(recipe.label);
            })

        resultContainer.appendChild(recipeElement); // Append each recipe to the container
    });
}

function fetchIngredients(recipe) {
    let ingredientsList = "";
    if (recipe.ingredients) {
        recipe.ingredients.forEach(ingredient => {
            ingredientsList += `<li>${ingredient.text}</li>`;
        });
    }
    return ingredientsList;
}
const openRecipePopup=(recipe)=>{
    recipeDetailContainer.innerHTML=`
    <h2>${recipe.label}</h2>
    <h3>Ingredients</h3>
    <ul>${fetchIngredients(recipe)}</ul>
    <h3>mealType</h3>
    <p>${recipe.mealType}</p>`;

    recipeDetailContainer.parentElement.style.display="block";
}
recipeBtn.addEventListener('click', () => {
    recipeDetail.style.display = "none";
});
kherBtn.addEventListener('click',()=>{
    openKher();
})
const openKher=()=>{
recipeDetailContainer.innerHTML=`
<h3>Kheer</h3>
<p>Kheer is a traditional sweet dish commonly made by Brahmins, especially during religious ceremonies and festivals.
 It is a type of rice pudding made with milk, rice, sugar, and flavored with cardamom,
saffron, and sometimes nuts and raisins.
 Kheer is considered a sacred food, often offered to deities during rituals.</p>
 <h3>Ingredient</h3>
 <P>Rice - 1/4 cup (typically basmati or any other long-grain rice)
Milk - 4 cups (full-fat milk is preferred for creaminess)
Sugar - 1/2 cup (adjust to taste)
Water - 1/2 cup (for cooking the rice)
Cardamom Powder - 1/2 teaspoon (for flavor)
Ghee - 1 tablespoon (clarified butter, optional for added richness)</p>
<h3>Instruction</h3>
<p>Cook the Rice: Rinse the rice under cold water. In a pot, bring the water to a boil, add the rice, and cook until the rice is tender and water is absorbed.,<br /><br />
Prepare the Milk: In another pot, bring the milk to a simmer. Add the cooked rice to the milk and cook on a low flame, stirring frequently, until the mixture thickens.<br /><br />
Add Sugar and Flavorings: Stir in the sugar and continue to cook until dissolved. Add cardamom powder, and saffron (if using), and cook for a few more minutes.<br /><br />
Finish and Garnish: Add nuts, raisins, and any other optional ingredients. Cook for a few more minutes, then remove from heat. Garnish with additional nuts and a sprinkle of cardamom powder before serving.</p>`
 

recipeDetailContainer.parentElement.style.display="block";
}

dhidoBtn.addEventListener('click',()=>{
    opendhido();
})
const opendhido=()=>{
    recipeDetailContainer.innerHTML=`
    <h2>Dhido</h2>
    <p> Dhido is a traditional staple food of the Gurung community, made from buckwheat or millet flour.
     It has a dense, dough-like consistency and is often served with Gundruk, a fermented leafy green vegetable. 
    This dish is typically accompanied by meat, curry, or aachar (pickle).</p>
    <h3>Ingredient</h3>
    <p>Flour - 1 cup (You can use buckwheat flour, millet flour, or cornmeal)
Water - 3 cups (approximately, adjust as needed)
Ghee or Butter - 1 tablespoon (optional, for added flavor and richness)
Salt - To taste (optional)</p>
<h3>Instruction</h3>
<p>Boil the Water: In a large, heavy-bottomed pot, bring the water to a boil. If you're using salt, you can add it at this stage.<br /><br />

Add the Flour: Slowly add the flour to the boiling water while continuously stirring with a wooden spatula or ladle. This prevents lumps from forming.<br /><br />

Cook the Mixture: Continue stirring vigorously as the mixture thickens and begins to form a dough-like consistency. Lower the heat and let it cook for a few more minutes, stirring occasionally.<br /><br />

Incorporate Ghee or Butter (Optional): If you want a richer flavor, you can add a tablespoon of ghee or butter at this stage, stirring it into the Dhido until well combined.<br /><br />

Serve: Once the Dhido is fully cooked, it should have a thick, doughy texture. Serve hot with vegetables, pickles, lentil soup (dal), or meat curry.</p>`
    recipeDetailContainer.parentElement.style.display="block";
}

sekuwaBtn.addEventListener('click',()=>{
    opensekuwa();
})
const opensekuwa=()=>{
    recipeDetailContainer.innerHTML=`
    <h2>Sekuwa</h2>
    <p> Sekuwa is a popular Nepali dish made with marinated and grilled meat</p>
    <h3>Ingredient</h3>
    <p>500g chicken or lamb (cut into bite-sized pieces)
2 tablespoons vegetable oil
2 tablespoons soy sauce
1 tablespoon lemon juice
2 tablespoons yogurt
1 tablespoon ginger paste
1 tablespoon garlic paste
1 tablespoon chili powder (adjust to taste)
1 tablespoon turmeric powder
1 tablespoon cumin powder
1 tablespoon coriander powder
1 teaspoon garam masala
Salt (to taste)
Fresh coriander (for garnish)
Lemon wedges (for serving</p>
<h3>Instruction</h3>
<p>Boil the Water: Marinate the Meat:

In a large bowl, combine the soy sauce, lemon juice, yogurt, ginger paste, garlic paste, chili powder, turmeric powder, cumin powder, coriander powder, garam masala, and salt.
Add the meat pieces to the marinade and mix well. Cover and refrigerate for at least 2 hours, preferably overnight.<br /><br />
Prepare the Grill:

Preheat your grill to medium-high heat. If you're using a charcoal grill, make sure the coals are hot and ashy.<br /><br />
Grill the Meat:

Thread the marinated meat onto skewers, making sure to leave some space between the pieces.
Brush the grill grates with vegetable oil to prevent sticking.
Place the skewers on the grill and cook for about 10-15 minutes, turning occasionally, until the meat is cooked through and has a nice char.<br /><br />
Serve:

Remove the skewers from the grill and let the meat rest for a few minutes.
Garnish with fresh coriander and serve with lemon wedges.</p>`
    recipeDetailContainer.parentElement.style.display="block";
}

yomariBtn.addEventListener('click',()=>{
    openyomari();
})
const openyomari=()=>{
    recipeDetailContainer.innerHTML=`
    <h2>yomari</h2>
    <p>Yomari is a traditional Nepali sweet dumpling made from steamed dough and typically filled with a mixture
     of jaggery and sesame seeds. It's a delicacy often prepared during festivals like Yomari Punhi. </p>
     <h3>Ingridient</h3>
     <p>
Yomari is a traditional Nepali sweet dumpling made from steamed dough and typically filled with a mixture of jaggery and sesame seeds. It's a delicacy often prepared during festivals like Yomari Punhi. Here's a recipe along with a description:

Yomari Recipe
Ingredients:
For the Dough:

1 cup rice flour
1/2 cup water (or as needed)
1/4 cup sugar
1/4 teaspoon salt
For the Filling:

1/2 cup jaggery (finely chopped or grated)
1/4 cup sesame seeds (toasted)
1/4 cup grated coconut (optional)
1/4 teaspoon cardamom powder (optional)</p>

<h3>Instruction</h3>
<p>Prepare the Dough:

In a mixing bowl, combine the rice flour, sugar, and salt.
Gradually add water to the mixture, kneading continuously until you get a smooth, soft dough. The consistency should be similar to playdough. Cover the dough with a damp cloth to keep it from drying out.
<br /><br />Prepare the Filling:

In a pan over low heat, melt the jaggery, stirring frequently until it becomes a smooth syrup. If you’re using grated jaggery, it will melt quickly.
Add the toasted sesame seeds to the jaggery syrup. If you're using grated coconut and cardamom powder, add them as well. Mix thoroughly and let it cool.
<br /><br />Shape the Yomari:

Take a small portion of the dough and flatten it into a small disc, about 3-4 inches in diameter.
Place a spoonful of the jaggery filling in the center of the disc.
Gently fold the edges of the dough over the filling to form a dumpling, pinching the edges to seal them tightly. The shape should resemble a teardrop or a small pouch.
<br /><br />Steam the Yomari:

Prepare a steamer by boiling water in the base.
Place the yomari on a steaming rack lined with parchment paper or banana leaves to prevent sticking.
Steam the yomari for about 15-20 minutes or until the dough is cooked through and slightly translucent.
<br /><br />Serve:

Allow the yomari to cool slightly before serving. They can be enjoyed warm or at room temperature.</p>`;
    recipeDetailContainer.parentElement.style.display="block";
}
dhirkiBtn.addEventListener('click',()=>{
    recipeDetailContainer.innerHTML=`
    <h2>Dhirki</h2>
    <p>Dhirki  is a traditional Nepali dish made from buckwheat or millet flour.
     It's a staple food in many parts of Nepal and is known for its simplicity and nutritious qualities. </p>
     <h3>Ingridient</h3>
     <p>1 cup buckwheat flour (or millet flour, if preferred)
1 1/2 cups water (or as needed)
1/2 teaspoon salt (optional)</p>
<h3>Instruction</h3>
<p>Prepare the Mixture:

In a medium-sized pot, heat 1 1/2 cups of water until it begins to boil. If you're using salt, you can add it to the water.
Gradually add the buckwheat flour to the boiling water while stirring continuously to avoid lumps. You can use a whisk or a wooden spoon.
<br /><br />Cook the Mixture:

Reduce the heat to low and continue to cook the mixture, stirring frequently. The mixture will start to thicken and become smooth.
Cook for about 10-15 minutes, stirring regularly, until the mixture becomes a thick, cohesive dough and starts to pull away from the sides of the pot.
<br /><br />Shape and Serve:

Once the dhirki is cooked, transfer it to a plate or a traditional dhido-making vessel. Let it cool slightly before shaping.
Use a wooden spatula or spoon to shape the dhirki into small portions or traditional shapes. It can be served with a variety of accompaniments like vegetable curry, pickles, or yogurt.</p>`;
    recipeDetailContainer.parentElement.style.display="block";
})

document.querySelector('.belroti-btn').addEventListener('click', () => {
    openselroti();
    console.log(selrotiBtn);
});

const openselroti = () => {
    recipeDetailContainer.innerHTML = `<h2>Selroti</h2>
    <p>Selroti is a traditional Nepali ring-shaped, deep-fried bread made from rice flour.
     It's slightly sweet, with a crispy exterior and a soft, fluffy interior. 
     Selroti is often prepared during festivals, special occasions, and religious ceremonies in Nepal.
     It's usually served with yogurt, curry, or just enjoyed on its own as a snack.</p>
     <h3>Ingrident</h3>
     <p>2 cups of rice flour (preferably freshly ground)
1/2 cup of sugar (adjust to taste)
1/4 cup of ghee or butter (melted)
1/2 cup of milk (optional, for richer texture)
1/2 teaspoon of ground cardamom (optional, for flavor)
1/2 teaspoon of ground fennel seeds (optional, for flavor)
1/4 teaspoon of baking soda (optional, for fluffiness)
1 ripe banana (mashed, optional, for softness)
Water (as needed, to make the batter)
Oil or ghee for deep frying</p>
<h3>Instruction</h3>
<p>Preparing the Batter:
In a large mixing bowl, combine the rice flour, sugar, ground cardamom, ground fennel seeds, and baking soda (if using).
Add the mashed banana to the mixture and mix well.
Gradually add melted ghee or butter, milk (if using), and water to the flour mixture, stirring constantly to avoid lumps. The batter should be smooth and slightly thick, with a consistency similar to pancake batter.
Cover the batter and let it rest for 2-3 hours. This resting time allows the flavors to develop and the batter to thicken slightly.
<br/><br/>Frying the Selroti:
Heat oil or ghee in a deep frying pan or wok over medium heat. The oil should be hot but not smoking.
Once the oil is hot, pour the batter into a piping bag or a clean plastic bag with a small hole cut in one corner (you can also use your hands if you're comfortable).
Carefully pipe or pour the batter into the hot oil in a circular motion to form a ring shape (similar to a doughnut).
Fry the Selroti until it turns golden brown on one side, then carefully flip it to cook the other side. Each Selroti should take about 2-3 minutes per side.
Once both sides are golden brown and crispy, remove the Selroti from the oil and place it on a paper towel to drain excess oil.</p>`;
    recipeDetailContainer.parentElement.style.display = "block";
};
dalbatBtn.addEventListener('click',()=>{
    opendalbat();
})
const opendalbat=()=>{
    recipeDetailContainer.innerHTML=`
    <h2>DalBhat</h2>
    <p>Dal Bhat is a traditional and staple dish of Nepal, consisting of steamed rice (Bhat) and
         lentil soup (Dal). It is a complete meal often served with various side dishes such as vegetables, pickles, yogurt, and sometimes meat curry. Dal Bhat is nutritious 
        and flavorful, providing a balanced diet with protein, carbohydrates, and essential vitamins.</p>
        <h3>ingredient</h3>
        <p>For Dal (Lentil Soup):
1 cup of split red lentils (Masoor dal) or yellow lentils (Moong dal)
4 cups of water
1 small onion, finely chopped
2 tomatoes, chopped
2 cloves of garlic, minced
1-inch piece of ginger, minced
1-2 green chilies, chopped (optional)
1/2 teaspoon turmeric powder
1/2 teaspoon cumin seeds
1/2 teaspoon mustard seeds
1/2 teaspoon garam masala
1/2 teaspoon cumin powder
1/2 teaspoon coriander powder
2 tablespoons of ghee or oil
Salt to taste
Fresh cilantro, chopped (for garnish)
For Bhat (Steamed Rice):
1 cup of Basmati rice or any other long-grain rice
2 cups of water
Salt to taste</p>
<h3>Instruction</h3>
<p>Preparing the Bhat (Steamed Rice):
Rinse the rice thoroughly under cold water until the water runs clear.
In a pot, bring 2 cups of water to a boil. Add a pinch of salt.
Add the rinsed rice to the boiling water. Stir once, then reduce the heat to low.
Cover the pot with a lid and let the rice simmer for about 15-18 minutes, or until the water is absorbed and the rice is cooked.
Remove the pot from heat and let it sit, covered, for 5 minutes. Fluff the rice with a fork before serving.
Preparing the Dal (Lentil Soup):
Rinse the lentils under cold water until the water runs clear.
In a large pot, add the lentils and 4 cups of water. Bring to a boil over medium heat.
Skim off any foam that forms on the surface.
Add turmeric powder, salt, and chopped tomatoes. Reduce the heat to low and let the lentils simmer for about 20-25 minutes, or until they are soft and fully cooked.
In a separate pan, heat ghee or oil over medium heat. Add cumin seeds and mustard seeds. Let them crackle.
Add chopped onions, garlic, ginger, and green chilies. Sauté until the onions are golden brown.
Add cumin powder, coriander powder, and garam masala. Stir well and cook for another 2 minutes.
Pour the sautéed mixture into the cooked lentils. Stir well and let it simmer for another 5-10 minutes.
Garnish with fresh cilantro before serving.</p>`;
    recipeDetailContainer.parentElement.style.display = "block";
}

const lopsiBtn=document.querySelector('.lopsi-btn');
lopsiBtn.addEventListener('click',()=>{
    openlopsi();
})
const openlopsi=()=>{
    recipeDetailContainer.innerHTML=`
    <h2>Lopsi</h2>
    <p>Lapsi, also known as Nepali hog plum, is a small, sour fruit native to Nepal.
     It's often used to make a traditional candy or pickle. The candy, known as "Lapsi Candy" or "Lapsiko Titaura," 
    is sweet, tangy, and slightly spicy. It's a popular treat in Nepal and enjoyed by people of all ages.</p>
    <h3>Ingredient</h3>
    <p>500 grams of Lapsi (Nepali hog plum)
300 grams of sugar
1/2 teaspoon of red chili powder (optional, for a spicy kick)
1/4 teaspoon of salt
1/4 teaspoon of black salt (optional, for extra tanginess)
1/2 teaspoon of cumin powder
1/2 teaspoon of ginger powder (optional)
1/2 teaspoon of turmeric powder</p>
<h3>Instruction</h3>
<p>Preparing the Lapsi:
Wash the Lapsi thoroughly under running water.
Boil the Lapsi in a large pot with enough water to cover the fruits. Boil until the Lapsi becomes soft and the skin starts to peel off (about 15-20 minutes).
Drain the water and let the Lapsi cool. Once cool, peel the skin off the fruits and remove the seeds. You should be left with the soft, pulpy flesh of the Lapsi.
<br/><br/>Making the Lapsi Candy:
In a large pan, add the Lapsi pulp and sugar. Cook over medium heat, stirring constantly.
As the sugar dissolves, the mixture will start to thicken. Keep stirring to prevent the mixture from sticking to the pan.
Add the salt, black salt (if using), cumin powder, ginger powder (if using), red chili powder, and turmeric powder. Mix well to combine all the spices.
Continue to cook until the mixture becomes thick and sticky. The consistency should be like a thick jam or paste.
Remove the pan from the heat and let the mixture cool slightly.
Shaping the Candy:
Once the mixture is cool enough to handle, take small portions and shape them into small balls, discs, or any desired shape.
Spread the shaped candies on a tray lined with parchment paper. Let them cool completely.
Once cooled, the candies will firm up and can be stored in an airtight container.</p>

    `;
    recipeDetailContainer.parentElement.style.display = "block";
}




