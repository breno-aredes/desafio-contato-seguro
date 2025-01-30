import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { BookFormValues, BookValues } from "../types/Books";

interface BooksContextProps {
  books: BookValues[];
  addBook: (book: BookFormValues) => void;
  removeBook: (id: number) => void;
}

const BooksContext = createContext<BooksContextProps | undefined>(undefined);

interface BooksProviderProps {
  children: ReactNode;
}

export const BooksProvider = ({
  children,
}: BooksProviderProps): JSX.Element => {
  const [books, setBooks] = useState<BookValues[]>(() => {
    const storedBooks = localStorage.getItem("books");
    return storedBooks ? JSON.parse(storedBooks) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (book: BookFormValues) => {
    const newBook = { ...book, id: Date.now() };
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const removeBook = (id: number) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return (
    <BooksContext.Provider value={{ books, addBook, removeBook }}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = (): BooksContextProps => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("useBooks must be used within a BooksProvider");
  }
  return context;
};
