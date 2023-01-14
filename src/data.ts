import { Article } from "./types";

export const articles: Article[] = [
  {
    title: "Why Sustainable Software is Essential for the Future of IT",
    excerpt:
      "As the world becomes increasingly reliant on technology, the importance of sustainable software practices cannot be overstated. Sustainable software, or software that is designed and developed with long-term viability in mind, is essential for the future of IT.",
    category: "Green IT",
    date: new Date(Date.now()),
    author: "Deniz Abdurrahmani",
    authorJobTitle: "Software Developer",
    authorImgUrl: "https://i.imgur.com/4q6qVOq.png",
    originalImgUrl: "https://i.imgur.com/zsPoApL.png",
    compressedImgUrl: "https://i.imgur.com/35M5YPN.png",
    imageDescription: "A beautiful field surrounded with wind turbines",
    gradient: { color1: "#0D3F56", color2: "#FFB561", color3: "#F0CDC7" },
    isMain: true,
  },
  {
    title:
      "Inclusive Design in Software Development: Making Technology Accessible for All",
    excerpt:
      "Creating accessible software is not just a legal requirement but also a moral obligation. By designing software that is usable by people with disabilities, we can ensure that everyone has equal access to the digital world. From better user experience to increased reach, incorporating accessibility in software development brings many benefits.",
    category: "Accessibility",
    date: new Date(Date.now()),
    author: "Deniz Abdurrahmani",
    authorJobTitle: "Software Developer",
    authorImgUrl: "https://i.imgur.com/4q6qVOq.png",
    originalImgUrl: "https://i.imgur.com/ihgRtaf.png",
    compressedImgUrl: "https://i.imgur.com/kOshpEX.png",
    imageDescription:
      "Children using tablets while sitting on a classroom floor",
    gradient: { color1: "#0F466C", color2: "#756EA0", color3: "#B99D86" },
  },
  {
    title:
      "Midjourney AI Image Generation: Unlocking New Possibilities in Web Design",
    excerpt:
      "AI image generation allows you to create dynamic and personalized images in real-time, improving the user experience and pushing the boundaries of web design.",
    category: "Artificial Intelligence",
    date: new Date(Date.now()),
    author: "Deniz Abdurrahmani",
    authorJobTitle: "Software Developer",
    authorImgUrl: "https://i.imgur.com/4q6qVOq.png",
    originalImgUrl: "https://i.imgur.com/yTBbgEg.png",
    compressedImgUrl: "https://i.imgur.com/GJXQePB.png",
    imageDescription: "AI generated futuristic architecture",
    gradient: { color1: "#DCE0D6", color2: "#9DAA81", color3: "#13232A" },
  },
];
