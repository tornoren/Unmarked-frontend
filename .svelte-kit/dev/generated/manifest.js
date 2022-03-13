const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/downloads/index.svelte"),
	() => import("../../../src/routes/profile/index.svelte"),
	() => import("../../../src/routes/amigos/index.svelte"),
	() => import("../../../src/routes/amigos/[slug].svelte"),
	() => import("../../../src/routes/places/[slug].svelte"),
	() => import("../../../src/routes/about.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/downloads/index.svelte
	[/^\/downloads\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/markers/index.json.js
	[/^\/markers\.json$/],

	// src/routes/profile/index.svelte
	[/^\/profile\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/amigos/index.svelte
	[/^\/amigos\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/amigos/[slug].svelte
	[/^\/amigos\/([^/]+?)\/?$/, [c[0], c[6]], [c[1]], (m) => ({ slug: d(m[1])})],

	// src/routes/places/[slug].svelte
	[/^\/places\/([^/]+?)\/?$/, [c[0], c[7]], [c[1]], (m) => ({ slug: d(m[1])})],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[8]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];