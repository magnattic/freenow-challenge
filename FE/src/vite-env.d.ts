/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_USE_CLUSTERING: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
