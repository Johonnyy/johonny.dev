<script lang="ts">
	import { onMount } from 'svelte';

	let years: number = 0;
	let months: number = 0;
	let days: number = 0;
	let hours: number = 0;
	let minutes: number = 0;
	let seconds: number = 0;

	onMount(() => {
		startCounting();
	});

	function startCounting() {
		let startDate = new Date('7/14/20');

		setInterval(() => {
			let now = new Date();
			years = now.getFullYear() - startDate.getFullYear();
			months = now.getMonth() - startDate.getMonth();
			days = now.getDate() - startDate.getDate();

			if (days < 0) {
				months--;
				let previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
				days += previousMonth.getDate();
			}

			if (months < 0) {
				years--;
				months += 12;
			}

			hours = now.getHours() - startDate.getHours();
			if (hours < 0) {
				days--;
				hours += 24;
			}

			minutes = now.getMinutes() - startDate.getMinutes();
			if (minutes < 0) {
				hours--;
				minutes += 60;
			}

			seconds = now.getSeconds() - startDate.getSeconds();
			if (seconds < 0) {
				minutes--;
				seconds += 60;
			}

			//time = `${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`;
		}, 1000);
	}
</script>

<div class="flex flex-row justify-between items-center py-12 min-h-screen w-full">
	<div class="flex flex-col text-white gap-3 1/2 text-center">
		<div class="text-4xl">I have been coding for</div>
		<br />
		<div class="text-5xl">{years}<span class="inline text-2xl font-light">&nbsp;Years</span></div>
		<div class="text-5xl">{months}<span class="inline text-2xl font-light">&nbsp;Months</span></div>
		<div class="text-5xl">{days}<span class="inline text-2xl font-light">&nbsp;Days</span></div>
		<div class="text-5xl">{hours}<span class="inline text-2xl font-light">&nbsp;Hours</span></div>
		<div class="text-5xl">
			{minutes}<span class="inline text-2xl font-light">&nbsp;Minutes</span>
		</div>
		<div class="text-5xl">
			{seconds}<span class="inline text-2xl font-light">&nbsp;Seconds</span>
		</div>
	</div>
	<div class="flex flex-col text-center w-1/2">
		<div class="flex flex-col text-white gap-3">
			<div class="text-4xl">About me</div>
			<div>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</div>
			<a
				href="/about"
				class="text-center text-white text-xl font-sans font-light py-3 px-5 rounded-xl bg-gradient-to-br from-blue-800 to-blue-700 hover:bg-gradient-to-br hover:from-blue-900 hover:to-blue-800"
			>
				Learn More About Me &gt;
			</a>
		</div>
	</div>
</div>
