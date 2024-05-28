const url = 'http://localhost:80/v2/webdc';

// ENV 파트
export const createEnv = async (webdcSeq, payload) => {
  console.log('createEnv', webdcSeq, payload);
  console.log(JSON.stringify(payload));
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
  console.log(JSON.stringify(payload));
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
  console.log(JSON.stringify(payload));
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
  console.log(JSON.stringify(payload));
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
  console.log(JSON.stringify(payload));
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
  console.log(JSON.stringify(payload));
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
