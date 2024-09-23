import { Avatar, Image } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

import { subtitle, title } from "@/components/primitives";
import { Link } from "@nextui-org/react";
import { LocationIcon, ClockIcon } from "./icons";
import Moment from "react-moment";
import "moment-timezone";

interface OpportunityCardProps {
  title: string;
  location: string;
  locationUrl: string;
  avatar: string;
  description: string;
  time: Date;
  redirect: string;
  brandUrl: string;
  brandName: string;
}
export const OpportunityCard = ({
  title = "",
  location = "",
  avatar = "",
  description = "",
  time = new Date(),
  redirect = "/",
  brandUrl = "/",
  brandName = "",
  locationUrl = "/",
  ...props
}: OpportunityCardProps) => {
  return (
    <Card
      className={`max-w-sm max-h-[32rem] shrink grow bg-content2 p-4`}
      shadow="sm"
    >
      <CardHeader className="z-10 !items-start justify-between flex flex-col content-center shrink">
        <div className="flex gap-5 content-center items-center">
          <Avatar isBordered radius="full" size="md" src={avatar} />
          <div className="flex flex-col items-start justify-center">
            <Link
              isExternal
              color="foreground"
              className="text-medium font-bold text-center"
              href={brandUrl}
            >
              {brandName}
            </Link>
            <Link
              isExternal
              className="text-small text-center text-default-500"
              href={locationUrl}
            >
              <LocationIcon size={16} />
              &nbsp;{location}
            </Link>
          </div>
        </div>
        <h2 className="fullWidth font-bold text-2xl pt-5">{title}</h2>
      </CardHeader>
      <CardBody className="pt-1 shrink">
        <p className="text-ellipsis text-wrap text-default-700">
          {description}
        </p>
      </CardBody>
      <CardFooter className="flex flex-col shrink-0 min-h-24">
        <h4 className="flex shrink items-center pb-5 text-default-500 text-sm">
          <ClockIcon size={14} className="inline" />
          &nbsp;Posted&nbsp;
          <Moment toNow ago>
            {time}
          </Moment>
          &nbsp;ago
        </h4>
        <Button className = "grow shrink-0" radius="sm">Apply Now</Button>
      </CardFooter>
    </Card>
  );
};
