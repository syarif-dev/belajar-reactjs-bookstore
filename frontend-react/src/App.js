import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Beranda from "./components/Beranda";
import Navbar from "./components/Navbar.jsx";
import ManajemenBuku from "./components/ManajemenBuku";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Beranda />} />

                    <Route path="/manajemen-buku" element={<ManajemenBuku />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
