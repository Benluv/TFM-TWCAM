import { Route, Routes } from 'react-router-dom';
import './App.css';
import XrHitCubeContainer from "./components/xr-hit-cube/XrHitCubeContainer";
import Test from './components/Text';
import XRGallery from './components/xr-gallery/XrGalleryContainer';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<XrHitCubeContainer />} />
      <Route path="/test" element={<Test />} />
      <Route path='/gallery' element={<XRGallery />} />
    </Routes>
  )
}


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>Hello!</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
