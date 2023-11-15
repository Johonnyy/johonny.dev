<!-- ScrollTransition.svelte -->
<script lang="ts">
	import { slide } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';

	export let duration = 500;
	export let delay = 300;
	export let threshold = 0.5;
	export let axis: 'y' | 'x' | undefined = 'y';
	export let onlyOnce = true;

	let isVisible = false;
	let animated = false;
	let rendered = false;
	let element: any;

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!animated) {
					isVisible = entry.isIntersecting;
					if (!rendered) {
						rendered = true;
					} else {
						if (onlyOnce) {
							animated = true;
						}
					}
				}
			},
			{
				root: null,
				threshold
			}
		);

		if (element) observer.observe(element);

		return () => {
			if (element) observer.unobserve(element);
		};
	});
</script>

<div bind:this={element}>
	{#if isVisible}
		<div in:slide={{ duration, delay, axis }}>
			<slot />
		</div>
	{/if}
</div>
