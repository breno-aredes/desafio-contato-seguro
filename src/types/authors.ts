import { SubmitHandler } from "react-hook-form";

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
