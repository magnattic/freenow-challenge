import { ClassicColors } from '@freenow/wave';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import isPropValid from '@emotion/is-prop-valid';
import { type ShouldForwardProp, StyleSheetManager } from 'styled-components';
import App from './App.tsx';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 5 * 60 * 1000,
			retry: 3,
		},
	},
});

const shouldForwardProp: ShouldForwardProp<'web'> = (propName, target) => {
	if (typeof target === 'string') {
		// For HTML elements, forward the prop if it is a valid HTML attribute
		return isPropValid(propName);
	}
	// For other elements, forward all props
	return true;
};

// biome-ignore lint/style/noNonNullAssertion: We expect the root element to exist
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<StyleSheetManager shouldForwardProp={shouldForwardProp}>
				<ClassicColors />
				<App />
			</StyleSheetManager>
		</QueryClientProvider>
	</StrictMode>,
);
