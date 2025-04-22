import './App.css';
import { Button, Input } from './components';

import { H1, H2 } from './components-2';

//export { Metodo } from './utils';

//import { Metodo } from './utils'; <-- Lo que viene de metodo si no es usado se elimina (Codigo muerto) pero la importacion se mantiene ya que el bundler no sabe que es lo que hace o si se esta usando (Modulo muerto).

function App() {
  return (
    <div>
      <Button />
      <Input />

      <H1 />
      <H2 />
    </div>
  );
}

export default App;
