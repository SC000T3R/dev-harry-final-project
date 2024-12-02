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
}
function populateCheckboxes() {
    const addCheckboxes = (elementId, options) => {
        const element = document.getElementById(elementId);
        options.forEach(option => {
            const div = document.createElement("div");
            div.classList.add("form-check");
            const input = document.createElement("input");
            input.type = "checkbox";
            input.classList.add("form-check-input");
            input.id = `topping-${option}`;
            input.name = "toppings";
            input.value = option;
            const label = document.createElement("label");
            label.classList.add("form-check-label");
            label.setAttribute("for", input.id);
            label.textContent = option;
            div.appendChild(input);
            div.appendChild(label);
            element.appendChild(div);
        });
    };

    addCheckboxes("inputToppings", sandwichData.toppings);
}


document.getElementById("sandwichForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById("inputName").value,
        bread: document.getElementById("inputBread").value,
        protein: document.getElementById("inputProtein").value,
        cheese: document.getElementById("inputCheese").value,
        toppings: Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(opt => opt.value),
        condiments: Array.from(document.querySelectorAll('.condiment-btn.btn-success')).map(button => button.textContent)
    };

   console.log("Sandwich Data:", JSON.stringify(formData, null, 2));

    const successMessage = document.getElementById("successMessage");
    successMessage.textContent = `Thanks, ${formData.name}! Your sandwich has been built.`;
    successMessage.className = "alert alert-success";

    // Clear the form after submission
    document.getElementById("sandwichForm").reset();

    // Clear success message after a few seconds
    setTimeout(() => {
        successMessage.textContent = "";
    }, 5000);
});

document.addEventListener("DOMContentLoaded", function() {
    populateDropdowns();
    populateCheckboxes();
});

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
