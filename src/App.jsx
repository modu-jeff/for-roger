import './App.css';
import EnvPart from './components/EnvPart';
import NewWebdcPart from './components/NewWebdcPart';
import TicketPart from './components/TicketPart';
import WebdcPart from './components/WebdcPart';
import WebdcTicketPart from './components/WebdcTicketPart';
import TicketModifyPart from './components/TicketModifyPart';
import WebdcModifyPart from './components/WebdcModifyPart';

function App() {
  return (
    <main id="root-layout">
      <section className="env-section">
        <h1>1. ENV 파트</h1>
        <EnvPart />
      </section>

      <section className="ticket-section">
        <h1>2. TICKET 파트</h1>
        <TicketPart />
      </section>

      <section className="webdc-section">
        <h1>3. WEBDC 그 잡채</h1>
        <WebdcPart />
      </section>

      <section className="new-webdc-section">
        <h1>4. 신규주차장 연동</h1>
        <NewWebdcPart />
      </section>

      <section className="webdc-ticket-section">
        <h1>5. 상품 추가</h1>
        <WebdcTicketPart />
      </section>

      <section className="ticket-modify-section">
        <h1>6. 상품 수정 / 주차권 삭제</h1>
        <TicketModifyPart />
      </section>

      <section className="webdc-modify-section">
        <h1>7. 장비사 변경 / 연동 삭제</h1>
        <WebdcModifyPart />
      </section>
    </main>
  );
}

export default App;
