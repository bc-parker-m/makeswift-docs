import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";


type CardProps = {
  className?: string;
  image?: string;
  alt: string;
  heading: string;
  description: string;
  layout?: "vertical" | "horizontal";
  link: { href: string; target?: "_blank" | "_self" };
  linkText: string;
};



export function Card({
  className,
  image,
  alt,
  heading,
  description,
  layout,
  link,
  linkText,
}: CardProps) {
  return (
    <div className={className}>
            {/* Image */}
      {image && (
        <div
          className={clsx(
            "relative",
            layout === "vertical" ? "w-full h-48" : "w-1/3 h-auto"
          )}
        >
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="">
        <h3>{heading}</h3>
        <p>{description}</p>
        <Link href={link.href} target={link.target}>
          {linkText}
        </Link>
      </div>
    </div>
  );
}