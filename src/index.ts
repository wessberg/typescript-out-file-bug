import {readFileSync} from "fs";
import {readFileSync as localReadFileSync} from "./fs";
export const foo = readFileSync;
export const bar = localReadFileSync;