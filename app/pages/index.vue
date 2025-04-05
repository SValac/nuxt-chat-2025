<script setup></script>
<template>
	<UContainer class="page-container">
		<h1 class="title">Hello World</h1>
		<UButton
			class="button"
			to="/chat"
			label="Start Chat"
		/>
	</UContainer>
</template>
<style scoped>
.page-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
}
.title {
	font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
		BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
		sans-serif;
	display: block;
	font-weight: 300;
	font-size: 100px;
	color: #35495e;
	letter-spacing: 1px;
}

.button {
	font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
		BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
		sans-serif;
	display: block;
	font-weight: 300;
	font-size: 24px;
	color: #35495e;
	letter-spacing: 1px;
}
</style>
