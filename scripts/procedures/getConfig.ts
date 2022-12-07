import { compat, types as T } from "../deps.ts";

export const getConfig: T.ExpectedExports.getConfig = compat.getConfig({
  "token": {
     "type": "string",
     "name": "Telegram API Token",
     "description": "Telegram Token for the Jet Bot. Please refer to the instructions on how to setup Jet Bot.",
     "nullable": true
  }
});
