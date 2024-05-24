/** @jsxImportSource @emotion/react */

import HomeLayout from "@/components/templates/HomeLayout";
import { UserContext } from "@/context";
import { getUser } from "@/libs/firebase";
import { css } from "@emotion/react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function (): JSX.Element {
	const { user, setUser } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		void (async () => {
			const user = await getUser();
			setUser(user);
		})();
	}, []);

	useEffect(() => {
		if (user === null) {
			navigate("/login");
		}
	}, [user]);

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
