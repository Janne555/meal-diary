import React from 'react'
import FoodItem from './FoodItem'
import { createContextfulRenderer } from '../../testutils';
import { waitForDomChange } from '@testing-library/react';
import { GetFoodDocument, GetFoodQuery } from '../../graphql/generated'



describe('<FoodItem />', () => {
  it('should match snapshot', async () => {
    const result: { data: GetFoodQuery } = {
      data: {
        food: {
          id: "foo",
          name: {
            en: "foodname",
            fi: "ruokanimi"
          },
          enerc: null,
          fat: null,
          prot: null,
          fibc: null,
          nacl: null,
          sugar: null
        }
      }
    }

    const mocks = [
      {
        request: {
          query: GetFoodDocument,
          variables: {
            id: 'foo',
          },
        },
        result
      },
    ]

    const render = createContextfulRenderer({ mocks })
    const { asFragment } = render(<FoodItem id="foo" />)
    await waitForDomChange()
    expect(asFragment()).toMatchSnapshot()
  });
});