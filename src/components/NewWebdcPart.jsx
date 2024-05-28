function NewWebdcPart() {
  return (
    <form>
      <span>payload section</span>
      <br />
      <label>
        systemSeq: <input type="number" />
      </label>
      <br />
      <label>
        parkinglotSeq: <input type="number" />
      </label>
      <br />
      <label>
        env: <textarea rows="5" cols="30" />
      </label>
      <br />
      <br />
      <div>
        <button type="button">POST 때리기</button>
      </div>
    </form>
  );
}

export default NewWebdcPart;
