/** @jsxImportSource @emotion/react */

import MainLayout from "@/components/templates/MainLayout";
import { UserContext } from "@/context";
import { css } from "@emotion/react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
	children: React.ReactNode;
}

export default function ({ children }: Props): JSX.Element {
	const { userStatus } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (userStatus === "authenticated") {
			navigate("/home");
		}
	}, [userStatus]);

	return (
		<MainLayout>
			<div
				css={css`
					width: 100%;
					max-width: 500px;
					margin: 0 auto;
					padding: 100px 0;
				`}
			>
				{children}
			</div>
		</MainLayout>
	);
}
