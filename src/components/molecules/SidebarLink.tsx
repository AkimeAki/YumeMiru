/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Link } from "react-router-dom";

interface Props {
	href?: string;
	children: React.ReactNode;
	disabled?: boolean;
	onClick?: () => void;
}

export default function ({ href, children, disabled = false, onClick }: Props): JSX.Element {
	const style = css`
		position: relative;
		background-color: transparent;
		backdrop-filter: blur(12px);
		padding: 15px;
		text-decoration: none;
		border-radius: 10px;
		overflow: hidden;
		font-size: 20px;
		color: var(--color-black);
		cursor: ${disabled ? "not-allowed" : "pointer"};
		user-select: none;

		&:before {
			position: absolute;
			display: block;
			content: "";
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: ${disabled ? "#bdbdbd" : "white"};
			opacity: 0.5;
			z-index: -1;
		}
	`;

	return (
		<>
			{href === undefined || disabled ? (
				<div
					css={style}
					onClick={() => {
						if (onClick !== undefined && !disabled) {
							onClick();
						}
					}}
				>
					{children}
				</div>
			) : (
				<Link to={href} css={style}>
					{children}
				</Link>
			)}
		</>
	);
}
