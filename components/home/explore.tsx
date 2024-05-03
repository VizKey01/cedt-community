"use client";
import { pageWording } from "@/config/wording";
import { Card, CardHeader, CardBody, Image, Skeleton } from "@nextui-org/react";
import { useState } from "react";

export default function ExploreCards() {
  const [imageState, setImageState] = useState({
    cardHeader: false,
    cardBody: false,
  });
  return (
    <div
      id="explore-cedt"
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
    >
      <Card className="text-inherit">
        <CardHeader className="pt-6 pb-2 flex-col items-center gap-1">
          <div className="flex flex-row items-center gap-3">
            <Skeleton
              className="rounded-full bg-secondaryCutoff-400"
              isLoaded={imageState.cardHeader}
            >
              <Image
                alt="Explore HeroCard Title Image"
                src={pageWording.home.explore.heroCard.title.imagePath}
                width={45}
                onLoad={() => {
                  setImageState({ ...imageState, cardHeader: true });
                }}
              />
            </Skeleton>
            <h4 className="font-semibold text-2xl md:text-4xl text-inherit">
              {pageWording.home.explore.heroCard.title.text}
            </h4>
          </div>
          <p className="text-sm md:text-xl text-gray-500 text-center text-inherit">
            {pageWording.home.explore.heroCard.description}
          </p>
        </CardHeader>
        {/* center the image */}
        <CardBody className="overflow-hidden py-2">
          <Skeleton
            className="bg-secondaryCutoff-400 rounded-small"
            isLoaded={imageState.cardHeader}
          >
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={pageWording.home.explore.heroCard.image}
              width="100%"
            />
          </Skeleton>
        </CardBody>
      </Card>
      {/* ------- Two Seperated Subcard */}
    </div>
  );
}
