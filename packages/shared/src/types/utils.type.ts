// Record Utils
export type Values<TRecord extends Record<any, unknown>> =
  TRecord[keyof TRecord];
