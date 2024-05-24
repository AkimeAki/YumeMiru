/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

interface Props {
	value: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	type?: React.HTMLInputTypeAttribute;
}

export default function ({ value, onChange, type }: Props): JSX.Element {
	return (
		<input
			type={type}
			value={value}
			onChange={onChange}
			css={css`
				width: 100%;
				padding: 10px 15px;
				border-radius: 7px;
			`}
		/>
	);
}
