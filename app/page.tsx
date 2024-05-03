import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { GithubIcon, Logo } from "@/components/icons";
import { pageWording } from "@/config/wording";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <div className="flex justify-center m-0 p-0">
          <Logo size={125} />
        </div>
        <span className="flex gap-0 justify-center">
          <h1 className="text-primary">
            {pageWording.homepage.heroTitle1}&nbsp;
          </h1>
          <h1>{pageWording.homepage.heroTitle2}&nbsp;</h1>
        </span>
        <h3>{pageWording.homepage.subTitle}</h3>
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

      <div className="mt-8 m-0">
        <Snippet hideSymbol hideCopyButton variant="shadow" className="p-0">
          <span className="p-0">
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
