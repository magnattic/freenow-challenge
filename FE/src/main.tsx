import { ClassicColors } from '@freenow/wave';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 5 * 60 * 1000,
			retry: 3,
		},
	},
});

// biome-ignore lint/style/noNonNullAssertion: We expect the root element to exist
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ClassicColors />
			<App />
		</QueryClientProvider>
	</StrictMode>,
);
