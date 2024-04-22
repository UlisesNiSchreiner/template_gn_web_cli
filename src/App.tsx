import { Module } from "./Module";
import HttpClientImp from "./services/HttpClientImp";
const httpClient = new HttpClientImp("http://127.0.0.1:3000");

const App = ( ) => {
  return <Module httpClient={httpClient}></Module>
}

export default App;
