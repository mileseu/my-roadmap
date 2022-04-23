export default {
  author: "Miles Eu",
  hero: {
    subtitle: "Computer Science MSc Student at University of Bath.",
    description: "This is my roadmap and resource guide on becoming a developer.",
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
          "/cs50/0.png",
          "/cs50/1.png",
          "/cs50/2.png",
        ]
      },
      {
      name: "Automate The Boring Stuff With Python",
      medium: "Beginner · Python · Automation",
      summary: "Practical Programming for Total Beginners.",
      copy: [
        "Practice making Python programs to create useful and impressive feats of automation.",
      ],
      links: {
        color: "#363636",
        primary: {
          name: "Code more",
          url: "https://automatetheboringstuff.com/"
        }
      },
      images: [
        "/automate/auto1.jpg",
        "/automate/auto2.png",
      ]
    }
  ],
    // Only supports 0-3 at the moment
    minor: [
      {
        name: "Tech Interview Handbook",
        description: "Preparation material.",
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
  logoSection: {
    title: "University:",
    // Only supports 0-3 at the moment
    logos: [
      {
        src: "/logos/logo.png",
        url: "https://www.bath.ac.uk/",
        alt: "Unibath"
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