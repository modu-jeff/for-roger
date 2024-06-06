// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
declare namespace globalThis {
  export interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    naver: any;
  }
}
