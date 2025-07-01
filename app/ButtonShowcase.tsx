import React from "react";
import { Button } from "./Button";
import { twMerge } from "tailwind-merge";

const ButtonShowcase = () => {
  const getStateClasses = (variant, state) => {
    switch (variant) {
      case "primary":
        if (state === "hover") return "bg-primary-40";
        if (state === "focused") return "ring-2 ring-primary-30";
        if (state === "pressed") return "bg-primary-50";
        break;
      case "secondary":
        if (state === "hover") return "bg-neutral-5";
        if (state === "focused") return "ring-2 ring-neutral-20";
        if (state === "pressed") return "bg-neutral-10";
        break;
      case "tertiary":
        if (state === "hover") return "text-primary-50 underline";
        if (state === "focused") return "ring-2 ring-primary-30";
        if (state === "pressed") return "text-primary-60 underline";
        break;
      default:
        return "";
    }
    return "";
  };

  return (
    <div className="p-8 bg-neutral-5 min-h-screen">
      <h1 className="text-title-xlarge text-neutral-60 mb-8">
        Button Component Showcase
      </h1>

      {["primary", "secondary", "tertiary"].map((variant) => (
        <React.Fragment key={variant}>
          <h2 className="text-title-large text-neutral-50 mb-4 capitalize">
            {variant} Buttons
          </h2>
          <div className="grid grid-cols-5 gap-4 mb-12">
            <div className="flex flex-col items-center">
              <span className="text-body-base text-neutral-50 mb-2">
                Default
              </span>
              <Button variant={variant}>button</Button>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-body-base text-neutral-50 mb-2">Hover</span>
              <Button
                variant={variant}
                className={twMerge(
                  getStateClasses(variant, "hover"),

                  variant === "secondary"
                    ? "border border-neutral-30 bg-neutral-0 text-neutral-60"
                    : "",
                  variant === "tertiary"
                    ? "bg-transparent text-neutral-60"
                    : "",
                )}
              >
                button
              </Button>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-body-base text-neutral-50 mb-2">
                Focused
              </span>
              <Button
                variant={variant}
                className={twMerge(
                  getStateClasses(variant, "focused"),

                  variant === "primary" ? "bg-primary-5 text-neutral-0" : "",
                  variant === "secondary"
                    ? "bg-neutral-0 text-neutral-60 border border-neutral-30"
                    : "",
                  variant === "tertiary"
                    ? "bg-transparent text-neutral-60"
                    : "",
                )}
              >
                button
              </Button>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-body-base text-neutral-50 mb-2">
                Pressed
              </span>
              <Button
                variant={variant}
                className={twMerge(
                  getStateClasses(variant, "pressed"),

                  variant === "secondary"
                    ? "border border-neutral-30 bg-neutral-0 text-neutral-60"
                    : "",
                  variant === "tertiary"
                    ? "bg-transparent text-neutral-60"
                    : "",
                )}
              >
                button
              </Button>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-body-base text-neutral-50 mb-2">
                Disabled
              </span>
              <Button variant={variant} disabled>
                button
              </Button>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ButtonShowcase;
