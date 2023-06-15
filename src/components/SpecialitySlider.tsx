/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { CSSProperties } from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const styles = {
  root: {},
  scroll: {
    position: 'relative',
    display: 'flex',
    overflow: 'hidden',
    scrollSnapType: 'x mandatory',
  },
  item: {
    width: '100%',
    height: '100%',
    flexShrink: 0,
  },
  itemSnapPoint: {
    scrollSnapAlign: 'start',
  },
  controls: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextPrevButton: {},
  nextPrevButtonDisabled: { opacity: 0.5 },
  pagination: {
    display: 'flex',
  },
  paginationButton: {
    margin: '10px',
  },
  paginationButtonActive: { opacity: 0.5 },
  pageIndicator: {
    display: 'flex',
    justifyContent: 'center',
  },
} satisfies Record<string, CSSProperties>;

interface CarouselProps<T> {
  readonly items: T[];
  readonly renderItem: (
    props: CarouselRenderItemProps<T>
  ) => React.ReactElement<CarouselItemProps>;
}

interface CarouselRenderItemProps<T> {
  readonly item: T;
  readonly isSnapPoint: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const CarouselSpeciality = <T extends any>({
  items,
  renderItem,
}: CarouselProps<T>) => {
  const {
    scrollRef,
    pages,
    activePageIndex,
    prev,
    next,
    goTo,
    snapPointIndexes,
  } = useSnapCarousel();
  return (
    <div style={styles.root}>
      <ul style={styles.scroll} ref={scrollRef}>
        {items.map((item, i) =>
          renderItem({
            item,
            isSnapPoint: snapPointIndexes.has(i),
          })
        )}
      </ul>
      <div className="flex justify-between items-center px-4">
        <button
          className="p-4 text-brand"
          style={{
            ...styles.nextPrevButton,
            ...(activePageIndex <= 0 ? styles.nextPrevButtonDisabled : {}),
          }}
          onClick={() => prev()}
        >
          <ArrowLeftIcon className="text-brand h-8 w-8 " />
        </button>
        <div style={styles.pageIndicator}>
          {Array.from({ length: pages.length }).map((_, i) => (
            <button
              key={i}
              className="p-1 bg-brand rounded-full"
              style={{
                ...styles.paginationButton,
                ...(i === activePageIndex ? styles.paginationButtonActive : {}),
              }}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <div style={styles.controls} aria-hidden>
          <button
            className="p-4 "
            style={{
              ...styles.nextPrevButton,
              ...(activePageIndex === pages.length - 1
                ? styles.nextPrevButtonDisabled
                : {}),
            }}
            onClick={() => next()}
          >
            <ArrowRightIcon className="text-brand h-8 w-8 " />
          </button>
        </div>
      </div>
    </div>
  );
};

interface CarouselItemProps {
  readonly isSnapPoint: boolean;
  readonly children?: React.ReactNode;
}

export const CarouselItemSpeciality = ({
  isSnapPoint,
  children,
}: CarouselItemProps) => (
  <li
    className="bg-white py-4"
    style={{
      ...styles.item,
      ...(isSnapPoint ? styles.itemSnapPoint : {}),
    }}
  >
    {children}
  </li>
);
