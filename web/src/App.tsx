import React, { useState } from "react";
import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
} from "@mantine/core";

import { themeOverride } from "./theme";
//import { useNuiEvent } from "./hooks/useNuiEvent";
import CrosshairTool from "./features/CrosshairTool";
import Crosshair from "./features/Crosshair";
import { isEnvBrowser } from "./utils/misc";
import DevTool from "./dev/DevEnv";

const App: React.FC = () => {
	//const { config } = useConfig(); // TODO: use config
	const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

	return (
		<>
			<ColorSchemeProvider
				colorScheme={colorScheme}
				toggleColorScheme={toggleColorScheme}
			>
				<MantineProvider
					theme={{ colorScheme, ...themeOverride }}
					withGlobalStyles
					withNormalizeCSS
				>
          <CrosshairTool />
          <Crosshair />
				{isEnvBrowser() && <DevTool />}
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	);
};

export default App;