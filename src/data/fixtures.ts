export default {
  author: "Miles Eu",
  hero: {
    subtitle: "Computer Science MSc Student at University of Bath.",
    description: "This is my guide and roadmap on becoming a developer and the best sites to learn.",
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
        name: "CS50",
        medium: "Beginner · C · Python · SQL",
        summary: "CS50: Introduction to Computer Science.",
        copy: [
          "An introduction to the intellectual enterprises of computer science and the art of programming.",
        ],
        links: {
          color: "#363636",
          primary: {
            name: "Learn more",
            url: "https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0"
          }
        },
        images: [
          "/cs50/0.jpg",
          "/cs50/1.jpg",
          "/cs50/2.jpg",
        ]
      }
    ],
    // Only supports 0-3 at the moment
    minor: [
      {
        name: "Tech Interview Handbook",
        description: "Free curated interview preparation materials for busy people.",
        link: {
          name: "Read",
          url: "https://www.techinterviewhandbook.org/"
        }
      },
      {
        name: "LeetCode",
        description: "Challenge yourself to coding problems.",
        link: {
          name: "Code",
          url: "https://leetcode.com/explore/"
        }
      },
      {
        name: "Big-O Cheat Sheet",
        description: "Know Thy Complexities!",
        link: {
          name: "Demo",
          url: "https://www.bigocheatsheet.com/"
        }
      }
    ]
  },
  /*
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
*/
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