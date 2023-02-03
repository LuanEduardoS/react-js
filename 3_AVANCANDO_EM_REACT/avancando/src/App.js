import { useState } from 'react';
import './App.css';

import City from "./assets/city.jpg";
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';



function App() {
  //const name = "Joaquim"
  const [userName] = useState("Maria")
  
  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km:0 },
    {id: 2, brand: "KIA", color:"Branco", newCar:false, km:34343 },
    {id: 3, brand: "Renault", color:"Azul", newCar:false, km: 234 },
  ];

  function showMessage() {
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("");
  const handleMessage = (msg) => {
    setMessage(msg);
  }

  const users = [
    {id: 1, name: "Matheus", job: "Proramador", age: 31 },
    {id: 2, name: "Maria", job:"Advogada", age:31 },
    {id: 3, name:"Josias", job:"Reporter", age: 66},
    {id: 4, name:"Miguel", job:"Estudante", age: 16},
  ];

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        {/* Imagem em asset*/}
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="VW" km= {100000} color="Azul" newCar={false} />
      {/* reaproveitando*/}
      <CarDetails brand = "Ford" color = "Vermelha" km={0} newCar={true} />
      <CarDetails brand = "Fiat" color = "Branco" km={4500} newCar={false} />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
        key={car.id}
        brand={car.brand}
        color={car.color}
        km={car.km}
        newCar={car.newCar}
        />
      ))}
      {/*fragment*/}
      <Fragment propFragment="teste" />
      {/* children */}
      <Container myValue="testing">
        <p>E este é o contúdo</p>
      </Container>
      <Container myValue="testing 2">
        <h5>Testando o conteúdo</h5>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction= {showMessage}/>
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/*Desafios*/}
      {users.map((user) => (
      <UserDetails
        key={user.id}
        name={user.name}
        job={user.job}
        age={user.age}
      />
      )
      )}
     </div>
  );
}

export default App;
