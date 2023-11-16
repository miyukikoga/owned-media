import { http, HttpResponse } from "msw";
import { articlesResponse } from "./api/articles/response";

export const handlers = [
  http.get("https://localhost:3000/api/articles", () => {
    return HttpResponse.json(articlesResponse);
  }),
  http.get("https://localhost:3000/articles/:id/api", ({ params }) => {
    const { id } = params;
    const found = articlesResponse.find((article) => article.id === id);
    return HttpResponse.json(found);
  }),
];
