<script lang="ts">
	export let linkTo: string;
</script>

<a
	href={linkTo}
	rel="noreferrer"
	target="_blank"
	class="bg-stone-800 rounded-lg shadow-xl shadow-black w-[8rem] h-[8rem] flex justify-center items-center hover:bg-purple-600 hover:text-black hover:-translate-y-2 hover:scale-105 transform duration-300"
>
	<slot />
</a>
