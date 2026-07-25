// Add YouTube video/short IDs here to feature them on the Videos page.
// Find the ID in the YouTube URL, e.g. youtube.com/watch?v=XXXXXXXXXXX -> XXXXXXXXXXX
export interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
}

export const videos: VideoItem[] = [
  {
    id: "v1",
    youtubeId: "dQw4w9WgXcQ",
    title: "Resin Name Board — Start to Finish",
    description: "Watch a resin name board come to life, from mixing gold pigment to the final polish.",
  },
  {
    id: "v2",
    youtubeId: "dQw4w9WgXcQ",
    title: "How We Achieve That Marble Swirl",
    description: "A behind-the-scenes look at our signature purple-and-gold marbling technique.",
  },
  {
    id: "v3",
    youtubeId: "dQw4w9WgXcQ",
    title: "Packing Your Order With Care",
    description: "Every piece is cushioned and boxed by hand before it heads to the courier.",
  },
  {
    id: "v4",
    youtubeId: "dQw4w9WgXcQ",
    title: "Wedding Keepsake Unboxing",
    description: "A happy customer unboxes her custom bride & groom resin keepsake.",
  },
];

// Replace the placeholder IDs above with your real YouTube Shorts video IDs from
// https://www.youtube.com/@pondyresinart whenever you're ready to go live.
