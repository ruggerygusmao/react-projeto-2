import './App.css';
import Galeria from 'react-image-gallery';

export default function App() {
  const imgs = [
    {
      original: 'https://picsum.photos/id/1019/1000/600',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },

    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
  ];
  return (
    <div className="App">
      <Galeria items={imgs} />
    </div>
  );
}


