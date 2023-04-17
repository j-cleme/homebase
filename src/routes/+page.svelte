<script lang="ts">
	import IconCard from '$lib/IconCard';
	import { Mail } from 'lucide-svelte';
</script>

<div class="w-full h-screen bg-stone-900 text-stone-100 flex justify-center items-center">
	<main class="flex flex-col md:flex-row flex-wrap gap-4 items-baseline">
		<h1 id="time" class="text-7xl">time</h1>
		<h1 id="date" class="text-5xl">date</h1>
		<h1 id="greeting" class="text-3xl">greeting</h1>
		<h1 id="weather" class="text-4xl">weather</h1>

		<IconCard>
			<Mail />
		</IconCard>
	</main>
</div>
