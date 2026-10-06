import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { describe, expect, it, vi } from "vitest";
import whimsicalToronto, { messages, pickRandom } from "../src/index.js";

type Handler = (event: unknown, ctx: TestContext) => Promise<void>;

type TestContext = {
  ui: {
    setWorkingMessage: ReturnType<typeof vi.fn>;
  };
};

function loadExtension() {
  const handlers = new Map<string, Handler>();
  const pi = {
    on(event: string, handler: Handler) {
      handlers.set(event, handler);
    },
  } as unknown as ExtensionAPI;

  whimsicalToronto(pi);
  return handlers;
}

describe("whimsical Toronto extension", () => {
  it("chooses a message using the supplied random source", () => {
    expect(pickRandom(() => 0)).toBe(messages[0]);
    expect(pickRandom(() => 0.999_999)).toBe(messages.at(-1));
  });

  it("sets and clears Pi's working message around a turn", async () => {
    const handlers = loadExtension();
    const setWorkingMessage = vi.fn();
    const ctx: TestContext = { ui: { setWorkingMessage } };

    vi.spyOn(Math, "random").mockReturnValue(0);

    await handlers.get("turn_start")?.({}, ctx);
    expect(setWorkingMessage).toHaveBeenLastCalledWith(messages[0]);

    await handlers.get("turn_end")?.({}, ctx);
    expect(setWorkingMessage).toHaveBeenLastCalledWith();
  });
});
