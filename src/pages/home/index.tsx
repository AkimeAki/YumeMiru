/** @jsxImportSource @emotion/react */

import HomeLayout from "@/components/templates/HomeLayout";
import { UserContext } from "@/context";
import { css } from "@emotion/react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function (): JSX.Element {
	const { userStatus } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (userStatus === "unauthenticated") {
			navigate("/login");
		}
	}, [userStatus]);

	return (
		<HomeLayout>
			<div
				css={css`
					display: flex;
					flex-direction: column;
					gap: 10px;
				`}
			>
				<div></div>
			</div>
		</HomeLayout>
	);
}
