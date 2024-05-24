/** @jsxImportSource @emotion/react */

import { getUser } from "@/libs/firebase";
import { css } from "@emotion/react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function (): JSX.Element {
	const navigate = useNavigate();

	useEffect(() => {
		void (async () => {
			const user = await getUser();
			if (user !== null) {
				navigate("/home");
			}
		})();
	}, []);

	return (
		<div
			css={css`
				display: flex;
				flex-direction: column;
				gap: 10px;
			`}
		>
			<div
				css={css`
					display: grid;
					grid-template-columns: repeat(5, 1fr);
					column-gap: 20px;
					row-gap: 30px;
				`}
			>
				<p>トップページ</p>
				<Link to="/home">ホームへ</Link>
			</div>
		</div>
	);
}
