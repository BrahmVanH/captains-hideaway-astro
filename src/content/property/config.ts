import { defineCollection, z } from 'astro:content';
const propertyCollection = defineCollection({
	type: 'data',
	schema: z.object({
		slug: z.string(),
		name: z.string(),
		img: z.strictObject({ hero: z.string() }),
		overview: z.strictObject({
			bedrooms: z.string(),
			bathrooms: z.string(),
			sleeps: z.string(),
		}),
		roomsAndBeds: z.array(z.strictObject({ room: z.string(), beds: z.string() })),
		spaces: z.array(z.strictObject({ name: z.string(), icon: z.string() })),
		aboutTheProperty: z.strictObject({ subHeading: z.string(), body: z.string() }),
		amenities: z.strictObject({
			featured: z.array(z.strictObject({ name: z.string(), icon: z.string() })),
			all: z.array(z.strictObject({ type: z.string(), items: z.array(z.string()) })),
		}),
		houseRules: z.strictObject({
			general: z.array(z.string()),
			children: z.string(),
			pets: z.string(),
			smoking: z.string(),
			additionalRules: z.array(z.string()),
		}),
		damageAndIncidentals: z.string(),
		importantInformation: z.array(z.string()),
	}),
});

export const collections = {
	property: propertyCollection,
};
