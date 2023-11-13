import React, { Suspense } from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "@/appStore/store";
import App from "@/App";
import {
	Spinner,
} from '@/components';
import 'sanitize.css';
import '@/styles/reset.scss';
import '@/styles/global.scss';

createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<Suspense fallback={<Spinner />}>
				<App />
			</Suspense>
		</Provider>
	</React.StrictMode>
);
