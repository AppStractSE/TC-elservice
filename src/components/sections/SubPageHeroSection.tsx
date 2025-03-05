import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  text?: string;
  image?: string;
  className?: string;
}

const SubPageHeroSection = ({ title, text, className }: Props) => {
  return (
    <section
      className={twMerge(
        className,
        "relative flex min-h-[70vh] items-end justify-start py-12 md:py-24",
      )}
    >
      <Image
        quality={100}
        fill
        alt={title}
        src="/hero-image.webp"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-primary/50"></div>
      <div className="max-page-width relative flex flex-col gap-8 px-4 text-background">
        <h2 className="text-balance text-lg font-medium md:text-xl lg:w-1/2">
          {title}
        </h2>
        <p className="text-4xl font-medium tracking-wide md:text-5xl">{text}</p>
      </div>
    </section>
  );
};

export default SubPageHeroSection;
