

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Df9ljRzL.js","_app/immutable/chunks/BJVH-vWs.js","_app/immutable/chunks/CIAL95hT.js","_app/immutable/chunks/TmDbAX8u.js"];
export const stylesheets = [];
export const fonts = [];
