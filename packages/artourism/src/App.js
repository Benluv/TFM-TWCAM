import { Route, Routes } from 'react-router-dom';
import './App.css';
import XRGallery from './components/xr-gallery/XrGalleryContainer';
import Model from './components/xr-gallery/models/ModelContainer';
import ModelPosToPan from './components/xr-gallery/helpers/ModelPosToPan';
import NotFound from './components/xr-gallery/notFound/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<XRGallery />} />
      <Route path='/model' element={<Model />} />
      <Route path='/panorama' element={<ModelPosToPan />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}