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
    { id: "libraries",    label: "Libraries"    },
    { id: "pricing",      label: "Pricing"      },
    { id: "achievements", label: "Achievements" },
    { id: "skills",       label: "Skills"       },
    { id: "tos",          label: "Terms"        },
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

  // ─── Libraries ───────────────────────────────────────────────────────────────
  libraries: [
    {
      name: "Vetra",
      tagline: "Physics-accurate projectile simulation",
      description: "Kinematic bullet trajectories using exact formulas instead of frame-by-frame updates. Supports penetration, bounce, drag models, Magnus effect, and parallel physics across Actors.",
      url: "https://github.com/Vel136/Vetra",
      tags: ["Physics", "Ballistics", "Parallel"],
    },
    {
      name: "VeSignal",
      tagline: "Fast, type-safe signals for Roblox",
      description: "High-performance Luau signal library with connection pooling, priority ordering, async-aware firing, and UDTF-derived type signatures for full IDE inference.",
      url: "https://github.com/Vel136/VeSignal",
      tags: ["Signals", "Type-safe", "Async"],
    },
    {
      name: "Ryxen",
      tagline: "Reactive state store for Luau",
      description: "Manages nested state through dot-path keys with computed values, batched updates, undo/redo history, middleware, and schema validation. Depends on VeSignal.",
      url: "https://github.com/Vel136/Ryxen",
      tags: ["State", "Reactive", "Middleware"],
    },
    {
      name: "Quantix",
      tagline: "Stat modifier pipeline",
      description: "Typed, phase-ordered stat modifier library for numeric and table-based statistics. Eight deterministic evaluation phases ensure modifiers stack exactly as intended.",
      url: "https://github.com/Vel136/Quantix",
      tags: ["Stats", "Modifiers", "Pipeline"],
    },
    {
      name: "Fluix",
      tagline: "Adaptive object pooling",
      description: "Tracks acquisition demand with an exponential moving average to pre-warm and shrink pools to match real usage. Hot/cold tiers, cross-pool borrowing, and zero-allocation critical path.",
      url: "https://github.com/Vel136/Fluix",
      tags: ["Pooling", "Performance", "Memory"],
    },
    {
      name: "Resonix",
      tagline: "Physics-based acoustic simulation",
      description: "Beer-Lambert occlusion, frequency-dependent material absorption, and network replication in one library. 13 materials, 14 preset sound profiles, and a three-tier accuracy system.",
      url: "https://github.com/Vel136/Resonix",
      tags: ["Audio", "Physics", "Networking"],
    },
    {
      name: "Alloy",
      tagline: "Zero-allocation hashing",
      description: "Maps integers, floats, Vector2s, Vector3s, and number tuples to unsigned 32-bit integers. Implements boost::hash_combine with MurmurHash3 finalization. Safe for hot-path code.",
      url: "https://github.com/Vel136/Alloy",
      tags: ["Hashing", "Performance", "Math"],
    },
    {
      name: "Grove",
      tagline: "Production-grade loose octree",
      description: "Full 3D spatial queries in Roblox Luau. Supports radius, box, and nearest-neighbor queries with node pooling and stack-based traversal to keep GC pressure minimal.",
      url: "https://github.com/Vel136/Grove",
      tags: ["Spatial", "3D", "Performance"],
    },
    {
      name: "Meadow",
      tagline: "Production-grade loose quadtree",
      description: "2D spatial queries on Roblox's XZ plane. Loose bounds, node pooling, O(1) back-references, and iterative traversal. QueryRadius, QueryBox, and k-nearest neighbors.",
      url: "https://github.com/Vel136/Meadow",
      tags: ["Spatial", "2D", "Performance"],
    },
    {
      name: "Stratix",
      tagline: "Hierarchical state machine framework",
      description: "Models complex behavior as a tree of named states with guarded transitions, entry/exit callbacks, parallel regions, history tracking, and an event queue.",
      url: "https://github.com/Vel136/Stratix",
      tags: ["State Machine", "Events", "Hierarchy"],
    },
    {
      name: "Motix",
      tagline: "Multi-layer animation controller",
      description: "Handles multi-layer animation blending, predicate-driven state machine transitions, priority-based exclusive groups, and full network replication via MotixNet.",
      url: "https://github.com/Vel136/Motix",
      tags: ["Animation", "Networking", "Blending"],
    },
  ],

  // ─── Terms of Service ────────────────────────────────────────────────────────
  tos: [
    {
      number: "1",
      title: "Scope of Work & Documentation",
      items: [
        "The client must provide a written, structured specification of all requested systems before development begins.",
        "References to other games (e.g., \"like Blade Ball\") are not accepted as valid specifications. Describe systems in functional terms.",
        "Each requested system must be listed clearly with features and expected behavior.",
        "Any feature not explicitly written in the approved specification is not included in the commission.",
        "After approval, the specification becomes the final contract scope.",
      ],
    },
    {
      number: "2",
      title: "Pricing & Payments",
      items: [
        "Pricing is based strictly on the approved specification.",
        "A non-refundable upfront payment (percentage agreed beforehand) is required before work begins.",
        "Additional features requested after approval are treated as new paid work and quoted separately.",
        "Final files are delivered only after full payment is received.",
      ],
    },
    {
      number: "3",
      title: "Revisions & Changes",
      items: [
        "Minor revisions are allowed only if they remain within the original approved scope.",
        "Major changes, redesigns, or new mechanics are considered scope expansion and require additional payment.",
        "Vague requests such as \"make it better\" will not be acted upon without written clarification.",
      ],
    },
    {
      number: "4",
      title: "Communication Requirements",
      items: [
        "The client must communicate clearly and respond to questions regarding specifications.",
        "Delays caused by missing information from the client may extend the delivery timeline.",
        "Verbal or casual chat messages do not override the approved written specification.",
      ],
    },
    {
      number: "5",
      title: "Delivery & Acceptance",
      items: [
        "Work is considered complete once all items in the approved specification are implemented.",
        "The client has a limited review period (agreed beforehand) to report bugs related to listed features.",
        "Requests outside the original specification after delivery are treated as new commissions.",
      ],
    },
    {
      number: "6",
      title: "Ownership & Usage",
      items: [
        "Ownership transfer occurs only after full payment.",
        "Until payment is completed, all work remains the developer's property.",
        "The developer reserves the right to showcase the work in a portfolio unless otherwise agreed in writing.",
      ],
    },
    {
      number: "7",
      title: "Refund Policy",
      items: [
        "Upfront payments are non-refundable once development has started.",
        "If the client cancels the project, completed work may be delivered at the developer's discretion.",
      ],
    },
    {
      number: "8",
      title: "Professional Conduct",
      items: [
        "Respectful communication is required from both parties.",
        "Spam tagging, rushing, or pressuring does not accelerate development.",
      ],
    },
    {
      number: "9",
      title: "Agreement",
      items: [
        "By commissioning work, the client confirms they have read and agreed to these terms. No work begins until the specification and payment terms are approved.",
      ],
    },
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
