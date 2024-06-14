import { Route, Routes } from 'react-router-dom';
import Layout from './Layouts/BaseLayout';
import Home from './pages/Home';
import About from './pages/About';

const App = (): JSX.Element => {
  return (
    <>
      <Layout>
        <div className="flex justify-center p-10 bg-blue-200">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Layout>
    </>
  );
};

export default App;
