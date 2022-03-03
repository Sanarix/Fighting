export function initializeGame () {
	const startButton = document.querySelector('.start-buton');

	startButton.addEventListener('click', (e) => {
		e.preventDefault();
		Game();
	})
}