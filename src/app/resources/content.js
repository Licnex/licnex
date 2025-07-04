import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Momin',
    lastName: 'Khan',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Student & Developer',
    avatar: '/images/avatar.jpg',
    location: 'Asia/Karachi',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: []  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/licnex',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/momin-khan-592797283/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/LicnexKhan',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:mominravage@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Student, Programmer & Problem Solver</>,
    subline: <>I'm Momin Khan, a Grade 9 student at <InlineCode>LGS JT Senior Boys Campus</InlineCode> passionate about programming, mathematics, and competitive chess. <br /> I build projects, participate in hackathons, and solve complex problems.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Grade 9 student at Lahore Grammar School with a passion for computer science, mathematics, and competitive chess. I actively participate in programming competitions, hackathons, and mathematical olympiads while building innovative projects in my spare time.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Competitions & Events',
        experiences: [
            {
                company: 'HackClub High Seas',
                timeframe: '2024',
                role: 'Participant & Prize Winner',
                achievements: [
                    <>Participated in HackClub's High Seas hackathon and won multiple prizes for innovative projects.</>,
                    <>Contributed to open-source projects and built meaningful applications during the competition.</>
                ],
                images: []
            },
            {
                company: 'Chess Competitions',
                timeframe: '2023 - 2024',
                role: 'Competitive Player',
                achievements: [
                    <>Participated in JT Fest chess tournament representing my school.</>,
                    <>Competed in 4th Kings Chess Club Blitz Championship (FIDE Rated tournament).</>,
                    <>Regularly participate in competitive chess events and tournaments.</>
                ],
                images: []
            },
            {
                company: 'Programming Competitions',
                timeframe: '2023 - 2024',
                role: 'Participant',
                achievements: [
                    <>Participated in SEAMO Math Olympiad demonstrating mathematical problem-solving skills.</>,
                    <>Competed in Codebridge hackathon, building innovative solutions under time constraints.</>,
                    <>Active participant in NERC (National Engineering Robotics Contest).</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'LGS JT Senior Boys Campus',
                description: <>Currently in Grade 9, focusing on computer science, mathematics, and competitive programming.</>
            },
            {
                name: 'HackClub',
                description: <>Active member where I develop projects, participate in hackathons, and collaborate with fellow developers.</>
            },
            {
                name: 'Online Learning',
                description: <>Completed Python 8hr course by Mosh Hamedani and Brilliant Logic course for advanced problem-solving.</>
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Python',
                description: <>Very proficient in Python development. Used for automation, data processing, and building various projects including web applications and algorithmic solutions.</>,
                images: []
            },
            {
                title: 'Arduino & Embedded Systems',
                description: <>Proficient in Arduino C++ programming. Built robotics projects including line followers and automated systems for competitions like NERC.</>,
                images: []
            },
            {
                title: 'Web Development',
                description: <>Experience with HTML (very proficient), JavaScript, React, and Next.js. Built personal websites including portfolio and blog projects.</>,
                images: []
            },
            {
                title: 'Programming Languages',
                description: <>Familiar with multiple languages: C/C++ (basic), Java Script (basic), Hugo (basic). Continuously expanding language repertoire.</>,
                images: []
            },
            {
                title: 'Problem Solving',
                description: <>Active on Project Euler solving mathematical programming challenges. Strong foundation in algorithms and competitive programming.</>,
                images: []
            }
        ]
    },
    achievements: {
        display: true,
        title: 'Achievements & Interests',
        items: [
            {
                title: 'Competitive Programming',
                description: <>Active participant in mathematical olympiads (SEAMO) and programming competitions. Continuously solving Project Euler challenges to strengthen algorithmic thinking.</>
            },
            {
                title: 'Chess Excellence',
                description: <>Competitive chess player with participation in FIDE-rated tournaments including the 4th Kings Chess Club Blitz Championship and school representations.</>
            },
            {
                title: 'Hackathon Success',
                description: <>Winner of multiple prizes in HackClub High Seas hackathon, demonstrating ability to build innovative solutions under time constraints.</>
            },
            {
                title: 'Robotics & Engineering',
                description: <>NERC participant with experience in Arduino programming, PCB design, and autonomous robotics including advanced line-following robots with PID control.</>
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Programming projects, robotics, and technical implementations by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/[locale]/work/projects/en/
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: '/images/gallery/img-01.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-02.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-03.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-04.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-05.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-06.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-07.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-08.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-09.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-10.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-11.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-12.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-13.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-14.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };