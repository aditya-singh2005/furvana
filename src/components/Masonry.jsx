import { useState, useEffect, useRef } from "react";

const Masonry = ({ data }) => {
  const [columns, setColumns] = useState(3);
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1200) {
        setColumns(4);
      } else if (window.innerWidth >= 800) {
        setColumns(3);
      } else {
        setColumns(2);
      }
    };

    updateColumns();
    const handleResize = () => {
      updateColumns();
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    setMounted(true);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!containerWidth || !mounted || data.length === 0) {
      return;
    }

    const columnWidth = containerWidth / columns;
    const gap = 16;
    let heights = new Array(columns).fill(0);

    const newItems = data.map((item) => {
      const aspectRatio = item.width / item.height;
      const itemHeight = columnWidth / aspectRatio;

      const columnIndex = heights.indexOf(Math.min(...heights));
      const x = columnIndex * columnWidth;
      const y = heights[columnIndex];

      heights[columnIndex] += itemHeight + gap;

      return {
        ...item,
        x,
        y,
        width: columnWidth - gap,
        height: itemHeight,
      };
    });

    setItems(newItems);
  }, [containerWidth, columns, data, mounted]);

  return (
    <div
      ref={containerRef}
      className="w-full relative overflow-hidden p-4"
      style={{ height: Math.max(...items.map((item) => item.y + item.height), 0) }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:shadow-2xl"
          style={{
            transform: `translate3d(${item.x}px, ${item.y}px, 0)`,
            width: item.width,
            height: item.height,
            transition: "transform 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out",
          }}
        >
          <div className="w-full h-full cursor-pointer flex items-center justify-center overflow-hidden rounded-2xl relative">
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />

            {/* Overlay with details (Appears on Hover) */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4 transform translate-y-full transition-transform duration-500 hover:translate-y-0">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-sm">🐾 {item.breed} | {item.age} years old</p>
              <p className="text-xs opacity-80">{item.characteristics}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Masonry;
