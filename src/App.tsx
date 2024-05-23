/** @jsxImportSource @emotion/react */

import Top from "@/pages/_page";
import Home from "@/pages/home/_page";
import NotFound from "@/pages/404/_page";
import HomeLayout from "@/layouts/HomeLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Router from "@/Router";
import { pageMeta } from "@/meta";

export default function (): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<Router title={pageMeta?.top?.title}>
							<Top />
						</Router>
					}
				/>
				<Route
					path="/home"
					element={
						<Router title={pageMeta?.home?.title}>
							<HomeLayout>
								<Home />
							</HomeLayout>
						</Router>
					}
				/>
				<Route
					path="*"
					element={
						<Router title={pageMeta?.["404"]?.title}>
							<NotFound />
						</Router>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}
