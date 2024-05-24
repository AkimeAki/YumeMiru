/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

interface Props {
	children: React.ReactNode;
}

export default function ({ children }: Props): JSX.Element {
	return (
		<label
			css={css`
				display: table;
				background-color: white;
				padding: 5px;
				border-radius: 6px;
			`}
		>
			{children}
		</label>
	);
}
