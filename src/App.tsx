import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="grid grid-cols-11 h-screen w-screen overflow-hidden">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-8"></div>
      </div>
    </div>
  );
}

export default App;
