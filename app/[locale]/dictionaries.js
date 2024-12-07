import 'server-only';

const dictionaries = {
	en: () => import('../../dictionaries/en.json').then((module) => module.default),
	jp: () => import('../../dictionaries/jp.json').then((module) => module.default),
};

export const getDictionary = async (locale) => {
	// Check if the locale exists in the dictionaries object
	if (!dictionaries[locale]) {
		throw new Error(`Locale '${locale}' is not supported`);
	}
	
	return dictionaries[locale]();
};
