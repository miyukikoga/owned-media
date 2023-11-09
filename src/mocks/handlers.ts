import { http, HttpResponse } from "msw";
import { articlesResponse } from "./api/articles/response";

export const handlers = [
  http.get("https://localhost:3000/api/articles", () => {
    return HttpResponse.json(articlesResponse);
  }),
];
