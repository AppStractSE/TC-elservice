import Button from "@/components/buttons/Button";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  text: string;
  className?: string;
  button?: {
    href: string;
    text: string;
  };
}
const CenterSection = ({ title, text, button, className }: Props) => {
  return (
    <section className={className}>
      <div
        className={twMerge(
          "max-page-width flex flex-col items-center justify-center gap-8 px-4 py-12 md:gap-12 md:py-24 lg:max-w-screen-lg",
        )}
      >
        <div className={twMerge("flex flex-col gap-6 md:gap-8")}>
          <h2 className="text-center text-3xl font-medium tracking-wide md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="whitespace-pre-line text-balance text-center text-base md:text-lg">
            {text}
          </p>
        </div>
        {button && (
          <div className="flex items-center">
            <Button
              href={button.href}
              text={button.text}
              className="min-w-fit bg-primary px-8 text-background hover:bg-primary/90 md:text-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default CenterSection;
