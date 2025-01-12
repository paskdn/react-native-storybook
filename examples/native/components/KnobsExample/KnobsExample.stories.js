import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-ondevice-knobs';
import {
  text,
  number,
  boolean,
  color,
  select,
  radios,
  array,
  date,
  object,
} from '@storybook/addon-knobs';

import KnobsExample from './KnobsExample';

storiesOf('Knobs Example', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => {
    const name = text('Name', 'Storyteller');
    const age = number('Age', 70, { range: true, min: 0, max: 90, step: 5 });
    const fruits = {
      Apple: 'apple',
      Banana: 'banana',
      Cherry: 'cherry',
    };
    const fruit = select('Fruit', fruits, 'apple');

    const otherFruits = {
      Kiwi: 'kiwi',
      Guava: 'guava',
      Watermelon: 'watermelon',
    };
    const otherFruit = radios('Other Fruit', otherFruits, 'watermelon');
    const dollars = number('Dollars', 12.5);

    // NOTE: color picker is currently broken
    const backgroundColor = color('background', '#ffff00');
    const items = array('Items', ['Laptop', 'Book', 'Whiskey']);
    const customStyles = object('Styles', {
      borderWidth: 3,
      borderColor: '#ff00ff',
      padding: 10,
    });
    const nice = boolean('Nice', true);

    const birthday = date('Birthday', new Date(2017, 0, 20));

    return (
      <KnobsExample
        {...{
          name,
          age,
          fruit,
          otherFruit,
          backgroundColor,
          nice,
          birthday,
          items,
          dollars,
          customStyles,
        }}
      />
    );
  });
