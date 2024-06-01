const url = 'http://localhost:80/v2/webdc';

// ENV 파트
export const createEnv = async (webdcSeq: number, payload: { env: string }) => {
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

export const modifyEnv = async (webdcSeq: number, payload: { env: string }) => {
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

export const deleteEnv = async (webdcSeq: number) => {
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
export const createTicket = async (
  webdcSeq: number,
  ticketSeq: number,
  payload: { discountId: string; timeLimit: number; dDay: number },
) => {
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

export const modifyTicket = async (
  webdcSeq: number,
  ticketSeq: number,
  payload: { discountId: string; timeLimit: number; dDay: number },
) => {
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

export const deleteTicket = async (webdcSeq: number, ticketSeq: number) => {
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

export const createWebdc = async (webdcSeq: number, payload: { systemSeq: number; parkinglotSeq: number }) => {
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

export const modifyWebdc = async (webdcSeq: number, payload: { systemSeq: number; parkinglotSeq: number }) => {
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

export const deleteWebdc = async (webdcSeq: number) => {
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
export const createNewWebdc = async (payload: { systemSeq: number; parkinglotSeq: number; env: string }) => {
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
export const createNewTicket = async (webdcSeq: number, payload: string) => {
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
export const modifyNewTicket = async (
  webdcSeq: number,
  ticketSeq: number,
  payload: Partial<{
    discountId: string;
    timeLimit: number;
    dDay: number;
    report: { reportMemo?: string; runDt?: string; failDt?: string; reportDt?: string };
  }>,
) => {
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

export const deleteNewTicket = async (webdcSeq: number, ticketSeq: number) => {
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
export const changeWebdc = async (webdcSeq: number, payload: { systemSeq: number; env: string }) => {
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

export const deleteWebdcParkinglot = async (webdcSeq: number) => {
  console.log('deleteWebdcParkinglot', webdcSeq);
  await fetch(`${url}/${webdcSeq}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include',
    },
  });
};
