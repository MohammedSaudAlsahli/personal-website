import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import { DirectionProvider, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { App } from "./App.tsx";
import i18n from "./utils/i18n";

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

createRoot(root).render(
	<StrictMode>
		<I18nextProvider i18n={i18n}>
			<DirectionProvider>
				<MantineProvider defaultColorScheme="light">
					<Notifications />
					<App />
				</MantineProvider>
			</DirectionProvider>
		</I18nextProvider>
	</StrictMode>,
);
