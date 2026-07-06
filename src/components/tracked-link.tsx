"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { type AnalyticsBaseContext, trackContentCtaClick } from "@/lib/analytics";

type TrackedLinkProps = AnalyticsBaseContext & {
  href: string;
  className?: string;
  children: ReactNode;
  label: string;
  target?: string;
  rel?: string;
};

export function TrackedLink({
  href,
  className,
  children,
  label,
  pageType,
  pageSlug,
  pageTitle,
  pageCategory,
  section,
  target,
  rel,
}: TrackedLinkProps) {
  if (target || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={className}
        target={target}
        rel={rel}
        onClick={() =>
          trackContentCtaClick({
            pageType,
            pageSlug,
            pageTitle,
            pageCategory,
            section,
            ctaLabel: label,
            destination: href,
          })
        }
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      onClick={() =>
        trackContentCtaClick({
          pageType,
          pageSlug,
          pageTitle,
          pageCategory,
          section,
          ctaLabel: label,
          destination: href,
        })
      }
    >
      {children}
    </Link>
  );
}
