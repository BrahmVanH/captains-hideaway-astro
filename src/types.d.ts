export type PropertyName = 'captains-hideaway' | 'captains-cottage';

export interface ImageObject {
	imgKey: string;
	original: string;
	thumbnail: string;
	originalAlt: string;
	thumbnailAlt: string;
}

export interface hideawayImgPack {
	headerUrl: string;
	galleryArray: imageObject[];
}
interface ContentItem {
	heading: string;
	content: string;
	icon: string;
}

interface OverviewItem {
	heading: string;
	content: ContentItem[];
}

interface AmenitiesItem {
	name: string;
	icon: string;
}

interface AmenitiesAllItem {
	type: string;
	items: string[];
}

interface HouseRulesSpecificItem {
	heading: string;
	content: string;
}

interface Property {
	slug: string;
	name: string;
	img: {
		hero: string;
	};
	titleCard: {
		heading: string;
		body: string;
		content: ContentItem[];
	};
	overview: OverviewItem[];
	aboutTheProperty: {
		subHeading: string;
		body: string;
	};
	amenities: {
		featured: AmenitiesItem[];
		all: AmenitiesAllItem[];
	};
	houseRules: {
		general: string[];
		specific: HouseRulesSpecificItem[];
		additionalRules: string[];
	};
	damageAndIncidentals: string;
	importantInformation: string[];
}
