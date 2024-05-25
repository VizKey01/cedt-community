// "use client";
import { Card, Button, CardHeader, CardBody ,Image} from "@nextui-org/react";

export const AppCard = ({ icon, name, description, action, image, onClick}) => {
    
    
    return (
        <Card className="w-full md:w-1/2 p-4">
            <CardHeader className="justify-between">
                <div className="flex gap-4 ">
                    <Image alt={name}
                        height={40}
                        radius="sm"
                        src={icon}
                        width={40}
                    />
                    <div className="flex flex-col items-start">
                        <h4>{name}</h4>
                        <small>{description}</small>
                    </div>
                </div>
                <Button color="primary" radius="md" size="md">
                    <p className="text-white">{action}</p>
                    {/* {onClick ? <p onClick={onClick}>Get</p> : null} */}
                </Button>
            </CardHeader>
            <CardBody>
                <Image src={image} alt={name}/>
            </CardBody>
        </Card>
    );
}