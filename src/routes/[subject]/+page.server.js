import { Configuration, OpenAIApi } from 'openai';
import { OPENAI_KEY } from '$env/static/private';
const config = new Configuration({
	apiKey: OPENAI_KEY
});
const openai = new OpenAIApi(config);

/**@type {import('./$types').Actions} */
export const actions = {
	default: async ({ params, request }) => {
		const formData = await request.formData();
		const characteristic = formData.get('characteristic');
		const meaning = formData.get('meaning');
		const language = formData.get('language');
		const keywords = formData.get('keywords');

		const { subject } = params;

		const chat = await openai.createChatCompletion({
			model: 'gpt-3.5-turbo',
			messages: [
				{
					role: 'system',
					content:
						'You are an expert and ingenious etymologist, you are the creative one when naming things. Your job is to name things.'
				},
				{
					role: 'user',
					content: `Give me three ideas of name for my ${subject} ${
						characteristic !== '' ? `must be "${characteristic}"` : ''
					} ${meaning !== '' ? `meaning "${meaning}"` : ''} ${
						language !== '' ? `in "${language}"` : ''
					}.
                    ${keywords !== '' ? `In addition:  "${keywords}"` : ''}.
                    
                    Your answer have to be a JSON, with the next structure:
                    {
                        success: boolean, //(true if you can response and false if you can't response)
                        names: [
                            {
                                name: string, // (The name)
                                meaning: string, // (The meaning of the name)
                                because: string, // (Why you give the name)
                                pronunciation: string, // (How pronunce the name and IPA)
                            },
                        ],
                        message: string, // (If success is false, explain why)
                    }
                    
                    Don't use Quotation marks(") on the JSON key values.
                    `
				}
			]
		});
        
		const AIResponse = chat.data.choices[0].message.content;
		console.log(AIResponse);
		return JSON.parse(AIResponse);
	}
};
