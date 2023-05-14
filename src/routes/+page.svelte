<script lang="ts">
	import IconCard from '$lib/IconCard.svelte';
	import { Mail } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let time = new Date();
	$: clocktime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
	$: date = time.toLocaleString('default', { month: 'long' });
	$: month = time.getMonth();
	$: year = time.getFullYear();

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<svelte:head>
	<title>Homebase</title>
</svelte:head>

<div class="w-full h-screen bg-stone-900 text-stone-100 font-bold flex justify-center items-center">
	<main class="flex flex-col md:flex-row flex-wrap gap-4 items-baseline">
		<h1 id="time" class="text-7xl">{clocktime}</h1>
		<h1 id="date" class="text-5xl">{date} {month} {year}</h1>
		<h1 id="greeting" class="text-3xl">greeting</h1>
		<h1 id="weather" class="text-4xl">weather</h1>

		<section id="cards">
			<IconCard linkTo="https://mail.proton.me">
				<Mail />
			</IconCard>
		</section>
	</main>
</div>
