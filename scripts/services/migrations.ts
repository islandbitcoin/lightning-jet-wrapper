import { compat, types as T } from "../deps.ts";

export const migration: T.ExpectedExports.migration = compat.migrations
  .fromMapping(
    {
      "1.4.4": {
        up: compat.migrations.updateConfig(
          (config) => {
            return config;
          },
          true,
          { version: "1.4.4", type: "up" },
        ),
        down: compat.migrations.updateConfig(
          (config) => {
            return config;
          },
          true,
          { version: "1.4.4", type: "down" },
        ),
      },
    },
    "1.4.4",
  );
