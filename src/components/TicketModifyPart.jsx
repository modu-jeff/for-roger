function TicketModifyPart() {
  return (
    <form>
      <label>
        webdcSeq: <input type="number" />
      </label>
      <br />
      <label>
        ticketSeq: <input type="number" />
      </label>
      <br />
      <span>payload section</span>
      <br />
      <label>
        discountId: <input type="text" />
      </label>
      <br />
      <label>
        timeLimit: <input type="number" />
      </label>
      <br />
      <label>
        dDay: <input type="number" />
      </label>
      <br />
      <label>
        report.reportMemo: <input type="text" />
      </label>
      <br />
      <label>
        report.runDt: <input type="text" />
      </label>
      <br />
      <label>
        report.failDt: <input type="text" />
      </label>
      <br />
      <label>
        report.reportDt: <input type="text" />
      </label>
      <br />
      <br />
      <div>
        <button type="button">PUT 때리기</button>
        <button type="button">DELETE 때리기</button>
      </div>
    </form>
  );
}

export default TicketModifyPart;
