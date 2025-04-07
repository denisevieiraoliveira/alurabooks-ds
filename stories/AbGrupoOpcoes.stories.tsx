import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AbGrupoOpcoes, AbGrupoOpcoesProps } from "../src";

export default {
  title: "Componentes/AbGrupoOpcoes",
  component: AbGrupoOpcoes
} as ComponentMeta<typeof AbGrupoOpcoes>

const Template: ComponentStory<typeof AbGrupoOpcoes> = (args) => <AbGrupoOpcoes {...args}/>

export const Padrao = Template.bind({});
Padrao.args = {
  opcoes: [
    {
      id: 1,
      titulo: 'Ebook',
      corpo: 'R$ 00,00',
      rodape: '.pdb, .epub, .mob',
    },
    {
      id: 2,
      titulo: 'Impresso',
      corpo: 'R$ 00,00',
      rodape: '.pdb, .epub, .mob',
    },
    {
      id: 3,
      titulo: 'Impresso + Ebook',
      corpo: 'R$ 00,00',
      rodape: '.pdb, .epub, .mob',
    },
  ],
} as AbGrupoOpcoesProps;