
import './App.css';
import Header from './Header';
import Card from './Card';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header title="Galería de Imágenes con React"/>
      <Card
        image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a0f14794-d139-4edf-8b9f-07053b24b754/d4wc7re-346bce20-8127-4722-ad21-a04c3bb8642b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EwZjE0Nzk0LWQxMzktNGVkZi04YjlmLTA3MDUzYjI0Yjc1NFwvZDR3YzdyZS0zNDZiY2UyMC04MTI3LTQ3MjItYWQyMS1hMDRjM2JiODY0MmIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.J2UkaayEZEUU96gjRzmf6hxcZxc--YkFHR2EeGJ-t6w"
        title="Flores"
        description="Flores con desenfoque" 
      />
      <Card 
      image="https://upload.wikimedia.org/wikipedia/commons/6/67/Hoffl%C3%B6th%28T%C3%B6Vo-Cl%C3%B6rath%29-2%28400x400%29.jpg"
      title="Campo"
      description="Causal recorriendo el Campo"
      />
      <Card 
      image="https://static.nationalgeographic.fr/files/styles/image_3200/public/SCI_Earth_101_FR~~~~~fr~mux~~1.jpg?w=400&h=400&q=75"
      title="Planeta Tierra"
      description="Una imagen del planeta Tierra Tomada desde la Estacion espacial"
      />
      <Footer/>
    </div>
  );
}

export default App;
