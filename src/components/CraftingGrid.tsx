import React from 'react';

type Item = {
  name: string;
  image: string;
};

type CraftingGridProps = {
  recipe: (Item | null)[][]; // 3x3 array
  result: Item;
};

const CraftingGrid: React.FC<CraftingGridProps> = ({ recipe, result }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className="crafting-grid">
        {recipe.flat().map((item, i) => (
          <div className="slot" key={i}>
            {item && (
              <img src={`/img/items/${item.image}`} alt={item.name} title={item.name} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CraftingGrid;