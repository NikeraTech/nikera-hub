import { managedArticles } from "@/content/articles";
import type { Resource } from "./resource-types";
export type { Resource, ResourceSection, ResourceSubsection } from "./resource-types";

import { managedGuides } from '@/content/guides';

export const guides: Resource[] = managedGuides;

export const articles: Resource[] = managedArticles;

export const resources = [...guides, ...articles];
export const getResource = (kind: Resource["kind"], slug: string) =>
  resources.find((item) => item.kind === kind && item.slug === slug);
