export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["downarrow.svg","favicon.ico","favicon.png","technologies/csharp.svg","technologies/css3.svg","technologies/firebase.svg","technologies/github.svg","technologies/html5.svg","technologies/java.svg","technologies/js.svg","technologies/nodejs.svg","technologies/openai.svg","technologies/python.svg","technologies/react.svg","technologies/svelte.svg","technologies/tailwindcss.svg","technologies/ts.svg","technologies/ubuntu.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.229dddaf.js","app":"_app/immutable/entry/app.394c9f8f.js","imports":["_app/immutable/entry/start.229dddaf.js","_app/immutable/chunks/scheduler.e5e7cd90.js","_app/immutable/chunks/singletons.b8c73c72.js","_app/immutable/entry/app.394c9f8f.js","_app/immutable/chunks/scheduler.e5e7cd90.js","_app/immutable/chunks/index.f079ccf5.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
