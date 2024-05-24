/** @jsxImportSource @emotion/react */

import SidebarLink from "@/components/molecules/SidebarLink";
import { UserContext } from "@/context";
import { getUser, logout } from "@/libs/firebase";
import { css } from "@emotion/react";
import { useContext, useEffect } from "react";
import MainLayout from "@/components/templates/MainLayout";

interface Props {
	children: React.ReactNode;
}

export default function ({ children }: Props): JSX.Element {
	const { user, setUser } = useContext(UserContext);

	useEffect(() => {
		void (async () => {
			const user = await getUser();
			setUser(user);
		})();
	}, []);

	return (
		<MainLayout>
			<div
				css={css`
					display: flex;
					max-width: 1000px;
					margin: 0 auto;
					padding: 50px 0;
				`}
			>
				<aside
					css={css`
						display: flex;
						flex-direction: column;
						width: 250px;
						gap: 10px;
					`}
				>
					<SidebarLink href="/home">ホーム</SidebarLink>
					<SidebarLink href={`/user/${user?.uid}`} disabled={user === null}>
						プロフィール
					</SidebarLink>
					<SidebarLink
						disabled={user === null}
						onClick={() => {
							(async () => {
								await logout();
								setUser(null);
							})();
						}}
					>
						ログアウト
					</SidebarLink>
				</aside>
				<main
					css={css`
						flex: 1;
					`}
				>
					{children}
				</main>
			</div>
		</MainLayout>
	);
}
