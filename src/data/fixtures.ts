export default {
  author: "Miles Eu",
  hero: {
    subtitle: "Computer Science MSc Student at University of Bath.",
    description: "This is my guide and roadmap on becoming a developer.",
    cta: "See Roadmap",
  },
  products: {
    featured: [
      {
        name: "roadmap.sh",
        medium: "Roadmaps · Guides · Videos",
        summary: "A community collection of educational content to help guide developers.",
        copy: [
          "Choose your path: Frontend, Backend."
        ],
        links: {
          color: "#363636",
          primary: {
            name: "Discover",
            url: "https://roadmap.sh/"
          }
        },
        images: [
          "/roadmap/0.png",
          "/roadmap/1.png",
          "/roadmap/2.png"
        ]
      },
      {
        name: "ClimbList",
        medium: "React · Next.js",
        summary: "Construction is now in progress.",
        copy: [
          "Compare and track grades and pricing between gyms around the country.",
        ],
        links: {
          color: "#363636",
          primary: {
            name: "Learn more",
            url: "https://climblist.com/"
          }
        },
        images: [
          "/climblist/0.jpg",
          "/climblist/1.jpg",
        ]
      }
    ],
    // Only supports 0-3 at the moment
    minor: [
      {
        name: "Volunteer Portal",
        description: "Find and track volunteer opportunities.",
        link: {
          name: "Github",
          url: "https://github.com/zendesk/volunteer_portal"
        }
      },
      {
        name: "Final Slash VR",
        description: "Short survival experience on an abandoned planet.",
        link: {
          name: "Download",
          url: "https://samzx.itch.io/final-slash-vr"
        }
      },
      {
        name: "MPH Watch",
        description: "Stats for miners mining on Mining Pool Hub.",
        link: {
          name: "Demo",
          url: "https://mphwatch.samxie.net/demo"
        }
      }
    ]
  },
  logoSection: {
    title: "As hired by",
    // Only supports 0-3 at the moment
    logos: [
      {
        src: "/logos/unimelb.svg",
        url: "https://unimelb.edu.au/",
        alt: "Unimelb"
      },
      {
        src: "/logos/zendesk.svg",
        url: "https://www.zendesk.com/",
        alt: "Zendesk"
      },
      {
        src: "/logos/cashapp.svg",
        url: "https://cash.app/",
        alt: "Cash App"
      }
  ]
  },
  footer: {
    tagline: "Miles YY Eu — Bristol, UK",
    links: [
      {
        name: "Github",
        url: "https://github.com/mileseu",
        fa: "fab fa-github"
      },
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/mileseu/",
        fa: "fab fa-linkedin"
      },
      {
        name: "Email",
        url: "mailto:mileseu@me.com",
        fa: "fa fa-envelope"
      },
    ]
  }
}