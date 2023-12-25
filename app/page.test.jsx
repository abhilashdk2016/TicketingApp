const { render, screen } = require("@testing-library/react");
const { default: Dashboard } = require("./page");
// Mock useRouter:
jest.mock("next/navigation", () => ({
    useRouter() {
      return {
        prefetch: () => null,
        refresh: () => null
      };
    }
  }));

describe('Dashboard tests', () => {
    it('should have text Software Problem', async () => {
        render(await Dashboard());
        expect(screen.getByText("Software Problem")).toBeInTheDocument();
    })
});