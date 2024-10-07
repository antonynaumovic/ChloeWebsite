/* eslint-disable @next/next/no-sync-scripts */
"use client";
import { Button } from "@nextui-org/button";
import { ParallaxBanner } from "react-scroll-parallax";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Image,
  Link,
  Divider,
} from "@nextui-org/react";
import { AnimatePresence } from "framer-motion";
import { Listbox, ListboxItem, cn } from "@nextui-org/react";
import { ListboxWrapper } from "@/components/ListboxWrapper";

import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { PageCard } from "@/components/page-card";
import {
  background,
  circle1,
  circle2,
  circle3,
  circle4,
  circle5,
  circle6,
  staticBottom,
  bottom1,
  bottom2,
  staticTop,
  top1,
  top2,
} from "@/components/parallax";
import { title, subtitle, button } from "@/components/primitives";
import {
  VolunteensPromo,
  SortIcon,
  RandomSortIcon,
  DateAscSortIcon,
  NameAscSortIcon,
  DateDescSortIcon,
  NameDescSortIcon,
  DinoIcon,
  ToriiIcon,
  ArtStationIcon
} from "@/components/icons";
import { OpportunityCard } from "@/components/OpportunityCard";
import { Key, useState } from "react";
import Slider from "react-slick";
import classnames from "classnames";
import Moment from "react-moment";

interface BlogItemProps {
  heading: string;
  body?: string;
  id?: string;
  date?: Date;
  children?: React.ReactNode;
}

interface BlogVideoProps {
  url: string;
  title: string;
  id?: string;
}

function BlogVideo({ url, title, id }: BlogVideoProps) {
  return (
    <iframe
      className="w-full aspect-video border-0 bg-transparent"
      src={url}
      allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
      title={title}
      id={id}
    />
  );
}

function BlogItem({ heading, body, id, children }: BlogItemProps) {
  const sectionClass = classnames(
    "max-w-screen-xl flex flex-col flex-wrap justify-around py-8 w-full justify-center",
  );
  return (
    <section className={sectionClass} id={id}>
      <h3
        className={`text-2xl font-normal text-default-600 uppercase text-center`}
      >
        {heading}
      </h3>
      <h4
        className={`${subtitle({})} font-light text-default-400 text-center max-w-screen-sm place-self-center pt-2 pb-8`}
      >
        {body}
      </h4>
      <div className="w-full shrink grow">{children}</div>
    </section>
  );
}

