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
  lopunny
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
} from "@/components/icons";
import { OpportunityCard } from "@/components/OpportunityCard";
import { Key, useState } from "react";

import { AudioPlayer } from 'react-audio-play';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentKey, setCurrentKey] = useState("date_desc");

  const playList = [
    {
      name: 'Merry Go Round',
      writer: 'Chloe De Los Santos',
      img: 'img/ChlodevFav.png',
      src: 'MerryGoRound.mov',
      id: 1,
    },
  ]

  return (
    <section>
      <script src="https://player.vimeo.com/api/player.js"></script>
      <section className="relative flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-[calc(100vh-4rem)]">
        <div className="inline-block max-w-max text-center justify-center items-center z-10 max-w-screen-lg">
          <h1 className={title({ size: "lg" })}>Chloe&nbsp;</h1>
          <h1 className={`${title({ color: "violet", size: "lg" })}`}>
            De Los Santos
          </h1>
          <h2 className={subtitle()}>Technical Artist / Game Designer</h2>
        </div>
        <div className="inline-block max-w-max text-center justify-center items-center z-10 max-w-screen-lg w-fit">
          <AudioPlayer src="/MerryGoRound.wav" autoPlay volume={20} loop backgroundColor={"rgba(0,0,0,0)"} sliderColor="#2c2828ff" style={{ opacity:"25%", background: "rgba(0,0,0,0)", borderRadius: "15px", padding: "30px", display:"flex", width:"50rem", boxShadow:"none"}}/>
        </div>
        
        <div className="absolute background-yellow w-full h-full overflow-hidden">
          <AnimatePresence>
            <ParallaxBanner
              className="w-full h-full"
              layers={[
                background,
                lopunny,
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
          </AnimatePresence>
        </div>
      </section>
      <section className="relative flex flex-col items-center justify-center gap-4 pt-8 md:pt-10 pb-16 px-8">
        <div className="max-w-screen-xl w-full gap-4 flex flex-wrap flex-row">
          <PageCard title="Game Designer." />
          <PageCard title="Artist." />
          <PageCard title="Animator." />
        </div>
        <section>
          <div className="max-w-screen-lg flex flex-row flex-wrap pt-20 gap-12 px-8 justify-around">
            <Image
              className="shrink-0 grid justify-center content-center w-[270px] h-[300px]"
              alt="Chloe De Los Santos Promo"
              src="/img/chloePromo.jpg"
              isBlurred
            />
            <div className="flex-1 justify-center content-center gap-4">
              <h2 className={`${title({ size: "sm" })} py-4`}>
                Creative Game Designer and Artist
              </h2>
              <p className="py-4 text-default-600 text-lg">
                As a passionate game designer, animator, and 3D artist, I
                combine my love for video games with my creative expression. I
                thrive on learning new programs and tools to visually bring my
                unique ideas to life, offering engaging experiences for others
                to enjoy.
              </p>
            </div>
          </div>
        </section>
      </section>
    
      <section className="relative flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-[18rem]">
        <div className="absolute background-yellow w-full h-full overflow-hidden py-10">
          <ParallaxBanner
            className="w-full h-64"
            layers={[
              background,
              circle1,
              circle2,
              circle5,
              circle6,
              staticBottom,
              bottom1,
              bottom2,
              staticTop,
              top2,
            ]}
          />
        </div>
      </section>
      <section className="relative flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h2
            className={`${title({ size: "md" })} py-8 font-light text-default-400 uppercase`}
          >
            Unhinged Memories
          </h2>
        <section className="flex flex-row flex-wrap justify-around">

          <div className="max-w-screen-xl flex flex-row flex-wrap pt-6 gap-12 px-8 justify-around">
            <div className="flex-1 justify-center content-center gap-4">
              <h2 className={`${title({ size: "sm" })} py-4`}>
                Video Game Project
              </h2>
              <p className="py-4 text-default-600 text-lg">
                This project was my very first game developed using Unreal
                Engine 5.2. The project is a first-person horror game settled in
                Japan that time loops between the 1600&apos;s all the way to the
                1950&apos;s. As a student at Vertex Bootcamp I was able to create a
                horror game with levels and jump scares starting with little
                experience in Unreal Engine.
              </p>
            </div>
            <Image
              className="shrink-0 grid justify-center content-center w-[400px] h-[400px]"
              alt="Unhinged Memories Promo"
              src="/img/unhinged.jpg"
              isBlurred
              isZoomed
            />
            <div className="flex-1 justify-center content-center gap-4">
              <h2 className={`${title({ size: "sm" })} py-4`}></h2>
              <p className="py-4 text-default-600 text-lg">
                In addition, the game was both exciting and challenging as I
                have a passion for games and horror. With the help of my mentors
                at Vertex; Unhinged Memories was developed within a 4 month
                span.
              </p>
            </div>
          </div>
        </section>
        <section className="max-w-screen-xl flex flex-col flex-wrap justify-around py-8 w-full justify-center">
          <h3
            className={`text-2xl pt-8 font-normal text-default-600 uppercase text-center`}
          >
            Opening Scene
          </h3>
          <h4
            className={`${subtitle({})} font-light text-default-400 text-center max-w-screen-sm place-self-center pt-2 pb-8`}
          >
            Environment created using Megascans in Unreal Engine This was the
            original opening scene for the game
          </h4>
          <div className="w-full shrink grow">
            <iframe
              className="w-full aspect-video"
              frameBorder={"none"}
              src="https://player.vimeo.com/video/1011856855?h=bf88984003&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;portrait=0&amp;byline=0&amp;title=0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title="Opening"
            />
          </div>
        </section>
        <section className="max-w-screen-xl flex flex-col flex-wrap justify-around py-8 w-full justify-center">
          <h3
            className={`text-2xl pt-8 font-normal text-default-600 uppercase text-center`}
          >
            Video
          </h3>
          <div className="flex flex-row flex-wrap-reverse pt-8 gap-12 px-8 justify-around">
            <div className="flex-1 w-[50%] min-w-[350px]">
              <iframe
                className="w-full aspect-video"
                frameBorder={"none"}
                src="https://player.vimeo.com/video/1011857660?h=278df37f36&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;portrait=0&amp;byline=0&amp;title=0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="Opening"
              />
            </div>
            <div className="flex-1 justify-center content-center gap-4 min-w-[350px]">
              <h2
                className={`text-lg pt-8 font-normal text-default-900 uppercase text-center`}
              >
                Mixamo
              </h2>
              <p className="py-4 text-default-600 text-lg">
                I imported meshes from Mixamo and modified the animation
                Blueprint once it was imported to U.E. I also set up the
                lighting and camera angles for this level sequence trigger.
              </p>
            </div>
          </div>
          <div className="max-w-screen-xl flex flex-row flex-wrap pt-12 gap-12 px-8 justify-around">

            <div className="flex-1 justify-center content-center gap-4 min-w-[350px]">
              <h2
                className={`text-lg pt-8 font-normal text-default-900 uppercase text-center`}
              >
                Niagara FX
              </h2>
              <p className="py-4 text-default-600 text-lg">
              The particles were using a Niagara effect template and I changed the material settings inside the Blueprint. For the reflection of the teleporting end gate, I changed the materials and set up a trigger box effect. Also take a peak for the floating Kimono&apos;s those were set up blue prints that are triggered to float towards the player to add a little haunting effect. 
              </p>
            </div>
            <div className="flex-1 w-[50%] min-w-[350px]">
              <iframe
                className="w-full aspect-video"
                frameBorder={"none"}
                src="https://player.vimeo.com/video/1011857448?h=50521c3bc0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;portrait=0&amp;byline=0&amp;title=0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="Opening"
              />
            </div>
          </div>
          <div className="max-w-screen-xl flex flex-row flex-wrap-reverse pt-12 gap-12 px-8 justify-around">
          <div className="flex-1 w-[50%] min-w-[350px]">
              <iframe
                className="w-full aspect-video"
                frameBorder={"none"}
                src="https://player.vimeo.com/video/1011857434?h=acd75e30f3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;portrait=0&amp;byline=0&amp;title=0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="Opening"
              />
            </div>
            <div className="flex-1 justify-center content-center gap-4 min-w-[350px]">
              <h2
                className={`text-lg pt-8 font-normal text-default-900 uppercase text-center`}
              >
                Character Animation Blueprint
              </h2>
              <p className="py-4 text-default-600 text-lg">
              This part was fun, I imported an animal pack from the marketplace in Unreal. Then I imported it to Mixamo to give it the standard Animation Blueprint. After that I modified the animation Blueprint in Unreal.
              </p>
            </div>
          </div>
          <div className="max-w-screen-xl flex flex-row flex-wrap pt-12 gap-12 px-8 justify-around">
          <div className="flex-1 justify-center content-center gap-4 min-w-[350px]">
              <h2
                className={`text-lg pt-8 font-normal text-default-900 uppercase text-center`}
              >
                Target Points
              </h2>
              <p className="py-4 text-default-600 text-lg">
              I set up trigger effects with Niagara&apos;s template and marked them with the target points as well as setting up the blueprint for the trigger effects.
              </p>
            </div>
            <div className="flex-1 w-[50%] min-w-[350px]">
              <iframe
                className="w-full aspect-video"
                frameBorder={"none"}
                src="https://player.vimeo.com/video/1011857600?h=fc5b8149a0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;portrait=0&amp;byline=0&amp;title=0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="Opening"
              />
            </div>
          </div>
          <div className="max-w-screen-xl flex flex-row flex-wrap-reverse pt-12 gap-12 px-8 justify-around">
          <div className="flex-1 w-[50%] min-w-[350px]">
              <iframe
                className="w-full aspect-video"
                frameBorder={"none"}
                src="https://player.vimeo.com/video/1011857826?h=64ab5a2dfa&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;portrait=0&amp;byline=0&amp;title=0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="Opening"
              />
            </div>
            <div className="flex-1 justify-center content-center gap-4 min-w-[350px]">
              <h2
                className={`text-lg pt-8 font-normal text-default-900 uppercase text-center`}
              >
                Level Sequence- Jump Scares
              </h2>
              <p className="py-4 text-default-600 text-lg">
                I imported meshes from Mixamo and modified the animation
                Blueprint once it was imported to U.E. I also set up the
                lighting and camera angles for this level sequence trigger.
              </p>
            </div>
          </div>
          <div className="max-w-screen-xl flex flex-row flex-wrap pt-12 gap-12 px-8 justify-around">
          <div className="flex-1 justify-center content-center gap-4 min-w-[350px]">
              <h2
                className={`text-lg pt-8 font-normal text-default-900 uppercase text-center`}
              >
                Door Mechanics
              </h2>
              <p className="py-4 text-default-600 text-lg">
              I set up a key function event for the player to be able to hide from the &apos;monster&apos; using a door/hide function from using Unreal&apos;s blueprint. Here you can also have a glimpse sound effect of the monster looking for the main player. <i>Spooky!</i>
              </p>
            </div>
            <div className="flex-1 w-[50%] min-w-[350px]">
              <iframe
                className="w-full aspect-video"
                frameBorder={"none"}
                src="https://player.vimeo.com/video/1011857842?h=8d458755a6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;portrait=0&amp;byline=0&amp;title=0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="Opening"
              />
            </div>
          </div>
        </section>
      </section>
      <Divider></Divider>
    
      <section className="relative flex flex-col items-center justify-center gap-4 bg-default-100 py-8">
        <div className="inline-block w-full text-center justify-center items-center">
          <h2 className="fullWidth font-bold text-2xl">Links</h2>
          <h3 className="text-ellipsis text-wrap text-default-700 pb-8">
          For more information about the game, here is a link to my ArtStation:
          </h3>
          <Link
                isExternal
                href="https://chloedlos.artstation.com"
                color="foreground"
                showAnchorIcon
                className="text-2xl font-bold"
              >
                ArtStation
              </Link>{" "}
        </div>
      </section>
    </section>
  );
}
