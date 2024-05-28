const url = 'http://localhost:80/v2/webdc';

// ENV 파트
export const createEnv = async (webdcSeq, payload) => {
  console.log('createEnv', webdcSeq, payload);
  console.log('payload is: ', JSON.stringify(payload));
  await fetch(`${url}/${webdcSeq}/env`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include',
    },
    body: JSON.stringify(payload),
  });
};

export const modifyEnv = async (webdcSeq, payload) => {
  console.log('modifyEnv', webdcSeq, payload);
  console.log('payload is: ', JSON.stringify(payload));
  await fetch(`${url}/${webdcSeq}/env`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include',
    },
    body: JSON.stringify(payload),
  });
};

export const deleteEnv = async (webdcSeq) => {
  console.log('deleteEnv', webdcSeq);
  await fetch(`${url}/${webdcSeq}/env`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include',
    },
  });
};

// TICKET 파트
export const createTicket = async (webdcSeq, ticketSeq, payload) => {
  console.log('createTicket', webdcSeq, ticketSeq, payload);
  console.log('payload is: ', JSON.stringify(payload));
  await fetch(`${url}/${webdcSeq}/ticket/${ticketSeq}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include',
    },
    body: JSON.stringify(payload),
  });
};

export const modifyTicket = async (webdcSeq, ticketSeq, payload) => {
  console.log('modifyTicket', webdcSeq, ticketSeq, payload);
  console.log('payload is: ', JSON.stringify(payload));
  await fetch(`${url}/${webdcSeq}/ticket/${ticketSeq}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include',
    },
    body: JSON.stringify(payload),
  });
};

export const deleteTicket = async (webdcSeq, ticketSeq) => {
  console.log('deleteTicket', webdcSeq, ticketSeq);
  await fetch(`${url}/${webdcSeq}/ticket/${ticketSeq}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include',
    },
  });
};

// webdc 파트

export const createWebdc = async (webdcSeq, payload) => {
  console.log('createWebdc', webdcSeq, payload);
  console.log('payload is: ', JSON.stringify(payload));
  await fetch(`${url}/${webdcSeq}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include',
    },
    body: JSON.stringify(payload),
  });
};

export const modifyWebdc = async (webdcSeq, payload) => {
  console.log('modifyWebdc', webdcSeq, payload);
  console.log('payload is: ', JSON.stringify(payload));
  await fetch(`${url}/${webdcSeq}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include',
    },
    body: JSON.stringify(payload),
  });
};

export const deleteWebdc = async (webdcSeq) => {
  console.log('deleteWebdc', webdcSeq);
  await fetch(`${url}/${webdcSeq}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include',
    },
  });
};

// webdc 신규 생성 파트
export const createNewWebdc = async (payload) => {
  console.log('createNewWebdc', payload);
  console.log('payload is: ', JSON.stringify(payload));
  await fetch(`${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include',
    },
    body: JSON.stringify(payload),
  });
};

// 상품 추가 파트
export const createNewTicket = async (webdcSeq, payload) => {
  console.log('createNewTicket', webdcSeq, payload);
  console.log('payload is: ', JSON.stringify(payload));
  await fetch(`${url}/${webdcSeq}/tickets`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include',
    },
    body: JSON.stringify(payload),
  });
};

// 상품 수정 및 삭제 파트
export const modifyNewTicket = async (webdcSeq, ticketSeq, payload) => {
  console.log('modifyTicket', webdcSeq, ticketSeq, payload);
  console.log('payload is: ', JSON.stringify(payload));
  await fetch(`${url}/${webdcSeq}/tickets/${ticketSeq}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include',
    },
    body: JSON.stringify(payload),
  });
};

export const deleteNewTicket = async (webdcSeq, ticketSeq) => {
  console.log('deleteTicket', webdcSeq, ticketSeq);
  await fetch(`${url}/${webdcSeq}/tickets/${ticketSeq}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include',
    },
  });
};

// 장비사 변경 및 연동 삭제 파트
export const changeWebdc = async (webdcSeq, payload) => {
  console.log('changeWebdc', webdcSeq, payload);
  console.log('payload is: ', JSON.stringify(payload));
  await fetch(`${url}/${webdcSeq}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include',
    },
    body: JSON.stringify(payload),
  });
};

export const deleteWebdcParkinglot = async (webdcSeq) => {
  console.log('deleteWebdcParkinglot', webdcSeq);
  await fetch(`${url}/${webdcSeq}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include',
    },
  });
};
