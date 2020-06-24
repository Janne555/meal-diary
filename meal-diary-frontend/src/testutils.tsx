import React from 'react'
import { render } from "@testing-library/react"
import { MockedProvider, MockedProviderProps } from '@apollo/react-testing'

// todo add auth provider mock
const createContextfulRenderer = (mockedProviderProps: MockedProviderProps = {}) => (element: JSX.Element) => render(
  <React.StrictMode>
    <MockedProvider addTypename={false} {...mockedProviderProps} >
      {element}
    </MockedProvider>
  </React.StrictMode>,
)

export {
  createContextfulRenderer
}