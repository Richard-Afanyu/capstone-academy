import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TestimonialsType {
  id: string;
  studentName: string;
  review: string;
}

export function CarouselSpacing() {
  const testimonials = [
    {
      id: "1",
      studentName: "Richard Afanyu",
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique alias
        mollitia, eaque dignissimos.`,
    },
    {
      id: "2",
      studentName: "Richard Afanyu",
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique alias
        mollitia, eaque dignissimos.`,
    },
    {
      id: "3",
      studentName: "Richard Afanyu",
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique alias
        mollitia, eaque dignissimos.`,
    },
    {
      id: "4",
      studentName: "Richard Afanyu",
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique alias
        mollitia, eaque dignissimos.`,
    },
  ];
  return (
    <Carousel className="">
      <CarouselContent className="-ml-1">
        {testimonials.map((item: TestimonialsType, index: number) => (
          <CarouselItem
            key={index}
            className="pl-1 md:basis-1/2 lg:basis-1/3 cursor-grab"
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col gap-4 items-center justify-center ">
                  <h2 className="text-2xl font-semibold">{item.review}</h2>
                  <span className="text-muted-foreground">
                    {item.studentName}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
