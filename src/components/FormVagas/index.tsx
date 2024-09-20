import { FormEvent, useState } from 'react';
<<<<<<< HEAD
import { Form, BtnPesquisar, Campo } from './styled'; // Atualize aqui
=======
import { Formulario, BotaoPesquisar, Campo } from './styled';
>>>>>>> 73adaabd1da3c819184067ea62ea42332cfd9ca1

type Props = {
  aoPesquisar: (termo: string) => void;
};

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('');

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
<<<<<<< HEAD
    aoPesquisar(termo.toLocaleLowerCase());
  };

  return (
    <Form onSubmit={aoEnviarForm}>
=======
    aoPesquisar(termo.toLowerCase());
  };

  return (
    <Formulario onSubmit={aoEnviarForm}>
>>>>>>> 73adaabd1da3c819184067ea62ea42332cfd9ca1
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
<<<<<<< HEAD
      <BtnPesquisar type="submit">Pesquisar</BtnPesquisar>
    </Form>
  );
};

export default FormVagas;
=======
      <BotaoPesquisar type="submit">Pesquisar</BotaoPesquisar>
    </Formulario>
  );
};

>>>>>>> 73adaabd1da3c819184067ea62ea42332cfd9ca1
