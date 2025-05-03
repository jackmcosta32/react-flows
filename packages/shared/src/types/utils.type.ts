// Record Utils
export type Values<TRecord extends Record<PropertyKey, unknown>> =
  TRecord[keyof TRecord];
