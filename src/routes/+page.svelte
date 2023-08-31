<script lang="ts">
	import IconCard from '$lib/IconCard.svelte';
	import ListCard from '$lib/ListCard.svelte';
	import { CalendarCheck2, Github, Inbox, Mail, MessageSquare, Youtube } from 'lucide-svelte';
	// import { onMount } from 'svelte';

	import type { PageData } from './$types';

	export let data: PageData;

	let time = new Date();
	$: clocktime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
	$: date = time.toLocaleString('default', { month: 'long' });
	$: month = time.getDate();
	$: year = time.getFullYear();

	let linkList: { link: string; title: string }[] = [];
	linkList.push({ title: 'Bandcamp', link: 'https://bandcamp.com/' });
	linkList.push({
		title: 'Youtube',
		link: 'https://www.youtube.com/playlist?list=PL1Dm6N2QRmAkw5j-TSjiG9klyIKybppub'
	});
	linkList.push({ title: 'musicbrainz', link: 'https://musicbrainz.org/' });
	linkList.push({ title: 'MusicBee', link: 'https://getmusicbee.com/' });

	// let greetings: string[] = ['good morning!', 'good afternoon.', 'good night.'];
	// let currentGreeting: string;
	// if (time.getHours() >= 5 && time.getHours() <= 11) {
		// currentGreeting = greetings[0];
	// }
	// if (time.getHours() >= 11 && time.getHours() <= 18) {
		// currentGreeting = greetings[1];
	// }
	// if (time.getHours() >= 19) {
		// currentGreeting = greetings[2];
	// }

	// onMount(() => {
		// const interval = setInterval(() => {
			// time = new Date();
			// if (time.getHours() >= 5 && time.getHours() <= 11) {
				// currentGreeting = greetings[0];
			// }
			// if (time.getHours() >= 11 && time.getHours() <= 18) {
				// currentGreeting = greetings[1];
			// }
			// if (time.getHours() >= 19) {
				// currentGreeting = greetings[2];
			// }
		// }, 1000);

		// return () => {
			// clearInterval(interval);
		// };
	// });
	console.log(data)
</script>

<svelte:head>
	<title>Homebase</title>
</svelte:head>

<main
	class="w-full h-screen bg-stone-900 text-stone-100 font-bold grid grid-cols-2 justify-center justify-items-center gap-16"
>
	<div class="flex flex-col gap-4 items-center justify-center place-self-end">
		<h1 id="time" class="text-7xl">{clocktime}</h1>
		<h1 id="greeting" class="text-3xl font-normal">currentGreeting}</h1>
	</div>
	<div class="flex flex-col gap-4 items-center justify-center justify-self-start self-end">
		<h1 id="date" class="text-7xl">{date} {month} {year}</h1>
		<h1 id="weather" class="text-4xl flex gap-8">
			<span class="font-bold">{data.result.data[0].temp}°f</span>
			<span class="font-bold">{data.result.data[0].weather.description}</span>
		</h1>
	</div>
	<section id="cards" class="inline-grid grid-flow-row grid-cols-3 gap-4 justify-items-center max-w-fit h-fit justify-self-end">
		<IconCard linkTo="https://github.com/j-cleme">
			<Github />
		</IconCard>
		<IconCard linkTo="https://mail.proton.me">
			<Mail />
		</IconCard>
		<IconCard linkTo="https://calendar.proton.me">
			<CalendarCheck2 />
		</IconCard>
		<IconCard linkTo="https://app.revolt.chat/">
			<MessageSquare />
		</IconCard>
		<IconCard linkTo="https://mail.google.com">
			<Inbox />
		</IconCard>
		<IconCard linkTo="https://www.youtube.com/">
			<Youtube />
		</IconCard>
	</section>
	<section class="flex flex-col justify-center items-center place-self-start">
		<ListCard {linkList} />
	</section>
</main>
