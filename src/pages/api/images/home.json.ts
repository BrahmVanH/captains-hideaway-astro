import { GET_HOME_IMGS } from '@lib/graphql/queries';
import type { APIRoute } from 'astro';
import type { PropertyName } from '@types';
import { isValidProperty } from '@lib/graphql/helpers';

export const GET: APIRoute = async ({ params, request }) => {
	const response = await fetch('http://localhost:4000/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: GET_HOME_IMGS,
		}),
	});

	if (!response.ok) {
		return new Response(response.statusText, { status: response.status });
	}
	const { data } = await response.json();

	return new Response(
		JSON.stringify({
			status: 200,
			body: data.getHomeyPgImgs,
		})
	);
};
