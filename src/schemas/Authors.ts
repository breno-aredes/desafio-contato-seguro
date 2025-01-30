import * as yup from "yup";

export const authorSchema = yup.object().shape({
  name: yup.string().required("* Nome é obrigatório"),
  email: yup.string().email("* Email inválido"),
});
