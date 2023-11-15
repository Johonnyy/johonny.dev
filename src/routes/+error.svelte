<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
</script>

<div class="flex flex-col min-h-screen justify-center align-center gap-3">
	<h1 class="text-white text-6xl font-sans font-bold text-center">
		{$page.status}: {$page?.error?.message}
	</h1>
	<h1 class="text-gray-300 text-3xl font-sans font-semibold text-center">
		You're not supposed to be here
	</h1>
	<a
		href="/"
		class="text-center text-white text-xl font-sans font-light py-3 px-5 rounded-xl bg-gradient-to-br from-blue-800 to-blue-700 hover:bg-gradient-to-br hover:from-blue-900 hover:to-blue-800"
	>
		&lt; Take me back
	</a>
</div>
