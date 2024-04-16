import Image from "next/image";
import React from "react";

const RightSideBar = () => {
  return (
    <div className="sticky right-0 top-0 z-20 h-screen w-[300px] xl:w-[350px] flex flex-col gap-12 overflow-auto pl-6 pr-10 py-6 max-lg:hidden">
      <div className="flex flex-col gap-4">
        <h3 className="text-light-1 text-heading3-bold">Sponsored</h3>
        <div className="relative overflow-hidden rounded-lg">
          <div className="flex animate-slider">
            {/* Last slide duplicated */}
            <div className="w-full shrink-0">
              <Image
                src="/assets/ad2.jpg"
                alt="ad"
                width={280}
                height={200}
                className="rounded-lg"
              />
            </div>

            {/* Original slides */}
            <div className="w-full shrink-0">
              <Image
                src="/assets/ad.jpg"
                alt="ad"
                width={280}
                height={200}
                className="rounded-lg"
              />
            </div>
            {/* First slide duplicated */}
            <div className="w-full shrink-0">
              <Image
                src="/assets/ad2.jpg"
                alt="ad"
                width={280}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <p className="text-body-bold text-light-1">Febreze Air Freshener</p>
        <p className="text-small-semibold text-light-2">
          Instant odor fighting and a burst of freshness. Amazing summer scent.
          It is so light and fruity and if you are a scent person it has major
          happy vibes.
        </p>
      </div>
    </div>
  );
};

export default RightSideBar;
