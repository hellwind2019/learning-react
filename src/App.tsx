import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExpenceTracker from "./expence-tracker/ExpenceTracker";
import MainNav from "./components/MainNav";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-gray-500 to-gray-900 py-8 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 dark:text-white">
        <MainNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/expence-tracker" element={<ExpenceTracker />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
