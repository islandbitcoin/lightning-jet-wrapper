import { compat, types as T } from "../deps.ts";

export const migration: T.ExpectedExports.migration = compat.migrations.fromMapping({}, "1.6.0.1");
