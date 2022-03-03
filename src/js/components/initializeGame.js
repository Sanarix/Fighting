import { Game } from "./Game";

export function initializeGame () {
	const startButton = document.querySelector('.start-buton');

	startButton.addEventListener('click', (e) => {
		e.preventDefault();
		const newGame = Game();
		startButton.classList.add('hide');
	})
}