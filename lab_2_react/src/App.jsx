import Header from './components/header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Experience />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;