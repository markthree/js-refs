<template>
	<div class="fixed left-8 top-6 flex items-center space-x-8">
		<img src="/logo.svg" alt="logo" class="rounded" />
		<a href="https://pc.dishait.cn/" target="_blank">
			<span
				style="
					color: white;
					font-size: 14px;
					border-radius: 3px 0 0 3px;
					padding: 4px 4px 4px 4px;
					background: #00b894;
				"
				>帝莎编程</span
			>
			<span
				style="
					border-radius: 0 3px 3px 0;
					padding: 5px 10px 5px 2px;
					background: #00dc8220;
					font-size: 13px;
					color: rgba(37, 99, 235);
				"
			>
				https://pc.dishait.cn/
			</span>
		</a>
	</div>
	<Navigation />
	<div class="w-screen flex flex-col items-center justify-center">
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" />
			</transition>
		</router-view>
	</div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
