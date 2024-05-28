function WebdcTicketPart() {
  return (
    <form>
      <label>
        webdcSeq: <input type="number" />
      </label>
      <br />
      <span>payload section</span>
      <br />
      <label>
        tickets: <textarea cols="30" rows="5" placeholder="배열안에 객체 친구들" />
      </label>
      <br />
      <br />
      <div>
        <button type="button">POST 때리기</button>
      </div>
    </form>
  );
}

export default WebdcTicketPart;
