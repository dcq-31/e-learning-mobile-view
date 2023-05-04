import LayoutNavbar from "./components/LayoutNavbar";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <>
      <div className="fixed -z-50 h-full w-full">
        <img
          src="mobile.png"
          className="mx-auto w-[250px] min-w-max sm:w-[330px]"
          alt="Phone image"
        />
      </div>
      <div className="mx-auto h-[510px] w-[310px] px-6 pt-14 sm:h-[545px] sm:w-[330px]">
        <div className="h-full w-full overflow-scroll">
          <LayoutNavbar />
          <div className="px-2">
            <HomePage />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
