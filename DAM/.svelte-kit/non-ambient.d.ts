
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/calendar" | "/friendlist" | "/groupcreate" | "/groups" | "/groupview" | "/overview" | "/signin" | "/signout" | "/taskcreate" | "/tasklist";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/calendar": Record<string, never>;
			"/friendlist": Record<string, never>;
			"/groupcreate": Record<string, never>;
			"/groups": Record<string, never>;
			"/groupview": Record<string, never>;
			"/overview": Record<string, never>;
			"/signin": Record<string, never>;
			"/signout": Record<string, never>;
			"/taskcreate": Record<string, never>;
			"/tasklist": Record<string, never>
		};
		Pathname(): "/" | "/calendar" | "/friendlist" | "/groupcreate" | "/groups" | "/groupview" | "/overview" | "/signin" | "/signout" | "/taskcreate" | "/tasklist";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/robots.txt" | string & {};
	}
}