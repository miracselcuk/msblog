import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedPost = (props: {
  title: string;
  description: string;
  date: string;
  image: string;
  link: string;
}) => {
  return (
    <div className="space-y-8 p-8 bg-color1">
      <div>
        <h2 className="text-main text-lg font-bold">Featured</h2>
      </div>
      <div>
        <h1 className="font-extrabold text-3xl">
          <Link href={props.link}>{props.title}</Link>
        </h1>
      </div>
      <div>
        <h2 className="text-sm">written by ms | {props.date}</h2>
      </div>
      <div>
        <h2 className="">{props.description}</h2>
      </div>
      <div>
        <h2 className="text-main">
          <Link href={props.link}>Read More</Link>
        </h2>
      </div>
      <div>
        <Link href={props.link}>
          <Image
            className="rounded-lg hover:scale-105 transition-all hover:duration-1000"
            src={props.image}
            alt={`${props.title}-image`}
            width={750}
            height={380}
          />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPost;
