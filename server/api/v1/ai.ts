import {
	createOpenAiModel,
	generateChatResponse
} from '~~/server/services/ai-service';

export default defineEventHandler(async (event) => {
	const body = await readBody(event);

	const { messages } = body;

	const id = messages.length.toString();
	// const lastMessage = messages[messages.length - 1];

	const openaApiKey = useRuntimeConfig().openaiApiKey;
	const openaiModel = createOpenAiModel(openaApiKey);

	const response = await generateChatResponse(messages, openaiModel);

	return {
		id,
		role: 'assistant',
		content: `${response}`
	};
});
