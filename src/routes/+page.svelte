<script lang="ts">
	import { slide, fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import ScrollTransition from '$lib/ScrollTransition.svelte';
	import Technologies from '../components/Technologies.svelte';
	import AboutMe from '../components/AboutMe.svelte';

	let time: string = '';

	let ready = false;
	onMount(() => {
		ready = true;
		startCounting();
	});

	function startCounting() {
		let startDate = new Date('7/14/20');

		setInterval(() => {
			let now = new Date();
			let years = now.getFullYear() - startDate.getFullYear();
			let months = now.getMonth() - startDate.getMonth();
			let days = now.getDate() - startDate.getDate();

			if (days < 0) {
				months--;
				let previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
				days += previousMonth.getDate();
			}

			if (months < 0) {
				years--;
				months += 12;
			}

			let hours = now.getHours() - startDate.getHours();
			if (hours < 0) {
				days--;
				hours += 24;
			}

			let minutes = now.getMinutes() - startDate.getMinutes();
			if (minutes < 0) {
				hours--;
				minutes += 60;
			}

			let seconds = now.getSeconds() - startDate.getSeconds();
			if (seconds < 0) {
				minutes--;
				seconds += 60;
			}

			time = `${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`;
		}, 1000);
	}

	function scrollToSection(sectionId: string) {
		const technologiesSection = document.getElementById(sectionId);
		if (technologiesSection) {
			technologiesSection.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<!-- Svelte head -->
<svelte:head>
	<title>johonny.dev</title>
	<meta name="description" content="Johonny.dev" />
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

{#if ready}
	<div class="flex flex-col justify-center items-center w-3/5 min-h-screen gap-y-6">
		<h1
			class="text-white text-6xl font-sans font-bold text-center"
			in:slide={{ duration: 500, delay: 300 }}
		>
			Hi! I'm Johnny Patino
		</h1>
		<h1
			class="text-gray-300 text-3xl font-sans font-semibold text-center"
			in:slide={{ duration: 500, delay: 900 }}
		>
			Self Taught Full Stack Developer
		</h1>
		<br />
		<button
			on:click={() => scrollToSection('technologies')}
			in:fade={{ duration: 2000, delay: 1000 }}
		>
			<img src="/downarrow.svg" alt="Description" class="h-12 animate-bounce" />
		</button>
	</div>
	<div class="flex flex-col justify-center items-center w-3/5" id="technologies">
		<AboutMe /><Technologies />
	</div>
{/if}
