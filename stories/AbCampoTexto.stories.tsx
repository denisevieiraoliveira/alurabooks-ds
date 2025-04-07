import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AbCampoTexto, AbCampoTextoProps } from "../src";

export default {
  title: "componentes/AbCampoTexto",
  component: AbCampoTexto,
  argTypes: {
    label: {
      control: "text"
    }
  },
  parameters: { actions: {argTypesRegex: "^on.*"} },
} as ComponentMeta<typeof AbCampoTexto>

const Template: ComponentStory<typeof AbCampoTexto> = (args) => <AbCampoTexto {...args} />

export const Padrao = Template.bind({});
Padrao.args = {
  label: "E-mail",
  placeholder: "seuemail@maneiro.com.br",
} as AbCampoTextoProps