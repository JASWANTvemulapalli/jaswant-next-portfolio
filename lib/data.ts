export const FULL_NAME = 'Jaswant Vemulapalli'
export const TAGLINE = 'Software Engineer — AI/ML • Backend'
export const EMAIL = 'vjaswant7@gmail.com'
export const LINKEDIN = 'https://www.linkedin.com/in/jaswant-vemulapalli/'
export const GITHUB = 'https://github.com/JASWANTvemulapalli'
export const RESUME_URL = '/Jaswant-Vemulapalli-Resume.pdf'

export type Project = {
  title: string
  tagline: string
  desc: string
  poster: string
  gif?: string
  tech: string[]
  links: { label: string, href: string }[]
}

export const projects: Project[] = [
  {
    title: 'SMART‑REQ',
    tagline: 'Two‑stage BERT for software requirement classification',
    desc: 'Stage‑1 classifier separates Functional vs Non‑Functional; Stage‑2 assigns 11 NFR attributes and priority (P0/P1). Built robust preprocessing and class‑imbalance handling.',
    poster: '/posters/smartreq.png',
    gif: '/gifs/smartreq.gif',
    tech: ['BERT', 'Sklearn', 'Python', 'NLP'],
    links: [{ label: 'GitHub', href: GITHUB }]
  },
  {
    title: 'Osteoporosis CNN',
    tagline: 'Spine X‑ray CNN — IOP paper',
    desc: 'End‑to‑end CNN pipeline that detects osteoporosis using AP spine radiographs; presented at AIECES 2023 and published in IOP.',
    poster: '/posters/osteo.png',
    gif: '/gifs/osteo.gif',
    tech: ['CNN', 'Python', 'OpenCV'],
    links: [{ label: 'Paper (IOP)', href: 'https://iopscience.iop.org/article/10.1088/1742-6596/2571/1/012017' }]
  },
  {
    title: 'US Brain Seg + Metrology',
    tagline: 'Ventricles + Midline segmentation with mm‑accurate measures',
    desc: 'Medical ultrasound segmentation with metrology (MER, widths) via DICOM pixel spacing. Produces annotated image + JSON measurements; feeds a scheduling/production pipeline.',
    poster: '/posters/seg.png',
    gif: '/gifs/seg.gif',
    tech: ['TensorFlow', 'DICOM', 'OpenCV'],
    links: []
  }
]

export const skills = [
  { label: 'Languages', items: ['Java', 'Python', 'JavaScript', 'SQL'] },
  { label: 'Frameworks', items: ['Spring Boot', 'Hibernate', 'gRPC', 'React', 'JUnit'] },
  { label: 'Cloud & Tools', items: ['AWS', 'MySQL', 'Git', 'JIRA', 'Postman', 'DaVinci Resolve'] },
  { label: 'Concepts', items: ['Agile', 'MVC', 'Microservices', 'DSA'] }
]

export const experience = [
  {
    studio: 'Longeviti Neuro Solutions',
    role: 'Software Engineer Intern',
    dates: 'Jun 2025 — Present',
    location: 'Baltimore, MD',
    bullets: [
      'Built AI to segment ventricles & midline on brain ultrasound; added metrology using DICOM.',
      'Contributed to scheduling automation for custom/OTS implants (priorities, role‑based flow).',
      'Designed tech assignment and demand prioritization logic for production.'
    ]
  },
  {
    studio: 'Wipro (Uber Contractor)',
    role: 'Software Engineer',
    dates: 'Apr 2022 — Jul 2024',
    location: 'Hyderabad, India',
    bullets: [
      'Shipped 20+ production APIs (Java/Spring Boot); gRPC + Protobuf in microservices.',
      'ERDs & NoSQL schemas; cloud‑native patterns at scale.',
      'Cadence workflows for SAP Fieldglass sync; 40% manual effort reduced.'
    ]
  }
]

export const education = [
  { school: 'University of Maryland, College Park', degree: 'M.Eng., Software Engineering', dates: 'Aug 2024 — May 2026', gpa: '3.56/4.0' },
  { school: 'Manipal Institute of Technology', degree: 'B.Tech., ECE', dates: 'Jul 2018 — Jun 2022', gpa: '3.57/4.0' }
]
