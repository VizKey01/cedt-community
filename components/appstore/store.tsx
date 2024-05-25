import { pageWording } from "@/config/wording";
import { Logo } from "../icons";
import { Button } from "@nextui-org/button";
import { AppCard } from "./appcard";

const apps = [
  { 
    icon: 'https://avatars.githubusercontent.com/u/86160567?s=200&v=4',
    name: 'Arcana 888',
    description: 'Game, Java, ProgMeth',
    action: 'Get',
    image: 'logo.png',
  },
  {
    icon: 'https://avatars.githubusercontent.com/u/86160567?s=200&v=4',
    name: 'Pacbubu',
    description: 'Game, Java, ProgMeth',
    action: 'Get',
    image: 'logo.png',
  },
  {
    icon: 'https://avatars.githubusercontent.com/u/86160567?s=200&v=4',
    name: 'Rest Go',
    description: 'Hotel Booking, SE',
    action: 'Try',
    image: 'logo.png',
  },
];

function AddingButtons() {
    return (
        <Button color="primary" variant="shadow" size="lg" radius="md">
            <p className="text-white">Add Your App</p>
        </Button>  
    )
}

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
      <h3 className="my-8 text-inherit">{pageWording.appstore.subTitles}</h3>
      <AddingButtons />
    </div>
  );
}

function Appstore () {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-8 md:py-10 mt-10">
      {apps.map((app) => (
        <AppCard 
          key={app.name}
          icon={app.icon}
          name={app.name} 
          description={app.description} 
          action={app.action} 
          image={app.image} 
          onClick={() => alert(`Clicked on ${app.name}`)}
        />
      ))}
    </div>
  );
}

export default function Store() {
  return (
    <>
      {/* <LogoAndWelcomeMessage /> */}
      <Appstore />
    </>
  );
}
