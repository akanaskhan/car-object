// var a =document.createElement("ul");
// // console.log(a)
// const container = document.getElementById('cardContainer');
const container = document.getElementById('cardContainer');

const cardsData = [
    {
        title: "Civic",
        capacity:"capacity:4 person",
        fuelTank:"fueltank:Mileage City. 11 KM/L",
        engineType:"engine type: Single-Turbo. Displacement",
        color:"color:black,white,red",
        imgSrc: "images/civic.jpg"
    },
    {
        title: "Corolla",
        capacity:"capacity:4 person",
        fuelTank:"fuel tank: f 8 - 14 KM/L with a fuel tank capacity of 55L.",
        engineType:"engine type:  Ground clearance of Corolla is 170 mm",
        color:"color: black,white,red",
        imgSrc: "images/corolla.jfif"
    },
    {
        title: "Revo",
        capacity:"capacity:6 person",
        fuelTank:"fueltank: 80 litres and it averages approx 9 Km/L in city and 12 Km/L on highways",
        engineType:"engine type: 2.8 L, 4-cylinder diesel, in-line, 16-valve DOHC",
        color:"color:black,white,red",
        imgSrc: "images/revo.jpg"
    },
    {
        title: "Audi",
        apacity:"capacity:5 person",
        fuelTank:"fueltank:54 - 61 L",
        engineType:"engine type:  Audi A4 is capable of generating a horsepower of 150 - 225 HP and a torque of 236 - 350 Nm",
        color:"color:black,white,red",
        imgSrc: "images/audi-q7-7.jpg"
    }
];

cardsData.forEach(data => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${data.imgSrc}" alt="${data.title}">
        <h3>${data.title}</h3>
        <p>${data.capacity}</p>
        <p>${data.fuelTank}</p>
        <p>${data.engineType}</p>
        <p>${data.color}</p>

    `;
    container.appendChild(card);
});
const cars = {
    honda: {
        civic: {
            name: "Civic 2023",
            price: 7800000,
            color: ['red', 'black', 'white'],
            custom: "paid",
            taxes: "paid",
            imgSrc: "images/civic.jpg" 
        },
        accord: {
            name: "Accord 2023",
            price: 9500000,
            color: ['blue', 'gray', 'white'],
            custom: "unpaid",
            taxes: "paid",
            imgSrc: "images/accord.jpg"
        }
    },
    toyota: {
        corolla: {
            name: "Corolla 2023",
            price: 7600000,
            color: ['black', 'white', 'silver'],
            custom: "paid",
            taxes: "unpaid",
            imgSrc: "images/corolla.jfif"
        },
        camry: {
            name: "Camry 2023",
            price: 11200000,
            color: ['red', 'black', 'blue'],
            custom: "paid",
            taxes: "paid",
            imgSrc:"images/camry.jpg"
        }
    },
    ford: {
        mustang: {
            name: "Mustang 2023",
            price: 15000000,
            color: ['yellow', 'black', 'red'],
            custom: "paid",
            taxes: "unpaid",
            imgSrc: "images/mustang.jpg"
        },
        explorer: {
            name: "Explorer 2023",
            price: 13000000,
            color: ['blue', 'black', 'white'],
            custom: "unpaid",
            taxes: "paid",
            imgSrc: " images/explorer.jpg" 
               }
    },
    bmw: {
        series3: {
            name: "3 Series 2023",
            price: 14000000,
            color: ['white', 'black', 'gray'],
            custom: "paid",
            taxes: "paid",
            imgSrc: "images/series.jpg"
        },
        series5: {
            name: "5 Series 2023",
            price: 18000000,
            color: ['blue', 'black', 'silver'],
            custom: "paid",
            taxes: "paid",
            imgSrc: "images/bmw5.jpg"
        }
    },
    audi: {
        a4: {
            name: "A4 2023",
            price: 13500000,
            color: ['red', 'black', 'white'],
            custom: "paid",
            taxes: "unpaid",
            imgSrc: "images/a4.jpg"
        },
        q7: {
            name: "Q7 2023",
            price: 20000000,
            color: ['gray', 'black', 'blue'],
            custom: "unpaid",
            taxes: "paid",
            imgSrc: "images/q7.jpg"
        }
    }
};
document.addEventListener('DOMContentLoaded', () => {
    const brandSelect = document.getElementById('brand');
    const modelSelect = document.getElementById('model');
    const showCarDataButton = document.getElementById('showCarData');
    const carDataDiv = document.getElementById('carData');
    const carName = document.getElementById('carName');
    const carImage = document.getElementById('carImage');
    const carPrice = document.getElementById('carPrice');
    const carColor = document.getElementById('carColor');
    const carCustom = document.getElementById('carCustom');
    const carTaxes = document.getElementById('carTaxes');

    // Populate brand dropdown
    Object.keys(cars).forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand.charAt(0).toUpperCase() + brand.slice(1);
        brandSelect.appendChild(option);
    });

    // Update model dropdown when brand is selected
    brandSelect.addEventListener('change', (event) => {
        const selectedBrand = event.target.value;
        modelSelect.innerHTML = '<option value="">--Select Model--</option>'; // Clear previous options
        showCarDataButton.style.display = 'none'; // Hide the button
        carDataDiv.style.display = 'none'; // Hide the car data

        if (selectedBrand) {
            Object.keys(cars[selectedBrand]).forEach(model => {
                const option = document.createElement('option');
                option.value = model;
                option.textContent = cars[selectedBrand][model].name;
                modelSelect.appendChild(option);
            });
        }
    });

    // Show button when a model is selected
    modelSelect.addEventListener('change', () => {
        if (modelSelect.value) {
            showCarDataButton.style.display = 'block';
        } else {
            showCarDataButton.style.display = 'none';
            carDataDiv.style.display = 'none';
        }
    });

    // Show car data when button is clicked
    showCarDataButton.addEventListener('click', () => {
        const selectedBrand = brandSelect.value;
        const selectedModel = modelSelect.value;
        if (selectedBrand && selectedModel) {
            const car = cars[selectedBrand][selectedModel];
            carName.textContent = car.name;
            carImage.src = car.imgSrc;
            carPrice.textContent = `Price: ${car.price}`;
            carColor.textContent = `Colors: ${car.color.join(', ')}`;
            carCustom.textContent = `Custom: ${car.custom}`;
            carTaxes.textContent = `Taxes: ${car.taxes}`;
            carDataDiv.style.display = 'block';
        }
    });
});

