/** @jsxImportSource @emotion/react */

import MainLayout from "@/components/templates/MainLayout";
import { UserContext } from "@/context";
import { getUser } from "@/libs/firebase";
import { css } from "@emotion/react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
	children: React.ReactNode;
}

export default function ({ children }: Props): JSX.Element {
	const { user, setUser } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		void (async () => {
			const user = await getUser();
			setUser(user);
		})();
	}, []);

	useEffect(() => {
		if (user !== null) {
			navigate("/home");
		}
	}, [user]);

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
