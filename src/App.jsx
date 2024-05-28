import './App.css';
import EnvPart from './components/EnvPart';
import TicketPart from './components/TicketPart';
import WebdcPart from './components/WebdcPart';

function App() {
  return (
    <main id="root-layout">
      <section className="env-section">
        <h1>ENV 파트</h1>
        <EnvPart />
      </section>

      <section className="ticket-section">
        <h1>TICKET 파트</h1>
        <TicketPart />
      </section>

      <section className="webdc-section">
        <h1>WEBDC 그 잡채</h1>
        <WebdcPart />
      </section>
    </main>
  );
}

export default App;
