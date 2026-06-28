import { useCallback, useEffect, useState, type ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useIsDesktop } from '../utils/useMediaQuery';

interface SwipeRailProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  getKey: (item: T, index: number) => string;
  /** Grid classes used at the desktop (≥lg) breakpoint. */
  gridClassName: string;
  /** Slide flex-basis on the mobile/tablet rail. Leaves a peek of the next card. */
  slideClassName?: string;
}

/**
 * Renders a collection as a horizontal swipe rail on mobile/tablet (so a section
 * stays roughly one screen tall and is browsed sideways) and as a normal grid on
 * desktop. Vertical scroll moves between sections; horizontal swipe browses within.
 */
export function SwipeRail<T>({
  items,
  renderItem,
  getKey,
  gridClassName,
  slideClassName = 'flex-[0_0_82%] sm:flex-[0_0_46%]',
}: SwipeRailProps<T>) {
  const isDesktop = useIsDesktop();

  if (isDesktop) {
    return (
      <div className={gridClassName}>
        {items.map((item, i) => (
          <div key={getKey(item, i)} className="h-full">
            {renderItem(item, i)}
          </div>
        ))}
      </div>
    );
  }

  return (
    <MobileRail
      items={items}
      renderItem={renderItem}
      getKey={getKey}
      slideClassName={slideClassName}
    />
  );
}

function MobileRail<T>({
  items,
  renderItem,
  getKey,
  slideClassName,
}: Omit<SwipeRailProps<T>, 'gridClassName'>) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps' });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', () => {
      setSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
  }, [emblaApi, onSelect]);

  return (
    <div>
      <div className="overflow-hidden -mx-4 px-4" ref={emblaRef}>
        <div className="flex gap-4 items-stretch">
          {items.map((item, i) => (
            <div
              key={getKey(item, i)}
              className={`${slideClassName} min-w-0 [&>*]:h-full`}
            >
              {renderItem(item, i)}
            </div>
          ))}
        </div>
      </div>

      {/* Dots + counter */}
      {snaps.length > 1 && (
        <div className="mt-5 flex items-center justify-center gap-3">
          <div className="flex items-center gap-1.5">
            {snaps.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to item ${i + 1}`}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`rounded-full transition-all ${
                  i === selected ? 'w-5 h-1.5 bg-brand-bright' : 'w-1.5 h-1.5 bg-line-strong'
                }`}
              />
            ))}
          </div>
          <span className="font-mono text-[0.62rem] text-faint tabular-nums">
            {selected + 1} / {snaps.length}
          </span>
        </div>
      )}
    </div>
  );
}
