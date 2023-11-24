/**
 * @jest-environment node
 */
import { fetchArticles } from "@/features/articles";
import { server } from "@/mocks/node";
import { articlesResponse } from "@/mocks/api/articles/response";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("fetchArticles()", () => {
  it("記事一覧を取得する", async () => {
    const res = await fetchArticles("localhost:3000");
    expect(res).toEqual(articlesResponse);
  });
});
