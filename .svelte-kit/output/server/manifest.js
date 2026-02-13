export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.BEimAGMh.js",app:"_app/immutable/entry/app.D6DCDYcG.js",imports:["_app/immutable/entry/start.BEimAGMh.js","_app/immutable/chunks/DtkfDeMN.js","_app/immutable/chunks/CIAL95hT.js","_app/immutable/chunks/DxfCgcb9.js","_app/immutable/entry/app.D6DCDYcG.js","_app/immutable/chunks/CIAL95hT.js","_app/immutable/chunks/B-m6ElBV.js","_app/immutable/chunks/BJVH-vWs.js","_app/immutable/chunks/DxfCgcb9.js","_app/immutable/chunks/C77GHIiv.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
