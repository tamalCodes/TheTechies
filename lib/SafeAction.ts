import { DEFAULT_SERVER_ERROR, createSafeActionClient } from "next-safe-action";

export class ActionError extends Error {}

const handleReturnedServerError = (e: Error) => {
  if (e instanceof ActionError) {
    return e.message;
  }

  return DEFAULT_SERVER_ERROR;
};

export const action = createSafeActionClient({ handleReturnedServerError });
