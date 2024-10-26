import NavBar from './components/navbar/navbar';
import Header from './components/mainpage/header';
import Main from './components/mainpage/main';
import Footer from './components/footer/footer';

import './App.css';

function App() {
  return (
    <div className="bg-black text-white">
      <NavBar></NavBar>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
