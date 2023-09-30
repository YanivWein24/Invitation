import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <h1>Hello world</h1>
      </ThemeProvider>
    </div>
  );
}
