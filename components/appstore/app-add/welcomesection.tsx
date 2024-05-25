import { pageWording } from "@/config/wording";
import { Logo } from "../../icons";

function LogoAndWelcomeMessage() {
  return (
    <div className="inline-block max-w-lg text-center justify-center">
      <div className="flex justify-center m-0 p-0">
        <Logo size={125} />
      </div>
      <span className="flex gap-0 justify-center">
        <h1 className="text-primary">{pageWording.appstore.heroTitle1}&nbsp;</h1>
        <h1 className="text-inherit">{pageWording.appstore.heroTitle2}&nbsp;</h1>
      </span>
    </div>
  );
}

export default function WelcomeSection() {
  return (
    <>
      <LogoAndWelcomeMessage />
    </>
  );
}
