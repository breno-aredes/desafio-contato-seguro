import * as yup from "yup";

export const BookSchema = yup.object().shape({
  name: yup.string().required("* Nome é obrigatório"),
  pages: yup.string(),
  author_id: yup.number().required("* Selecione um autor"),
});
