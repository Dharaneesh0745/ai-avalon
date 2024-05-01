import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import Image from "next/image";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-15 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            AI AVALON
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro odit
            iusto et suscipit quibusdam quaerat delectus quas, ducimus,
            consectetur omnis labore, mollitia placeat perspiciatis alias
            sapiente quisquam explicabo voluptates soluta.
          </p>
        </ItemLayout>

        {/* <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            5 <sub className="font-semibold text-base">Teams</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            10+ <sub className="font-semibold text-base">Achievements</sub>
          </p>
        </ItemLayout> */}

        {/* <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <Image
            width="1000"
            height="1000"
            className="w-full h-auto"
            src="/background/home-background.png"
            alt="avalon"
            loading="lazy"
          />
        </ItemLayout> */}

        {/* <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img className="w-full h-auto" src="" alt="avalon" loading="lazy" />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img className="w-full h-auto" src="" alt="avalon" loading="lazy" />
        </ItemLayout> */}

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-3 text-accent"}
        >
          <Link href="" target="_blank" className="w-full">
            <p className="font-semibold -mt-7 w-full text-center text-2xl sm:text-5xl">
              {" "}
              <sub className="font-semibold text-base">TECH TEAM</sub>
            </p>
            {/* <img
              className="w-full h-auto"
              src=""
              alt="f"
              loading="lazy"
            /> */}
          </Link>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-3 text-accent"}
        >
          <Link href="" target="_blank" className="w-full">
            <p className="font-semibold -mt-7 w-full text-center text-2xl sm:text-5xl">
              {" "}
              <sub className="font-semibold text-base">ORGANIZING TEAM</sub>
            </p>
            {/* <img
              className="w-full h-auto"
              src=""
              alt="f"
              loading="lazy"
            /> */}
          </Link>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-3 text-accent"}
        >
          <Link href="" target="_blank" className="w-full">
            <p className="font-semibold -mt-7 w-full text-center text-2xl sm:text-5xl">
              {" "}
              <sub className="font-semibold text-base">PROMOTION TEAM</sub>
            </p>
            {/* <img
              className="w-full h-auto"
              src=""
              alt="f"
              loading="lazy"
            /> */}
          </Link>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-3 text-accent"}
        >
          <Link href="" target="_blank" className="w-full">
            <p className="font-semibold -mt-7 w-full text-center text-2xl sm:text-5xl">
              {" "}
              <sub className="font-semibold text-base">MEDIA TEAM</sub>
            </p>
            {/* <img
              className="w-full h-auto"
              src=""
              alt="f"
              loading="lazy"
            /> */}
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
