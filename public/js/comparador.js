const carData = {
    "Ford Escape 2022": {
        precioInicial: 786500,
        precioConcesionario: 686500,
        gastoGasolina: 650,
        seguridad: "Alta",
        kilometrosConTanque: 600,
        similares: ["Honda Civic", "Mazda 3", "Nissan Sentra"]
    },
    "Ford Mustang": {
        precioInicial: 900000,
        precioConcesionario: 750000,
        gastoGasolina: 1200,
        seguridad: "Media",
        kilometrosConTanque: 650,
        similares: ["Toyota Corolla", "Ford Focus", "Hyundai Elantra"]
    },
    "Mazda 3": {
        precioInicial: 407900,
        precioConcesionario: 350800,
        gastoGasolina: 780,
        seguridad: "Alta",
        kilometrosConTanque: 580,
        similares: ["Toyota Corolla", "Honda Civic", "Kia Forte"]
    },
    "Nissan Sentra": {
        precioInicial: 19500,
        precioConcesionario: 21500,
        gastoGasolina: 600,
        seguridad: "Media",
        kilometrosConTanque: 550,
        similares: ["Mazda 3", "Hyundai Elantra", "Chevrolet Cruze"]
    },
    "Ford Focus": {
        precioInicial: 210000,
        precioConcesionario: 190000,
        gastoGasolina: 500,
        seguridad: "Alta",
        kilometrosConTanque: 600,
        similares: ["Chevrolet Cruze", "Toyota Corolla", "Mustang"]
    },
    "Chevrolet Cruze": {
        precioInicial: 19000,
        precioConcesionario: 21000,
        gastoGasolina: 140,
        seguridad: "Media",
        kilometrosConTanque: 530,
        similares: ["Nissan Sentra", "Mazda 3", "Hyundai Elantra"]
    },
    "Hyundai Elantra": {
        precioInicial: 20500,
        precioConcesionario: 22500,
        gastoGasolina: 105,
        seguridad: "Alta",
        kilometrosConTanque: 680,
        similares: ["Honda Civic", "Mazda 3", "Chevrolet Cruze"]
    },
    "Kia Forte": {
        precioInicial: 21500,
        precioConcesionario: 23500,
        gastoGasolina: 125,
        seguridad: "Alta",
        kilometrosConTanque: 590,
        similares: ["Hyundai Elantra", "Toyota Corolla", "Honda Civic"]
    },
    "Subaru Impreza": {
        precioInicial: 23000,
        precioConcesionario: 25000,
        gastoGasolina: 130,
        seguridad: "Alta",
        kilometrosConTanque: 550,
        similares: ["Mazda 3", "Honda Civic", "Nissan Sentra"]
    },
    "Mazda CX-5": {
        precioInicial: 28000,
        precioConcesionario: 30000,
        gastoGasolina: 160,
        seguridad: "Alta",
        kilometrosConTanque: 450,
        similares: ["Toyota RAV4", "Honda CR-V", "Ford Escape"]
    },
    "Honda CR-V": {
        precioInicial: 27000,
        precioConcesionario: 29000,
        gastoGasolina: 155,
        seguridad: "Alta",
        kilometrosConTanque: 470,
        similares: ["Mazda CX-5", "Toyota RAV4", "Nissan Rogue"]
    },
    "Toyota RAV4": {
        precioInicial: 26000,
        precioConcesionario: 28000,
        gastoGasolina: 150,
        seguridad: "Alta",
        kilometrosConTanque: 500,
        similares: ["Honda CR-V", "Mazda CX-5", "Ford Escape"]
    },
    "Nissan Rogue": {
        precioInicial: 24000,
        precioConcesionario: 26000,
        gastoGasolina: 145,
        seguridad: "Alta",
        kilometrosConTanque: 520,
        similares: ["Toyota RAV4", "Honda CR-V", "Mazda CX-5"]
    },
    "BMW X1": {
        precioInicial: 35000,
        precioConcesionario: 37000,
        gastoGasolina: 180,
        seguridad: "Alta",
        kilometrosConTanque: 400,
        similares: ["Audi Q3", "Mercedes-Benz GLA", "Lexus NX"]
    },
    
    "Nissan Altima": {
        precioInicial: 24500,
        precioConcesionario: 26500,
        gastoGasolina: 110,
        seguridad: "Alta",
        kilometrosConTanque: 600,
        similares: ["Toyota Camry", "Hyundai Sonata", "Kia Optima"]
    },
    "Nissan Sentra": {
        precioInicial: 19500,
        precioConcesionario: 21500,
        gastoGasolina: 95,
        seguridad: "Alta",
        kilometrosConTanque: 700,
        similares: ["Mazda 3", "Honda Civic", "Hyundai Elantra"]
    },
    "Nissan Rogue": {
        precioInicial: 28500,
        precioConcesionario: 30500,
        gastoGasolina: 120,
        seguridad: "Media",
        kilometrosConTanque: 550,
        similares: ["Toyota RAV4", "Ford Escape", "Honda CR-V"]
    },
    "Nissan Versa": {
        precioInicial: 16500,
        precioConcesionario: 18500,
        gastoGasolina: 85,
        seguridad: "Media",
        kilometrosConTanque: 800,
        similares: ["Hyundai Accent", "Kia Rio", "Chevrolet Spark"]
    }
};

let selectedCars = {};

function selectCar(carNumber) {
    const carNames = Object.keys(carData);
    const carOptions = carNames.map(car => `<option value="${car}">${car}</option>`).join("");
    const carSelection = `
        <select onchange="setCar(${carNumber}, this.value)">
            <option value="">Selecciona un carro</option>
            ${carOptions}
        </select>
    `;
    document.getElementById(`car${carNumber}`).innerHTML = carSelection;
}

function setCar(carNumber, carName) {
    if (!carName) return;
    selectedCars[`car${carNumber}`] = carData[carName];
    document.getElementById(`car${carNumber}`).innerText = carName;
    if (Object.keys(selectedCars).length === 2) compareCars();
}

function compareCars() {
    const car1 = selectedCars.car1;
    const car2 = selectedCars.car2;
    const comparisonHTML = `
        <h2>Comparación de Carros</h2>
        <table border="1" cellspacing="0" cellpadding="10">
            <tr>
                <th>Característica</th>
                <th>Carro 1</th>
                <th>Carro 2</th>
            </tr>
            <tr>
                <td>Precio Inicial</td>
                <td>$${car1.precioInicial}</td>
                <td>$${car2.precioInicial}</td>
            </tr>
            <tr>
                <td>Precio al Salir del Concesionario</td>
                <td>$${car1.precioConcesionario}</td>
                <td>$${car2.precioConcesionario}</td>
            </tr>
            <tr>
                <td>Gasto de Gasolina Mensual</td>
                <td>$${car1.gastoGasolina}</td>
                <td>$${car2.gastoGasolina}</td>
            </tr>
            <tr>
                <td>Seguridad</td>
                <td>${car1.seguridad}</td>
                <td>${car2.seguridad}</td>
            </tr>
        </table>
    `;
    const similarOptionsHTML = `
        <h3>Opciones Similares a Menor Precio</h3>
        <div>${car1.similares.join(", ")}</div>
        <div>${car2.similares.join(", ")}</div>
    `;
    document.getElementById("comparison").innerHTML = comparisonHTML;
    document.getElementById("options").innerHTML = similarOptionsHTML;
}
