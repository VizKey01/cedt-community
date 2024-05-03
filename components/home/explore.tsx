"use client";
import { pageWording } from "@/config/wording";
import { Card, CardHeader, CardBody, Image, Skeleton } from "@nextui-org/react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function ExploreCards() {
  return (
    <div
      id="explore-cedt"
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
    >
      <HeroCard />
      {/* ------- Two Seperated Subcard, Different Size ------- */}
      <div className="flex flex-col md:flex-row gap-4">
        <Subcard1 />
        <Subcard2 />
      </div>
    </div>
  );
}

// ----------------- Card Components -----------------
function HeroCard() {
  const cardMeta = pageWording.home.explore.heroCard;
  return (
    <BaseCard
      titleImage={cardMeta.title.imagePath ?? undefined}
      title={cardMeta.title.text}
      description={cardMeta.description}
      image={cardMeta.image}
    />
  );
}

function Subcard1() {
  const cardMeta = pageWording.home.explore.secondaryCard1;
  return (
    <BaseCard
      titleImage={cardMeta.title.imagePath ?? undefined}
      title={cardMeta.title.text}
      description={cardMeta.description}
      image={cardMeta.image}
      className="sm:1/2 md:w-4/6"
    />
  );
}

function Subcard2() {
  const cardMeta = pageWording.home.explore.secondaryCard2;
  return (
    <BaseCard
      titleImage={cardMeta.title.imagePath ?? undefined}
      title={cardMeta.title.text}
      description={cardMeta.description}
      image={cardMeta.image}
      className="sm:1/2 md:w-2/6"
      // make image at the bottom
      classNameBody="flex flex-col-reverse"
    />
  );
}

// ----------------- BaseCard Component -----------------
interface BaseCardProps {
  titleImage?: string;
  title: string;
  description: string;
  image: string;
  className?: string;
  classNameBody?: string;
}

function BaseCard(props: BaseCardProps) {
  const [imageState, setImageState] = useState({
    cardHeader: false,
    cardBody: false,
  });
  return (
    <Card
      className={twMerge(
        "text-inherit cursor-pointer scale-95 hover:scale-100 transform transition-transform duration-300 ease-in-out",
        props.className
      )}
      isHoverable={true}
    >
      <CardHeader className="pt-10 pb-2 flex-col items-center gap-1">
        <div className="flex flex-row items-center gap-3">
          {props.titleImage ? (
            <Skeleton
              className="rounded-full bg-secondaryCutoff-400"
              isLoaded={imageState.cardHeader}
            >
              <Image
                alt="Explore HeroCard Title Image"
                src={props.titleImage}
                width={45}
                onLoad={() => {
                  setImageState((prev) => ({ ...prev, cardHeader: true }));
                }}
              />
            </Skeleton>
          ) : null}
          <h4 className="text-inherit font-semibold text-2xl md:text-4xl">
            {props.title}
          </h4>
        </div>
        <p className="mt-2 text-sm md:text-2xl text-center">
          {props.description}
        </p>
      </CardHeader>
      {/* center the image */}
      <CardBody
        className={twMerge("overflow-hidden py-2", props.classNameBody)}
      >
        <Skeleton
          className="bg-secondaryCutoff-400 rounded-small"
          isLoaded={imageState.cardBody}
        >
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={props.image}
            width="100%"
            onLoad={() => {
              setImageState((prev) => ({ ...prev, cardBody: true }));
            }}
          />
        </Skeleton>
      </CardBody>
    </Card>
  );
}
