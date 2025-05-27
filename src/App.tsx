import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./sections/Home";


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-100 text-gray-900 font-mono">
      
      <BrowserRouter>
        <Header 
          paths={[
            { name: "Experience", path: "/experience" },
            { name: "Projects", path: "/projects" },
          ]}>
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/experience" element={<Experience />} /> */}
          {/* <Route path="/projects" element={<Projects />} /> */}
        </Routes>
      </BrowserRouter>
      

      

    </div>
  );
};

export default App;