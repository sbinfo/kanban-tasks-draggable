<template>
	<header class="bg-slate-700 h-[55px] px-5">
		<div class="h-full flex items-center justify-between">
			<!-- Logo, Name -->
			<div class="text-xl font-semibold text-white uppercase">Kanban</div>

			<!-- Menu -->
			<div class="menu">
				<ClientOnly>
					<UButton
						:icon="
							isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
						"
						variant="ghost"
						aria-label="Theme"
						size="md"
						class="text-slate-50 dark:text-slate-50 :hover:bg-slate-700 dark::hover:bg-slate-700 hover:bg-opacity-10 dark:hover:bg-opacity-10"
						@click="isDark = !isDark"
					/>
				</ClientOnly>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
	get() {
		return colorMode.value === 'dark'
	},
	set() {
		colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
	},
})
</script>
