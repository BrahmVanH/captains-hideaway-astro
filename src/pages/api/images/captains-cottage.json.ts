import { GET_COTTAGE_IMGS } from '@lib/graphql/queries';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params, request }) => {
	const response = await fetch('http://localhost:4000/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: GET_COTTAGE_IMGS,
		}),
	});

	if (!response.ok) {
		return new Response(response.statusText, { status: response.status });
	}
	const { data } = await response.json();

	return new Response(
		JSON.stringify({
			status: 200,
			body: data.getCottageImgs,
		})
	);
};
