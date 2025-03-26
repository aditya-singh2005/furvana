import { useState, useEffect, useRef, useMemo } from "react";
import debounce from "lodash.debounce";

const Masonry = ({ data }) => {
  const [columns, setColumns] = useState(3);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      setColumns(width >= 1200 ? 4 : width >= 800 ? 3 : 2);
    };

    const handleResize = debounce(() => {
      updateColumns();
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    }, 150);

    window.addEventListener("resize", handleResize);
    updateColumns();
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = useMemo(() => {
    if (!containerWidth || data.length === 0) return [];

    const columnWidth = containerWidth / columns;
    const gap = 16;
    let heights = Array(columns).fill(0);

    return data.map((item) => {
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
  }, [containerWidth, columns, data]);

  return (
    <div
      ref={containerRef}
      className="w-full relative overflow-hidden p-4"
      style={{ height: Math.max(...items.map((item) => item.y + item.height), 0) }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute overflow-hidden rounded-3xl shadow-lg transition-transform duration-500 hover:shadow-2xl"
          style={{
            transform: `translate3d(${item.x}px, ${item.y}px, 0)`,
            width: item.width,
            height: item.height,
          }}
        >
          <div className="w-full h-full cursor-pointer flex items-center justify-center overflow-hidden rounded-2xl relative group">
            {/* Lazy Loaded Image */}
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Hover Overlay - Modified for semi-transparency */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent text-white p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-sm">🐾 {item.breed} | {item.age} years old</p>
              <p className="text-xs">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Masonry;