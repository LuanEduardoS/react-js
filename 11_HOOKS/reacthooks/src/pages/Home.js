import React from 'react'
import HookUseState from '../components/HookUseState'
import HookUserReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'
import HookUseRef from '../components/HookUseRef'
import HookUseCallback from '../components/HookUseCallback'
import HookUseMemo from '../components/HookUseMemo'
import HookUseLayoutEffect from '../components/HookUseLayoutEffect'
import HookUseimperativeHandle from '../components/HookUseimperativeHandle'
import HookCustom from '../components/HookCustom'

// useContext
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'



const Home = () => {
    const { contextValue } = useContext(SomeContext)

  return (
    <div>
        <HookUseState />
        <HookUserReducer />
        <HookUseEffect />
        <h2>useContext</h2>
        <p>Valor do context: {contextValue}</p>
        <hr />
        <HookUseRef />
        <HookUseCallback />
        <HookUseMemo />
        <HookUseLayoutEffect />
        <HookUseimperativeHandle />
        <HookCustom />
    </div>
  )
}

export default Home