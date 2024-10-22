import type { PropertyName } from '@types';

export function isValidProperty(property: string): property is PropertyName {
	return ['captains-hideaway', 'captains-cottage'].includes(property);
}
