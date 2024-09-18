import { uid } from 'uid'

export enum TaskStatus {
	TODO = 'Todo',
	PROGRESS = 'In progress',
	DONE = 'Done',
}

export interface Task {
	id: string | undefined
	title: string
	description?: string
	owner?: string
	contributors?: string[]
	priority?: number
}

export interface TaskColumn {
	id: string | undefined
	title: string
	status: TaskStatus
	showAddTaskInput?: boolean
	cards: Task[]
}

export const useTasksStore = defineStore('tasks', () => {
	const newTaskTitle = ref('')
	const isModalEditTaskOpen = ref(false)

	const tasks = reactive<TaskColumn[]>([
		{
			id: uid(),
			title: 'Todo',
			status: TaskStatus.TODO,
			showAddTaskInput: false,
			cards: [
				{
					id: uid(),
					title: 'Install Nuxt',
					description: 'Install Nuxt.js for details go to official website',
				},
				{ id: uid(), title: 'Install Nuxt UI' },
				{ id: uid(), title: 'Make Coffee' },
			],
		},
		{
			id: uid(),
			title: 'In Progress',
			status: TaskStatus.PROGRESS,
			showAddTaskInput: false,
			cards: [
				{ id: uid(), title: 'Test created App' },
				{ id: uid(), title: 'Test adaptive' },
				{ id: uid(), title: 'Test devices' },
			],
		},
		{
			id: uid(),
			title: 'Done',
			status: TaskStatus.DONE,
			showAddTaskInput: false,
			cards: [],
		},
	])

	const selectedTask = ref<Task | null>(null)
	const selectedTaskStatus = ref<TaskStatus>()

	const setSelectedTask = (
		columnId: string | undefined,
		taskId: string | undefined
	) => {
		if (!columnId || !taskId) return
		const column = tasks.find(column => column.id === columnId)
		selectedTaskStatus.value = column?.status

		if (!column) return
		const task = column.cards.find(task => task.id === taskId)

		if (!task) return
		selectedTask.value = task
	}

	const addTask = (columnId: string | undefined) => {
		if (newTaskTitle.value.trim() === '') return

		const column = tasks.find(column => column.id === columnId)
		if (!column) return

		const task: Task = {
			id: uid(),
			title: newTaskTitle.value,
		}

		column.cards.push(task)
		newTaskTitle.value = ''
	}

	return {
		tasks,
		selectedTask,
		selectedTaskStatus,
		newTaskTitle,
		isModalEditTaskOpen,
		setSelectedTask,
		addTask,
	}
})
