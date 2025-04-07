// stories/Card.stories.tsx

import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { AbCard } from '../src';

export default {
  title: 'componentes/AbCard',
  component: AbCard,
} as ComponentMeta<typeof AbCard>;

export const CardComponent = () => {
    return (
      <AbCard>
          <h1>Olá, eu sou um card</h1>
      </AbCard>
    )
}