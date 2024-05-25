import { User } from "firebase/auth";
import { createContext, useState } from "react";

type UserStatus = "loading" | "authenticated" | "unauthenticated";

interface UserContextType {
	user: User | null;
	setUser: (user: User | null) => void;
	userStatus: UserStatus;
	setUserStatus: (status: UserStatus) => void;
}

export const UserContext = createContext<UserContextType>({
	user: null,
	setUser: () => {},
	userStatus: "loading",
	setUserStatus: () => {}
});

interface Props {
	children: React.ReactNode;
}

export default function Context({ children }: Props) {
	const [user, setUser] = useState<User | null>(null);
	const [userStatus, setUserStatus] = useState<UserStatus>("loading");

	return <UserContext.Provider value={{ user, setUser, userStatus, setUserStatus }}>{children}</UserContext.Provider>;
}
