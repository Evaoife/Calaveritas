import React, { useState, useEffect } from 'react';

function CardGame() {
    const [images, setImages] = useState([]);
    const [board, setBoard] = useState([]);
    const [clickedCards, setClickedCards] = useState([]); // Store clicked cards as an array
    const [winMessage, setWinMessage] = useState(null); // State for win message

  // Shading_score is Gray, Red, Blue.
  // Type_score is Evil, Neutral, Good
  // Color_score is White, Shaded, Black
  // Shape_score is Heart, Diamond, Cross
  
  const allImages = [
    { id: 1, src: 'https://github.com/Evaoife/Calaveritas/blob/main/BEC.png?raw=true', shading_score: 10,
      type_score: 10,
      color_score: 1000,
      shape_score: 1000,
      tint: 'gray' },
    { id: 2, src: 'https://github.com/Evaoife/Calaveritas/blob/main/BEC.png?raw=true', shading_score: 100,
      type_score: 10,
      color_score: 1000,
      shape_score: 1000, tint: 'red' },
    { id: 3, src: 'https://github.com/Evaoife/Calaveritas/blob/main/BEC.png?raw=true', shading_score: 1000,
      type_score: 10,
      color_score: 1000,
      shape_score: 1000, tint: 'blue' },
    { id: 4, src: 'https://github.com/Evaoife/Calaveritas/blob/main/BED.png?raw=true', shading_score: 10,
      type_score: 10,
      color_score: 1000,
      shape_score: 100, tint: 'gray' },
    { id: 5, src: 'https://github.com/Evaoife/Calaveritas/blob/main/BED.png?raw=true', shading_score: 100,
      type_score: 10,
      color_score: 1000,
      shape_score: 100, tint: 'red' },
    { id: 6, src: 'https://github.com/Evaoife/Calaveritas/blob/main/BED.png?raw=true', shading_score: 1000,
      type_score: 10,
      color_score: 1000,
      shape_score: 100, tint: 'blue' },
    { id: 7, src: 'https://github.com/Evaoife/Calaveritas/blob/main/BEH.png?raw=true', shading_score: 10,
      type_score: 10,
      color_score: 1000,
      shape_score: 10, tint: 'gray' },
    { id: 8, src: 'https://github.com/Evaoife/Calaveritas/blob/main/BEH.png?raw=true', shading_score: 100,
      type_score: 10,
      color_score: 1000,
      shape_score: 10, tint: 'red' },
    { id: 9, src: 'https://github.com/Evaoife/Calaveritas/blob/main/BEH.png?raw=true', shading_score: 1000,
      type_score: 10,
      color_score: 1000,
      shape_score: 10, tint: 'blue' },
    { id: 10, src: 'https://github.com/Evaoife/Calaveritas/blob/main/BGC.png?raw=true', shading_score: 10,
      type_score: 1000,
      color_score: 1000,
      shape_score: 1000, tint: 'gray' },
    { id: 4, src: 'https://github.com/Evaoife/Calaveritas/blob/main/BGC.png?raw=true', shading_score: 100,
      type_score: 1000,
      color_score: 1000,
      shape_score: 1000, tint: 'red' },
    { id: 4, src: 'https://github.com/Evaoife/Calaveritas/blob/main/BGC.png?raw=true', shading_score: 1000,
      type_score: 1000,
      color_score: 1000,
      shape_score: 1000, tint: 'blue' },
    { id: 5, src: 'https://github.com/Evaoife/Calaveritas/blob/main/BGD.png?raw=true', shading_score: 10,
      type_score: 1000,
      color_score: 1000,
      shape_score: 100, tint: 'gray' },
    { id: 5, src: 'https://github.com/Evaoife/Calaveritas/blob/main/BGD.png?raw=true', shading_score: 100,
      type_score: 1000,
      color_score: 1000,
      shape_score: 100, tint: 'red' },
    { id: 5, src: 'https://github.com/Evaoife/Calaveritas/blob/main/BGD.png?raw=true', shading_score: 1000,
      type_score: 1000,
      color_score: 1000,
      shape_score: 100, tint: 'blue' },
    { id: 6, src: 'https://github.com/Evaoife/Calaveritas/blob/main/BGH.png?raw=true', shading_score: 10,
      type_score: 1000,
      color_score: 1000,
      shape_score: 10, tint: 'gray' },
    { id: 6, src: 'https://github.com/Evaoife/Calaveritas/blob/main/BGH.png?raw=true', shading_score: 100,
      type_score: 1000,
      color_score: 1000,
      shape_score: 10, tint: 'red' },
    { id: 6, src: 'https://github.com/Evaoife/Calaveritas/blob/main/BGH.png?raw=true', shading_score: 1000,
      type_score: 1000,
      color_score: 1000,
      shape_score: 10, tint: 'blue' },
    { id: 7, src: 'https://github.com/Evaoife/Calaveritas/blob/main/BNC.png?raw=true', shading_score: 10,
      type_score: 100,
      color_score: 1000,
      shape_score: 1000, tint: 'gray' },
    { id: 7, src: 'https://github.com/Evaoife/Calaveritas/blob/main/BNC.png?raw=true', shading_score: 100,
      type_score: 100,
      color_score: 1000,
      shape_score: 1000, tint: 'red' },
    { id: 7, src: 'https://github.com/Evaoife/Calaveritas/blob/main/BNC.png?raw=true', shading_score: 1000,
      type_score: 100,
      color_score: 1000,
      shape_score: 1000, tint: 'blue' },
    { id: 8, src: 'https://github.com/Evaoife/Calaveritas/blob/main/BND.png?raw=true', shading_score: 10,
      type_score: 100,
      color_score: 1000,
      shape_score: 100, tint: 'gray' },
    { id: 8, src: 'https://github.com/Evaoife/Calaveritas/blob/main/BND.png?raw=true', shading_score: 100,
      type_score: 100,
      color_score: 1000,
      shape_score: 100, tint: 'red' },
    { id: 8, src: 'https://github.com/Evaoife/Calaveritas/blob/main/BND.png?raw=true', shading_score: 1000,
      type_score: 100,
      color_score: 1000,
      shape_score: 100, tint: 'blue'},
    { id: 9, src: 'https://github.com/Evaoife/Calaveritas/blob/main/BNH.png?raw=true', shading_score: 10,
      type_score: 100,
      color_score: 1000,
      shape_score: 10, tint: 'gray' },
    { id: 9, src: 'https://github.com/Evaoife/Calaveritas/blob/main/BNH.png?raw=true', shading_score: 100,
      type_score: 100,
      color_score: 1000,
      shape_score: 10, tint: 'red' },
    { id: 9, src: 'https://github.com/Evaoife/Calaveritas/blob/main/BNH.png?raw=true', shading_score: 1000,
      type_score: 100,
      color_score: 1000,
      shape_score: 10, tint: 'blue' },
    { id: 10, src: 'https://github.com/Evaoife/Calaveritas/blob/main/SEC.png?raw=true', shading_score: 10,
      type_score: 10,
      color_score: 100,
      shape_score: 1000, tint: 'gray' },
    { id: 10, src: 'https://github.com/Evaoife/Calaveritas/blob/main/SEC.png?raw=true', shading_score: 100,
      type_score: 10,
      color_score: 100,
      shape_score: 1000, tint: 'red' },
    { id: 10, src: 'https://github.com/Evaoife/Calaveritas/blob/main/SEC.png?raw=true', shading_score: 1000,
      type_score: 10,
      color_score: 100,
      shape_score: 1000, tint: 'blue' },
    { id: 3, src: 'https://github.com/Evaoife/Calaveritas/blob/main/SED.png?raw=true', shading_score: 10,
      type_score: 10,
      color_score: 100,
      shape_score: 100, tint: 'gray' },
    { id: 3, src: 'https://github.com/Evaoife/Calaveritas/blob/main/SED.png?raw=true', shading_score: 100,
      type_score: 10,
      color_score: 100,
      shape_score: 100, tint: 'red' },
    { id: 3, src: 'https://github.com/Evaoife/Calaveritas/blob/main/SED.png?raw=true', shading_score: 1000,
      type_score: 10,
      color_score: 100,
      shape_score: 100, tint: 'blue' },
    { id: 4, src: 'https://github.com/Evaoife/Calaveritas/blob/main/SEH.png?raw=true', shading_score: 10,
      type_score: 10,
      color_score: 100,
      shape_score: 10, tint: 'gray' },
    { id: 4, src: 'https://github.com/Evaoife/Calaveritas/blob/main/SEH.png?raw=true', shading_score: 100,
      type_score: 10,
      color_score: 100,
      shape_score: 10, tint: 'red' },
    { id: 4, src: 'https://github.com/Evaoife/Calaveritas/blob/main/SEH.png?raw=true', shading_score: 1000,
      type_score: 10,
      color_score: 100,
      shape_score: 10, tint: 'blue' },
    { id: 5, src: 'https://github.com/Evaoife/Calaveritas/blob/main/SGC.png?raw=true', shading_score: 10,
      type_score: 1000,
      color_score: 100,
      shape_score: 1000, tint: 'gray' },
    { id: 5, src: 'https://github.com/Evaoife/Calaveritas/blob/main/SGC.png?raw=true', shading_score: 100,
      type_score: 1000,
      color_score: 100,
      shape_score: 1000, tint: 'red' },
    { id: 5, src: 'https://github.com/Evaoife/Calaveritas/blob/main/SGC.png?raw=true', shading_score: 1000,
      type_score: 1000,
      color_score: 100,
      shape_score: 1000, tint: 'blue' },
    { id: 6, src: 'https://github.com/Evaoife/Calaveritas/blob/main/SGD.png?raw=true', shading_score: 10,
      type_score: 1000,
      color_score: 100,
      shape_score: 100, tint: 'gray' },
    { id: 6, src: 'https://github.com/Evaoife/Calaveritas/blob/main/SGD.png?raw=true', shading_score: 100,
      type_score: 1000,
      color_score: 100,
      shape_score: 100, tint: 'red' },
    { id: 6, src: 'https://github.com/Evaoife/Calaveritas/blob/main/SGD.png?raw=true', shading_score: 1000,
      type_score: 1000,
      color_score: 100,
      shape_score: 100, tint: 'blue' },
    { id: 6, src:'https://github.com/Evaoife/Calaveritas/blob/main/SGH.png?raw=true', shading_score: 10,
      type_score: 1000,
      color_score: 100,
      shape_score: 10, tint: 'gray' },
    { id: 6, src:'https://github.com/Evaoife/Calaveritas/blob/main/SGH.png?raw=true', shading_score: 100,
      type_score: 1000,
      color_score: 100,
      shape_score: 10, tint: 'red' },
    { id: 6, src:'https://github.com/Evaoife/Calaveritas/blob/main/SGH.png?raw=true', shading_score: 1000,
      type_score: 1000,
      color_score: 100,
      shape_score: 10, tint: 'blue' },
    { id: 8, src: 'https://github.com/Evaoife/Calaveritas/blob/main/SNC.png?raw=true', shading_score: 10,
      type_score: 100,
      color_score: 100,
      shape_score: 1000, tint: 'gray' },
    { id: 8, src: 'https://github.com/Evaoife/Calaveritas/blob/main/SNC.png?raw=true', shading_score: 100,
      type_score: 100,
      color_score: 100,
      shape_score: 1000, tint: 'red' },
    { id: 8, src: 'https://github.com/Evaoife/Calaveritas/blob/main/SNC.png?raw=true', shading_score: 1000,
      type_score: 100,
      color_score: 100,
      shape_score: 1000, tint: 'blue' },
    { id: 9, src: 'https://github.com/Evaoife/Calaveritas/blob/main/SND.png?raw=true', shading_score: 10,
      type_score: 100,
      color_score: 100,
      shape_score: 100, tint: 'gray' },
    { id: 9, src: 'https://github.com/Evaoife/Calaveritas/blob/main/SND.png?raw=true', shading_score: 100,
      type_score: 100,
      color_score: 100,
      shape_score: 100, tint: 'red' },
    { id: 9, src: 'https://github.com/Evaoife/Calaveritas/blob/main/SND.png?raw=true', shading_score: 1000,
      type_score: 100,
      color_score: 100,
      shape_score: 100, tint: 'blue' },
    { id: 10, src: 'https://github.com/Evaoife/Calaveritas/blob/main/SNH.png?raw=true', shading_score: 10,
      type_score: 100,
      color_score: 100,
      shape_score: 10, tint: 'gray' },
    { id: 10, src: 'https://github.com/Evaoife/Calaveritas/blob/main/SNH.png?raw=true', shading_score: 100,
      type_score: 100,
      color_score: 100,
      shape_score: 10, tint: 'red' },
    { id: 10, src: 'https://github.com/Evaoife/Calaveritas/blob/main/SNH.png?raw=true', shading_score: 1000,
      type_score: 100,
      color_score: 100,
      shape_score: 10, tint: 'blue' },
    { id: 1, src: 'https://github.com/Evaoife/Calaveritas/blob/main/WEC.png?raw=true', shading_score: 10,
      type_score: 10,
      color_score: 10,
      shape_score: 1000, tint: 'gray' },
    { id: 1, src: 'https://github.com/Evaoife/Calaveritas/blob/main/WEC.png?raw=true', shading_score: 100,
      type_score: 10,
      color_score: 10,
      shape_score: 1000, tint: 'red' },
    { id: 1, src: 'https://github.com/Evaoife/Calaveritas/blob/main/WEC.png?raw=true', shading_score: 1000,
      type_score: 10,
      color_score: 10,
      shape_score: 1000, tint: 'blue' },
    { id: 2, src: 'https://github.com/Evaoife/Calaveritas/blob/main/WED.png?raw=true', shading_score: 10,
      type_score: 10,
      color_score: 10,
      shape_score: 100, tint: 'gray' },
    { id: 2, src: 'https://github.com/Evaoife/Calaveritas/blob/main/WED.png?raw=true', shading_score: 100,
      type_score: 10,
      color_score: 10,
      shape_score: 100, tint: 'red' },
    { id: 2, src: 'https://github.com/Evaoife/Calaveritas/blob/main/WED.png?raw=true', shading_score: 1000,
      type_score: 10,
      color_score: 10,
      shape_score: 100, tint: 'blue' },
    { id: 4, src: 'https://github.com/Evaoife/Calaveritas/blob/main/WEH.png?raw=true', shading_score: 10,
      type_score: 10,
      color_score: 10,
      shape_score: 10, tint: 'gray' },
    { id: 4, src: 'https://github.com/Evaoife/Calaveritas/blob/main/WEH.png?raw=true', shading_score: 100,
      type_score: 10,
      color_score: 10,
      shape_score: 10, tint: 'red' },
    { id: 4, src: 'https://github.com/Evaoife/Calaveritas/blob/main/WEH.png?raw=true', shading_score: 1000,
      type_score: 10,
      color_score: 10,
      shape_score: 10, tint: 'blue' },
    { id: 5, src: 'https://github.com/Evaoife/Calaveritas/blob/main/WGC.png?raw=true', shading_score: 10,
      type_score: 1000,
      color_score: 10,
      shape_score: 1000, tint: 'gray' },
    { id: 5, src: 'https://github.com/Evaoife/Calaveritas/blob/main/WGC.png?raw=true', shading_score: 100,
      type_score: 1000,
      color_score: 10,
      shape_score: 1000, tint: 'red' },
    { id: 5, src: 'https://github.com/Evaoife/Calaveritas/blob/main/WGC.png?raw=true', shading_score: 1000,
      type_score: 1000,
      color_score: 10,
      shape_score: 1000, tint: 'blue' },
    { id: 6, src: 'https://github.com/Evaoife/Calaveritas/blob/main/WGD.png?raw=true', shading_score: 10,
      type_score: 1000,
      color_score: 10,
      shape_score: 100, tint: 'gray' },
    { id: 6, src: 'https://github.com/Evaoife/Calaveritas/blob/main/WGD.png?raw=true', shading_score: 100,
      type_score: 1000,
      color_score: 10,
      shape_score: 100, tint: 'red' },
    { id: 6, src: 'https://github.com/Evaoife/Calaveritas/blob/main/WGD.png?raw=true', shading_score: 1000,
      type_score: 1000,
      color_score: 10,
      shape_score: 100, tint: 'blue' },
    { id: 7, src: 'https://github.com/Evaoife/Calaveritas/blob/main/WGH.png?raw=true', shading_score: 10,
      type_score: 1000,
      color_score: 10,
      shape_score: 10, tint: 'gray' },
    { id: 7, src: 'https://github.com/Evaoife/Calaveritas/blob/main/WGH.png?raw=true', shading_score: 100,
      type_score: 1000,
      color_score: 10,
      shape_score: 10, tint: 'red' },
    { id: 7, src: 'https://github.com/Evaoife/Calaveritas/blob/main/WGH.png?raw=true', shading_score: 1000,
      type_score: 1000,
      color_score: 10,
      shape_score: 10, tint: 'blue' },
    { id: 8, src: 'https://github.com/Evaoife/Calaveritas/blob/main/WNC.png?raw=true', shading_score: 10,
      type_score: 100,
      color_score: 10,
      shape_score: 1000, tint: 'gray' },
    { id: 8, src: 'https://github.com/Evaoife/Calaveritas/blob/main/WNC.png?raw=true', shading_score: 100,
      type_score: 100,
      color_score: 10,
      shape_score: 1000, tint: 'red' },
    { id: 8, src: 'https://github.com/Evaoife/Calaveritas/blob/main/WNC.png?raw=true', shading_score: 1000,
      type_score: 100,
      color_score: 10,
      shape_score: 1000, tint: 'blue' },
    { id: 9, src: 'https://github.com/Evaoife/Calaveritas/blob/main/WND.png?raw=true', shading_score: 10,
      type_score: 100,
      color_score: 10,
      shape_score: 100, tint: 'gray' },
    { id: 9, src: 'https://github.com/Evaoife/Calaveritas/blob/main/WND.png?raw=true', shading_score: 100,
      type_score: 100,
      color_score: 10,
      shape_score: 100, tint: 'red' },
    { id: 9, src: 'https://github.com/Evaoife/Calaveritas/blob/main/WND.png?raw=true', shading_score: 1000,
      type_score: 100,
      color_score: 10,
      shape_score: 100, tint: 'blue' },
    { id: 10, src: 'https://github.com/Evaoife/Calaveritas/blob/main/WNH.png?raw=true', shading_score: 10,
      type_score: 100,
      color_score: 10,
      shape_score: 10, tint: 'gray' },
    { id: 10, src: 'https://github.com/Evaoife/Calaveritas/blob/main/WNH.png?raw=true', shading_score: 100,
      type_score: 100,
      color_score: 10,
      shape_score: 10, tint: 'red' },
    { id: 10, src: 'https://github.com/Evaoife/Calaveritas/blob/main/WNH.png?raw=true', shading_score: 1000,
      type_score: 100,
      color_score: 10,
      shape_score: 10, tint: 'blue' },
    // ... more images
  ];

  useEffect(() => {
    // Shuffle the images array (Fisher-Yates shuffle algorithm)
    const shuffledImages = [...allImages]; // Create a copy
    for (let i = shuffledImages.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
    }
// Take the first 9 images for the board
    const selectedImages = shuffledImages.slice(0, 12);
    setBoard(selectedImages);
    setImages(allImages) //sets all the images
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
        resetGame();
    }, []);

    const handleCardClick = (image) => {
        if (clickedCards.length < 3 && !clickedCards.includes(image)) {
            setClickedCards([...clickedCards, image]);
        } else if (clickedCards.includes(image)) {
            setClickedCards(clickedCards.filter((card) => card !== image));
        } else {
            alert('You can only select up to 3 cards.');
        }
    };
  
const checkForWin = () => {
        if (clickedCards.length !== 3) return false;

        const attributes = ['shading_score', 'type_score', 'color_score', 'shape_score'];

        for (const attribute of attributes) {
            const values = clickedCards.map((card) => card[attribute]);
            const uniqueValues = new Set(values);

            if (uniqueValues.size !== 1 && uniqueValues.size !== 3) {
                return false; // Not all same or all different
            }
        }
        return true; // All attributes are either all same or all different
    };

const resetGame = () => {
        const shuffledImages = [...allImages];
        for (let i = shuffledImages.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
        }
        const selectedImages = shuffledImages.slice(0, 12);
        setBoard(selectedImages);
        setClickedCards([]);
        setWinMessage(null); // Clear win message
    };

    useEffect(() => {
        if (clickedCards.length === 3) {
            if (checkForWin()) {
                setWinMessage("YOU WON!");
                setTimeout(resetGame, 2000); // Reset after a delay
            }
        }
    }, [clickedCards]);

  
return (
        <div className="card-game">
            {winMessage && <div className="win-message">{winMessage}</div>} {/* Display win message */}
            {board.map((image) => (
                <div
                    key={image.id}
                    className={`card ${clickedCards.includes(image) ? 'highlighted' : ''}`}
                    onClick={() => handleCardClick(image)}
                >
                    <img
                        src={image.src}
                        alt={`Card ${image.id}`}
                        style={{ filter: `hue-rotate(${getHue(image.tint)}deg)` }}
                    />
                </div>
            ))}
        </div>
    );
}

function getHue(color) {
    switch (color) {
        case 'red': return 60;
        case 'blue': return 240;
        case 'gray': return 0; // Gray doesn't change hue
        default: return 0; // Default if color is not recognized
    }
}
export default CardGame;
