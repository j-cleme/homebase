<script>
	import { Music } from 'lucide-svelte';

	export let linkList;
</script>

<div
	class="bg-stone-800 p-8 rounded-lg shadow-xl shadow-black max-w-[25rem] max-h-[25rem] flex flex-col justify-center items-center gap-2 hover:-translate-y-2 hover:scale-105 transform duration-300"
>
	<Music />
	{#if linkList !== undefined}
		{#each linkList.links as item}
			<a
				href={item.link}
				target="_blank"
				rel="noreferrer"
				class="px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-black transform duration-300"
			>
				{item.title}
			</a>
		{/each}
	{/if}
</div>
