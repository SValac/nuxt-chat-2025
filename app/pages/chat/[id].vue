<script setup lang="ts">
const { chat, messages, sendMessage } = useChat();

const isTyping = ref(false);

const handleSendMessage = async (message: string) => {
	isTyping.value = true;
	await sendMessage(message);
	isTyping.value = false;
};

const appConfig = useAppConfig();
const title = computed(() =>
	chat.value?.title
		? `${chat.value.title} -${appConfig.title}`
		: appConfig.title
);
useHead({
	title: title.value
});
</script>

<template>
	<ChatWindow
		:chat
		:messages
		:is-typing="isTyping"
		@send-message="handleSendMessage"
	/>
</template>
