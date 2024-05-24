import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "@generouted/react-router";
import "@/global.scss";
import Context from "@/context";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Context>
			<Routes />
		</Context>
	</React.StrictMode>
);
