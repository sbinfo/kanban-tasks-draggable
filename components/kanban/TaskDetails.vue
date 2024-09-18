<template>
	<UCard v-if="selectedTask" class="min-w-[560px]">
		<div class="flex p-4">
			<div class="w-2/3">
				<!-- Header -->
				<div class="mb-4">
					<h3 class="text-xl">{{ selectedTask.title }}</h3>
					<p class="italic">
						Status
						<span class="text-primary underline">{{ selectedTaskStatus }}</span>
					</p>
				</div>
				<!-- Description -->
				<div class="mb-4">
					<h3 class="text-xl mb-2">Description</h3>
					<UTextarea
						v-model="selectedTask.description"
						placeholder="Add a description"
					></UTextarea>
				</div>
			</div>

			<UDivider orientation="vertical" class="mx-5" />

			<div class="w-1/3">
				<h3 class="text-xl mb-2">Contributors</h3>
				<ul v-if="selectedTask.contributors">
					<li v-for="person in selectedTask.contributors">
						{{ person }}
					</li>
				</ul>
				<UButton icon="lucide:plus" class="mt-2" color="primary" variant="soft">
					Add Contributor
				</UButton>
			</div>
		</div>
	</UCard>
</template>

<script setup lang="ts">
import { useTasksStore } from '~/stores/tasks'

const store = useTasksStore()
const { selectedTask, selectedTaskStatus } = storeToRefs(store)
</script>
