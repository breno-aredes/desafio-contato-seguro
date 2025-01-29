import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { AuthorValues, AuthorFormValues } from "../types/authors";

interface AuthorsContextProps {
  authors: AuthorValues[];
  addAuthor: (author: AuthorFormValues) => void;
}

const AuthorsContext = createContext<AuthorsContextProps | undefined>(
  undefined
);

interface AuthorsProviderProps {
  children: ReactNode;
}

export const AuthorsProvider = ({
  children,
}: AuthorsProviderProps): JSX.Element => {
  const [authors, setAuthors] = useState<AuthorValues[]>(() => {
    const storedAuthors = localStorage.getItem("authors");
    return storedAuthors ? JSON.parse(storedAuthors) : [];
  });

  useEffect(() => {
    localStorage.setItem("authors", JSON.stringify(authors));
  }, [authors]);

  const addAuthor = (author: AuthorFormValues) => {
    const newAuthor = { ...author, id: Date.now() };
    setAuthors((prevAuthors) => [...prevAuthors, newAuthor]);
  };

  return (
    <AuthorsContext.Provider value={{ authors, addAuthor }}>
      {children}
    </AuthorsContext.Provider>
  );
};

export const useAuthors = (): AuthorsContextProps => {
  const context = useContext(AuthorsContext);
  if (!context) {
    throw new Error("useAuthors must be used within an AuthorsProvider");
  }
  return context;
};
