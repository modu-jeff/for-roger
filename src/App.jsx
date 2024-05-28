import './App.css';
import EnvPart from './components/EnvPart';
import TicketPart from './components/TicketPart';
import WebdcPart from './components/WebdcPart';

function App() {
  return (
    <>
      <h1>ENV 파트</h1>
      <EnvPart />
      <h1>TICKET 파트</h1>
      <TicketPart />
      <h1>WEBDC 그 잡채</h1>
      <WebdcPart />
    </>
  );
}

export default App;
