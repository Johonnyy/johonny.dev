<script lang="ts">
	import ScrollTransition from '$lib/ScrollTransition.svelte';

	const technologiesRow1 = [
		{ name: 'js', title: 'Javascript', description: '' },
		{ name: 'nodejs', title: 'Node.js', description: '' },
		{ name: 'ts', title: 'Typescript', description: '' },
		{ name: 'python', title: 'Python', description: '' },
		{ name: 'java', title: 'Java', description: '' },
		{ name: 'csharp', title: 'C#', description: '' },
		{ name: 'html5', title: 'HTML', description: '' },
		{ name: 'css3', title: 'CSS', description: '' },
		{ name: 'tailwindcss', title: 'Tailwind CSS', description: '' }
	];

	const technologiesRow2 = [
		{ name: 'github', title: 'Github', description: '' },
		{ name: 'firebase', title: 'Firebase', description: '' },
		{ name: 'ubuntu', title: 'Ubuntu', description: '' },
		{ name: 'openai', title: 'OpenAI', description: '' },
		{ name: 'react', title: 'React', description: '' },
		{ name: 'svelte', title: 'Svelte(Kit)', description: '' }
	];
</script>

<div class="flex flex-col gap-y-12 justify-center py-12 min-h-screen w-full">
	<div class="text-4xl font-sans font-semibold text-white text-center">Skillset</div>
	<div class="flex flex-col gap-y-5">
		<div class="flex flex-row gap-3 justify-center">
			{#each technologiesRow1 as t, index}
				<ScrollTransition delay={index * 50}>
					<div>
						<img class="h-10 rounded" src="/technologies/{t.name}.svg" alt={t.name} />
					</div>
				</ScrollTransition>
			{/each}
		</div>
		<div class="flex flex-row gap-3 justify-center">
			{#each technologiesRow2 as t, index}
				<ScrollTransition delay={(index + 8) * 50}>
					<div>
						<img class="h-10 rounded" src="/technologies/{t.name}.svg" alt={t.name} />
					</div>
				</ScrollTransition>
			{/each}
		</div>
	</div>
</div>
