/**
 * VeDevelopment — Site Configuration
 * Single source of truth for all content and configuration.
 * Edit this file to update content without touching component code.
 */

const SiteConfig = {

  brand: {
    name: "VeDevelopment",
    tagline: "Engineering systems. Shipping worlds.",
  },

  navigation: [
    { id: "works",        label: "Past Works"   },
    { id: "pricing",      label: "Pricing"      },
    { id: "achievements", label: "Achievements" },
    { id: "skills",       label: "Skills"       },
    { id: "contact",      label: "Contact"      },
  ],

  // ─── Past Works ──────────────────────────────────────────────────────────────
  works: [
    {
      id: "work-1",
      type: "youtube",
      src: "https://www.youtube.com/embed/6GXO5woU0Uw",
      thumbnail: null,
      title: "The Green Reclaim",
      description: "Eco-themed project built for an international game jam. Explores resource management and environmental systems.",
      price: null,
      estimatedTime: "3 hours (jam format)",
      tags: ["Game Jam", "Eco", "Unity"],
    },
    {
      id: "work-2",
      type: "youtube",
      src: "https://www.youtube.com/embed/wawin3iQBmQ",
      thumbnail: null,
      title: "Eco Smart Home",
      description: "Smart Home simulation built around the Climate Change theme for the regional stage of Koding Next 2025.",
      price: null,
      estimatedTime: "3 hours (jam format)",
      tags: ["Game Jam", "Smart Home", "Climate"],
    },
    {
      id: "work-3",
      type: "twitter",
      src: "https://x.com/vedevelopment_/status/2022252855156146397",
      thumbnail: null,
      title: "Personal FPS Project",
      description: "Long-term passion project built over two months in collaboration with an animator. Focused on engineering and system design.",
      price: null,
      estimatedTime: "Ongoing (~2 months)",
      tags: ["FPS", "Multiplayer", "Roblox"],
    },
    {
      id: "work-4",
      type: "youtube",
      src: "https://x.com/vedevelopment_/status/2022252855156146397",
      thumbnail: null,
      title: "Personal FPS Project",
      description: "Long-term passion project built over two months in collaboration with an animator. Focused on engineering and system design.",
      price: null,
      estimatedTime: "Ongoing (~2 months)",
      tags: ["FPS", "Multiplayer", "Roblox"],
    },
  ],

  // ─── Pricing ─────────────────────────────────────────────────────────────────
  pricing: [
    {
      tier: "Small",
      range: "$40 – $60",
      label: "Small Systems",
      accent: "#3b82f6",
      featured: false,
      deliverables: [
        "Standalone UI components",
        "Single-feature mechanics",
        "Minor codebase integrations",
      ],
      description: "Self-contained modules with limited scope. Ideal for isolated features or plug-in systems.",
    },
    {
      tier: "Medium",
      range: "$80 – $150",
      label: "Medium Projects",
      accent: "#60a5fa",
      featured: true,
      deliverables: [
        "Multi-component systems",
        "Inventory frameworks",
        "Combat & progression systems",
        "Internal integration",
      ],
      description: "Multi-component systems requiring internal integration and moderate architectural complexity.",
    },
    {
      tier: "Large",
      range: "$200+",
      label: "Large Systems",
      accent: "#93c5fd",
      featured: false,
      deliverables: [
        "Complete FPS frameworks",
        "Multiplayer-combat systems",
        "Scalable backend architectures",
        "Full documentation",
      ],
      description: "Production-grade infrastructure built from the ground up with full documentation.",
    },
  ],

  // ─── Achievements ─────────────────────────────────────────────────────────────
  achievements: {
    bio: [
      "I've been actively developing games since 2023 and have contributed to three shipped projects along with several smaller works. While my portfolio site isn't fully up to date, I regularly share my past work and prototypes through YouTube and social media.",
      "I'm also currently developing a long-term personal FPS project that I've been building for about two months in collaboration with an animator. It's an ongoing passion project focused on refining my engineering and system design skills.",
    ],
    highlights: [
      {
        year: "2025",
        title: "Koding Next — 3rd Place Nationally",
        detail: "Participated in an international coding competition organized by Koding Next. Fast-paced game jam format — built a complete project in 3 hours around the theme 'Eco – Smart Home.' Advanced past the regional stage and placed 3rd nationally. Regional theme: 'Climate Change.'",
        links: [
          { label: "Koding Next Website",   url: "https://www.kodingnext.com"           },
          { label: "Koding Next Instagram", url: "https://www.instagram.com/kodingnext/" },
        ],
      },
      {
        year: "2023–Present",
        title: "3 Shipped Projects",
        detail: "Active game developer with contributions to three shipped titles and several prototype works across multiple platforms.",
        links: [],
      },
    ],
    projects: [
      {
        label: "The Green Reclaim",
        url: "https://youtu.be/6GXO5woU0Uw?si=2K6hYIlw9t54UpMD",
        icon: "youtube",
      },
      {
        label: "Eco Smart Home",
        url: "https://youtu.be/wawin3iQBmQ",
        icon: "youtube",
      },
      {
        label: "FPS Personal Project",
        url: "https://x.com/vedevelopment_/status/2022252855156146397?s=20",
        icon: "twitter",
      },
    ],
    socialLinks: [
      { label: "YouTube Channel", url: "https://www.youtube.com/@Yoga-jk8pv", icon: "youtube" },
    ],
  },

  // ─── Skills ───────────────────────────────────────────────────────────────────
  skills: [
  {
    title: "Event-Driven Architecture",
    description: "Designing decoupled systems powered by custom signals and controlled event flow.",
    notes: "High-performance dispatch, reentrancy-aware design"
  },
  {
    title: "Object-Oriented Programming",
    description: "Building scalable, maintainable systems using metatables, encapsulation, and modular class patterns.",
    notes: "Structured architecture over procedural chaos"
  },
  {
    title: "Roblox Lua (Luau)",
    description: "Advanced scripting in Roblox Studio with strict typing, optimization directives, and production-ready modules.",
    notes: "--!strict · --!optimize 2"
  },
  {
    title: "Optimization",
    description: "Profiling and refining hot paths to reduce overhead, allocations, and execution cost.",
    notes: "Performance-first mindset"
  },
  {
    title: "Code Review & Rework",
    description: "Analyzing existing systems to improve structure, readability, performance, and scalability.",
    notes: "Refactor > rewrite blindly"
  }
],

  // ─── Contact ──────────────────────────────────────────────────────────────────
  contact: [
    {
      platform: "Discord",
      handle:   "armenie54",
      url:      "https://discord.com/users/897026279243669504",
      icon:     "discord",
      cta:      "Message me",
    },
    {
      platform: "Discord Server",
      handle:   "Join the server",
      url:      "https://discord.gg/XMYMRKcd3g",
      icon:     "discord-server",
      cta:      "Join",
    },
    {
      platform: "Instagram",
      handle:   "@vedevelopment",
      url:      "https://www.instagram.com/vedevelopment/",
      icon:     "instagram",
      cta:      "Follow",
    },
    {
      platform: "X (Twitter)",
      handle:   "@vedevelopment_",
      url:      "https://x.com/vedevelopment_",
      icon:     "twitter",
      cta:      "Follow",
    },
    {
      platform: "TikTok",
      handle:   "@vedevelopment",
      url:      "https://www.tiktok.com/@vedevelopment",
      icon:     "tiktok",
      cta:      "Follow",
    },
  ],

};

// Freeze config to prevent accidental mutation at runtime
Object.freeze(SiteConfig);
