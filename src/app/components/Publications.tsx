import React from "react";
import { Badge } from "../../components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Section } from "../../components/ui/section";
import type { RESUME_DATA } from "../../data/resume-data";

type PublicationTags = readonly string[];
type PublicationAuthors = readonly string[];

interface PublicationLinkProps {
  title: string;
  link?: string;
}

/**
 * Renders publication title with optional link and status indicator
 */
function PublicationLink({
  title,
  link,
}: PublicationLinkProps) {
  if (!link) {
    return <span>{title}</span>;
  }

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:underline"
        aria-label={`${title} publication (opens in new tab)`}
      >
        {title}
        <span
          className="size-1 rounded-full bg-green-500"
          title="Active publication indicator"
          aria-hidden="true"
        />
      </a>
      <div
        className="hidden font-mono text-xs underline print:visible"
        aria-hidden="true"
      >
        {link.replace("https://", "").replace("www.", "").replace("/", "")}
      </div>
    </>
  );
}

interface PublicationTagsProps {
  tags: PublicationTags;
}

/**
 * Renders a list of technology tags used in the publication
 */
function PublicationTags({
  tags,
}: PublicationTagsProps) {
  if (tags.length === 0) return null;

  return (
    <ul
      className="mt-2 flex list-none flex-wrap gap-1 p-0"
      aria-label="Technologies used"
    >
      {tags.map((tag) => (
        <li key={tag}>
          <Badge
            className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
            variant="secondary"
          >
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface PublicationAuthorsProps {
  authors: PublicationAuthors;
}

function PublicationAuthors({
  authors,
}: PublicationAuthorsProps) {
  if (authors.length === 0) return null;

  const short =
    authors.length > 2
      ? (
        <>
          {authors[0]}, {authors[1]},{" "}
          <span
            className="underline decoration-dotted decoration-2 cursor-help"
            title={authors.join(", ")}
          >
            et al.
          </span>
        </>
      )
      : authors.join(", ");

  return (
    <div
      className="mt-1 text-xs font-mono italic text-muted-foreground print:text-[9px]"
      title={authors.length > 2 ? undefined : authors.join(", ")}
    >
      {short}
    </div>
  );
}

interface PublicationCardProps {
  title: string;
  description: React.ReactNode;
  tags: PublicationTags;
  link?: string;
  authors: PublicationAuthors;
  publisher?: string;
}

/**
 * Card component displaying publication information
 */
function PublicationCard({
  title,
  description,
  tags,
  link,
  authors,
  publisher,
}: PublicationCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden border p-3">
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="text-base">
            <PublicationLink title={title} link={link} />
          </CardTitle>
          <PublicationAuthors authors={authors} />
          <CardDescription
            className="text-pretty font-mono text-xs print:text-[10px]"
            aria-label="Publication description"
          >
            {description}
          </CardDescription>
          {publisher && (
            <div className="mt-1 text-xs font-mono italic text-muted-foreground print:text-[9px]">
              {publisher}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex">
        <PublicationTags tags={tags} />
      </CardContent>
    </Card>
  );
}

interface PublicationsProps {
  publications: (typeof RESUME_DATA)["publications"];
}

/**
 * Section component displaying all side publications
 */
export function Publications({
  publications,
}: PublicationsProps) {
  return (
    <Section className="scroll-mb-16 print:space-y-4">
      <h2 className="text-xl font-bold" id="side-publications">
        Publications
      </h2>
      <div
        className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2"
        role="feed"
        aria-labelledby="side-publications"
      >
        {publications.map((publication) => (
          <article
            key={publication.title}
            className="h-full" // Added h-full here
          >
            <PublicationCard
              title={publication.title}
              description={publication.description}
              tags={publication.techStack}
              link={publication.link?.href}
              authors={publication.authors}
              publisher={publication.publisher}
            />
          </article>
        ))}
      </div>
    </Section>
  );
}
