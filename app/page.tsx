import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles, tv } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { GithubIcon, Logo } from "@/components/icons";
import { pageWording } from "@/config/wording";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <div className="flex justify-center m-0 p-0">
          <Logo size={125} />
        </div>
        <span className="flex gap-0 justify-center">
          <h1 className="text-primary">{pageWording.home.heroTitle1}&nbsp;</h1>
          <h1 className="text-inherit">{pageWording.home.heroTitle2}&nbsp;</h1>
        </span>
        <h3 className="text-inherit">{pageWording.home.subTitle}</h3>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8 m-0 text-sm md:text-base">
        <Snippet hideSymbol hideCopyButton variant="bordered" className="p-0">
          <span className="p-0">
            Welcome to one of the best{" "}
            <Code color="primary">Computer Major</Code>
          </span>
        </Snippet>
      </div>

      {/* Explore CEDT Section */}
      <div
        id="explore-cedt"
        className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
      >
        <Card className="bg-secondary">
          <CardHeader className="pt-6 pb-2 flex-col items-center gap-1">
            <div className="flex flex-row items-center gap-3">
              <Image
                alt="Explore HeroCard Title Image"
                src={pageWording.home.explore.heroCard.title.imagePath}
                width={45}
              />
              <h4 className="font-semibold text-2xl md:text-4xl">
                {pageWording.home.explore.heroCard.title.text}
              </h4>
            </div>
            <p className="text-sm md:text-xl text-gray-500 text-center">
              {pageWording.home.explore.heroCard.description}
            </p>
          </CardHeader>
          {/* center the image */}
          <CardBody className="overflow-hidden py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={pageWording.home.explore.heroCard.image}
              width="100%"
            />
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
