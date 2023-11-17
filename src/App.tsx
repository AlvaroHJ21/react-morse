import { useState } from 'react';
import './App.css';
import { ButtonCopy, InputArea } from './components/atoms';
import { encodeMorse, decodeMorse } from './components/helpers/morse';

function App() {
  const [text, setText] = useState('');
  const [morse, setMorse] = useState('');

  function handleChangeText(value: string) {
    setText(value);
    setMorse(encodeMorse(value));
  }

  function handleChangeMorse(value: string) {
    setMorse(value);
    setText(decodeMorse(value));
  }

  return (
    <div className="container m-auto max-w-screen-sm w-[90%] flex flex-col justify-center h-screen">
      <h1 className="text-5xl text-center mb-16">Código Morse <span className='text-7xl font-bold'>.-</span> Traductor</h1>
      <div className="flex gap-6 justify-center">
        <div className="flex-1">
          <div className="flex gap-4 mb-2">
            <h2>Texto</h2>
            <div className="flex-1"></div>
            <button>
              <i className="fa fa-play"></i>
            </button>
            <ButtonCopy text={text} />
          </div>
          <InputArea value={text} onChange={(e) => handleChangeText(e.target.value)} />
        </div>
        <div className="flex-1">
          <div className="flex gap-4 mb-2">
            <h2>Código Morse</h2>
            <div className="flex-1"></div>
            <button>
              <i className="fa fa-play"></i>
            </button>
            <ButtonCopy text={text} />
          </div>
          <InputArea value={morse} onChange={(e) => handleChangeMorse(e.target.value)} />
        </div>
      </div>
    </div>
  );
}

export default App;
