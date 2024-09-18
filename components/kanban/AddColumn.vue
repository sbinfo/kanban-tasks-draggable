<template>
	<li class="px-2">
		<div v-if="showInput" class="w-[260px] rounded-xl p-3 bg-white shadow">
			<UInput v-model="columnName" placeholder="Enter column name" />
			<div class="mt-3 flex items-center">
				<UButton @click="addColumn">Add list</UButton>
				<UButton variant="outline" class="ml-3" @click="cancel">
					Cancel
				</UButton>
			</div>
		</div>
		<UButton
			v-else
			icon="lucide:plus"
			variant="soft"
			size="md"
			class="w-[260px] flex justify-center shadow rounded-xl"
			@click="showInput = true"
		>
			Add New Column
		</UButton>
	</li>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showInput = ref(true)
const columnName = ref('')

const addColumn = () => {
	// Logic to add the column
	showInput.value = false
	columnName.value = ''
}

const cancel = () => {
	showInput.value = false
	columnName.value = ''
}
</script>
