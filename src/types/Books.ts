import { SubmitHandler } from "react-hook-form";
import { AuthorValues } from "./authors";

export interface BookFormValues {
  name: string;
  author_id: number;
  pages?: string;
}

export interface BookValues {
  id: number;
  name: string;
  author_id: number;
  pages?: string;
}

export interface BookModalContentProps {
  onSubmit: SubmitHandler<BookFormValues>;
  onClose: () => void;
}

export interface ViewBookModalContentProps {
  book: BookValues | null;
  author: AuthorValues | null;
  onClose: () => void;
}
