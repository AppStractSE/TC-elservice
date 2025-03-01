import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Props {
  image?: string;
  title: string;
  text: string;
  rtl?: boolean;
  className?: string;
  button?: {
    href: string;
    text: string;
  };
}
const TwoPaneSection = ({
  image,
  title,
  text,
  rtl,
  button,
  className,
}: Props) => {
  return (
    <section className={className}>
      <div className="max-page-width grid grid-cols-1 items-center justify-between gap-8 px-4 py-12 md:gap-12 lg:gap-32 md:py-24 lg:grid-cols-2">
        <div className={twMerge("flex flex-col gap-6 md:gap-8")}>
          <h3 className="text-3xl font-semibold tracking-wide sm:text-3xl md:text-4xl">
            {title}
          </h3>
          <p className="whitespace-pre-line text-base md:text-lg">{text}</p>
          {button && (
            <Link
              href={button.href}
              className="flex w-fit items-center gap-2 transition-all duration-200 ease-in-out hover:gap-3 hover:text-cyan-500"
            >
              <ArrowRight size={18} />
              <p className="text-base font-medium underline underline-offset-4">
                {button.text}
              </p>
            </Link>
          )}
        </div>
        {image && (
          <div className={twMerge(rtl ? "lg:order-[-1]" : "")}>
            <Image
              quality={100}
              src={image}
              alt=""
              height={1080}
              width={1920}
              className={twMerge(
                "aspect-[1.618/1] h-auto w-full max-w-full rounded-xl object-cover object-center",
              )}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default TwoPaneSection;
