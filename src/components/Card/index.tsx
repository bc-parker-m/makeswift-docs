import Link from "next/link";
import Image from "next/image";


type CardProps = {
  className?: string;
  image?: string;
  alt: string;
  heading: string;
  description: string;
  link: { href: string; target?: "_blank" | "_self" };
  linkText: string;
};



export function Card({
  className,
  image,
  alt,
  heading,
  description,
  link,
  linkText,
}: CardProps) {
  return (
    <div className={className}>
      {image && <Image src={image} alt={alt} objectFit="cover" fill />}
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