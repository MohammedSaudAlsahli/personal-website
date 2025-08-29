import "@mantine/core/styles.css";
import { DirectionProvider, MantineProvider } from "@mantine/core";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

createRoot(root).render(
	<StrictMode>
		<DirectionProvider>
			<MantineProvider defaultColorScheme="light">
				<App />
			</MantineProvider>
		</DirectionProvider>
	</StrictMode>,
);
