import * as Sentry from "@sentry/nextjs";

export function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    Sentry.init({
      dsn: "https://a24f7e52659139fa9cd424e5cbdd4d53@o4506176050167808.ingest.us.sentry.io/4506176555188224",
    });
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    Sentry.init({
      dsn: "https://a24f7e52659139fa9cd424e5cbdd4d53@o4506176050167808.ingest.us.sentry.io/4506176555188224",
    });
  }
}