function BlogSection({
  heading,
  id,
  date = new Date(2024, 1, 1),
  children,
}: BlogItemProps) {
  return (
    <section
      className="relative flex flex-col items-center justify-center py-8 md:py-10 justify-center"
      id={id}
    >
      <h2
        className={`${title({ size: "md" })} pt-8 font-light text-default-700 uppercase text-center`}
      >
        {heading}
      </h2>
      <Moment
        date={date}
        toNow
        ago
        format="YYYY/MM/DD"
        className="pb-8 text-default-200"
      />
      {children}
      <Divider />
    </section>
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentKey, setCurrentKey] = useState("date_desc");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <section>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <script src="https://player.vimeo.com/api/player.js"></script>
      <section className="relative flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-[60vh] overflow-hidden">
        <div className="inline-block max-w-max text-center justify-center items-center z-10 max-w-screen-lg">
          <h1 className={title({ size: "xl" })}>Blog</h1>
        </div>
        <div className="absolute background-yellow w-full h-full overflow-hidden top-1">
          <ParallaxBanner
            className="w-full h-full"
            layers={[
              background,
              circle1,
              circle2,
              circle3,
              circle4,
              circle5,
              circle6,
              staticBottom,
              bottom1,
              bottom2,
              staticTop,
              top1,
              top2,
            ]}
          />
        </div>
      </section>
      <section className="relative flex flex-col items-center justify-center gap-4 pt-4">
        <Breadcrumbs
          radius="full"
          variant="solid"
          separator="|"
          itemClasses={{
            separator: "px-3",
            item: "text-white font-semibold",
          }}
          classNames={{
            list: "bg-gradient-to-br from-paper-yellow to-circle-yellow-dark shadow-small",
          }}
        >
          <BreadcrumbItem
            href="#dinosaur"
            startContent={<DinoIcon />}
            isCurrent={false}
          >
            Dino
          </BreadcrumbItem>
          <BreadcrumbItem
            href="#unhinged"
            startContent={<ToriiIcon size={16} />}
            isCurrent={false}
          >
            Unhinged Memories
          </BreadcrumbItem>
        </Breadcrumbs>
      </section>
      <BlogSection
        id="dinosaur"
        heading="Dinosaur Animation"
        date={new Date(2024, 6, 10)}
      >
        <section className="max-w-screen-xl flex flex-col flex-wrap justify-around w-full">
          <div className="max-w-screen-xl pt-6 gap-12 px-8 justify-stretch w-full">
            <Slider {...settings}>
              <div>
                <Image alt="Dino Poster" src="/img/poster.jpg" />
              </div>
              <div>
                <Image alt="Control Blueprint" src="/img/controlbp.jpg" />
              </div>
              <div>
                <Image alt="Dino Game Notes" src="/img/notes.jpg" />
                <h3 className="fullWidth font-bold text-2xl text-center">Notes and Reference from Unreal&apos;s <Link isExternal color="foreground" showAnchorIcon className="fullWidth font-bold text-2xl text-center" href="https://www.unrealengine.com/marketplace/en-US/product/meerkat-demo-06">Meerkat Demo</Link></h3>
              </div>
              <div>
                <Image alt="Quetzal Setup" src="/img/quetzalbp.jpg" />
              </div>
              <div>
                <Image alt="Pterosaur High Poly" src="/img/dinoHP.jpg" />
              </div>
              <div>
                <Image alt="Pterosaur High Poly 2" src="/img/dinoHP2.jpg" />
              </div>
              <div>
                <Image alt="Pterosaur Low Poly" src="/img/dinoLP.jpg" />
              </div>
            </Slider>
          </div>
        </section>
        <BlogItem
          heading="Maya to Unreal Switch"
          body="I migrated from Maya to Unreal to set up the rigging systems since
            they have updated their rig building mechanics"
          id="mayaswitch"
        >
          <BlogVideo
            url="/img/Controls.webm"
            id="controlsVid"
            title="Controls"
          />
        </BlogItem>
        <BlogItem
          heading="Beginning Problems"
          body="After I fixed and set up my skeletal mesh I decided to not use the
            modular rigging due to my rig system having many errors. To use the
            modular rig system you need to have a somewhat compatible and clean
            model"
          id="beginningproblems"
        >
          <Image alt="Control Rig" src="/img/controlbp.jpg" />
        </BlogItem>
        <BlogItem
          heading="Quetzal Model"
          body="I downloaded some free pterosaurs available on the Sketchfab market.
            This was to save me time modeling more Dinos and focus mainly on my
            animation rigging points"
          id="quetzalmodel"
        >
          <Image alt="Quetzal Sketchfab" src="/img/sketchfab.jpg" />
        </BlogItem>
        <BlogItem
          heading="Wing Rigging"
          body="For the transferred model I went closer to the eagle's rigging
            system due to the model having closer flying animations than thus
            walking"
          id="wingrigging"
        >
          <BlogVideo
            url="/img/WingRigging.webm"
            id="riggingVid"
            title="Rigging"
          />
        </BlogItem>
      </BlogSection>
      <BlogSection
        id="unhinged"
        heading="Unhinged Memories"
        date={new Date(2024, 1, 5)}
      >
        <BlogItem
          heading="Game Development"
          body="This project was my very first game developed using Unreal
                Engine 5.2. The project is a first-person horror game settled in
                Japan that time loops between the 1600's all the way to the
                1950's. As a student at Vertex Bootcamp I was able to create a
                horror game with levels and jump scares starting with little
                experience in Unreal Engine"
          id="gamedev"
        >
          <section className="max-w-screen-xl flex flex-col flex-wrap justify-around w-full">
            <div className="max-w-screen-xl pt-6 gap-12 px-8 justify-stretch w-full">
              <Slider {...settings}>
                <div>
                  <Image
                    alt="Unhinged Memories Poster"
                    src="/img/unhinged.jpg"
                  />
                </div>
                <div>
                  <Image alt="Meta" src="/img/meta.jpg" />
                </div>
              </Slider>
            </div>
          </section>
        </BlogItem>
        <BlogItem
          heading="Opening Scene"
          body="Environment created using Megascans in Unreal Engine This was the
            original opening scene for the game"
          id="openingscene"
        >
          <BlogVideo
            url="https://player.vimeo.com/video/1011856855?h=bf88984003&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;portrait=0&amp;byline=0&amp;title=0"
            id="OpeningVid"
            title="Opening"
          />
        </BlogItem>
        <BlogItem
          heading="Mixamo"
          body="I imported meshes from Mixamo and modified the animation
                Blueprint once it was imported to U.E. I also set up the
                lighting and camera angles for this level sequence trigger"
          id="mixamo"
        >
          <BlogVideo
            url="https://player.vimeo.com/video/1011857660?h=278df37f36&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;portrait=0&amp;byline=0&amp;title=0"
            id="mixamoVid"
            title="Mixamo Vid"
          />
        </BlogItem>
        <BlogItem
          heading="Niagara FX"
          body="The particles were using a Niagara effect template and I changed the material settings inside the Blueprint. For the reflection of the teleporting end gate, I changed the materials and set up a trigger box effect. Also take a peak for the floating Kimono's those were set up blue prints that are triggered to float towards the player to add a little haunting effect"
          id="niagara"
        >
          <BlogVideo
            url="https://player.vimeo.com/video/1011857448?h=50521c3bc0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;portrait=0&amp;byline=0&amp;title=0"
            id="NiagaraVid"
            title="Niagara FX"
          />
        </BlogItem>
        <BlogItem
          heading="Character Animation Blueprint"
          body="This part was fun, I imported an animal pack from the marketplace in Unreal. Then I imported it to Mixamo to give it the standard Animation Blueprint. After that I modified the animation Blueprint in Unreal"
          id="animbp"
        >
          <BlogVideo
            url="https://player.vimeo.com/video/1011857434?h=acd75e30f3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;portrait=0&amp;byline=0&amp;title=0"
            id="AnimBPVid"
            title="Anim BP"
          />
        </BlogItem>
        <BlogItem
          heading="Target Points"
          body="I set up trigger effects with Niagara's template and marked them with the target points as well as setting up the blueprint for the trigger effects"
          id="target"
        >
          <BlogVideo
            url="https://player.vimeo.com/video/1011857600?h=fc5b8149a0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;portrait=0&amp;byline=0&amp;title=0"
            id="TargetVid"
            title="Target Points"
          />
        </BlogItem>
        <BlogItem
          heading="Level Sequence- Jump Scares"
          body="I imported meshes from Mixamo and modified the animation blueprint once it was imported to U.E. I also set up the lighting and camera angles for this level sequence trigger"
          id="sequence"
        >
          <BlogVideo
            url="https://player.vimeo.com/video/1011857826?h=64ab5a2dfa&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;portrait=0&amp;byline=0&amp;title=0"
            id="sequenceVid"
            title="Level Sequence"
          />
        </BlogItem>
        <BlogItem
          heading="Door Mechanics"
          body={`I set up a key function event for the player to be able to hide from the "monster" using a door/hide function from using Unreal's blueprint. Here you can also have a glimpse sound effect of the monster looking for the main player. Spooky!`}
          id="sequence"
        >
          <BlogVideo
            url="https://player.vimeo.com/video/1011857842?h=8d458755a6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;portrait=0&amp;byline=0&amp;title=0"
            id="DoorVid"
            title="Door Mechanics"
          />
        </BlogItem>
      </BlogSection>
      <section className="relative flex flex-col items-center justify-center gap-4 bg-default-100 py-8">
        <div className="inline-block w-full text-center justify-center items-center">
          <h2 className="fullWidth font-bold text-2xl">Links</h2>
          <h3 className="text-ellipsis text-wrap text-default-700 pb-8">
            For more information about the game, here is a link to my
            ArtStation:
          </h3>
          <Link
            isExternal
            href="https://chloedlos.artstation.com"
            color="foreground"
            showAnchorIcon
            className="text-2xl font-bold"
          >
          <ArtStationIcon />&nbsp;ArtStation
          </Link>
        </div>
      </section>
    </section>
  );
}
