const sandwichData = {
    breads: ["White", "Whole Grain", "Sourdough", "Rye"],
    proteins: ["Turkey", "Ham", "Roast Beef", "Vegan Patty"],
    cheeses: ["Cheddar", "Swiss", "Provolone", "American"],
    toppings: ["Lettuce", "Tomato", "Onion", "Pickles", "Jalapeños"],
    condiments: ["Mayo", "Mustard", "Ketchup", "Ranch"]
};

function populateDropdowns() {
    const addOptions = (elementId, options) => {
        const element = document.getElementById(elementId);
        options.forEach(option => {
            const opt = document.createElement("option");
            opt.value = option;
            opt.textContent = option;
            element.appendChild(opt);
        });
    };

    addOptions("inputBread", sandwichData.breads);
    addOptions("inputProtein", sandwichData.proteins);
    addOptions("inputCheese", sandwichData.cheeses);
    addOptions("inputToppings", sandwichData.toppings);
    addOptions("inputCondiments", sandwichData.condiments);
}

document.getElementById("sandwichForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById("inputName").value,
        bread: document.getElementById("inputBread").value,
        protein: document.getElementById("inputProtein").value,
        cheese: document.getElementById("inputCheese").value,
        toppings: Array.from(document.getElementById("inputToppings").selectedOptions).map(opt => opt.value),
        condiments: Array.from(document.getElementById("inputCondiments").selectedOptions).map(opt => opt.value)
    };

    console.log("Sandwich Data:", JSON.stringify(formData, null, 2));

    const successMessage = document.getElementById("successMessage");
    successMessage.textContent = `Thanks, ${formData.name}! Your sandwich has been built.`;
    successMessage.className = "alert alert-success";
});

document.addEventListener("DOMContentLoaded", populateDropdowns);

// Get all condiment buttons
const condimentButtons = document.querySelectorAll('.condiment-btn');

// Add event listener to each condiment button
condimentButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Toggle the 'btn-success' class to indicate selection
        this.classList.toggle('btn-success');
        this.classList.toggle('btn-outline-success');
    });
});

document.getElementById("submitSandwich").addEventListener("click", function () {
  // Collect the data from the form
  const bread = document.getElementById("bread").value;
  const protein = document.getElementById("protein").value;
  const cheese = document.getElementById("cheese").value;
  const toppings = Array.from(document.getElementById("toppings").selectedOptions).map(option => option.value);
  const condiments = Array.from(document.getElementById("condiments").selectedOptions).map(option => option.value);

  // Create an object with the selected sandwich data
  const sandwichData = {
    bread: bread,
    protein: protein,
    cheese: cheese,
    toppings: toppings,
    condiments: condiments,
  };

  // Output the sandwich data to the DOM
  const sandwichSummary = `
    <h3>Your Sandwich:</h3>
    <p>Bread: ${sandwichData.bread}</p>
    <p>Protein: ${sandwichData.protein}</p>
    <p>Cheese: ${sandwichData.cheese}</p>
    <p>Toppings: ${sandwichData.toppings.join(", ")}</p>
    <p>Condiments: ${sandwichData.condiments.join(", ")}</p>
  `;
  document.getElementById("sandwich-summary").innerHTML = sandwichSummary;

  // Log the sandwich data to the console in JSON format
  console.log("Sandwich Data: ", JSON.stringify(sandwichData));
