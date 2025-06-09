import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ClassicColors } from '@freenow/wave';

// biome-ignore lint/style/noNonNullAssertion: We expect the root element to exist
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ClassicColors />
		<App />
	</StrictMode>,
);
