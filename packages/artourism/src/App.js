import { Route, Routes } from 'react-router-dom';
import './App.css';
import XRGallery from './components/xr-gallery/XrGalleryContainer';
import Model from './components/xr-gallery/models/ModelContainer';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<XRGallery />} />
      <Route path='/model' element={<Model />} />
    </Routes>
  )
}