import AppRouter from "./components/routers/AppRouter";
import { ThemeContextProvider } from "./contexts/ThemeCotext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <AppRouter />
      </ThemeContextProvider>
    </>
  );
}
export default App;
