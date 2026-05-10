"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

export interface Gallery6Props {
  heading?: string;
  demoUrl?: string;
  items?: GalleryItem[];
}

const Gallery6 = ({
  heading = "Gallery",
  demoUrl = "#",
  items = [],
}: Gallery6Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-12 md:py-16 bg-black text-white w-full">
      <div className="pl-9 md:pl-16 2xl:pl-24 pr-6 mb-6 md:mb-10 flex flex-col justify-between md:flex-row md:items-end">
        <div>
          <h1 className="mb-2 text-2xl font-bold tracking-tight md:mb-3 md:text-3xl lg:text-4xl">
            {heading}
          </h1>
        </div>
        <div className="mt-4 md:mt-0 flex shrink-0 items-center justify-start gap-2">
          <Button
            size="icon"
            variant="outline"
            onClick={() => {
              carouselApi?.scrollPrev();
            }}
            disabled={!canScrollPrev}
            className="disabled:pointer-events-auto border-neutral-800 bg-neutral-900/80 hover:bg-neutral-800 text-white size-8"
          >
            <ArrowLeft className="size-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={() => {
              carouselApi?.scrollNext();
            }}
            disabled={!canScrollNext}
            className="disabled:pointer-events-auto border-neutral-800 bg-neutral-900/80 hover:bg-neutral-800 text-white size-8"
          >
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
          className="relative w-full"
        >
          <CarouselContent className="pl-6 md:pl-12 2xl:pl-20">
            {items.map((item) => (
              <CarouselItem key={item.id} className="pl-3 md:pl-5 sm:basis-3/5 md:basis-2/5 lg:basis-[30%]">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between h-full bg-neutral-900/50 border border-neutral-800 rounded-xl p-3 md:p-4 transition-colors hover:bg-neutral-900 hover:border-neutral-700"
                >
                  <div>
                    <div className="flex aspect-[16/9] overflow-clip rounded-xl border border-neutral-800/50">
                      <div className="flex-1">
                        <div className="relative h-full w-full origin-bottom transition duration-500 group-hover:scale-105">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex-1">
                    <div className="mb-1 line-clamp-2 break-words text-lg font-bold md:mb-2 md:text-xl text-white">
                      {item.title}
                    </div>
                    <div className="mb-4 line-clamp-3 text-sm text-neutral-400 md:mb-6 leading-relaxed">
                      {item.summary}
                    </div>
                  </div>
                  <div className="mt-auto flex justify-end">
                    <div className="flex items-center justify-center size-9 md:size-10 rounded-full bg-black text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#a07cf6]">
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Gallery6 };
