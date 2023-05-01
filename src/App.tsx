import LayoutNavbar from "./components/LayoutNavbar";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <>
      <LayoutNavbar />

      <div className="px-3 pt-12">
        <HomePage />
      </div>
    </>
  );
}

export default App;
