import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const post = await db.getPost(params.slug);

	if (!post) {
		error(404, {
			message: 'Page Not found'
		});
	}

	return { post };
} 

/* Aangemaakt uit: https://svelte.dev/docs/kit/errors*/