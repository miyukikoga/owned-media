/**
 * @jest-environment node
 */
import { fetchArticle, formatArticleCreatedAt } from "@/features/article";
import { server } from "@/mocks/node";
import { articlesResponse } from "@/mocks/api/articles/response";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("fetchArticle()", () => {
  it("記事詳細を取得する", async () => {
    const id = "o5gu6ibjvb";
    const res = await fetchArticle("localhost:3000", id);
    console.log({ res });
    const found = articlesResponse.find((article) => article.id === id);
    console.log({ found });
    expect(res).toEqual(found);
  });
});

describe("formatArticleCreatedAt()", () => {
  it("日付をフォーマットできる", () => {
    const date = new Date("2023-04-05T09:23:31.664Z");
    expect(formatArticleCreatedAt(date)).toBe("2023-04-05");
  });
});
