/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

export default function (): JSX.Element {
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
			</div>
		</div>
	);
}
