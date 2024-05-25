/** @jsxImportSource @emotion/react */

import Auth from "@/Auth";
import { css } from "@emotion/react";

interface Props {
	children: React.ReactNode;
}

export default function ({ children }: Props): JSX.Element {
	return (
		<Auth>
			<div
				css={css`
					display: flex;
					flex-direction: column;
					height: 100%;
				`}
			>
				<div
					css={css`
						flex: 1;
					`}
				>
					{children}
				</div>
				<footer
					css={css`
						background-color: transparent;
						backdrop-filter: blur(2px);
						padding: 100px;

						&:before {
							position: absolute;
							display: block;
							content: "";
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							background-color: white;
							opacity: 0.5;
							z-index: -1;
						}
					`}
				>
					<p
						css={css`
							text-align: center;
						`}
					>
						Created by 彩季
					</p>
				</footer>
			</div>
		</Auth>
	);
}
