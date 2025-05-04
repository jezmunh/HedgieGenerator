import { useState } from "react";
import { Button } from "./components/Button";
import { Image } from "./components/Image";

function App() {
  const ImagesList = [
    'https://i.pinimg.com/736x/5d/18/63/5d1863c531260cdd815277a18a069587.jpg',
    'https://i.chzbgr.com/thumb1200/4066309/h75F8365D/a-funny-list-of-hedgehog-memes',
    'https://i.redd.it/igewly9oo8gz.jpg',
    'https://i.pinimg.com/736x/e5/42/75/e542756a7a0a6e461957643d5b5ebad6.jpg',
    'https://i.pinimg.com/736x/48/0a/3c/480a3c1d88f770b6271a0abaf583758a.jpg',
    'https://i.pinimg.com/736x/6a/3b/22/6a3b22866f40095ca9e15abc9980d4d5.jpg',
    'https://i.pinimg.com/736x/b6/44/23/b644230eb959aee6c1687d876c89b838.jpg',
    'https://i.pinimg.com/736x/d2/6f/55/d26f5580814ad060c1a65c876b8823ac.jpg',
    'https://i.pinimg.com/736x/47/f2/a2/47f2a2d85ab5390950f0e455e10de010.jpg',
    'https://i.pinimg.com/736x/96/a1/26/96a126b5158dad9520b2d3f052f87911.jpg',
    'https://i.pinimg.com/736x/6c/9c/39/6c9c392162138a7a5e7fece2d3744160.jpg',
    'https://i.pinimg.com/736x/09/a5/a1/09a5a1243239ea448ef4f7fe4e2b0a9b.jpg',
  ];

  
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = () => {
    let randomIndex = Math.floor(Math.random() * ImagesList.length);

    
    while (randomIndex === selectedIndex && ImagesList.length > 1) {
      randomIndex = Math.floor(Math.random() * ImagesList.length);
    }

    setSelectedIndex(randomIndex);
  };

  return (
    <div className="text-center d-flex flex-column">
      {selectedIndex !== null && <Image src={ImagesList[selectedIndex]} />}
      Click on the button below to get a photo <br />
      <Button onClick={handleClick}>Receive a hedgehog</Button>
    </div>
  );
}

export default App;
