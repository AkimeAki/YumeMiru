/** @jsxImportSource @emotion/react */

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { serviceTitle } from "@/meta";

interface Props {
	title: string | undefined;
	children: React.ReactNode;
}

export default function ({ title, children }: Props): JSX.Element {
	const location = useLocation();

	useEffect(() => {
		document.title = title ?? serviceTitle;
	}, [location]);

	return <>{children}</>;
}
