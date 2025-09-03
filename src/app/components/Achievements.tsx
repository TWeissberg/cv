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

type AchievementTags = readonly string[];

interface AchievementLinkProps {
  title: string;
  link?: string;
}

/**
 * Renders achievement title with optional link and status indicator
 */
function AchievementLink({
  title,
  link,
}: AchievementLinkProps) {
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
        aria-label={`${title} achievement (opens in new tab)`}
      >
        {title}
        <span
          className="size-1 rounded-full bg-green-500"
          title="Active achievement indicator"
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

interface AchievementTagsProps {
  tags: AchievementTags;
}

/**
 * Renders a list of technology tags used in the achievement
 */
function AchievementTags({
  tags,
}: AchievementTagsProps) {
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

interface AchievementCardProps {
  title: string;
  description: string;
  tags: AchievementTags;
  link?: string;
  date?: string; // Add date field
}

/**
 * Card component displaying achievement information
 */
function AchievementCard({
  title,
  description,
  tags,
  link,
  date,
}: AchievementCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden border p-3 relative">
      <CardHeader>
        <div className="space-y-1">
          <div className="flex justify-between items-start">
            <CardTitle className="text-base">
              <AchievementLink title={title} link={link} />
            </CardTitle>
            {date && (
              <span className="text-sm font-mono text-muted-foreground absolute right-3 top-3 print:text-[10px]">
                {date}
              </span>
            )}
          </div>
          <CardDescription
            className="text-pretty font-mono text-xs print:text-[10px]"
            aria-label="Achievement description"
          >
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex">
        <AchievementTags tags={tags} />
      </CardContent>
    </Card>
  );
}

interface AchievementsProps {
  achievements: (typeof RESUME_DATA)["achievements"];
}

/**
 * Section component displaying all side achievements
 */
export function Achievements({
  achievements,
}: AchievementsProps) {
  if (!achievements || achievements.length === 0) {
    return null;
  }

  return (
    <Section className="scroll-mb-16 print:space-y-4">
      <h2 className="text-xl font-bold" id="awards-and-achievements">
        Awards and Achievements
      </h2>
      <div
        className="space-y-3"
        role="feed"
        aria-labelledby="awards-and-achievements"
      >
        {achievements.map((achievement) => (
          <article
            key={achievement.title}
            className="h-full"
          >
            <AchievementCard
              title={achievement.title}
              description={achievement.description}
              tags={achievement.techStack}
              link={achievement.link?.href}
              date={achievement.date} // Pass date to AchievementCard
            />
          </article>
        ))}
      </div>
    </Section>
  );
}
