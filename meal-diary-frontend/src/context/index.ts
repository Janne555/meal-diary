import React from 'react'

type Context = {
  
}

const stateContext = React.createContext<Context | undefined>(undefined)

export {
  stateContext
}