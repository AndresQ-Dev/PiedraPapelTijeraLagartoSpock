// Definir las reglas del juego
const rules = {
    piedra: ['tijera', 'lagarto'],
    papel: ['piedra', 'spock'],
    tijera: ['papel', 'lagarto'],
    lagarto: ['spock', 'papel'],
    spock: ['tijera', 'piedra']
};

// Seleccionar los elementos del DOM
const buttons = document.querySelectorAll('#game button');
const resultDiv = document.getElementById('result');

// Función para obtener la elección de la computadora
function getComputerChoice() {
    const choices = Object.keys(rules);
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Función para determinar el ganador
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return '¡Empate!';
    } else if (rules[playerChoice].includes(computerChoice)) {
        return '¡Ganaste! :)';
    } else {
        return '¡Perdiste! :(';
    }
}

// Función para manejar el clic en los botones
function handleClick(event) {
    const playerChoice = event.target.id;
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    resultDiv.innerHTML = `Elegiste ${playerChoice.toUpperCase()} <br> la computadora eligió ${computerChoice.toUpperCase()}.<br>${result}`;
}

// Agregar event listeners a los botones
buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});