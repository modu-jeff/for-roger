import EnvPart from './components/EnvPart';
import NewWebdcPart from './components/NewWebdcPart';
import TicketPart from './components/TicketPart';
import WebdcPart from './components/WebdcPart';
import WebdcTicketPart from './components/WebdcTicketPart';
import TicketModifyPart from './components/TicketModifyPart';
import WebdcModifyPart from './components/WebdcModifyPart';
import './App.css';

function App() {
  return (
    <main id="root-layout">
      <section className="env-section">
        <h2 aria-label="ENV 파트">1. /webdc/:webdcSeq/env</h2>
        <EnvPart />
      </section>

      <section aria-label="TICKET 파트" className="ticket-section">
        <h2>2. /webdc/:webdcSeq/ticket/:ticketSeq</h2>
        <TicketPart />
      </section>

      <section aria-label="WEBDC 그 잡채" className="webdc-section">
        <h2>3. /webdc/:webdcSeq</h2>
        <WebdcPart />
      </section>

      <section aria-label="신규주차장 연동" className="new-webdc-section">
        <h2>4. /webdc</h2>
        <NewWebdcPart />
      </section>

      <section aria-label="상품 추가" className="webdc-ticket-section">
        <h2>5. /webdc/:webdcSeq/tickets</h2>
        <WebdcTicketPart />
      </section>

      <section aria-label="상품 수정 / 주차권삭제" className="ticket-modify-section">
        <h2>6. /webdc/:webdcSeq/tickets/:ticketSeq</h2>
        <TicketModifyPart />
      </section>

      <section aria-label="장비사변경 / 연동 삭제" className="webdc-modify-section">
        <h2>7. /webdc/:webdcSeq (장비사변경/연동주차장 삭제)</h2>
        <WebdcModifyPart />
      </section>
    </main>
  );
}

export default App;
