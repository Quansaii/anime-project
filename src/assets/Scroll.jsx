import { useRef } from 'react';

export const useHorizontalScroll = (step = 300) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction * step,
        behavior: 'smooth',
      });
    }
  };

  const scrollLeft = () => scroll(-1);
  const scrollRight = () => scroll(1);

  return { scrollRef, scrollLeft, scrollRight };
};