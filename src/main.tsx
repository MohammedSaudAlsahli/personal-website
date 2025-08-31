import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import { DirectionProvider, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

createRoot(root).render(
	<StrictMode>
		<DirectionProvider>
			<MantineProvider defaultColorScheme="light">
				<Notifications />
				<App />
			</MantineProvider>
		</DirectionProvider>
	</StrictMode>,
);
