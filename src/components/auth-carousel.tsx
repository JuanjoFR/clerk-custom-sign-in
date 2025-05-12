'use client';

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { Star, StarHalf } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

export function AuthCarousel() {
  return (
    <Carousel
      className="mx-auto w-full"
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
    >
      <CarouselContent>
        {/* Testimonial 1 */}
        <CarouselItem key="1">
          <div className="relative h-screen w-full overflow-hidden">
            <Image
              src="/testimonial-1.jpg"
              alt="Testimonial background"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 pb-20 text-white">
              <h2 className="mb-6 text-2xl font-bold md:text-4xl">
                We move 10x faster than our peers and stay consistent. While
                they&apos;re bogged down with design debt, we&apos;re releasing
                new features.
              </h2>
              <div className="mt-8 flex items-start justify-between gap-2">
                <div>
                  <p className="text-xl font-semibold md:text-2xl">
                    Sophie Hall
                  </p>
                  <p className="text-md md:text-lg">Founder, Catalog</p>
                  <p className="text-sm opacity-80">Web Design Agency</p>
                </div>
                <div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={24}
                        className="fill-white text-white"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
        {/* Testimonial 2 */}
        <CarouselItem key="2">
          <div className="relative h-screen w-full overflow-hidden">
            <Image
              src="/testimonial-2.jpg"
              alt="Testimonial background"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 pb-20 text-white">
              <h2 className="mb-6 text-2xl font-bold md:text-4xl">
                Our platform has transformed how we collaborate with clients and
                deliver results on time, every time.
              </h2>
              <div className="mt-8 flex items-start justify-between gap-2">
                <div>
                  <p className="text-xl font-semibold md:text-2xl">
                    Alex Johnson
                  </p>
                  <p className="text-md md:text-lg">CTO, Innovate</p>
                  <p className="text-sm opacity-80">Tech Solutions</p>
                </div>
                <div>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <Star
                        key={i}
                        size={24}
                        className="fill-white text-white"
                      />
                    ))}
                    <StarHalf size={24} className="fill-white text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
        {/* Testimonial 3 */}
        <CarouselItem key="3">
          <div className="relative h-screen w-full overflow-hidden">
            <Image
              src="/testimonial-3.jpg"
              alt="Testimonial background"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 pb-20 text-white">
              <h2 className="mb-6 text-2xl font-bold md:text-4xl">
                The intuitive interface and powerful features have made our
                workflow seamless and highly productive.
              </h2>
              <div className="mt-8 flex items-start justify-between gap-2">
                <div>
                  <p className="text-xl font-semibold md:text-2xl">Maya Chen</p>
                  <p className="text-md md:text-lg">Design Lead, Artistry</p>
                  <p className="text-sm opacity-80">Creative Studio</p>
                </div>
                <div>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <Star
                        key={i}
                        size={24}
                        className="fill-white text-white"
                      />
                    ))}
                    <Star size={24} className="text-white opacity-40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
        {/* Testimonial 4 */}
        <CarouselItem key="4">
          <div className="relative h-screen w-full overflow-hidden">
            <Image
              src="/testimonial-4.jpg"
              alt="Testimonial background"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 pb-20 text-white">
              <h2 className="mb-6 text-2xl font-bold md:text-4xl">
                The support and attention to detail exceeded our expectations.
                We&apos;ve never felt more confident in our digital presence.
              </h2>
              <div className="mt-8 flex items-start justify-between gap-2">
                <div>
                  <p className="text-xl font-semibold md:text-2xl">
                    Priya Patel
                  </p>
                  <p className="text-md md:text-lg">COO, BrightPath</p>
                  <p className="text-sm opacity-80">Consulting Firm</p>
                </div>
                <div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={24}
                        className="fill-white text-white"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <div className="absolute right-20 bottom-8 z-10 flex">
        <CarouselPrevious className="relative h-12 w-12 rounded-full border border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white" />
        <CarouselNext className="relative h-12 w-12 rounded-full border border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white" />
      </div>
    </Carousel>
  );
}
