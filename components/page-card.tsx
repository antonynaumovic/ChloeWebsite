import { Card, CardHeader, Image } from "@nextui-org/react";

import { subtitle, title } from "@/components/primitives";

interface PageCardProps {
  title: string;
}
export const PageCard = ({ title = " " }: PageCardProps) => {
  return (
    <Card className="shrink grow w-64 bg-paper-yellow " shadow="none">
      <CardHeader className="z-10 top-1 flex-col !items-start">
        <h1 className="text-2xl font-semibold text-center m-5 text-slate-950">
          {title}
        </h1>
      </CardHeader>
    </Card>
  );
};
