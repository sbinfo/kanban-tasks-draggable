<template>
	<div v-if="showAddTaskInput" class="w-full">
		<UButton size="md" @click="$emit('add-task')">Add Task</UButton>
		<UButton
			variant="outline"
			size="md"
			class="ml-3"
			@click="$emit('toggle-add-task-input', false)"
		>
			Cancel
		</UButton>
	</div>
	<UButton
		v-else
		icon="lucide:plus"
		variant="ghost"
		size="md"
		class="w-full rounded-xl"
		@click="$emit('toggle-add-task-input', true)"
	>
		Add Task
	</UButton>
</template>

<script setup lang="ts">
const { showAddTaskInput } = defineProps(['showAddTaskInput'])
</script>
