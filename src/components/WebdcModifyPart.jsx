function WebdcModifyPart() {
  return (
    <form>
      <label>
        webdcSeq: <input type="number" />
      </label>
      <br />
      <span>payload section</span>
      <br />
      <label>
        systemSeq: <input type="number" />
      </label>
      <br />
      <label>
        env: <textarea cols="30" rows="5" />
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

export default WebdcModifyPart;
