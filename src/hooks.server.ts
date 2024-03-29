import type { Handle } from "@sveltejs/kit";
import PocketBase from "pocketbase";
import { serializeNonPOJOs } from "./lib/utils";

// runs on every single request to the sveltekit server, even on SSR
export const handle = (async ({ event, resolve }) => {
  event.locals.pb = new PocketBase("http://127.0.0.1:8090");
  event.locals.pb.authStore.loadFromCookie(
    event.request.headers.get("cookie") || ""
  );

  if (event.locals.pb.authStore.isValid) {
    event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
  } else {
    event.locals.user = undefined;
  }

  const response = await resolve(event);
  response.headers.set(
    "set-cookie",
    event.locals.pb.authStore.exportToCookie({ secure: false })
  );
  return response;
}) satisfies Handle;
