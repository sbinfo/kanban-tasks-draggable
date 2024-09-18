<template>
	<li class="px-2">
		<UCard class="w-[260px]">
			<template #header>
				<h4>{{ title }}</h4>
			</template>

			<slot />

			<template #footer>
				<slot name="footer"></slot>
			</template>
		</UCard>
	</li>
</template>

<script setup lang="ts">
const { title } = defineProps(['title'])
</script>
