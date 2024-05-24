/** @jsxImportSource @emotion/react */

import { SerializedStyles, css } from "@emotion/react";

interface Props {
	children: React.ReactNode;
	style: SerializedStyles;
}

export default function ({ children, style }: Props): JSX.Element {
	return (
		<form
			css={[
				css`
					display: flex;
					flex-direction: column;
					gap: 15px;
					width: 100%;
					background-color: color-mix(in srgb, white 50%, transparent);
					padding: 30px;
					border-radius: 10px;
					border: 3px solid color-mix(in srgb, white 50%, transparent);
				`,
				style
			]}
		>
			{children}
		</form>
	);
}
