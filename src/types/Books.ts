import { SubmitHandler } from "react-hook-form";

export interface BookFormValues {
  name: string;
  author_id: number;
  pages?: string;
}

export interface BookValues {
  id: number;
  name: string;
  author_id: number;
  apges?: string;
}

export interface BookModalContentProps {
  onSubmit: SubmitHandler<BookFormValues>;
  onClose: () => void;
}
