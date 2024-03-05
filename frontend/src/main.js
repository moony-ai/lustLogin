import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: '감마님, 간단하게 구현해봤어. 잘부탁해! 요로시쿠!'
	}
});

export default app;