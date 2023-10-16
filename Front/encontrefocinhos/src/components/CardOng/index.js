import React from 'react';
import { Description } from './styled';

const Card = ({imagem, title, address, description, link }) => {
 return (
    <Container>
      <Title>Nome da Instituição</Title>
      <Address>Endereço</Address>  {/* Colocar como item clicavel */}
      <Description>Sobre: Nasceu de um grande sonho do seu atual presidente de resgatar das ruas animais abandonados e vítimas de maus-tratos, dar tratamento adequado e integrá-los a famílias que possam dar amor, carinho ...</Description>
      <Button>Ver mais `{'>'}`</Button>
    </Container>
 );
};


export default Card;