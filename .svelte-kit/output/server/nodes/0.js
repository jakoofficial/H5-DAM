import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CivsB_4O.js","_app/immutable/chunks/BJVH-vWs.js","_app/immutable/chunks/CIAL95hT.js","_app/immutable/chunks/C77GHIiv.js"];
export const stylesheets = ["_app/immutable/assets/0.C9qu33rk.css"];
export const fonts = [];
