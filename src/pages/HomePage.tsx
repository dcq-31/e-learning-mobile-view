import WidgetCourse from "../components/WidgetCourse";

function HomePage() {
  return (
    <div className="pt-5">
      <div className="mb-5 text-xl font-bold tracking-wide text-gray-800">
        Hello, Mia
      </div>
      <WidgetCourse
        tag={"Your main course"}
        title={"Marketing in B2B"}
        progress={65}
      />
    </div>
  );
}

export default HomePage;
