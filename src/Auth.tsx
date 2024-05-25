import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "@/context";
import { getUser } from "@/libs/firebase";

interface Props {
	children: React.ReactNode;
}

export default function ({ children }: Props): JSX.Element {
	const location = useLocation();
	const { user, setUser, userStatus, setUserStatus } = useContext(UserContext);

	useEffect(() => {
		setUserStatus("loading");

		void (async () => {
			const user = await getUser();
			setUser(user);

			if (user === null) {
				setUserStatus("unauthenticated");
			} else {
				setUserStatus("authenticated");
			}
		})();
	}, [location]);

	useEffect(() => {
		if (userStatus !== "loading") {
			if (user === null) {
				setUserStatus("unauthenticated");
			} else {
				setUserStatus("authenticated");
			}
		}
	}, [user, userStatus]);

	useEffect(() => {
		if (import.meta.env.DEV) {
			console.log(userStatus);
		}
	}, [userStatus]);

	return <>{children}</>;
}
