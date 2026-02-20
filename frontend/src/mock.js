// Mock data for Sahrul Efendi's Portfolio

export const personalInfo = {
  name: "Sahrul Efendi",
  title: "ERP Software Engineer",
  email: "sahrulefendi102@gmail.com",
  location: "Indonesia",
  yearsExperience: 4,
  bio: "Passionate ERP Software Engineer with 4 years of expertise in Odoo development and implementation. Specialized in building custom business solutions that streamline operations and drive digital transformation. Proven track record in delivering complex ERP projects across various industries.",
  tagline: "Building Intelligent ERP Solutions with Odoo"
};

export const projects = [
  {
    id: 1,
    title: "Client Management System",
    description: "Comprehensive CRM solution built on Odoo framework to manage client relationships, track interactions, and automate sales workflows. Implemented custom modules for lead scoring and automated follow-ups.",
    technologies: ["Odoo 16", "Python", "PostgreSQL", "JavaScript", "XML"],
    category: "CRM",
    highlights: [
      "Automated client onboarding workflow",
      "Custom reporting dashboards",
      "Email integration and automation",
      "Mobile-responsive interface"
    ]
  },
  {
    id: 2,
    title: "Training Management System",
    description: "Full-featured TMS developed to handle course scheduling, instructor management, student enrollment, and certification tracking. Integrated with payment gateway for seamless course registration.",
    technologies: ["Odoo 15", "Python", "PostgreSQL", "REST API", "JavaScript"],
    category: "Education",
    highlights: [
      "Course catalog and scheduling module",
      "Certificate generation automation",
      "Payment gateway integration",
      "Attendance tracking system"
    ]
  },
  {
    id: 3,
    title: "Volunteer & Donation Management",
    description: "Non-profit organization platform managing volunteer coordination, donation tracking, and event management. Features include donor portal, volunteer scheduling, and impact reporting.",
    technologies: ["Odoo 16", "Python", "PostgreSQL", "XML", "QWeb"],
    category: "Non-Profit",
    highlights: [
      "Volunteer scheduling and coordination",
      "Online donation processing",
      "Impact reporting and analytics",
      "Event management module"
    ]
  },
  {
    id: 4,
    title: "Enterprise Resource Planning System",
    description: "End-to-end ERP implementation for manufacturing company covering inventory, procurement, sales, accounting, and HR modules. Customized workflows to match client's business processes.",
    technologies: ["Odoo 15", "Python", "PostgreSQL", "JavaScript", "XML"],
    category: "Manufacturing",
    highlights: [
      "Multi-warehouse inventory management",
      "Production planning module",
      "Financial accounting integration",
      "HR and payroll automation"
    ]
  }
];

export const skills = {
  backend: [
    { name: "Python", level: 95 },
    { name: "Odoo Framework", level: 90 },
    { name: "PostgreSQL", level: 85 },
    { name: "REST API", level: 80 }
  ],
  frontend: [
    { name: "JavaScript", level: 85 },
    { name: "XML/QWeb", level: 90 },
    { name: "jQuery", level: 75 },
    { name: "Bootstrap", level: 80 }
  ],
  odooModules: [
    "Sales", "CRM", "Inventory", "Accounting", "HR", "Manufacturing",
    "Purchase", "Project", "Custom Module Development", "Website Builder"
  ],
  tools: [
    "Git/GitHub", "Docker", "Linux", "Nginx", "VS Code", "PyCharm"
  ]
};

export const services = [
  {
    id: 1,
    title: "ERP Implementation",
    description: "End-to-end Odoo ERP implementation tailored to your business needs, from requirement analysis to deployment and training.",
    features: [
      "Business process analysis",
      "System configuration",
      "Data migration",
      "User training"
    ]
  },
  {
    id: 2,
    title: "Custom Module Development",
    description: "Development of custom Odoo modules to extend functionality and meet specific business requirements not covered by standard modules.",
    features: [
      "Custom workflow design",
      "Integration with third-party systems",
      "Module customization",
      "API development"
    ]
  },
  {
    id: 3,
    title: "IT Consulting",
    description: "Strategic IT consulting to help businesses optimize their operations through effective use of ERP systems and digital transformation.",
    features: [
      "Technology assessment",
      "Digital transformation strategy",
      "Process optimization",
      "Technical support"
    ]
  },
  {
    id: 4,
    title: "System Integration",
    description: "Seamless integration of Odoo with existing business systems, third-party applications, and external services.",
    features: [
      "API integration",
      "Payment gateway setup",
      "E-commerce integration",
      "Legacy system migration"
    ]
  }
];

export const experience = [
  {
    id: 1,
    year: "2021 - Present",
    position: "ERP Software Engineer",
    company: "Tech Solutions Inc.",
    description: "Leading Odoo implementation projects and developing custom modules for diverse clients across multiple industries."
  },
  {
    id: 2,
    year: "2020 - 2021",
    position: "Junior Odoo Developer",
    company: "Digital Systems Co.",
    description: "Contributed to ERP development projects, focusing on module customization and client requirement analysis."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Michael Anderson",
    position: "Operations Director",
    company: "ManufactureFlow Ltd.",
    content: "Sahrul's expertise in Odoo helped us streamline our entire manufacturing process. The custom ERP solution delivered exceeded our expectations.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "CEO",
    company: "EduTech Academy",
    content: "The Training Management System developed by Sahrul transformed how we manage our courses. Professional, responsive, and highly skilled.",
    rating: 5
  },
  {
    id: 3,
    name: "David Chen",
    position: "IT Manager",
    company: "GreenEarth Foundation",
    content: "Outstanding work on our Volunteer & Donation platform. Sahrul understood our needs and delivered a solution that made a real impact.",
    rating: 5
  }
];

export const certifications = [
  "Odoo Certified Developer",
  "Python Programming Professional",
  "PostgreSQL Database Administration",
  "Agile Project Management"
];
