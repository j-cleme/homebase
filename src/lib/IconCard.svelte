<script lang="ts">
	export let linkTo: string;
</script>

<a
	href={linkTo}
	target="_blank"
	class="bg-stone-800 p-14 rounded-lg shadow-xl shadow-black max-w-[25rem] max-h-[25rem] flex justify-center items-center hover:bg-purple-600 hover:-translate-y-2 hover:scale-105 transform duration-300"
>
	<slot />
</a>
