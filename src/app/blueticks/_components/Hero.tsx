import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24">
      <div className="page-width grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-xl">
            <h1 className="text-primary font-bold">EazyTicks</h1>
            <h3 className="text-secondary max-sm:mt-2 drop-shadow-lg">
              Your E-Ticketing Platform
            </h3>
            <p className="md:text-2xl text-xl mt-4">
              EazyTicks is a mobile-focused ticketing platform that helps organizations create, manage, and sell tickets for sports, concerts, theater, and other live events. Organizers can manage ticket sales, attendees, check-ins, and event operations from one place.

            </p>
            <div className="mt-8">
              <Button
                title="View Demo"
                href="https://eazyticks.com/"
                icon={<GoArrowUpRight />}
              />
            </div>
        </div>
        <div className="w-full overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src="/ezt.jpeg"
            priority
            width={1600}
            height={600}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full object-cover"
            alt="EazyTicks event ticketing platform homepage"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
