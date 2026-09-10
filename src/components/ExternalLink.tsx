import type { AnchorHTMLAttributes } from "react";
import { newTabRel } from "@/lib/links";

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  hideNewTabLabel?: boolean;
};

export function ExternalLink({
  href,
  children,
  className,
  hideNewTabLabel = false,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel={newTabRel}
      {...props}
    >
      {children}
      {hideNewTabLabel ? null : (
        <span className="sr-only"> (opens in a new tab)</span>
      )}
    </a>
  );
}
