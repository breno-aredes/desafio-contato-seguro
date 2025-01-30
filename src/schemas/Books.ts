import * as yup from "yup";

export const BookSchema = yup.object().shape({
  name: yup.string().required("* Nome é obrigatório"),
  pages: yup.string().email("* Email inválido"),
  author_id: yup.number().required("* Selecione um autor"),
});
