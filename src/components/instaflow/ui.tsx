import clsx from "clsx";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

type ButtonLikeProps = {
  children: ReactNode;
  variant?: "default" | "primary" | "ghost";
  size?: "default" | "lg";
  className?: string;
};

type ButtonProps =
  | (ButtonLikeProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (ButtonLikeProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string });

export function Button({ children, variant = "default", size = "default", className, href, ...props }: ButtonProps) {
  const classes = clsx(
    "instaflow-btn",
    variant === "primary" && "instaflow-btn-primary",
    variant === "ghost" && "instaflow-btn-ghost",
    size === "lg" && "instaflow-btn-lg",
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

export function Card({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx("instaflow-card instaflow-card-hover", className)} {...props}>
      {children}
    </div>
  );
}

export function Sticker({ className, children, style, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx("instaflow-sticker", className)} style={style} {...props}>
      {children}
    </div>
  );
}

export function Tag({
  className,
  accent = false,
  children,
  ...props
}: HTMLAttributes<HTMLSpanElement> & { accent?: boolean }) {
  return (
    <span className={clsx("instaflow-tag", accent && "instaflow-tag-accent", className)} {...props}>
      {children}
    </span>
  );
}
