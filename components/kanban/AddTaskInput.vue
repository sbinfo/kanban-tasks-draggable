<template>
	<UInput
		ref="my-input"
		v-model="newTaskTitle"
		type="text"
		placeholder="Type a task title..."
		variant="outline"
		autofocus
		:ui="{
			md: 'text-sm',
			base: 'my-3',
			padding: 'px-3 py-4',
			rounded: 'rounded-xl',
		}"
		@keyup.enter="$emit('add-task')"
	/>
</template>

<script setup lang="ts">
import { useTasksStore } from '~/stores/tasks'

const store = useTasksStore()
const { newTaskTitle } = storeToRefs(store)
</script>
