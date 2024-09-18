<template>
	<main class="board">
		<ul class="board-inner">
			<KanbanColumn
				v-for="column in tasks"
				:key="column.id"
				:title="column.title"
			>
				<template #default>
					<draggable
						v-model="column.cards"
						v-bind="dragOptions"
						group="tasks"
						tag="ul"
						class="column-cards-scroll"
						:component-data="{
							type: 'transition-group',
							name: !drag ? 'flip-list' : null,
						}"
						@start="drag = true"
						@end="drag = false"
						item-key="id"
					>
						<template #item="{ element }">
							<KanbanCard
								:title="element.title"
								@open-card-details="
									() => openCardDetails(column.id, element.id)
								"
							/>
						</template>
						<template #footer>
							<li>
								<AddTaskInput
									v-if="column.showAddTaskInput"
									@add-task="() => addNewTask(column.id)"
								/>
							</li>
						</template>
					</draggable>
				</template>

				<template #footer>
					<KanbanAddTask
						:showAddTaskInput="column.showAddTaskInput"
						:columnId="column.id"
						@toggle-add-task-input="
							value => toggleAddTaskInput(column.id, value)
						"
						@add-task="() => addNewTask(column.id)"
					/>
				</template>
			</KanbanColumn>
		</ul>

		<UModal v-model="isModalEditTaskOpen">
			<KanbanTaskDetails />
		</UModal>
	</main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'
import { useTasksStore } from '~/stores/tasks'
import AddTaskInput from './AddTaskInput.vue'

const store = useTasksStore()
const { tasks, selectedTask, isModalEditTaskOpen } = storeToRefs(store)
const { addTask, setSelectedTask } = store

const drag = ref(false)
const dragOptions = computed(() => {
	return {
		animation: 300,
		group: 'tasks',
		disabled: false,
		ghostClass: 'ghost',
	}
})

const openCardDetails = (columnId: string | undefined, taskId: string) => {
	setSelectedTask(columnId, taskId)
	if (selectedTask.value) {
		isModalEditTaskOpen.value = true
	}
}

const toggleAddTaskInput = (columnId: string | undefined, value: boolean) => {
	if (value) {
		tasks.value.forEach(column => {
			column.showAddTaskInput = false
		})
	}
	const column = tasks.value.find(col => col.id === columnId)
	if (column) {
		column.showAddTaskInput = value
	}
}

const addNewTask = (columnId: string | undefined) => {
	addTask(columnId)
}
</script>

<style scoped>
.board {
	height: calc(100vh - 55px);
	background: url('https://images.unsplash.com/photo-1500073584060-670c36a703f1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
		no-repeat center center fixed;
	@apply relative;
}

.board-inner {
	@apply absolute left-0 top-0 right-0 bottom-0 py-4 px-2 flex flex-row overflow-x-auto overflow-y-hidden;
}

.column-cards-scroll {
	max-height: calc(100vh - 220px);
	overflow-y: auto;
	@apply p-1;
}

.column-cards-scroll::-webkit-scrollbar {
	width: 16px;
}

.column-cards-scroll::-webkit-scrollbar-track {
	background-color: transparent;
}

.column-cards-scroll::-webkit-scrollbar-thumb {
	background-color: #a3aaad;
	border-radius: 20px;
	border: 6px solid transparent;
	background-clip: content-box;
}

.column-cards-scroll::-webkit-scrollbar-thumb:hover {
	background-color: #a8bbbf;
}
</style>
