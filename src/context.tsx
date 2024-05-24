import { User } from "firebase/auth";
import { createContext, useState } from "react";

interface UserContextType {
	user: User | null;
	setUser: (user: User | null) => void;
}

export const UserContext = createContext<UserContextType>({
	user: null,
	setUser: () => {}
});

interface Props {
	children: React.ReactNode;
}

export default function Context({ children }: Props) {
	const [user, setUser] = useState<User | null>(null); // valueを設定してProviderコンポーネントを返す

	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}
