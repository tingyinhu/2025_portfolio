const ProjectContent = {
  CasscycleProject: {
    category: "CaseStudy",
    liveDemoLink:
      "https://www.figma.com/design/kwz51pPvTSW2zquxPZyriV/casscycle?node-id=682-6713&t=PVIQ6qgypI1gQgBB-1",
    sections: [
      // Introduction
      {
        id: "section1",
        title: "Introduction",
        layout: "full-width",
        content: [
          {
            type: "text",
            content: [
              [
                {
                  text: "This project focuses on improving secondhand shopping experiences by addressing user pain points like ",
                  className: "text-black",
                },
                {
                  text: "slow seller responses, trust issues, and inefficient search filters.",
                  className: "text-orange font-medium",
                },
              ],
              [
                {
                  text: "Using insights from surveys and user research, the goal is to design a user-friendly platform that fosters trust, streamlines searches, and enhances overall user satisfaction.",
                  className: "text-black",
                },
              ],
            ],
          },
        ],
      },
      // The Challenges
      {
        id: "section2",
        title: "The Challenges",
        layout: "full-width",
        content: [
          {
            type: "subtitle",
            content: "Problems Identified",
            bgColor: "bg-yellow-bg",
          },
          {
            type: "video",
            url: "/Projects/CassCycle/CassCycleProblemsIdentifiedVideo.mp4",
          },
          {
            type: "text",
            content: [
              [
                {
                  text: "To better understand user behaviours and challenges on secondhand shopping platforms, I conducted a survey that gathered insights from ",
                  className: "text-black",
                },
                {
                  text: "50 participants.",
                  className: "text-orange font-medium",
                },
              ],
              [
                {
                  text: "The survey explored ",
                  className: "text-black",
                },
                {
                  text: "user demographics, shopping preferences, and key challenges.",
                  className: "text-orange font-medium",
                },
                {
                  text: " These responses provide valuable input for identifying problems and shaping user-focused solutions.",
                  className: "text-black",
                },
              ],
            ],
          },
          {
            type: "subtitle",
            content: "User Demographics",
            bgColor: "bg-yellow-bg",
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "image",
                url: "/Projects/CassCycle/CassCycleSurveyAgeDistribution.webp",
                alt: "Age Distribution chart",
                className: "w-full rounded",
              },
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Insight",
                      className: "text-white bg-orange p-2 rounded-full",
                    },
                  ],
                  [
                    {
                      text: "Majority of respondents fall into the 20s group, suggesting a targeted design focus for this demographic.",
                      className: "text-black",
                    },
                  ],
                ],
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "image",
                url: "/Projects/CassCycle/CassCycleSurveyLocationBreakdown.webp",
                alt: "Location Breakdown",
                className: "w-full rounded",
              },
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Insight",
                      className: "text-white bg-orange p-2 rounded-full",
                    },
                  ],
                  [
                    {
                      text: "Respondents were concentrated in North America, reflecting user preferences from those regions.",
                      className: "text-black",
                    },
                  ],
                ],
              },
            ],
          },
          {
            type: "subtitle",
            content: "Shopping preferences",
            bgColor: "bg-yellow-bg",
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "image",
                url: "/Projects/CassCycle/CassCycleSurveyPlatformPopularity.webp",
                alt: "Platform Popularity",
                className: "w-full rounded",
              },
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Insight",
                      className: "text-white bg-orange p-2 rounded-full",
                    },
                  ],
                  [
                    {
                      text: "Facebook Marketplace leads with 20 users.",
                      className: "text-black",
                    },
                  ],
                ],
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "image",
                url: "/Projects/CassCycle/CassCycleSurveyEaseOfUse.webp",
                alt: "Survey Ease Of Use",
                className: "w-full rounded",
              },
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Insight",
                      className: "text-white bg-orange p-2 rounded-full",
                    },
                  ],
                  [
                    {
                      text: "The average ease-of-use rating for Facebook Marketplace is 3.5. Other platforms, like Vinted and Depop, scored higher in usability with averages of 4.75 and 4.33, respectively.",
                      className: "text-black",
                    },
                  ],
                  [
                    {
                      text: "Smaller platforms like Craigslist, ThredUp, and Grailed have fewer users but high ratings (4-5), suggesting niche satisfaction.",
                      className: "text-black",
                    },
                  ],
                ],
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "image",
                url: "/Projects/CassCycle/CassCycleSurveyPlatformPreferences.webp",
                alt: "Platform Preferences",
                className: "w-full rounded",
              },
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Insight",
                      className: "text-white bg-orange p-2 rounded-full",
                    },
                  ],
                  [
                    {
                      text: "Buyers prefer direct interaction with sellers, valuing transparency, detailed communication about items, and flexibility in price negotiation.",
                      className: "text-black",
                    },
                  ],
                ],
              },
            ],
          },
          {
            type: "subtitle",
            content: "Key challenges",
            bgColor: "bg-yellow-bg",
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "image",
                url: "/Projects/CassCycle/CassCycleSurveyTopUserChallenges.webp",
                alt: "Top User Challenges",
                className: "w-full rounded",
              },
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Insight",
                      className: "text-white bg-orange p-2 rounded-full",
                    },
                  ],
                  [
                    {
                      text: "A majority of respondents highlighted key challenges, including a lack of trust between buyers and sellers, and time-wasting issues related to finding items and communication.",
                      className: "text-black",
                    },
                  ],
                ],
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "image",
                url: "/Projects/CassCycle/CassCycleSurveyImprovementSuggestions.webp",
                alt: "Top User Challenges",
                className: "w-full rounded",
              },
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Insight",
                      className: "text-white bg-orange p-2 rounded-full",
                    },
                  ],
                  [
                    {
                      text: "Enhance trust with verified users, improve search precision, upgrade product clarity, simplify navigation, and ensure fairness with better moderation.",
                      className: "text-black",
                    },
                  ],
                ],
              },
            ],
          },
        ],
      },
      // User Persona
      {
        id: "section3",
        title: "User Persona",
        layout: "full-width",
        content: [
          {
            type: "tabbed-media",
            tabs: [
              {
                title: "Buyer Persona",
                type: "image",
                url: "/Projects/CassCycle/CassCycleBuyerPersona.webp",
                alt: "Buyer Persona",
              },
              {
                title: "Seller Persona",
                type: "image",
                url: "/Projects/CassCycle/CassCycleSellerPersona.webp",
                alt: "Seller Persona",
              },
            ],
          },
        ],
      },
      // User Scenario
      {
        id: "section4",
        title: "User Scenario",
        layout: "full-width",
        content: [
          {
            type: "tabbed-media",
            tabs: [
              {
                title: "Buyer Scenario",
                type: "image",
                url: "/Projects/CassCycle/CassCycleBuyerScenario.webp",
                alt: "Buyer Scenario",
              },
              {
                title: "Seller Scenario",
                type: "image",
                url: "/Projects/CassCycle/CassCycleSellerScenario.webp",
                alt: "Seller Scenario",
              },
            ],
          },
        ],
      },
      // Empathy Map
      {
        id: "section5",
        title: "Empathy Map",
        layout: "full-width",
        content: [
          {
            type: "tabbed-media",
            tabs: [
              {
                title: "Buyer Empathy Map",
                type: "image",
                url: "/Projects/CassCycle/CassCycleBuyerEmpathyMap.webp",
                alt: "Buyer Empathy Map",
              },
              {
                title: "Seller Empathy Map",
                type: "image",
                url: "/Projects/CassCycle/CassCycleSellerEmpathyMap.webp",
                alt: "Seller Empathy Map",
              },
            ],
          },
        ],
      },
      // Journey Map
      {
        id: "section6",
        title: "Journey Map",
        layout: "full-width",
        content: [
          {
            type: "tabbed-media",
            tabs: [
              {
                title: "Buyer Journey Map",
                type: "image",
                url: "/Projects/CassCycle/CassCycleBuyerJourneyMap.webp",
                alt: "Buyer Journey Map",
              },
              {
                title: "Seller Journey Map",
                type: "image",
                url: "/Projects/CassCycle/CassCycleSellerJourneyMap.webp",
                alt: "Seller Journey Map",
              },
            ],
          },
        ],
      },
      // User flow
      {
        id: "section7",
        title: "User flow",
        layout: "full-width",
        content: [
          {
            type: "image",
            url: "/Projects/CassCycle/CassCycleUserFlow.webp",
            alt: "User Flow",
          },
        ],
      },
      // Solutions
      {
        id: "section8",
        title: "Solutions",
        layout: "full-width",
        content: [
          // Buyer Side
          {
            type: "subtitle",
            content: "Buyer Side",
            bgColor: "bg-yellow-bg",
          },
          {
            type: "video",
            url: "/Projects/CassCycle/CassCycleSellerPrototype.mp4",
          },
          {
            layout: "three-column",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "1. Difficulty Finding Products",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "Buyers often struggle with inefficient search filters, making it hard to locate specific items. This led me to design more flexible and detailed filtering options.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "text",
                content: [
                  [
                    {
                      text: "2. Building Trust",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "Buyers hesitate to make purchases if product details are unclear. I focused on creating a  comprehensive product descriptions.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "text",
                content: [
                  [
                    {
                      text: "3. Wishlist for Decision-Making",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "Many buyers want to compare products before deciding. The wishlist feature was added to help organize and evaluate options easily.",
                      className: "text-black",
                    },
                  ],
                ],
              },
            ],
          },
          // Seller Side
          {
            type: "subtitle",
            content: "Seller Side",
            bgColor: "bg-yellow-bg",
          },
          {
            type: "video",
            url: "/Projects/CassCycle/CassCycleBuyerPrototype.mp4",
          },
          {
            layout: "three-column",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "1. Efficient Listing Process",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "Sellers find listing items time-consuming. To address this, I broke the process into 3 clear steps to make it less overwhelming.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "text",
                content: [
                  [
                    {
                      text: "2. Communication with Buyers",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "Slow responses harm sales. The design emphasizes a streamlined chat system to encourage faster and more effective communication.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "text",
                content: [
                  [
                    {
                      text: "3. Trust in Transactions",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "Buyers and sellers need assurance during transactions. I included a sale confirmation feature to ensure both parties are on the same page about details like payment and delivery.",
                      className: "text-black",
                    },
                  ],
                ],
              },
            ],
          },
        ],
      },
      // User Testing
      {
        id: "section9",
        title: "User Testing",
        layout: "full-width",
        content: [
          {
            type: "video",
            url: "/Projects/CassCycle/CassCycleUsertestingVideo.mp4",
          },
          {
            type: "text",
            content: [
              [
                {
                  text: "This user testing involved ",
                  className: "text-black",
                },
                {
                  text: "5 participants",
                  className: "text-orange font-medium",
                },
                {
                  text: ", including 2 in-person and 3 remote testers.",
                  className: "text-black",
                },
              ],
              [
                {
                  text: "The testing was conducted using Google Forms for remote participants, with additional observation and interaction for the in-person participants. Each test took 15-20 minutes to complete.",
                  className: "text-black",
                },
              ],
            ],
          },
          // Key findings and Feedback
          {
            type: "subtitle",
            content: "Key findings and Feedback",
            bgColor: "bg-yellow-bg",
          },
          // Buyer Side
          {
            type: "table",
            headers: ["Buyer Side", "Challenges Identified", "Insight"],
            rows: [
              [
                [{ text: "Filter", className: "text-orange" }],
                [
                  {
                    text: "🟡 Gender should be prioritized as a top-level filter.",
                    className: "text-black",
                  },
                  {
                    text: "🟡 The third-level category selection caused hesitation.",
                    className: "text-black",
                  },
                  {
                    text: "🟡 Some participants confused where the filter tab is.",
                    className: "text-black",
                  },
                ],
                [
                  {
                    text: "Highlighting the filter placement and optimizing the hierarchy can enhance usability.",
                    className: "text-black",
                  },
                ],
              ],
              [
                [{ text: "Wishlist", className: "text-orange" }],
                [
                  {
                    text: "🟡 Some participants were unclear about the wishlist's purpose, whether it was for saving items or for comparing products.",
                    className: "text-black",
                  },
                  {
                    text: "🟡 Price-based comparison was noted as helpful when viewing multiple items together.",
                    className: "text-black",
                  },
                ],
                [
                  {
                    text: "Improve clarity of the wishlist’s function and enhance its support for comparing items.",
                    className: "text-black",
                  },
                ],
              ],
              [
                [{ text: "Product Descriptions", className: "text-orange" }],
                [
                  {
                    text: "🟡 Descriptions were perceived as cluttered and better suited to a bullet-point format.",
                    className: "text-black",
                  },
                ],
                [
                  {
                    text: "Descriptions should be displayed in a line-by-line format, not as button-like elements.",
                    className: "text-black",
                  },
                ],
              ],
            ],
          },
          // Seller Side
          {
            type: "table",
            headers: ["Seller Side", "Challenges Identified", "Insight"],
            rows: [
              [
                [{ text: "3 Steps Listing Process", className: "text-orange" }],
                [
                  {
                    text: "🟡 Users wanted to see their completed listings right away to confirm the details.",
                    className: "text-black",
                  },
                ],
                [
                  {
                    text: "Enhancing post-listing visibility can make the process smoother.",
                    className: "text-black",
                  },
                ],
              ],
              [
                [{ text: "Confirmation function", className: "text-orange" }],
                [{ text: "🟡 Overall, it is good.", className: "text-black" }],
                [
                  {
                    text: "Most users believe that it greatly enhances communication and fosters trust.",
                    className: "text-black",
                  },
                ],
              ],
            ],
          },
          // General Feedback
          {
            type: "table",
            headers: ["General Feedback", ""],
            rows: [
              [
                [{ text: "Smooth and Intuitive", className: "text-orange" }],
                [
                  {
                    text: "🟡 The user interface was praised for being colourful, simple, and smooth.",
                    className: "text-black",
                  },
                  {
                    text: "🟡 Listing products felt more seamless than browsing or filtering.",
                    className: "text-black",
                  },
                ],
              ],
              [
                [{ text: "Suggestions", className: "text-orange" }],
                [
                  {
                    text: "🟡 Include clearer labels for filters and refine the user journey for wishlist interactions.",
                    className: "text-black",
                  },
                  {
                    text: "🟡 Missing functionality for negotiable pricing between buyer and seller.",
                    className: "text-black",
                  },
                ],
              ],
            ],
          },
        ],
      },
      // Branding design
      {
        id: "section10",
        title: "Branding design",
        layout: "full-width",
        content: [
          {
            type: "tabbed-media",
            tabs: [
              {
                title: "Concept",
                url: "/Projects/CassCycle/CassCycleNaming.webp",
                type: "image",
                alt: "Brand Concept",
              },
              {
                title: "Moodboard",
                url: "/Projects/CassCycle/CassCycleMoodboard.webp",
                type: "image",
                alt: "Moodboard",
              },
              {
                title: "Logo",
                url: "/Projects/CassCycle/CassCycleLogo.webp",
                type: "image",
                alt: "Logo",
              },
              {
                title: "Color",
                type: "image",
                url: "/Projects/CassCycle/CassCycleColor.webp",
                alt: "Color",
              },
              {
                title: "Tote Bag",
                type: "image",
                url: "/Projects/CassCycle/CassCycleToteBag.webp",
                alt: "Tote Bag",
              },
            ],
          },
        ],
      },
    ],
  },
  FoodloopProject: {
    category: "CaseStudy",
    liveDemoLink:
      "https://www.figma.com/proto/0o0xNxnTfWmPdj2z2iTUTG/FoodLoop?node-id=63-4108&t=r1q1zzrD50SmXPLL-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=63%3A4108",
    sections: [
      // Introduction
      {
        id: "section1",
        title: "Introduction",
        layout: "full-width",
        content: [
          {
            type: "text",
            content: [
              [
                {
                  text: "FoodLoop tackles the problem of good food being thrown away just because it’s close to its expiry date — something that hurts both the planet and business profits.",
                  className: "text-black",
                },
              ],
              [
                {
                  text: "The platform helps stores track soon-to-expire items, automatically apply smart discounts or bundles using AI, and donate what’s left to charities.",
                  className: "text-black",
                },
              ],
            ],
          },
        ],
      },
      // Challenges
      {
        id: "section2",
        title: "Challenges",
        layout: "full-width",
        content: [
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "image",
                url: "/Projects/FoodLoop/FoodLoopProblem1.webp",
                alt: "Age Distribution chart",
                className: "w-full rounded",
              },
              {
                type: "text",
                content: [
                  [
                    {
                      text: "1. Too Much Food Waste",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "Tons of near-expiry food are thrown away daily — wasting resources and harming the environment.",
                      className: "text-black",
                    },
                  ],
                ],
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "image",
                url: "/Projects/FoodLoop/FoodLoopProblem2.webp",
                alt: "Age Distribution chart",
                className: "w-full rounded",
              },
              {
                type: "text",
                content: [
                  [
                    {
                      text: "2. Profit vs. Waste",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "Lowering prices too much can hurt profits. Businesses struggle to reduce waste without losing money.",
                      className: "text-black",
                    },
                  ],
                ],
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "image",
                url: "/Projects/FoodLoop/FoodLoopProblem3.webp",
                alt: "Age Distribution chart",
                className: "w-full rounded",
              },
              {
                type: "text",
                content: [
                  [
                    {
                      text: "3. Customer Doubts",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "Shoppers often avoid near-expiry food, worried about freshness or quality — even if it’s safe and discounted.",
                      className: "text-black",
                    },
                  ],
                ],
              },
            ],
          },
        ],
      },

      // Solutions
      {
        id: "section3",
        title: "Solutions",
        layout: "full-width",
        content: [
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "image",
                url: "/Projects/FoodLoop/FoodLoopSolution1.webp",
                alt: "Age Distribution chart",
                className: "w-full rounded",
              },
              {
                type: "text",
                content: [
                  [
                    {
                      text: "1. Manage Food Before It Goes to Waste",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "The platform tracks food close to expiring, applies automatic discounts, and donates leftovers to charities just in time.",
                      className: "text-black",
                    },
                  ],
                ],
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "image",
                url: "/Projects/FoodLoop/FoodLoopSolution2.webp",
                alt: "Age Distribution chart",
                className: "w-full rounded",
              },
              {
                type: "text",
                content: [
                  [
                    {
                      text: "2. Make More, Waste Less",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "Smart pricing and AI-powered bundles help businesses sell more without losing profits — even when items are close to expiration.",
                      className: "text-black",
                    },
                  ],
                ],
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "image",
                url: "/Projects/FoodLoop/FoodLoopSolution3.webp",
                alt: "Age Distribution chart",
                className: "w-full rounded",
              },
              {
                type: "text",
                content: [
                  [
                    {
                      text: "3. Stay in Control",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "A simple inventory system shows what’s in stock, what’s expiring, and lets stores adjust things easily based on real conditions.",
                      className: "text-black",
                    },
                  ],
                ],
              },
            ],
          },
        ],
      },

      // Story Arc
      {
        id: "section4",
        title: "Story Arc",
        layout: "full-width",
        content: [
          {
            type: "image",
            url: "/Projects/FoodLoop/FoodLoopStoryArc.webp",
            alt: "Story Arc",
          },
        ],
      },

      // Before & After
      {
        id: "section5",
        title: "Before & After",
        layout: "full-width",
        content: [
          {
            type: "image",
            url: "/Projects/FoodLoop/FoodLoopBefore&After.webp",
            alt: "Before & After",
          },
        ],
      },

      // User Insight
      {
        id: "section6",
        title: "User Insight",
        layout: "full-width",
        content: [
          {
            type: "image",
            url: "/Projects/FoodLoop/FoodLoopUserInsight.webp",
            alt: "User Insight",
          },
        ],
      },
      // Design
      {
        id: "section7",
        title: "Design",
        layout: "full-width",
        content: [
          {
            type: "subtitle",
            content: "Assets",
            bgColor: "bg-yellow-bg",
          },
          {
            layout: "full-width",
            content: [
              {
                type: "figma",
                url: "https://www.figma.com/design/0o0xNxnTfWmPdj2z2iTUTG/FoodLoop?node-id=1-2&t=OLs4DNtjxucQAB79-1",
              },
            ],
          },
          {
            type: "subtitle",
            content: "Views",
            bgColor: "bg-yellow-bg",
          },
          {
            layout: "full-width",
            content: [
              {
                type: "figma",
                url: "https://www.figma.com/design/0o0xNxnTfWmPdj2z2iTUTG/FoodLoop?node-id=0-1&t=OLs4DNtjxucQAB79-1",
              },
            ],
          },
        ],
      },
    ],
  },
  MobinDonutProject: {
    category: "Branding",
    liveDemoLink: "https://mobindonut.hutingyin.com/",
    sections: [
      // Introduction
      {
        id: "section1",
        title: "Introduction",
        layout: "full-width",
        content: [
          {
            type: "text",
            content: [
              [
                {
                  text: "Mobin Donut is a creative branding project combining ",
                  className: "text-black",
                },
                {
                  text: "visual identity design with an interactive web experience.",
                  className: "text-orange font-medium",
                },
              ],
              [
                {
                  text: "I extended the project beyond branding, developing a responsive web prototype, including a 3D model viewer and dynamic cart functionality.",
                  className: "text-black",
                },
              ],
            ],
          },
        ],
      },
      // Design Process
      {
        id: "section2",
        title: "Branding Process",
        layout: "full-width",
        content: [
          {
            type: "subtitle",
            content: "Initial Brand Research",
            bgColor: "bg-orange-bg",
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Brand Overview",
                      className: "text-orange font-medium",
                    },
                  ],
                ],
              },
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Mobin Donut is a bakery where people connect over donuts, celebrating simple moments of joy and shared experiences.",
                      className: "text-black",
                    },
                  ],
                ],
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Target Audience",
                      className: "text-orange font-medium",
                    },
                  ],
                ],
              },
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Stylish young adults (25–40) and design-savvy families (30–50) who value premium quality, locally sourced ingredients, and minimalist aesthetics.",
                      className: "text-black",
                    },
                  ],
                ],
              },
            ],
          },
          {
            type: "subtitle",
            content: "Design Development",
            bgColor: "bg-orange-bg",
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Logo Sketch",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "Initially explored simple initials like ‘mo’ and ‘md’, later refining with donut shapes to reflect the brand’s essence.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/MobinDonut/MobinDonutLogoSketch.webp",
                alt: "Mobin Donut Logo Sketch",
                className: "w-full rounded",
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Final Logo Direction",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "Chose a logo with interconnected letters to symbolize elegance and community.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/MobinDonut/MobinDonutLogoDirection.webp",
                alt: "Mobin Donut Logo Direction",
                className: "w-full rounded",
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Mood Board",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "These visuals emphasize community, quality, and joy.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/MobinDonut/MobinDonutMoodboard.webp",
                alt: "Mobin Donut Moodboard",
                className: "w-full rounded",
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Colour Palette",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "Primary Colours: Lotion and Beige for a clean, welcoming backdrop.",
                      className: "text-black",
                    },
                  ],
                  [
                    {
                      text: "Accent Colours: Peru for warmth and Burnt Sienna for vibrancy.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/MobinDonut/MobinDonutColour.webp",
                alt: "Mobin Donut Colour",
                className: "w-full rounded",
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Typefaces",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "Helvetica: Clean and readable, available in Regular and Bold.",
                      className: "text-black",
                    },
                  ],
                  [
                    {
                      text: "Beloved Script: Adds grace and a personal touch.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/MobinDonut/MobinDonutTypefaces.webp",
                alt: "Mobin Donut Typefaces",
                className: "w-full rounded",
              },
            ],
          },
          {
            type: "subtitle",
            content: "Brand Essentials",
            bgColor: "bg-orange-bg",
          },
          {
            type: "tabbed-media",
            tabs: [
              {
                title: "Business Card",
                type: "image",
                url: "/Projects/MobinDonut/MobinDonutBusinessCard.webp",
                alt: "Business Card",
              },
              {
                title: "Packaging",
                type: "image",
                url: "/Projects/MobinDonut/MobinDonutPackaging.webp",
                alt: "Packaging",
              },
              {
                title: "Tagline Animation",
                type: "image",
                url: "/Projects/MobinDonut/MobinDonutLogoTagline.gif",
                alt: "Tagline Animation",
              },
            ],
          },
          {
            type: "subtitle",
            content: "Marketing collateral",
            bgColor: "bg-orange-bg",
          },
          {
            type: "tabbed-media",
            tabs: [
              {
                title: "Poster",
                type: "image",
                url: "/Projects/MobinDonut/MobinDonutPoster.webp",
                alt: "Poster",
              },
              {
                title: "Email Campaign",
                type: "image",
                url: "/Projects/MobinDonut/MobinDonutEmailCampaign.webp",
                alt: "Email Campaign",
              },
            ],
          },
        ],
      },
      // Web Development
      {
        id: "section3",
        title: "Web Development",
        layout: "full-width",
        content: [
          {
            type: "subtitle",
            content: "UI Design",
            bgColor: "bg-orange-bg",
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Grid layout",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "Implemented a 12-column grid for desktop and 4-column grid for mobile, ensuring responsiveness.",
                      className: "text-black",
                    },
                  ],
                  [
                    {
                      text: "Curves for Cohesion",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "Rounded shapes in key sections for playful elegance.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "figma",
                url: "https://www.figma.com/design/Ang9C8dy1Qyv7CR6xAn3Z2/Mobin-Donut?node-id=0-1",
              },
            ],
          },
          {
            type: "subtitle",
            content: "Efficient Design Handoff",
            bgColor: "bg-orange-bg",
          },
          {
            type: "text",
            content: [
              [
                {
                  text: "To ensure a smooth and effective handoff from design to development, I applied a structured approach that prioritized consistency, scalability, and ease of integration. This approach was based on:",
                  className: "text-black",
                },
              ],
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "1. Atomic Design System",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "I broke the design into small, reusable components—atoms (fonts/colors), molecules (buttons/inputs), and organisms (headers/footers).",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/MobinDonut/MobinDonutAtomicDesignSystem.webp",
                alt: "Age Distribution chart",
                className: "w-full rounded",
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "2. 4-Point System",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "I applied a 4-point system to all spacing, fonts, and layout. Everything was based on multiples of 4, ensuring a consistent and balanced design that was easy to implement.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/MobinDonut/MobinDonut4PointSystem.webp",
                alt: "Age Distribution chart",
                className: "w-full rounded",
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "3. Using CDNs",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "To simplify integration, I used CDNs like Tailwind CSS, FontAwesome, and Model Viewer. This allowed developers to link directly to the tools they needed, speeding up the process and avoiding local file dependencies.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/MobinDonut/MobinDonutUsingCDNs.webp",
                alt: "Age Distribution chart",
                className: "w-full rounded",
              },
            ],
          },
        ],
      },
      // Deliverable
      {
        id: "section4",
        title: "Deliverable",
        layout: "full-width",
        content: [
          {
            type: "video",
            url: "/Projects/MobinDonut/MobinDonutWeb.mp4",
          },
        ],
      },
    ],
  },
  EateryProject: {
    category: "WebDesign",
    liveDemoLink: "https://www.eatery.hutingyin.com/",
    sections: [
      // Introduction
      {
        id: "section1",
        title: "Introduction",
        layout: "full-width",
        content: [
          {
            type: "text",
            content: [
              [
                {
                  text: "Eatery's website seamlessly combines design and functionality, ",
                  className: "text-black",
                },
                {
                  text: "with a responsive grid-based layout for a smooth experience across all devices. ",
                  className: "text-orange font-medium",
                },
                {
                  text: "JavaScript-powered interactive maps and animations enhance engagement, making the site both dynamic and user-friendly.",
                  className: "text-black",
                },
              ],
            ],
          },
        ],
      },
      // Design Process
      {
        id: "section2",
        title: "Design Process",
        layout: "full-width",
        content: [
          {
            type: "subtitle",
            content: "Wireframe",
            bgColor: "bg-green-bg",
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Grid layout",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "The design uses a 12-column (1280px) for desktop, 12-column (768px) for tablet, and 4-column grid (320px) for mobile.",
                      className: "text-black",
                    },
                  ],
                  [
                    {
                      text: "Then, I worked on making the design unique and easy to remember. I included donut shapes to show what we’re about.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "figma",
                url: "https://www.figma.com/file/djD6dAqdL4rhf13kYhOU30/Eatery-Restaurant?node-id=0-1",
              },
            ],
          },
          {
            type: "subtitle",
            content: "JavaScript Library",
            bgColor: "bg-green-bg",
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "The project integrates 6 JavaScript plugins:",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "text",
                content: [
                  [
                    {
                      text: "1. jQuery",
                      className: "text-black",
                    },
                  ],
                  [
                    {
                      text: "2. jQuery Validation (Form validation)",
                      className: "text-black",
                    },
                  ],
                  [
                    {
                      text: "3. Flickity (Carousel)",
                      className: "text-black",
                    },
                  ],
                  [
                    {
                      text: "4. ScrollReveal (Animations)",
                      className: "text-black",
                    },
                  ],
                  [
                    {
                      text: "5. Leaflet (Map)",
                      className: "text-black",
                    },
                  ],
                  [
                    {
                      text: "6. Masonry (Grid layout)",
                      className: "text-black",
                    },
                  ],
                ],
              },
            ],
          },
          {
            type: "subtitle",
            content: "Project Planning",
            bgColor: "bg-green-bg",
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Typography: ",
                      className: "text-orange font-medium",
                    },
                    {
                      text: "Playfair Display (title), Inter (body).",
                      className: "text-black",
                    },
                  ],
                  [
                    {
                      text: "Colour Palette: ",
                      className: "text-orange font-medium",
                    },
                    {
                      text: "Salmon (#E27D60), Black (#333333), White (#FFFFFF).",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "code",
                language: "html",
                code: `
:root {
    --title-font: 'Playfair Display', sans-serif;
    --text-font: 'Inter', Arial, sans-serif;
    --white: #ffffff;
    --black: #333333;
    --salmon: #E27D60;
    --bold: 500;
}

/* Typography */
h1, h2, h3, h4, h5, h6, p, li, a {line-height: 1.5;}
h1, h2, h3, h4, h5, h6 {font-weight: var(--bold);}

h1 {
    font-size: 3.2rem;
    letter-spacing: 1px;
}
h2 {
    font-size: 3rem;
    letter-spacing: 0.8px;
}
h3 {
    font-size: 2.4rem;
    letter-spacing: 0.5px;
}
h4 {
    font-size: 2rem;
    letter-spacing: 0.4px;
}
h5 {
    font-size: 1.8rem;
    letter-spacing: 0.4px;
}
h6{
    font-size: 1.6rem;
    letter-spacing: 0.4px;
}

p{
    font-family: var(--body-font);
    font-size: 1.8rem;
    letter-spacing: 0.4px;
}
    `,
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Layout: ",
                      className: "text-orange font-medium",
                    },
                    {
                      text: "Grid and Flexbox for adaptive designs. Ensures accessibility across desktop, tablet, and mobile devices.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "code",
                language: "html",
                code: `
.container {
    max-width: 128rem;
    margin: 0 auto;
}

.my-grid {
    width: 100%;
    max-width: 128rem;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2rem;
}

.flex-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.flex-row-rev {
    flex-direction: row-reverse;
}
    `,
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Logo Animation: ",
                      className: "text-orange font-medium",
                    },
                    {
                      text: "Vibrant two-layer effect using CSS clip-path and @keyframes.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "code",
                language: "html",
                code: `
.logo .logo-effect:nth-child(2) {
    color: var(--salmon);
    animation: logo-animate 3s ease-in-out infinite;
    position: absolute;
    top: 0; left: 0;
}

@keyframes logo-animate {
    0%, 100% {
        clip-path: polygon(0% 45%, 16% 44%, 
        33% 50%, 54% 60%, 70% 61%, 84% 59%, 
        100% 52%, 100% 100%, 0% 100%);
    }
    50% {
        clip-path: polygon(0% 60%, 15% 65%,
        34% 66%, 51% 62%, 67% 50%, 84% 45%,
        100% 46%, 100% 100%, 0% 100%);
    }
}
    `,
              },
            ],
          },
        ],
      },
      // Deliverables
      {
        id: "section3",
        title: "Deliverables",
        layout: "full-width",
        content: [
          {
            type: "tabbed-media",
            tabs: [
              {
                title: "Home Page",
                type: "video",
                url: "/Projects/Eatery/EateryHomeVideo.mp4",
              },
              {
                title: "About Page",
                type: "video",
                url: "/Projects/Eatery/EateryAboutVideo.mp4",
              },
              {
                title: "Menu Page",
                type: "video",
                url: "/Projects/Eatery/EateryMenuVideo.mp4",
              },
            ],
          },
        ],
      },
    ],
  },
  KaviProject: {
    category: "VisualDesign",
    liveDemoLink: "https://www.zeczec.com/projects/viida-kavi",
    sections: [
      // Introduction
      {
        id: "section1",
        title: "Introduction",
        layout: "full-width",
        content: [
          {
            type: "text",
            content: [
              [
                {
                  text: "The KAVi Portable Coffee Brewer ",
                  className: "text-black",
                },
                {
                  text: "combines the functionality of a thermal bottle with a pour-over coffee maker, ",
                  className: "text-orange font-medium",
                },
                {
                  text: "offering an all-in-one solution for coffee enthusiasts.",
                  className: "text-black",
                },
              ],
              [
                {
                  text: "This project aimed to showcase its versatility and portability through compelling visuals and engaging content, helping customers see its value for both home and on-the-go brewing.",
                  className: "text-black",
                },
              ],
            ],
          },
        ],
      },
      // Shoot Outcomes
      {
        id: "section2",
        title: "Shoot Outcomes",
        layout: "full-width",
        content: [
          {
            type: "text",
            content: [
              [
                {
                  text: "Photo Shooting",
                  className: "text-orange font-medium",
                },
              ],
              [
                {
                  text: "Day 1: ",
                  className: "text-black font-medium",
                },
                {
                  text: "Studio Shoot on a simple table setup to highlight the bottle's design.",
                  className: "text-black",
                },
              ],
              [
                {
                  text: "Day 2: ",
                  className: "text-black font-medium",
                },
                {
                  text: "Lifestyle Shoot in environments like a living room, kitchen, and park to showcase its versatility for home and travel.",
                  className: "text-black",
                },
              ],
            ],
          },
          {
            type: "tabbed-media",
            tabs: [
              {
                title: "Studio Shoot",
                type: "video",
                url: "/Projects/Kavi/KaviStudioShoot.mp4",
              },
              {
                title: "Lifestyle Shoot",
                type: "video",
                url: "/Projects/Kavi/KaviLifestyleShoot.mp4",
              },
            ],
          },
          {
            type: "text",
            content: [
              [
                {
                  text: "Video Shooting",
                  className: "text-orange font-medium",
                },
              ],
              [
                {
                  text: "Day 1: ",
                  className: "text-black font-medium",
                },
                {
                  text: "Filmed a demonstration of pour-over and cold brewing, focusing on unique features.",
                  className: "text-black",
                },
              ],
              [
                {
                  text: "Day 2: ",
                  className: "text-black font-medium",
                },
                {
                  text: "Interviewed two world champion coffee roasters, who shared insights on water-to-powder ratios, pour-over techniques, and the benefits of our bottle.",
                  className: "text-black",
                },
              ],
            ],
          },
          {
            type: "tabbed-media",
            tabs: [
              {
                title: "Pour-over",
                type: "video",
                url: "/Projects/Kavi/KaviPourOver.mp4",
              },
              {
                title: "Cold brewing",
                type: "video",
                url: "/Projects/Kavi/KaviBrewing.mp4",
              },
              {
                title: "All in One",
                type: "video",
                url: "/Projects/Kavi/KaviAllinOne.mp4",
              },
              {
                title: "Interview",
                type: "video",
                url: "/Projects/Kavi/KaviInterview.mp4",
              },
            ],
          },
        ],
      },
      // Campaign Materials
      {
        id: "section3",
        title: "Campaign Materials",
        layout: "full-width",
        content: [
          {
            type: "subtitle",
            content: "Product Pages",
            bgColor: "bg-blue-bg",
          },
          {
            type: "text",
            content: [
              [
                {
                  text: "Began 2 weeks before launch, with educational and interactive posts to captivate the audience.",
                  className: "text-black",
                },
              ],
            ],
          },
          {
            layout: "three-column",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "1. Coffee Knowledge Series: ",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "Posts about the common principles of coffee brewing.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/Kavi/KaviKnowledgeQ1Cover.webp",
              },
              {
                type: "image",
                url: "/Projects/Kavi/KaviKnowledgeQ1.webp",
              },
            ],
          },
          {
            layout: "three-column",
            content: [
              {},
              {
                type: "image",
                url: "/Projects/Kavi/KaviKnowledgeQ2Cover.webp",
              },
              {
                type: "image",
                url: "/Projects/Kavi/KaviKnowledgeQ2.webp",
              },
            ],
          },
          {
            layout: "three-column",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "2. Psychological Coffee Test: ",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "An interactive quiz to match users’ personalities with coffee preferences.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/Kavi/KaviTestQuestion.webp",
              },
              {
                type: "image",
                url: "/Projects/Kavi/KaviTestAmericano.webp",
              },
            ],
          },
          {
            layout: "three-column",
            content: [
              {},
              {
                type: "image",
                url: "/Projects/Kavi/KaviTestCappuccino.webp",
              },
              {
                type: "image",
                url: "/Projects/Kavi/KaviTestMocha.webp",
              },
            ],
          },
          {
            layout: "three-column",
            content: [
              {},
              {
                type: "image",
                url: "/Projects/Kavi/KaviTestMacchiato.webp",
              },
              {
                type: "image",
                url: "/Projects/Kavi/KaviTestLatte.webp",
              },
            ],
          },
          {
            layout: "three-column",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "3. Promotions: ",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "After launch, we promoted the bottle's key features and ran time-limited discounts, leveraging the momentum to maximize reach and sales.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/Kavi/KaviAds1.webp",
              },
              {
                type: "image",
                url: "/Projects/Kavi/KaviAds2.webp",
              },
            ],
          },
          {
            layout: "three-column",
            content: [
              {},
              {
                type: "image",
                url: "/Projects/Kavi/KaviAds3.webp",
              },
              {
                type: "image",
                url: "/Projects/Kavi/KaviAds4.webp",
              },
            ],
          },
          {
            layout: "three-column",
            content: [
              {},
              {
                type: "image",
                url: "/Projects/Kavi/KaviAds5.webp",
              },
              {
                type: "image",
                url: "/Projects/Kavi/KaviAds6.webp",
              },
            ],
          },
          {
            layout: "three-column",
            content: [
              {},
              {
                type: "image",
                url: "/Projects/Kavi/KaviAds7.webp",
              },
              {
                type: "image",
                url: "/Projects/Kavi/KaviAds8.webp",
              },
            ],
          },
          {
            layout: "three-column",
            content: [
              {},
              {
                type: "image",
                url: "/Projects/Kavi/KaviAds9.webp",
              },
              {
                type: "image",
                url: "/Projects/Kavi/KaviAds10.webp",
              },
            ],
          },
          {
            layout: "three-column",
            content: [
              {},
              {
                type: "image",
                url: "/Projects/Kavi/KaviAds11.webp",
              },
              {
                type: "image",
                url: "/Projects/Kavi/KaviAds12.gif",
              },
            ],
          },
          {
            layout: "three-column",
            content: [
              {},
              {
                type: "image",
                url: "/Projects/Kavi/KaviAds13.gif",
              },
              {
                type: "image",
                url: "/Projects/Kavi/KaviAds14.gif",
              },
            ],
          },
        ],
      },
    ],
  },
  LmsProject: {
    category: "Branding",
    liveDemoLink:
      "https://www.todayonline.com/8days/christopher-lee-whos-been-playing-golf-over-10-years-launches-own-line-sustainable-golf",
    sections: [
      // Introduction
      {
        id: "section1",
        title: "Introduction",
        layout: "full-width",
        content: [
          {
            type: "text",
            content: [
              [
                {
                  text: "This project was a collaboration with Malaysian celebrity ",
                  className: "text-black",
                },
                {
                  text: "Christopher Lee ",
                  className: "text-orange font-medium",
                },
                {
                  text: "to create a unique brand identity for LMS Golf Wear.",
                  className: "text-black",
                },
              ],
              [
                {
                  text: "I contributed to developing the brand's identity through various deliverables, including designing the logo, clothing tags, apparel patterns, and a cohesive visual style for the brand.",
                  className: "text-black",
                },
              ],
            ],
          },
        ],
      },
      // Design Process
      {
        id: "section2",
        title: "Design Process",
        layout: "full-width",
        content: [
          {
            type: "subtitle",
            content: "Initial Brand Research",
            bgColor: "bg-orange-bg",
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Brand Overview",
                      className: "text-orange font-medium",
                    },
                  ],
                ],
              },
              {
                type: "text",
                content: [
                  [
                    {
                      text: "To shape a brand that combines professional performance with casual athletic style, focusing on high-tech fabrics and modern designs for versatility.",
                      className: "text-black",
                    },
                  ],
                ],
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Target Audience",
                      className: "text-orange font-medium",
                    },
                  ],
                ],
              },
              {
                type: "text",
                content: [
                  [
                    {
                      text: "To shape a brand that combines professional performance with casual athletic style, focusing on high-tech fabrics and modern designs for versatility.",
                      className: "text-black",
                    },
                  ],
                ],
              },
            ],
          },
          {
            type: "subtitle",
            content: "Development",
            bgColor: "bg-orange-bg",
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Logo Sketch",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "The LMS logo sketches creatively explore unique typography styles, representing the initials of Lee Ming-Shun's name.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/Lms/LmsLogoSketch.webp",
                alt: "Lms Logo Sketch",
                className: "w-full rounded",
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Final Logo Direction",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "The final “LMS” logo direction establishes a modern, bold identity with clean lines.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/Lms/LmsFinalLogo.webp",
                alt: "Lms Final Logo",
                className: "w-full rounded",
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Character IP Creation",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "“Peekaboo” is a playful pig character with a hidden lower face, featuring versatile designs for branding, storytelling, and audience connection.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/Lms/LmsIp.webp",
                alt: "Lms IP",
                className: "w-full rounded",
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Mood Board",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "The mood board shows detailed, time-intensive designs, combining golf style with a cosmic vibe for a cool and creative look.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/Lms/LmsMoodBoard.webp",
                alt: "Lms Mood Board",
                className: "w-full rounded",
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Colour Palette",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "The colour palette blends Caviar, Ultimate Grey, Simon Pink, and Bright White, balancing elegance, modernity, and softness for a stylish design.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/Lms/LmsColour.webp",
                alt: "Lms Colour",
                className: "w-full rounded",
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Typefaces",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "The typefaces Nasalization Regular and Arial were chosen to combine a futuristic feel with clean, timeless readability.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/Lms/LmsTypefaces.webp",
                alt: "Lms Typefaces",
                className: "w-full rounded",
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Patterns",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "I created patterns by dividing and recombining the LMS logo, resulting in plaid, striped, and seamless tile designs that enhance the clothing's visual appeal.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/Lms/LmsPatterns.webp",
                alt: "Lms Typefaces",
                className: "w-full rounded",
              },
            ],
          },
        ],
      },
      // Deliverables
      {
        id: "section3",
        title: "Deliverables",
        layout: "full-width",
        content: [
          {
            type: "subtitle",
            content: "Brand Essentials",
            bgColor: "bg-orange-bg",
          },
          {
            type: "tabbed-media",
            tabs: [
              {
                title: "Packaging",
                type: "image",
                url: "/Projects/Lms/LmsBox.webp",
                alt: "Boxd",
              },
              {
                title: "Clothing tag",
                type: "image",
                url: "/Projects/Lms/LmsTag.webp",
                alt: "Tag",
              },
            ],
          },
          {
            type: "subtitle",
            content: "Products",
            bgColor: "bg-orange-bg",
          },
          {
            type: "tabbed-media",
            tabs: [
              {
                title: "Clothing",
                type: "image",
                url: "/Projects/Lms/LmsClothing.webp",
                alt: "Clothing",
              },
              {
                title: "Accessories",
                type: "image",
                url: "/Projects/Lms/LmsAccessories.webp",
                alt: "Accessories",
              },
            ],
          },
        ],
      },
    ],
  },
  TiannliProject: {
    category: "WebDesign",
    liveDemoLink: "https://www.tiannli.com/",
    sections: [
      // Introduction
      {
        id: "section1",
        title: "Introduction",
        layout: "full-width",
        content: [
          {
            type: "text",
            content: [
              [
                {
                  text: "TIANNLI is a brand based in Dadaocheng Taipei, a historic street known for its unique blend of tradition and modernity.",
                  className: "text-black",
                },
              ],
              [
                {
                  text: "Specializing in dried fruits, traditional snacks, and teas, TIANNLI wanted an e-commerce website that showcased its brand identity.",
                  className: "text-black",
                },
              ],
              [
                {
                  text: "This project focused on designing pages to better communicate the brand’s story and improve usability.",
                  className: "text-black",
                },
              ],
            ],
          },
        ],
      },
      // Design Process
      {
        id: "section2",
        title: "Design Process",
        layout: "full-width",
        content: [
          {
            type: "subtitle",
            content: "Project Planning",
            bgColor: "bg-green-bg",
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Font Family: ",
                      className: "text-orange font-medium",
                    },
                    {
                      text: "The primary font, Noto Serif TC, ensures readability in Traditional Chinese, while the fallback, Baskerville, complements it with a classic and elegant Western touch.",
                      className: "text-black",
                    },
                  ],
                  [
                    {
                      text: "Color Palette: ",
                      className: "text-orange font-medium",
                    },
                    {
                      text: "Titles in a rich primary tone (#823A21), body text in neutral black (#211815), and background elements like footers in a soft complementary shade (#C9B3A2).",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "code",
                language: "html",
                code: `
/* Define Properties */

:root {
    --font: "Noto Serif TC", Baskerville, Arial;
    --primary-color: #823A21;
    --secondary-color: #C9B3A2;
    --black: #211815;
    --white: #ffffff;
    --bold: 700;
    --line-height: 2;
    --letter-spacing: 2px;
}

/* Content Style */

.tiannli-title {
    font-family: var(--font);
    color: var(--primary-color);
    line-height: var(--line-height);
    font-weight: var(--bold);
    font-size: 18pt;
}

.tiannli-text {
    font-family: var(--font);
    color: var(--black);
    line-height: var(--line-height);
    letter-spacing: var(--letter-spacing);
    font-size: 14pt;
}
    `,
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Layout: ",
                      className: "text-orange font-medium",
                    },
                    {
                      text: "This base CSS establishes a consistent layout foundation for the project, ensuring responsive and visually balanced designs using flexbox and standardized container widths.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "code",
                language: "html",
                code: `
/* Base */

.container {
    width: 1000px;
    margin: 0 auto;
    padding: 20px 0;
}

.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.homePage-bg {
    background-image: 
    url('https://shorturl.at/2SdKt');
    background-size: cover;
    background-position: center;
    background-repeat: repeat-y;
}
    `,
              },
            ],
          },
        ],
      },
      // Deliverables
      {
        id: "section3",
        title: "Deliverables",
        layout: "full-width",
        content: [
          {
            type: "tabbed-media",
            tabs: [
              {
                title: "Home Page",
                type: "video",
                url: "/Projects/Tiannli/TiannliHomePage.mp4",
              },
              {
                title: "About Us",
                type: "video",
                url: "/Projects/Tiannli/TiannliAboutUs.mp4",
              },
              {
                title: "Categories",
                type: "video",
                url: "/Projects/Tiannli/TiannliProductCategories.mp4",
              },
              {
                title: "Products",
                type: "video",
                url: "/Projects/Tiannli/TiannliProductPage.mp4",
              },
              {
                title: "Services",
                type: "video",
                url: "/Projects/Tiannli/TiannliCustomerService.mp4",
              },
            ],
          },
        ],
      },
    ],
  },
  ToliCuliPaliProject: {
    category: "VisualDesign",
    liveDemoLink: "",
    sections: [
      // Introduction
      {
        id: "section1",
        title: "Introduction",
        layout: "full-width",
        content: [
          {
            type: "text",
            content: [
              [
                {
                  text: "This project focused on the product launch of VIIDA's Toli Culi Pali utensil set, which includes a spoon, fork, and chopsticks.",
                  className: "text-black",
                },
              ],
              [
                {
                  text: "The utensils are crafted with stainless steel bodies and silicone holders designed for a comfortable grip. ",
                  className: "text-black",
                },
                {
                  text: "The launch campaign ",
                  className: "text-black",
                },
                {
                  text: "highlighted 6 vibrant macaron colours and express a sense of dining ritual.",
                  className: "text-orange font-medium",
                },
              ],
            ],
          },
        ],
      },
      // Shoot Outcomes
      {
        id: "section2",
        title: "Shoot Outcomes",
        layout: "full-width",
        content: [
          {
            type: "text",
            content: [
              [
                {
                  text: "Photo Shooting",
                  className: "text-orange font-medium",
                },
              ],
              [
                {
                  text: "Day 1: ",
                  className: "text-black font-medium",
                },
                {
                  text: "Studio Shoot with coloured backgrounds and a simple table setup to highlight the utensils’ vibrant macaron colours and product's features.",
                  className: "text-black",
                },
              ],
              [
                {
                  text: "Day 2: ",
                  className: "text-black font-medium",
                },
                {
                  text: "Lifestyle Shoot in a living-style environment to capture the essence of dining rituals.",
                  className: "text-black",
                },
              ],
            ],
          },
          {
            type: "tabbed-media",
            tabs: [
              {
                title: "Studio Shoot",
                type: "video",
                url: "/Projects/ToliCuliPali/ToliCuliPaliStudioShoot.mp4",
              },
              {
                title: "Lifestyle Shoot",
                type: "video",
                url: "/Projects/ToliCuliPali/ToliCuliPaliLifestyleShoot.mp4",
              },
            ],
          },
        ],
      },
      // Campaign Materials
      {
        id: "section3",
        title: "Campaign Materials",
        layout: "full-width",
        content: [
          {
            type: "subtitle",
            content: "Product Pages",
            bgColor: "bg-blue-bg",
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Toli",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "Toli is a fork with a stainless steel body and a silicone handle, designed for comfort and practicality.",
                      className: "text-black",
                    },
                  ],
                  [
                    {
                      text: "The edges of its three prongs are carefully smoothed to ensure they’re safe and gentle on your mouth.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/ToliCuliPali/ToliProductPage.gif",
                alt: "Toli Product Page",
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Culi",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "Culi is a versatile spoon with a stainless steel body and a silicone handle for an ergonomic grip.",
                      className: "text-black",
                    },
                  ],
                  [
                    {
                      text: "It’s perfect for enjoying any type of cuisine.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/ToliCuliPali/CuliProductPage.gif",
                alt: "Culi Product Page",
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Pali",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "Pali are chopsticks with a stainless steel body and silicone tips, designed for a cohesive look and a comfortable, reliable grip.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/ToliCuliPali/PaliProductPage.webp",
                alt: "Pali Product Page",
              },
            ],
          },
          {
            type: "subtitle",
            content: "Campaign Landing Page",
            bgColor: "bg-blue-bg",
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Designed a landing page focused on engaging customers by inviting them to pick their preferred colour.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/ToliCuliPali/ToliCuliPaliLandingPage.webp",
                alt: "Toli Culi Pali Landing Page",
              },
            ],
          },
          {
            type: "subtitle",
            content: "Facebook Ads",
            bgColor: "bg-blue-bg",
          },
          {
            layout: "three-column",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "In 2022, GIF ads in Taiwan outperformed static images, ",
                      className: "text-black",
                    },
                    {
                      text: "achieving ROAS over 5, sometimes 10+.",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "For this campaign, the GIF highlights the utensil set’s unique features and a hotel collaboration.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/ToliCuliPali/CuliAds.gif",
                alt: "Culi Ads",
              },
              {
                type: "image",
                url: "/Projects/ToliCuliPali/PaliAds.gif",
                alt: "Pali Ads",
              },
            ],
          },
          {
            layout: "three-column",
            content: [
              {},
              {
                type: "image",
                url: "/Projects/ToliCuliPali/ToliCuliPaliAds1.gif",
                alt: "Toli Culi Pali Ads",
              },
              {
                type: "image",
                url: "/Projects/ToliCuliPali/ToliCuliPaliAds2.gif",
                alt: "Toli Culi Pali Ads",
              },
            ],
          },
          {
            layout: "three-column",
            content: [
              {},
              {
                type: "image",
                url: "/Projects/ToliCuliPali/ToliCuliPaliAds3.gif",
                alt: "Toli Culi Pali Ads",
              },
              {
                type: "image",
                url: "/Projects/ToliCuliPali/ToliCuliPaliAds4.gif",
                alt: "Toli Culi Pali Ads",
              },
            ],
          },
        ],
      },
    ],
  },
  ViidaProject: {
    category: "WebDesign",
    liveDemoLink: "https://viida.org/",
    sections: [
      // Double Diamond Approach
      {
        id: "section1",
        title: "Double Diamond Approach",
        layout: "full-width",
        content: [
          {
            type: "subtitle",
            content: "What's the problem?",
            bgColor: "bg-green-bg",
          },
          {
            type: "text",
            content: [
              [
                {
                  text: "1. Discover",
                  className: "text-orange font-medium",
                },
              ],
              [
                {
                  text: "User feedback and analytics revealed key issues: cluttered pages, inconsistent design, and confusion around the naming customization feature.",
                  className: "text-black",
                },
              ],
              [
                {
                  text: "2. Define",
                  className: "text-orange font-medium",
                },
              ],
              [
                {
                  text: "We identified three priorities:",
                  className: "text-black",
                },
              ],
              [
                {
                  text: "• Simplify layout and content",
                  className: "text-black",
                },
              ],
              [
                {
                  text: "• Establish consistent visual design",
                  className: "text-black",
                },
              ],
              [
                {
                  text: "• Improve the customized naming experience",
                  className: "text-black",
                },
              ],
            ],
          },
          {
            type: "subtitle",
            content: "What's the solution?",
            bgColor: "bg-green-bg",
          },
          {
            type: "text",
            content: [
              [
                {
                  text: "3. Develop",
                  className: "text-orange font-medium",
                },
              ],
              [
                {
                  text: "Created wireframes and prototypes focusing on:",
                  className: "text-black",
                },
              ],
              [
                {
                  text: "• Clean navigation",
                  className: "text-black",
                },
              ],
              [
                {
                  text: "• Unified layout system",
                  className: "text-black",
                },
              ],
              [
                {
                  text: "• Responsive, easy-to-use naming selection",
                  className: "text-black",
                },
              ],
              [
                {
                  text: "4. Deliver",
                  className: "text-orange font-medium",
                },
              ],
              [
                {
                  text: "Launched a redesigned Shopify site with a streamlined interface, improved shopping flow, and intuitive customization, aligned with VIIDA’s minimalist branding.",
                  className: "text-black",
                },
              ],
            ],
          },
        ],
      },
      {
        id: "section2",
        title: "Results",
        layout: "full-width",
        content: [
          // Results
          {
            layout: "three-column",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "+ 133%",
                      className: "text-green text-4xl font-semibold",
                    },
                  ],
                  [
                    {
                      text: "Conversion Rate",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "text",
                content: [
                  [
                    {
                      text: "+ 150%",
                      className: "text-green text-4xl font-semibold",
                    },
                  ],
                  [
                    {
                      text: "Monthly Revenue",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "text",
                content: [
                  [
                    {
                      text: "+ 120%",
                      className: "text-green text-4xl font-semibold",
                    },
                  ],
                  [
                    {
                      text: "Customized Product Sales",
                      className: "text-black",
                    },
                  ],
                ],
              },
            ],
          },
        ],
      },

      // Design Process
      {
        id: "section3",
        title: "Wireframes",
        layout: "full-width",
        content: [
          {
            type: "subtitle",
            content: "Homepage",
            bgColor: "bg-green-bg",
          },
          {
            type: "text",
            content: [
              [
                {
                  text: "Simplified messaging, product highlights, and award credibility elements",
                  className: "text-black",
                },
              ],
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "image",
                url: "/Projects/Viida/ViidaHomeMobile.webp",
                alt: "Viida Home Mobile",
              },
              {
                type: "image",
                url: "/Projects/Viida/ViidaHomeDesktop.webp",
                alt: "Viida Home Desktop",
              },
            ],
          },
          {
            type: "subtitle",
            content: "Category Page",
            bgColor: "bg-green-bg",
          },
          {
            type: "text",
            content: [
              [
                {
                  text: "Clear filtering system for easier product discovery",
                  className: "text-black",
                },
              ],
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "image",
                url: "/Projects/Viida/ViisaCategoryMobile.webp",
                alt: "Viida Category Mobile",
              },
              {
                type: "image",
                url: "/Projects/Viida/ViisaCategoryDesktop.webp",
                alt: "Viida Category Desktop",
              },
            ],
          },
          {
            type: "subtitle",
            content: "Product Page",
            bgColor: "bg-green-bg",
          },
          {
            type: "text",
            content: [
              [
                {
                  text: "Integrated interactive naming selection with responsive feedback for a seamless UX",
                  className: "text-black",
                },
              ],
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "image",
                url: "/Projects/Viida/ViidaProductMobile.webp",
                alt: "Viida Product Mobile",
              },
              {
                type: "image",
                url: "/Projects/Viida/ViidaProductDesktop.webp",
                alt: "Viida Product Desktop",
              },
            ],
          },
        ],
      },
      // Deliverables
      {
        id: "section4",
        title: "Deliverables",
        layout: "full-width",
        content: [
          {
            type: "tabbed-media",
            tabs: [
              {
                title: "Home",
                type: "video",
                url: "/Projects/Viida/ViidaHome.mp4",
              },
              {
                title: "Collection",
                type: "video",
                url: "/Projects/Viida/ViidaCollection.mp4",
              },
              {
                title: "Category",
                type: "video",
                url: "/Projects/Viida/ViidaProductCategory.mp4",
              },
              {
                title: "Product",
                type: "video",
                url: "/Projects/Viida/ViidaProduct.mp4",
              },
            ],
          },
        ],
      },
    ],
  },
  UiuProject: {
    category: "VisualDesign",
    liveDemoLink: "",
    sections: [
      // Introduction
      {
        id: "section1",
        title: "Introduction",
        layout: "full-width",
        content: [
          {
            type: "text",
            content: [
              [
                {
                  text: "This collaboration combined UIU Straw with the nostalgic photography of ",
                  className: "text-black",
                },
                {
                  text: "OldHouseFace",
                  className: "text-orange font-medium",
                },
                {
                  text: ", who captures Taiwan’s old houses influenced by Spanish, Dutch, Chinese and  Japanese architecture.",
                  className: "text-black",
                },
              ],
              [
                {
                  text: "The goal was to reflect these cultural stories in the product’s visual presentation. I managed the photoshoot coordination, sourced vintage props like Begonia Flower Glass, rocks, and dry plants to complement the nostalgic mood, and developed product pages and launch ads to promote the collaboration.",
                  className: "text-black",
                },
              ],
            ],
          },
        ],
      },
      // Design Process
      {
        id: "section2",
        title: "Design Process",
        layout: "full-width",
        content: [
          {
            type: "subtitle",
            content: "Shooting Execution",
            bgColor: "bg-blue-bg",
          },
          {
            type: "text",
            content: [
              [
                {
                  text: "1. Visual Research: ",
                  className: "text-orange font-medium",
                },
              ],
              [
                {
                  text: "Used Pinterest to curate inspiration and communicate ideas with the photographer.",
                  className: "text-black",
                },
              ],
            ],
          },
          {
            type: "video",
            url: "/Projects/Uiu/UiuShooting.mp4",
          },
          {
            type: "text",
            content: [
              [
                {
                  text: "2. Prop Selection: ",
                  className: "text-orange font-medium",
                },
              ],
              [
                {
                  text: "Chose items like Begonia Flower Glass, rocks, and dry plants to enhance the nostalgic mood.",
                  className: "text-black",
                },
              ],
            ],
          },
          {
            type: "tabbed-media",
            tabs: [
              {
                title: "Begonia Flower Glass",
                type: "image",
                url: "/Projects/Uiu/UiuBegoniaFlowerGlass.webp",
              },
              {
                title: "Rocks",
                type: "image",
                url: "/Projects/Uiu/UiuRocks.webp",
              },
            ],
          },
        ],
      },
      // Deliverables
      {
        id: "section3",
        title: "Deliverables",
        layout: "full-width",
        content: [
          {
            type: "subtitle",
            content: "Product Pages",
            bgColor: "bg-blue-bg",
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "The UiU Straw is made from stainless steel and silicone.",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "One side is designed to insert the seal, and the other is for drinking. It comes with a portable case and can be folded due to its flexible materials.",
                      className: "text-black",
                    },
                  ],
                  [
                    {
                      text: "The product page highlights sustainability by drawing a connection between OldHouseFace’s efforts to preserve Taiwan’s beautiful architecture for future generations and our reusable straw, which supports an eco-friendly lifestyle.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/Uiu/UiuProductPage.gif",
                alt: "Uiu Product Page",
              },
            ],
          },
          {
            type: "subtitle",
            content: "Facebook Ads",
            bgColor: "bg-blue-bg",
          },
          {
            layout: "three-column",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "The ads highlight the collaboration by showcasing UIU Straw’s design alongside OldHouseFace’s nostalgic photography, blending cultural storytelling with promotional details.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/Uiu/UiuAds1.webp",
                alt: "Uiu Ads",
              },
              {
                type: "image",
                url: "/Projects/Uiu/UiuAds2.webp",
                alt: "Uiu Ads",
              },
            ],
          },
          {
            layout: "three-column",
            content: [
              {},
              {
                type: "image",
                url: "/Projects/Uiu/UiuAds3.webp",
                alt: "Uiu Ads",
              },
              {
                type: "image",
                url: "/Projects/Uiu/UiuAds4.webp",
                alt: "Uiu Ads",
              },
            ],
          },
          {
            layout: "three-column",
            content: [
              {},
              {
                type: "image",
                url: "/Projects/Uiu/UiuAds5.webp",
                alt: "Uiu Ads",
              },
              {
                type: "image",
                url: "/Projects/Uiu/UiuAds6.webp",
                alt: "Uiu Ads",
              },
            ],
          },
          {
            layout: "three-column",
            content: [
              {},
              {
                type: "image",
                url: "/Projects/Uiu/UiuAds7.webp",
                alt: "Uiu Ads",
              },
              {
                type: "image",
                url: "/Projects/Uiu/UiuAds8.webp",
                alt: "Uiu Ads",
              },
            ],
          },
        ],
      },
    ],
  },
  PetronewProject: {
    category: "WebDesign",
    liveDemoLink: "https://www.petronew.com.tw/",
    sections: [
      // Introduction
      {
        id: "section1",
        title: "Introduction",
        layout: "full-width",
        content: [
          {
            type: "text",
            content: [
              [
                {
                  text: "Petronew, inspired by the protective charm from Harry Potter, is a pet supplement brand focusing on joint health.",
                  className: "text-black",
                },
              ],
              [
                {
                  text: "I developed the website using 1shop, designed its branding identity, and created engaging visuals for social media, ads, and product pages.",
                  className: "text-black",
                },
              ],
              [
                {
                  text: "The goal was to establish a magical yet professional aesthetic while keeping costs low as a startup.",
                  className: "text-black",
                },
              ],
            ],
          },
        ],
      },
      // Design Process
      {
        id: "section2",
        title: "Design Process",
        layout: "full-width",
        content: [
          {
            type: "subtitle",
            content: "Planning the Website",
            bgColor: "bg-green-bg",
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Platform Selection",
                      className: "text-orange font-medium",
                    },
                  ],
                ],
              },
              {
                type: "text",
                content: [
                  [
                    {
                      text: "1. 1 shop:",
                      className: "text-black font-medium",
                    },
                  ],
                  [
                    {
                      text: "Chosen for its 0 upfront costs and only 1% revenue fee, ideal for startups.",
                      className: "text-black",
                    },
                  ],
                  [
                    {
                      text: "2. Custom Domain:",
                      className: "text-black font-medium",
                    },
                  ],
                  [
                    {
                      text: "Purchased via GoDaddy for $30/year to maintain brand professionalism.",
                      className: "text-black",
                    },
                  ],
                ],
              },
            ],
          },
          {
            type: "subtitle",
            content: "Brand Identity",
            bgColor: "bg-green-bg",
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "The Petronew logo blends orange and blue, symbolizing energy and trust, with a “＋” icon highlighting benefits for all pets.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/Petronew/PetronewLogo.webp",
                alt: "Petronew Logo",
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "A dynamic curve, inspired by cats’ and dogs’ jumps, reflects vitality and joy, representing our mission to support active, healthy lifestyles for pets and their owners, together forever.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/Petronew/PetronewColour.webp",
                alt: "Petronew Colour",
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {},
              {
                type: "image",
                url: "/Projects/Petronew/PetronewPackage.webp",
                alt: "Petronew Package",
              },
            ],
          },
        ],
      },
      // Deliverables
      {
        id: "section3",
        title: "Deliverables",
        layout: "full-width",
        content: [
          {
            type: "tabbed-media",
            tabs: [
              {
                title: "Home",
                type: "video",
                url: "/Projects/Petronew/PetronewHome.mp4",
              },
              {
                title: "Reviews",
                type: "video",
                url: "/Projects/Petronew/PetronewReviews.mp4",
              },
              {
                title: "Product",
                type: "video",
                url: "/Projects/Petronew/PetronewProduct.mp4",
              },
              {
                title: "Stores",
                type: "video",
                url: "/Projects/Petronew/PetronewStores.mp4",
              },
            ],
          },
          {
            type: "subtitle",
            content: "Facebook Ads",
            bgColor: "bg-green-bg",
          },
          {
            layout: "three-column",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "For Petronew ads, emphasize our supplement’s features: ",
                      className: "text-black",
                    },
                    {
                      text: "magical, small, and effective.",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: " Use vibrant light effects to evoke a Harry Potter-like enchantment, aligning with our brand identity.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/Petronew/PetronewAds1.webp",
                alt: "Petronew Ads",
              },
              {
                type: "image",
                url: "/Projects/Petronew/PetronewAds2.webp",
                alt: "Petronew Ads",
              },
            ],
          },
          {
            layout: "three-column",
            content: [
              {},
              {
                type: "image",
                url: "/Projects/Petronew/PetronewAds3.webp",
                alt: "Petronew Ads",
              },
              {
                type: "image",
                url: "/Projects/Petronew/PetronewAds4.webp",
                alt: "Petronew Ads",
              },
            ],
          },
          {
            type: "subtitle",
            content: "Prints",
            bgColor: "bg-green-bg",
          },
          {
            layout: "three-column",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "For offline promotion at the Pet Supplies Expo, we’re creating A5 boards and flyers.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/Petronew/PetronewPrints1.webp",
                alt: "Petronew Print",
              },
              {
                type: "image",
                url: "/Projects/Petronew/PetronewPrints2.webp",
                alt: "Petronew Print",
              },
            ],
          },
        ],
      },
    ],
  },
  CanadacaProject: {
    category: "CaseStudy",
    liveDemoLink:
      "https://www.figma.com/design/JCJtDRCOnQRCPL3OUxsTIW/UIUX---canada.ca?node-id=4104-8&t=ZihI70k5qPtQ7tPU-1",
    sections: [
      // Introduction
      {
        id: "section1",
        title: "Introduction",
        layout: "full-width",
        content: [
          {
            type: "text",
            content: [
              [
                {
                  text: "To improve the usability of Canada's government website, we conducted a user study focusing on ",
                  className: "text-black",
                },
                {
                  text: "navigation, accessibility, and key user tasks like filing taxes and checking benefits.",
                  className: "text-orange font-medium",
                },
              ],
              [
                {
                  text: "• Methods Used:",
                  className: "text-black font-medium",
                },
              ],
              [
                {
                  text: "1. Screener Survey – 12 participants",
                  className: "text-black",
                },
              ],
              [
                {
                  text: "2. Usability Testing – 4 participants (Rainbow Sheet & SUS analysis)",
                  className: "text-black",
                },
              ],
            ],
          },
        ],
      },
      // Key Hypothesis
      {
        id: "section2",
        title: "Key Hypothesis",
        layout: "full-width",
        content: [
          {
            type: "text",
            content: [
              [
                {
                  text: "1. Users may find the information on Canada.ca regarding tax filing deadlines, required forms, and processes ",
                  className: "text-black",
                },
                {
                  text: "confusing and difficult to navigate.",
                  className: "text-orange font-medium",
                },
              ],
              [
                {
                  text: "2. Residents can find details about their tax obligations and whether they need to file taxes, but it ",
                  className: "text-black",
                },
                {
                  text: "requires considerable effort. ",
                  className: "text-orange font-medium",
                },
                {
                  text: "The site is text-heavy and lacks visual markers to guide users.",
                  className: "text-black",
                },
              ],
              [
                {
                  text: "3. International students may ",
                  className: "text-black",
                },
                {
                  text: "have trouble locating information ",
                  className: "text-orange font-medium",
                },
                {
                  text: "about available tuition tax credits and eligibility criteria. Additionally, the site is only available in English and French.",
                  className: "text-black",
                },
              ],
            ],
          },
        ],
      },
      // Screener Survey
      {
        id: "section3",
        title: "Screener Survey",
        layout: "full-width",
        content: [
          // Buyer Side
          {
            type: "subtitle",
            content: "Introduction",
            bgColor: "bg-yellow-bg",
          },
          {
            type: "video",
            url: "/Projects/Canadaca/CanadacaScreener.mp4",
          },
          {
            layout: "full-width",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "1. We conducted a screener survey to ensure participants matched our target audience.",
                      className: "text-black",
                    },
                  ],
                  [
                    {
                      text: "2. A total of ",
                      className: "text-black",
                    },
                    {
                      text: "12 participants ",
                      className: "text-orange font-medium",
                    },
                    {
                      text: "were selected based on relevant criteria.",
                      className: "text-black",
                    },
                  ],
                ],
              },
            ],
          },
          // Key Findings
          {
            type: "subtitle",
            content: "Key Findings",
            bgColor: "bg-yellow-bg",
          },
          {
            layout: "full-width",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "1. Diverse Citizenship Status",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "Participants were nearly evenly split between citizens (45.5%) and non-citizens (54.5%).",
                      className: "text-black",
                    },
                  ],
                  [
                    {
                      text: "2. Multilingual Background",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "Participants spoke a variety of native languages. Including English, French, Mandarin, Cantonese, Filipino, Spanish, Japanese, and Korean.",
                      className: "text-black",
                    },
                  ],
                  [
                    {
                      text: "3. Prior Government Website Experience",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "83% had previously used government websites from countries outside of Canada.",
                      className: "text-black",
                    },
                  ],
                  [
                    {
                      text: "4. Recent Usage Purpose",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "The most common reason for visiting government websites was Filing Taxes or Checking Benefits (33.3%).",
                      className: "text-black",
                    },
                  ],
                ],
              },
            ],
          },
        ],
      },
      // Methodology
      {
        id: "section4",
        title: "Methodology",
        layout: "full-width",
        content: [
          // Testing Approach
          {
            type: "subtitle",
            content: "Testing Approach",
            bgColor: "bg-yellow-bg",
          },
          {
            layout: "three-column",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "1. Task Division",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "Split participants into 2 groups (citizens and non-citizens), focusing on real-world scenarios they are likely to encounter.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "text",
                content: [
                  [
                    {
                      text: "2. Observation",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "Compare the challenges faced by the native versus non-native users, using the rainbow sheet to record key observations during the session.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "text",
                content: [
                  [
                    {
                      text: "3. Evaluation",
                      className: "text-orange font-medium",
                    },
                  ],
                  [
                    {
                      text: "Utilize the SUS (System Usability Scale) to assess user experience.",
                      className: "text-black",
                    },
                  ],
                ],
              },
            ],
          },
        ],
      },
      // Participants
      {
        id: "section5",
        title: "Participants",
        layout: "full-width",
        content: [
          // Citizens
          {
            type: "subtitle",
            content: "Citizens",
            bgColor: "bg-yellow-bg",
          },
          {
            type: "table",
            headers: ["", "Marty", "Liz"],
            rows: [
              [
                [{ text: "Participants", className: "text-orange" }],
                [
                  {
                    type: "image",
                    url: "/Projects/Canadaca/CanadacaParticipantMarty.png",
                    alt: "Canadaca Participant Marty",
                    className: "w-24",
                  },
                ],
                [
                  {
                    type: "image",
                    url: "/Projects/Canadaca/CanadacaParticipantLiz.png",
                    alt: "Canadaca Participant Liz",
                    className: "w-24",
                  },
                ],
              ],
              [
                [{ text: "Nationality", className: "text-orange" }],
                [
                  {
                    text: "Canada / U.S.",
                    className: "text-black",
                  },
                ],
                [
                  {
                    text: "Canada",
                    className: "text-black",
                  },
                ],
              ],
              [
                [{ text: "Age group", className: "text-orange" }],
                [
                  {
                    text: "Baby Boomer (1946 - 1964)",
                    className: "text-black",
                  },
                ],
                [
                  {
                    text: "Gen Z (1997 - 2009)",
                    className: "text-black",
                  },
                ],
              ],
              [
                [{ text: "Residency Status", className: "text-orange" }],
                [
                  {
                    text: "Dual Citizen",
                    className: "text-black",
                  },
                ],
                [
                  {
                    text: "Citizen",
                    className: "text-black",
                  },
                ],
              ],
              [
                [{ text: "Primary Language", className: "text-orange" }],
                [
                  {
                    text: "English",
                    className: "text-black",
                  },
                ],
                [
                  {
                    text: "English",
                    className: "text-black",
                  },
                ],
              ],
              [
                [{ text: "Occupation & Background", className: "text-orange" }],
                [
                  {
                    text: "Works in I.T. for Worldwide Water Park Design.",
                    className: "text-black",
                  },
                ],
                [
                  {
                    text: "A student at SFU, studying her fourth year of Kinesiology.",
                    className: "text-black",
                  },
                ],
              ],
            ],
          },

          // Non-Citizens
          {
            type: "subtitle",
            content: "Non-Citizens",
            bgColor: "bg-yellow-bg",
          },
          {
            type: "table",
            headers: ["", "Kobe", "Joyce"],
            rows: [
              [
                [{ text: "Participants", className: "text-orange" }],
                [
                  {
                    type: "image",
                    url: "/Projects/Canadaca/CanadacaParticipantKobe.png",
                    alt: "Canadaca Participant Kobe",
                    className: "w-24",
                  },
                ],
                [
                  {
                    type: "image",
                    url: "/Projects/Canadaca/CanadacaParticipantJoyce.png",
                    alt: "Canadaca Participant Joyce",
                    className: "w-24",
                  },
                ],
              ],
              [
                [{ text: "Nationality", className: "text-orange" }],
                [
                  {
                    text: "Philippine",
                    className: "text-black",
                  },
                ],
                [
                  {
                    text: "Taiwan",
                    className: "text-black",
                  },
                ],
              ],
              [
                [{ text: "Age group", className: "text-orange" }],
                [
                  {
                    text: "Gen Z (1997 - 2009)",
                    className: "text-black",
                  },
                ],
                [
                  {
                    text: "Gen Z (1997 - 2009)",
                    className: "text-black",
                  },
                ],
              ],
              [
                [{ text: "Residency Status", className: "text-orange" }],
                [
                  {
                    text: "Temporary Resident",
                    className: "text-black",
                  },
                ],
                [
                  {
                    text: "Temporary Resident",
                    className: "text-black",
                  },
                ],
              ],
              [
                [{ text: "Primary Language", className: "text-orange" }],
                [
                  {
                    text: "Filipino",
                    className: "text-black",
                  },
                ],
                [
                  {
                    text: "Mandarin",
                    className: "text-black",
                  },
                ],
              ],
              [
                [{ text: "Occupation & Background", className: "text-orange" }],
                [
                  {
                    text: "Student at BCIT, studying Language and New Media, in Canada for 1.5 years.",
                    className: "text-black",
                  },
                ],
                [
                  {
                    text: "Student at BCIT, studying Language, in Canada for 2 years.",
                    className: "text-black",
                  },
                ],
              ],
            ],
          },
        ],
      },
      // Usability Testing Introduction
      {
        id: "section6",
        title: "Usability Testing Introduction",
        layout: "full-width",
        content: [
          // Citizens Tasks
          {
            type: "subtitle",
            content: "Citizens Tasks",
            bgColor: "bg-yellow-bg",
          },
          {
            type: "table",
            headers: ["Task", "Breakdown"],
            rows: [
              [
                [
                  {
                    text: "1. Find information on filing personal income tax.",
                    className: "text-orange",
                  },
                ],
                [
                  {
                    text: "1. Locate the main page for Taxes on Canada.ca.",
                    className: "text-black",
                  },
                  {
                    text: "2. Find the required forms needed for filing.",
                    className: "text-black",
                  },
                  {
                    text: "3. Identify the section covering Filing dates and Payment date for 2024 taxes.",
                    className: "text-black",
                  },
                  {
                    text: "4. Identify the different filing methods.",
                    className: "text-black",
                  },
                ],
              ],
              [
                [
                  {
                    text: "2. Check if you are eligible for a tax credit (CAIP).",
                    className: "text-orange",
                  },
                ],
                [
                  {
                    text: "1. Find the Tax credits of Climate Action Incentive Payment (CAIP) page.",
                    className: "text-black",
                  },
                  {
                    text: "2. Find the CAIP eligibility criteria.",
                    className: "text-black",
                  },
                  {
                    text: "3. Check how residents of Canada receive CAIP.",
                    className: "text-black",
                  },
                  {
                    text: "4. Confirm How much you can get.",
                    className: "text-black",
                  },
                ],
              ],
              [
                [
                  {
                    text: "3. Find information on how to pay your income tax online.",
                    className: "text-orange",
                  },
                ],
                [
                  {
                    text: "1. Navigate to the Make a payment to the CRA section on Canada.ca.",
                    className: "text-black",
                  },
                  {
                    text: "2. Identify the available payment options and review Online Banking Payment Options.",
                    className: "text-black",
                  },
                  {
                    text: "3. Can I pay my Income Tax (T1) 2024 tax return directly through my bank or credit union?",
                    className: "text-black",
                  },
                ],
              ],
            ],
          },

          // Non-citizens Tasks
          {
            type: "subtitle",
            content: "Non-citizens Tasks",
            bgColor: "bg-yellow-bg",
          },
          {
            type: "table",
            headers: ["Task", "Breakdown"],
            rows: [
              [
                [
                  {
                    text: "1. Find information on filing personal income tax.",
                    className: "text-orange",
                  },
                ],
                [
                  {
                    text: "1. Locate the main page for Taxes on Canada.ca.",
                    className: "text-black",
                  },
                  {
                    text: "2. Find the required forms needed for filing.",
                    className: "text-black",
                  },
                  {
                    text: "3. Identify the section covering Filing dates and Payment date for 2024 taxes.",
                    className: "text-black",
                  },
                  {
                    text: "4. Identify the different filing methods.",
                    className: "text-black",
                  },
                ],
              ],
              [
                [
                  {
                    text: "2. Find out if you need to file taxes as a temporary resident.",
                    className: "text-orange",
                  },
                ],
                [
                  {
                    text: "1. Find the section about tax obligations for International and non-residents.",
                    className: "text-black",
                  },
                  {
                    text: "2. Determine if you are a resident and do you need to file taxes.",
                    className: "text-black",
                  },
                ],
              ],
              [
                [
                  {
                    text: "3. Search for tuition tax deductions or benefits available for international students.",
                    className: "text-orange",
                  },
                ],
                [
                  {
                    text: "1. Find the page listing tax benefits and credits.",
                    className: "text-black",
                  },
                  {
                    text: "2. Check the eligibility criteria for tuition tax credits.",
                    className: "text-black",
                  },
                ],
              ],
            ],
          },

          // SUS analysis
          {
            type: "subtitle",
            content: "SUS analysis",
            bgColor: "bg-yellow-bg",
          },
          {
            type: "video",
            url: "/Projects/Canadaca/CanadacaSus.mp4",
          },
          {
            layout: "full-width",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "1. SUS (System Usability Scale) is a 10-question survey used to measure system usability.",
                      className: "text-black",
                    },
                  ],
                  [
                    {
                      text: "2. Users rate each statement from 1 (strongly disagree) to 5 (strongly agree), providing a score to assess ease of use and areas for improvement.",
                      className: "text-black",
                    },
                  ],
                ],
              },
            ],
          },
        ],
      },
      // Usability Testing Results
      {
        id: "section7",
        title: "Usability Testing Results",
        layout: "full-width",
        content: [
          // User Testing Times & SUS Scores
          {
            type: "subtitle",
            content: "User Testing Times & SUS Scores",
            bgColor: "bg-yellow-bg",
          },
          {
            type: "table",
            headers: ["Marty", "Liz", "Kobe", "Joyce"],
            rows: [
              [
                [
                  {
                    type: "image",
                    url: "/Projects/Canadaca/CanadacaParticipantMarty.png",
                    alt: "Canadaca Participant Marty",
                    className: "w-24",
                  },
                ],
                [
                  {
                    type: "image",
                    url: "/Projects/Canadaca/CanadacaParticipantLiz.png",
                    alt: "Canadaca Participant Liz",
                    className: "w-24",
                  },
                ],
                [
                  {
                    type: "image",
                    url: "/Projects/Canadaca/CanadacaParticipantKobe.png",
                    alt: "Canadaca Participant Marty",
                    className: "w-24",
                  },
                ],
                [
                  {
                    type: "image",
                    url: "/Projects/Canadaca/CanadacaParticipantJoyce.png",
                    alt: "Canadaca Participant Liz",
                    className: "w-24",
                  },
                ],
              ],
              [
                [{ text: "~4 Mins", className: "text-black" }],
                [{ text: "~6 Mins 30 Secs", className: "text-black" }],
                [{ text: "~5 Mins 20 Secs", className: "text-black" }],
                [{ text: "~14 Mins", className: "text-black" }],
              ],
              [
                [
                  { text: "92.5 / 100", className: "text-orange text-medium" },
                  {
                    text: "Could be described as nearly best imaginable.",
                    className: "text-black",
                  },
                ],
                [
                  { text: "35 / 100", className: "text-orange text-medium" },
                  {
                    text: "This score may be described as awful.",
                    className: "text-black",
                  },
                ],
                [
                  { text: "40 / 100", className: "text-orange text-medium" },
                  {
                    text: "This score could be described as poor.",
                    className: "text-black",
                  },
                ],
                [
                  { text: "20 / 100", className: "text-orange text-medium" },
                  {
                    text: "Could be seen as the worst imaginable score.",
                    className: "text-black",
                  },
                ],
              ],
            ],
          },
          // Citizens Rainbow Sheet
          {
            type: "subtitle",
            content: "Citizens Rainbow Sheet",
            bgColor: "bg-yellow-bg",
          },
          {
            type: "table",
            headers: ["Challenges", "Marty", "Liz"],
            rows: [
              [
                [
                  {
                    text: "Used browser search function (ctrl/cmd + f)",
                    className: "text-orange",
                  },
                ],
                [],
                [
                  {
                    text: "🟡",
                  },
                ],
              ],
              [
                [
                  {
                    text: "Navigation challenges",
                    className: "text-orange",
                  },
                ],
                [],
                [
                  {
                    text: "🟡",
                  },
                ],
              ],
              [
                [
                  {
                    text: "Overwhelming information (User thought there was too much to read)",
                    className: "text-orange",
                  },
                ],
                [],
                [
                  {
                    text: "🟡",
                  },
                ],
              ],
              [
                [
                  {
                    text: "Search effectiveness",
                    className: "text-orange",
                  },
                ],
                [
                  {
                    text: "🔴",
                  },
                ],
                [
                  {
                    text: "",
                  },
                ],
              ],
              [
                [
                  {
                    text: "No backtracking needed, but breadcrumbs were unclear",
                    className: "text-orange",
                  },
                ],
                [
                  {
                    text: "🔴",
                  },
                ],
                [
                  {
                    text: "🟡",
                  },
                ],
              ],
              [
                [
                  {
                    text: "User used search bar",
                    className: "text-orange",
                  },
                ],
                [
                  {
                    text: "🔴",
                  },
                ],
                [
                  {
                    text: "🟡",
                  },
                ],
              ],
              [
                [
                  {
                    text: "Wording is confusing",
                    className: "text-orange",
                  },
                ],
                [
                  {
                    text: "🔴",
                  },
                ],
                [
                  {
                    text: "🟡",
                  },
                ],
              ],
              [
                [
                  {
                    text: "Searched keywords as asked, affecting ease of finding information",
                    className: "text-orange",
                  },
                ],
                [
                  {
                    text: "🔴",
                  },
                ],
                [
                  {
                    text: "🟡",
                  },
                ],
              ],
              [
                [
                  {
                    text: "Unclear eligibility",
                    className: "text-orange",
                  },
                ],
                [
                  {
                    text: "",
                  },
                ],
                [
                  {
                    text: "🟡",
                  },
                ],
              ],
            ],
          },

          // Non-citizens Rainbow Sheet
          {
            type: "subtitle",
            content: "Non-citizens Rainbow Sheet",
            bgColor: "bg-yellow-bg",
          },
          {
            type: "table",
            headers: ["Challenges", "Kobe", "Joyce"],
            rows: [
              [
                [
                  {
                    text: "Used external search outside website",
                    className: "text-orange",
                  },
                ],
                [
                  {
                    text: "🔵",
                  },
                ],
                [],
              ],
              [
                [
                  {
                    text: "Lack of step-by-step guidance",
                    className: "text-orange",
                  },
                ],
                [
                  {
                    text: "🔵",
                  },
                ],
                [
                  {
                    text: "🟢",
                  },
                ],
              ],
              [
                [
                  {
                    text: "Difficulty finding official information",
                    className: "text-orange",
                  },
                ],
                [
                  {
                    text: "🔵",
                  },
                ],
                [
                  {
                    text: "🟢",
                  },
                ],
              ],
              [
                [
                  {
                    text: "No backtracking needed, but breadcrumbs were unclear",
                    className: "text-orange",
                  },
                ],
                [
                  {
                    text: "🔵",
                  },
                ],
                [
                  {
                    text: "🟢",
                  },
                ],
              ],
              [
                [
                  {
                    text: "Information was overwhelming",
                    className: "text-orange",
                  },
                ],
                [
                  {
                    text: "🔵",
                  },
                ],
                [
                  {
                    text: "🟢",
                  },
                ],
              ],
              [
                [
                  {
                    text: "Hard-to-find deduction lists",
                    className: "text-orange",
                  },
                ],
                [
                  {
                    text: "🔵",
                  },
                ],
                [
                  {
                    text: "",
                  },
                ],
              ],
              [
                [
                  {
                    text: "Confusing refund process",
                    className: "text-orange",
                  },
                ],
                [
                  {
                    text: "🔵",
                  },
                ],
                [],
              ],
              [
                [
                  {
                    text: "Document requirements not clearly outlined",
                    className: "text-orange",
                  },
                ],
                [
                  {
                    text: "🔵",
                  },
                ],
                [
                  {
                    text: "🟢",
                  },
                ],
              ],
              [
                [
                  {
                    text: "Unclear labeling makes information hard to find",
                    className: "text-orange",
                  },
                ],
                [],
                [
                  {
                    text: "🟢",
                  },
                ],
              ],
              [
                [
                  {
                    text: "Information is buried deep, hard to access specific details",
                    className: "text-orange",
                  },
                ],
                [],
                [
                  {
                    text: "🟢",
                  },
                ],
              ],
            ],
          },
        ],
      },
      // Solutions
      {
        id: "section8",
        title: "Solutions",
        layout: "full-width",
        content: [
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Streamlined Navigation",
                      className: "text-white bg-orange p-2 rounded-full",
                    },
                  ],
                  [
                    {
                      text: "Introduce an expandable hamburger menu for a clean, user-friendly layout.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/Canadaca/CanadacaStreamlinedNavigation1.webp",
                alt: "Streamlined Navigation",
                className: "w-full rounded",
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Streamlined Navigation",
                      className: "text-white bg-orange p-2 rounded-full",
                    },
                  ],
                  [
                    {
                      text: "Organize the menu into clear categories and subcategories to improve accessibility.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/Canadaca/CanadacaStreamlinedNavigation2.webp",
                alt: "Streamlined Navigation",
                className: "w-full rounded",
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Enhanced Search",
                      className: "text-white bg-orange p-2 rounded-full",
                    },
                  ],
                  [
                    {
                      text: "Add a large search bar with an intuitive placeholder (“Search government services, benefits, and more...”).",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/Canadaca/CandacaEnhancedSearchExperience1.webp",
                alt: "Enhanced Search",
                className: "w-full rounded",
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Enhanced Search",
                      className: "text-white bg-orange p-2 rounded-full",
                    },
                  ],
                  [
                    {
                      text: "Implement auto-suggestions for quicker access to key topics.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/Canadaca/CandacaEnhancedSearchExperience2.webp",
                alt: "Enhanced Search",
                className: "w-full rounded",
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Top Alert",
                      className: "text-white bg-orange p-2 rounded-full",
                    },
                  ],
                  [
                    {
                      text: "Display important alert (e.g., tax deadlines, benefits updates) above the navigation.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/Canadaca/CanadacaActionableTopBanner.webp",
                alt: "Top Alert",
                className: "w-full rounded",
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Visual Enhancements",
                      className: "text-white bg-orange p-2 rounded-full",
                    },
                  ],
                  [
                    {
                      text: "Added images for each step to make information more digestible.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/Canadaca/CanadacaVisualEnhancements.webp",
                alt: "Visual Enhancements",
                className: "w-full rounded",
              },
            ],
          },
          {
            layout: "two-column-1-2",
            content: [
              {
                type: "text",
                content: [
                  [
                    {
                      text: "Better User Flow",
                      className: "text-white bg-orange p-2 rounded-full",
                    },
                  ],
                  [
                    {
                      text: "Introduced buttons for step selection to help users move through the process easily.",
                      className: "text-black",
                    },
                  ],
                ],
              },
              {
                type: "image",
                url: "/Projects/Canadaca/CanadacaBetterUserFlow.webp",
                alt: "Visual Enhancements",
                className: "w-full rounded",
              },
            ],
          },
        ],
      },
      // Prototype
      {
        id: "section9",
        title: "Prototype",
        layout: "full-width",
        content: [
          {
            type: "video",
            url: "/Projects/Canadaca/CanadaPrototype.mp4",
          },
        ],
      },
    ],
  },
};

export default ProjectContent;
