import { createContext, ReactNode } from 'react'

interface ICounterProviderProps {
  children: ReactNode
}

interface CounterContextInterface {
  counter: number
}

export const CounterContext = createContext<CounterContextInterface | null>(
  null
)

const CounterContextProvider = ({ children }: ICounterProviderProps) => {
  const sampleCounterData: CounterContextInterface = {
    counter: 10
  }

  return (
    <CounterContext.Provider value={sampleCounterData}>
      {children}
    </CounterContext.Provider>
  )
}

export default CounterContextProvider
