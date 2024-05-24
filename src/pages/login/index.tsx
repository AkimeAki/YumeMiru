/** @jsxImportSource @emotion/react */

import { UserContext } from "@/context";
import { login } from "@/libs/firebase";
import { useContext, useState } from "react";
import { css } from "@emotion/react";
import AuthLayout from "@/components/templates/AuthLayout";
import FormLabel from "@/components/atoms/FormLabel";
import FormInput from "@/components/atoms/FormInput";
import AuthForm from "@/components/molecules/AuthForm";
import { Link } from "react-router-dom";

export default function (): JSX.Element {
	const { setUser } = useContext(UserContext);
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	return (
		<AuthLayout>
			<AuthForm
				style={css`
					& > div {
						display: flex;
						flex-direction: column;
						align-items: flex-start;
						gap: 5px;
					}
				`}
			>
				<div>
					<FormLabel>メールアドレス</FormLabel>
					<FormInput
						type="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</div>
				<div>
					<FormLabel>パスワード</FormLabel>
					<FormInput
						type="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</div>
				<div>
					<button
						type="button"
						onClick={() => {
							void (async () => {
								try {
									const user = await login(email, password);
									setUser(user);
								} catch (e) {}
							})();
						}}
						css={css`
							width: 100%;
							padding: 10px 0;
							background-color: white;
							cursor: pointer;
							border-radius: 7px;
						`}
					>
						ログイン
					</button>
				</div>
			</AuthForm>
			<Link
				to="/signup"
				css={css`
					display: inline-block;
					margin-top: 10px;
				`}
			>
				新規登録はこちら
			</Link>
		</AuthLayout>
	);
}
