import { SubmitHandler } from "react-hook-form";
import { BookValues } from "./Books";

export interface AuthorFormValues {
  name: string;
  email?: string;
}

export interface AuthorValues {
  id: number;
  name: string;
  email?: string;
}

export interface AuthorsModalContentProps {
  onSubmit: SubmitHandler<AuthorFormValues>;
  onClose: () => void;
}

export interface ViewAuthorsModalContentProps {
  onClose: () => void;
  author: AuthorValues | null;
  authorBooks: BookValues[] | null;
}
