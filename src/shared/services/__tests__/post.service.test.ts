import { api } from "@/shared/services/api";
import { apiPosts } from "@/shared/services/post";

jest.mock("@/shared/services/api", () => {
  const actual = jest.requireActual("@/shared/services/api");
  return {
    ...actual,
    api: {
      get: jest.fn(),
    },
  };
});

describe("apiPosts service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("getAll returns PageableResponse with correct data", async () => {
    const mockData = {
      posts: [{ id: 1, title: "Hello" }],
      total: 1,
      page: 1,
      size: 10,
    } as any;
    (api.get as jest.Mock).mockResolvedValueOnce({ data: mockData });

    const res = await apiPosts.getAll({ limit: 10, skip: 0 });

    expect(api.get).toHaveBeenCalledWith("/posts/search", {
      params: { limit: 10, skip: 0 },
    });
    expect(res.getData()).toEqual(mockData.posts);
    expect(res.getTotalItems()).toBe(1);
    expect(res.getTotalPages()).toBe(1);
  });

  it("getById returns post data", async () => {
    const mockPost = { id: 2, title: "World" } as any;
    (api.get as jest.Mock).mockResolvedValueOnce({ data: mockPost });

    const res = await apiPosts.getById(2);

    expect(api.get).toHaveBeenCalledWith("/posts/2");
    expect(res).toEqual(mockPost);
  });
});
