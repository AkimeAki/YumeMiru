type PageMeta = Record<
	string,
	{
		title?: string;
		description?: string;
	}
>;

export const serviceTitle = "YumeMiru";

export const pageMeta: PageMeta = {
	top: {
		title: serviceTitle,
		description: ""
	},
	"404": {
		title: `ページが見つかりませんでした｜${serviceTitle}`
	},
	home: {
		title: `ホーム｜${serviceTitle}`
	}
};
