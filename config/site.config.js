/**
 * VeDevelopment: Site Configuration
 * Single source of truth for all content. Edit here, not in components.
 */

const SiteConfig = {

  brand: {
    name: "Ve",
    role: "Game systems developer",
    intro: "I build game systems in Roblox Luau: combat, inventory, physics, and state management. Developing since 2023, with three shipped projects and a set of open-source libraries.",
  },

  navigation: [
    { id: "works",        label: "Past Work"    },
    { id: "code",         label: "Code"         },
    { id: "achievements", label: "Achievements" },
    { id: "skills",       label: "Skills"       },
    { id: "pricing",      label: "Pricing"      },
    { id: "contact",      label: "Contact"      },
  ],

  // ─── Work ────────────────────────────────────────────────────────────────
  // Entries without a `description` render as a compact title + link line.
  works: [
    {
      title: "Personal FPS Project",
      meta: "Roblox · Multiplayer · ~6 months",
      description:
        "Passion project built over six months in collaboration with an animator. " +
        "Focused on engineering and system design.",
      url: "https://x.com/vedevelopment_/status/2022252855156146397",
      linkLabel: "View on X",
    },
    {
      title: "Combat System",
      meta: "Roblox",
      description:
        "Full combat system integrated with inventory, built as a cohesive " +
        "gameplay framework rather than isolated mechanics.",
      url: "https://youtu.be/PEWaYf-5wYw",
      linkLabel: "Watch on YouTube",
    },
    {
      title: "Third Person Shooter",
      meta: "Roblox",
      description:
        "Third-person shooter framework covering aiming, weapon handling, and " +
        "camera control.",
      url: "https://youtu.be/aZ4EtJ2WSCg",
      linkLabel: "Watch on YouTube",
    },
    {
      title: "Third Person Shooter (2)",
      meta: "Roblox",
      url: "https://youtu.be/DcpLoNWZ-5I",
      linkLabel: "Watch on YouTube",
    },
    {
      title: "Resource System + Daily Quests",
      meta: "Roblox",
      url: "https://youtu.be/bcvWZNeZu5o",
      linkLabel: "Watch on YouTube",
    },
    {
      title: "Chained Dialog System",
      meta: "Roblox",
      url: "https://youtu.be/sKwb0R1DjfM",
      linkLabel: "Watch on YouTube",
    },
    {
      title: "Inventory System",
      meta: "Roblox",
      url: "https://youtu.be/Nj0GtjUyVi8",
      linkLabel: "Watch on YouTube",
    },
    {
      title: "Slot System",
      meta: "Roblox",
      url: "https://youtu.be/SS9oDhThI5Y",
      linkLabel: "Watch on YouTube",
    },
    {
      title: "Nav Mesh Generator",
      meta: "Roblox",
      url: "https://x.com/vedevelopment_/status/2064675728743108766",
      linkLabel: "View on X",
    },
    {
      title: "Grid-Based Pathfinding",
      meta: "Roblox",
      url: "https://youtu.be/AHQl6nVzBMI",
      linkLabel: "Watch on YouTube",
    },
    {
      title: "Lighting Transitioning",
      meta: "Roblox",
      url: "https://youtu.be/cqAPvfmpK1c",
      linkLabel: "Watch on YouTube",
    },
    {
      title: "Boulder Throw Skill",
      meta: "Roblox",
      url: "https://youtu.be/W-HlY-oPwOw",
      linkLabel: "Watch on YouTube",
    },
    {
      title: "Block Blast",
      meta: "Roblox",
      description: "Small game project.",
      url: "https://youtu.be/8M3rytWja6Q",
      linkLabel: "Watch on YouTube",
    },
    {
      title: "Runtime Pathfinding",
      meta: "Roblox",
      url: "https://youtu.be/LA6gbU4LG1s",
      linkLabel: "Watch on YouTube",
    },
    {
      title: "Combat System (2)",
      meta: "Roblox",
      url: "https://youtu.be/nrrxGI7yZNA",
      linkLabel: "Watch on YouTube",
    },
    {
      title: "Zombie Game",
      meta: "Roblox · Commission",
      description: "Basic zombie survival commission.",
      url: "https://youtu.be/yUKy0tm2me0",
      linkLabel: "Watch on YouTube",
    },
    {
      title: "Eco Smart Home",
      meta: "Roblox · Game jam · 3 hours",
      description:
        "Smart home simulation built around the Climate Change theme for the " +
        "regional stage of Koding Next 2025.",
      url: "https://youtu.be/wawin3iQBmQ",
      linkLabel: "Watch on YouTube",
    },
    {
      title: "The Green Reclaim",
      meta: "Roblox · Game jam · 3 hours",
      description:
        "Eco-themed project built for an international game jam. Explores " +
        "resource management and environmental systems.",
      url: "https://youtu.be/6GXO5woU0Uw",
      linkLabel: "Watch on YouTube",
    },
  ],

  // ─── Code ────────────────────────────────────────────────────────────────
  code: {
    description:
      "I maintain a collection of open-source Luau libraries covering physics, " +
      "signals, state management, spatial queries, pooling, and animation.",
    url: "https://github.com/Vel136",
    linkLabel: "github.com/Vel136",
  },

  // ─── Achievements ────────────────────────────────────────────────────────
  achievements: [
    {
      year: "2025",
      title: "Koding Next: 3rd Place Nationally",
      detail:
        "International coding competition in a game jam format: a complete project " +
        "built in 3 hours around the theme \"Eco – Smart Home.\" Advanced past the " +
        "regional stage (theme: \"Climate Change\") and placed 3rd nationally.",
      url: "https://www.kodingnext.com",
      linkLabel: "kodingnext.com",
    },
    {
      year: "2023 to present",
      title: "Three shipped projects",
      detail:
        "Contributions to three shipped titles alongside several prototypes across " +
        "multiple platforms.",
      url: null,
      linkLabel: null,
    },
  ],

  // ─── Skills ──────────────────────────────────────────────────────────────
  skills: [
    {
      title: "Roblox Lua (Luau)",
      description:
        "Advanced scripting with strict typing, optimization directives, and " +
        "production-ready modules.",
    },
    {
      title: "Event-driven architecture",
      description:
        "Decoupled systems built on custom signals with controlled event flow and " +
        "reentrancy-aware design.",
    },
    {
      title: "Object-oriented programming",
      description:
        "Scalable, maintainable systems using metatables, encapsulation, and " +
        "modular class patterns.",
    },
    {
      title: "Optimization",
      description:
        "Profiling and refining hot paths to reduce overhead, allocations, and " +
        "execution cost.",
    },
    {
      title: "Code review & rework",
      description:
        "Analyzing existing systems to improve structure, readability, performance, " +
        "and scalability.",
    },
  ],

  // ─── Pricing ─────────────────────────────────────────────────────────────
  pricing: {
    rows: [
      {
        tier:  "Small",
        price: "$40 to $60",
        scope: "Standalone UI components, single-feature mechanics, minor integrations",
      },
      {
        tier:  "Medium",
        price: "$80 to $150",
        scope: "Multi-component systems (inventory, combat, progression) with internal integration",
      },
      {
        tier:  "Large",
        price: "$200+",
        scope: "Complete frameworks, multiplayer combat, backend architecture, full documentation",
      },
    ],
    note:
      "Pricing depends on the specification agreed before work begins. " +
      "Payment terms are flexible and worked out per project.",
  },

  // ─── Contact ─────────────────────────────────────────────────────────────
  contact: [
    { platform: "Discord",        handle: "armenie54",        url: "https://discord.com/users/897026279243669504" },
    { platform: "Discord server", handle: "Join the server",  url: "https://discord.gg/XMYMRKcd3g"               },
    { platform: "GitHub",         handle: "Vel136",           url: "https://github.com/Vel136"                   },
    { platform: "YouTube",        handle: "@Yoga-jk8pv",      url: "https://www.youtube.com/@Yoga-jk8pv"         },
    { platform: "X (Twitter)",    handle: "@vedevelopment_",  url: "https://x.com/vedevelopment_"                },
    { platform: "Instagram",      handle: "@vedevelopment",   url: "https://www.instagram.com/vedevelopment/"    },
    { platform: "TikTok",         handle: "@vedevelopment",   url: "https://www.tiktok.com/@vedevelopment"       },
  ],

};

Object.freeze(SiteConfig);
