<template>
	<li class="card" @click="emit('open-card-details')">
		{{ title }}
	</li>
</template>

<script setup lang="ts">
const { title } = defineProps<{ title: string }>()
const emit = defineEmits(['open-card-details'])
</script>

<style lang="css" scoped>
.card {
	@apply px-3 py-2 my-3 bg-white dark:bg-slate-700 shadow rounded-xl border-slate-300 cursor-pointer text-sm border border-transparent transition-all hover:border-green-500 active:border-transparent;
}
</style>
