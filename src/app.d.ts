// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { UserInfo } from "./lib/types";
import PocketBase from "pocketbase";

declare global {
  namespace App {
    interface Locals {
      user: UserInfo | undefined;
      pb: PocketBase;
    }
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
}

export {};
