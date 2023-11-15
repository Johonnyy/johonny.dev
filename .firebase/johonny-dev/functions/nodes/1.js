

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a881af33.js","_app/immutable/chunks/scheduler.e5e7cd90.js","_app/immutable/chunks/index.f079ccf5.js","_app/immutable/chunks/singletons.b8c73c72.js"];
export const stylesheets = [];
export const fonts = [];
