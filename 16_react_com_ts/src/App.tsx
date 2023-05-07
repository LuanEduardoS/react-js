import React, {createContext} from 'react';

// 4 - importação de componentes
import FirstComponents from './components/FirstComponents';
// 5 - desestruturando props
import SecondComponents from './components/SecondComponents';
import Destructuring, {Category} from './components/Destructuring';

// 6 - useState
import State from './components/State';
import { create } from 'domain';
import Context from './components/Context';
import { type } from 'os';


// 8 - Type
type textOrNull = string | null

function App() {
  // 1 - variaveis
  const name: string = "Matheus"
  const age: number = 30
  const isWorking: boolean = true
  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  }

  const AppContext = createContext<IAppContext | null>(null)
  // 8 - type 
  const myText: textOrNull = "Tem algum texto aqui"
  let MySecondText: textOrNull = null
  type fixed = "Isso" | "Ou" | "Aquilo"

  // 9 - context 
  interface IAppContext  {
    language: string,
    framework: string,
    projects: number,
  }

  // 8 - type
  import Context from "./components/Context"

  // 9 - context 
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  }
  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <h1>Typescript com React</h1>
      <h2>Nome: {name}</h2>
      <h2>Idade: {age}</h2>
      {isWorking && <p>Está trabalhando!</p>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponents />
      <SecondComponents name="Segundo" />
      <Destructuring
        title='Primeiro post'
        content='Algum conteúdo'
        commentsQty={10}
        tags={["ts", "js"]}
        category={Category.TS}
        />
        <State />
        {myText && <p>Tem texto na variável</p>}
        {MySecondText && <p>Tem texto na variável</p>}
        <Context/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
