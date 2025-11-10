// Fix: Import Event type.
import { Project, ProjectCategory, Event } from './types';

export const projects: Project[] = [
  {
    id: "future-of-designing",
    title: "The Future of Designing and Making",
    subtitle: "Integrating Artificial Intelligence into Community Makerspaces",
    year: "2025",
    category: ProjectCategory.AI_RESEARCH,
    image: "/future-of-designing.jpg",
    featured: true,
    externalLink: "/thesis.pdf",
    images: [
      "/future-of-designing-1.jpg",
      "/future-of-designing-2.jpg",
      "/future-of-designing-3.jpg",
    ],
    overview: "This project explores how artificial intelligence can become a useful and ethical tool within community makerspaces. It asks whether AI, usually developed for big industries, could instead support local creativity and learning. The research was carried out with Fablab Barcelona, Ateneu de Gràcia, and Fab Casa del Mig, combining design research, digital fabrication, and social participation.",
    industry: ["Design Research", "Digital Fabrication", "Artificial Intelligence"],
    service: ["Research", "Prototyping", "Community Engagement"],
    learnings: "AI can expand design access, but only when integrated with community values, teaching, and ethical awareness. Makerspaces can serve as testbeds for inclusive, decentralized innovation.",
    needs: "The starting point came from a growing gap between what AI tools can generate and what makers can actually fabricate. The need was to explore how AI could become part of local making, lowering barriers while maintaining ethical, educational, and collaborative values, from generating ideas to physically fabricating prototypes without replacing human creativity.",
    concept: "The concept centered on the idea of AI as a Design Diffuser — a tool that spreads design capability across communities rather than concentrating it in corporations. The project mapped the existing ecosystem of generative AI tools and identified where they break down when moved from screen to machine. This led to three key interventions: Accessible Tool Testing, Workshops for AI Literacy, and a Community Manifesto.",
    process: [
      "Tool Mapping: A comprehensive survey of existing AI tools categorized by design stage and fabrication method.",
      "Prototyping: Experiments with text-to-3D modeling, laser-cutting prompts, and AI-assisted design of small functional objects.",
      "Workshops: Conducted at Ateneu de Gràcia and Fab Casa del Mig, involving local makers to explore AI through collective making.",
      "Roundtable and Manifesto: Insights were synthesized into a manifesto outlining principles for ethical, accessible, and community-driven AI design practices."
    ],
    outcome: "The thesis concluded with an exhibition at Fab Lab Barcelona, showing the prototypes, tool mappings, workshop documentation, and the AI-Making Manifesto. Visitors could explore examples of AI-generated objects that had been physically produced using makerspace tools.",
    reflection: "The project proposes that AI's true potential in design is not about speed or automation, but about access and understanding. It can bridge technical gaps, support education, and strengthen community knowledge — as long as it remains transparent, inclusive, and open to critique."
  },
  {
    id: "miralls-del-dema",
    title: "Miralls del Demà",
    subtitle: "Interactive Installation for Llum Barcelona 2025",
    year: "2025",
    category: ProjectCategory.INSTALLATIONS,
    image: "/miralls-del-dema.jpg",
    featured: true,
    externalLink: "https://blog.iaac.net/miralls-del-dema-mirrors-of-tomorrow-llum-2025/",
    images: [
      "/miralls-del-dema-1.jpg",
      "/miralls-del-dema-2.jpg",
      "/miralls-del-dema-3.jpg",
    ],
    overview: "Miralls del Demà (Mirrors of Tomorrow) was an immersive installation for the Llum BCN Festival 2025. Participants spoke into microphones, and their voices were processed in real time by an AI system that transformed them into evolving light projections, creating a dialogue between human expression and machine interpretation about climate change.",
    industry: ["Public Art", "Interactive Design", "Artificial Intelligence"],
    service: ["System Design", "AI Development", "Electronics", "Interaction Design"],
    learnings: "Large-scale installations can make complex topics tangible when art, technology, and participation meet. Collaboration between disciplines is key to translate social issues into meaningful experiences.",
    needs: "The main question was how to visualize collective emotion on a public scale — how to turn something invisible like concern, empathy, or fear about climate change into a shared sensory experience. The challenge was merging sound capture, NLP, visual generation, and large-scale projection into a single responsive system.",
    concept: "The concept of Mirrors of Tomorrow came from the idea that our future is shaped by what we say and do today. Each person's voice became a “mirror” contributing to a collective image of tomorrow. The design combined three key systems: Input Layer (microphones), Processing Layer (AI sentiment analysis), and Output Layer (generative light animations on a curved LED screen).",
    process: [
        "Research and Ideation: Defining how to connect language and emotion through visual output.",
        "Technical Design: The AI system used voice detection and a sentiment model. Outputs were mapped to brightness, color, and motion speed.",
        "Electronics Production: Multiple Arduino Nano boards handled microphone inputs and sensor readings.",
        "Fabrication and Assembly: All components were custom-built to withstand outdoor conditions.",
        "Testing and Calibration: The final system was tested on-site to synchronize light, sound, and AI interpretation."
    ],
    outcome: "At night, the site transformed into an open stage where the city could “speak to itself.” Calm tones produced gentle, slow waves, while urgent messages generated fast, fractured movements. The installation stood as a metaphor for collective consciousness — a space where technology acted as a medium for empathy and connection.",
    reflection: "Miralls del Demà proved how public art and AI can merge into a participatory system that reflects human emotion. The project reinforced the idea that AI can extend artistic expression beyond data visualization — becoming a tool for listening, translating, and building new forms of shared understanding."
  },
  {
    id: "unseen-exposures",
    title: "Unseen Exposures",
    subtitle: "Interactive Machines on Data, Privacy, and Surveillance",
    year: "2025",
    category: ProjectCategory.INSTALLATIONS,
    image: "/unseen-exposures.jpg",
    featured: true,
    externalLink: "/unseen-research.pdf",
    images: [
      "/unseen-exposures-1.jpg",
      "/unseen-exposures-2.jpg",
    ],
    overview: "Unseen Exposures is a set of three interactive machines — AdProfiler, Read the Room, and Aggressive Machine — that question how personal data is collected, analyzed, and used. Each device translates digital surveillance into physical form, making the hidden processes of data capitalism visible and experiential.",
    industry: ["Critical Design", "Interactive Art", "Data Ethics"],
    service: ["Concept Design", "Prototyping", "AI Systems", "Exhibition"],
    learnings: "Data collection is rarely visible. By materializing invisible digital systems, people can confront how their behavior is tracked and traded. Design can help make abstract issues like surveillance and bias tangible.",
    needs: "The project started with a clear need: to expose the mechanisms of data collection in a way that is understandable, interactive, and critical. The goal was to turn surveillance into an experience — something people could touch, see, and react to, revealing how data interpretation shapes identity and autonomy.",
    concept: "The installation consists of three main pieces: 1. AdProfiler: A satirical 'advertising oracle' that generates targeted ads based on personality questions. 2. Read the Room: A sensor-based setup that uses computer vision to interpret collective 'mood' from body posture. 3. Aggressive Machine: A device that responds to proximity with confrontational sound and light, symbolizing intrusive monitoring.",
    process: [
        "Research Phase: Analyzed common AI systems for facial recognition, sentiment analysis, and behavioral profiling.",
        "Hardware and Prototyping: Each machine was built with Raspberry Pi and Arduino components, with intentionally raw and mechanical aesthetics.",
        "Software Development: Python-based scripts processed live data and generated real-time outputs.",
        "Exhibition Design: The machines were arranged as a “mini lab” for visitors to move between."
    ],
    outcome: "Displayed as part of the MDEF Design Studio exhibition in 2025, the exhibit invited visitors to reflect on the silent trade between convenience and privacy. Participants left with personalized “data profiles” and visual traces of how they had been interpreted, bridging the gap between technical systems and everyday awareness.",
    reflection: "This work explored how design can serve as a critical interface between people and data systems. Unseen Exposures taught me that technology criticism doesn't need to happen in text or policy; it can take shape through material encounters that provoke reflection and curiosity."
  },
  {
    id: "tania-pilot",
    title: "TÀNIA Pilot",
    subtitle: "An AI Voice for the Neighborhood",
    year: "2025",
    category: ProjectCategory.AI_RESEARCH,
    image: "/tania-pilot.jpg",
    featured: true,
    externalLink: "https://www.projectetania.cat/",
    images: [
      "/tania-pilot-1.jpg",
      "/tania-pilot-2.jpg",
      "/tania-pilot-3.jpg",
    ],
    overview: "TÀNIA is a social and technological pilot project developed to address noise pollution and coexistence in public spaces. It began in Plaça de la Virreina, Barcelona, blending citizen science, environmental data, and AI into a single platform that transforms local concerns into communication, care, and awareness.",
    industry: ["Urban Design", "Social Innovation", "Artificial Intelligence"],
    service: ["Research", "Interaction Design", "Prototyping", "Community Engagement"],
    learnings: "Technology gains meaning when shaped by the people it serves. Designing with communities requires tools that are not only intelligent but also ethical and empathetic.",
    needs: "Barcelona's public squares often see clashes between nightlife, tourism, and residents. The city needed a way to mediate between sound and emotion. The challenge was to use technology as a social bridge to help residents, policymakers, and businesses hear each other, translating data into constructive dialogue.",
    concept: "The system was built on four pillars: 1. Citizen Science: Residents collected noise data via sensors. 2. Participatory Research: Workshops captured personal stories about the problem. 3. AI Persona – RUT: An AI chatbot, the 'voice of the square,' was created from the data. 4. Public Communication: Screens displayed RUT's evolving messages, visualizing how the plaza 'felt'.",
    process: [
        "Diagnosis & Citizen Mapping: Collaborated with local residents to understand the emotional and physical effects of nighttime noise.",
        "Sensor Deployment: IoT sound sensors (Smart Citizen Kits) were installed to record acoustic data.",
        "Workshops & Co-Design: Residents, data scientists, and designers worked together to analyze results.",
        "AI Development: RUT was trained to communicate in a tone that reflected empathy and local character.",
        "Prototyping & Testing: RUT's messages appeared on digital displays, reacting to live data and community interaction."
    ],
    outcome: "The installation turned the Plaça de la Virreina into a conversational space. Passersby could read RUT's comments, grounded in real-time noise levels. The project demonstrated that AI can act as a mediator for coexistence, combining environmental data with human stories.",
    reflection: "TÀNIA taught me that AI doesn't need to be distant or abstract — it can live in a public square, represent collective emotion, and make urban challenges more human. It became proof that digital tools can build empathy when designed to listen first."
  },
  {
    id: "compostable-altar",
    title: "Compostable Altar",
    subtitle: "Biomaterials, Ritual, and Soil Regeneration",
    year: "2024",
    category: ProjectCategory.AI_RESEARCH,
    image: "/compostable-altar.jpg",
    externalLink: "https://github.com/Pavon-Bet/Compostable-Altar-offering-to-the-earth",
    images: [
      "/compostable-altar-1.jpg",
      "/compostable-altar-2.jpg",
      "/future-of-designing-1.jpg",
      "/future-of-designing-2.jpg",
    ],
    overview: "Compostable Altar is a research project that investigates how biomaterials from organic waste can nourish soil. It combines artistic expression, environmental science, and digital fabrication to explore the relationship between matter, decay, and regeneration. The altar acts as both a sculpture and a living experiment.",
    industry: ["Bio Design", "Art & Ecology", "Digital Fabrication"],
    service: ["Material Research", "Electronics & Data Systems", "Prototyping"],
    learnings: "Design becomes ecological when the outcome decomposes rather than endures. By combining biomaterials, sensing, and digital modeling, it's possible to link art, science, and environmental cycles.",
    needs: "Today's design world often focuses on permanence and control. This project challenged those ideas by asking: what if the value of design lay in its disappearance? The need was to explore a circular material practice where waste transforms into life, and technology helps us understand ecological processes.",
    concept: "The concept took inspiration from ancestral rituals of making offerings to the earth. The altar was designed as a hybrid of manual craft and algorithmic form-making. Organic waste was reprocessed into 3D-printable biomaterial mixtures. Embedded sensors measured temperature, humidity, and pH, feeding a predictive AI model to analyze how different biomaterials affected soil fertility.",
    process: [
        "Material Experimentation: Tests were run using citrus pulp, coffee grounds, sawdust, and algae for 3D printability.",
        "Digital Fabrication: The altar geometry was created through digital scanning and parametric modeling.",
        "Sensor Integration: A network of low-cost sensors collected real-time data from the soil.",
        "AI Modeling: Data was fed into a predictive model to correlate material composition with nutrient release.",
        "Collaboration & Exhibition: The project was developed with institutions like the Basque BioDesign Center."
    ],
    outcome: "The Compostable Altar was presented as both a research artifact and a living system. Visitors could observe the altar's slow transformation, supported by digital displays showing live environmental data. The installation served as a prototype for sustainable fabrication, suggesting how future materials could serve ecological functions beyond their form or lifespan.",
    reflection: "Working on Compostable Altar revealed that technology can become part of nature's rhythm when used to observe rather than dominate. It showed that collaboration across art, biology, and computation can build a more sensitive design culture — one that values cycles, change, and the quiet intelligence of decay."
  },
  {
    id: "incapto-coffee",
    title: "Incapto Coffee",
    subtitle: "Design, Production, and Brand Integration in a Growing Startup",
    year: "2022-2023",
    category: ProjectCategory.PRODUCT_DESIGN,
    image: "/incapto-coffee.jpg",
    externalLink: "https://incapto.com/",
    images: [
      "/incapto-coffee-1.jpg",
      "/incapto-coffee-2.jpg",
      "/incapto-coffee-3.jpg",
    ],
    overview: "At Incapto Coffee, a Barcelona-based startup offering sustainable coffee solutions, I worked as a designer across product, packaging, and communication. The role involved developing the full range of packaging, producing brand collateral, and supporting the design of the next generation of the company's coffee machine.",
    industry: ["Product Design", "Branding", "Packaging"],
    service: ["Graphic Design", "Production Management", "Product Development"],
    learnings: "Design inside a startup is about adaptability. Balancing creative vision with manufacturing and marketing needs teaches how design connects every part of a business.",
    needs: "Incapto was scaling quickly and needed a consistent, flexible visual system that could adapt across packaging, retail, and digital platforms. There was also a need to connect physical and digital touchpoints, ensuring that what customers saw on the shelf matched their online experience.",
    concept: "The packaging system was based on clarity, modularity, and sustainability. Each product line shared a unified visual language — clean geometry, bold typography, and clear color coding. I worked closely with marketing to select recyclable and low-impact substrates. For digital assets, I developed consistent templates for newsletters, social media, and promotional materials.",
    process: [
        "Graphic & Packaging Design: Designed all packaging lines, including coffee bags, boxes, and shipping materials.",
        "Supplier Coordination: Communicated directly with printing and packaging partners to adjust materials, finishes, and tolerances.",
        "Brand & Communication Assets: Created flyers, t-shirts, and event materials.",
        "Product Development Collaboration: Supported the industrial design team on the new Incapto coffee machine.",
        "Feedback Loop: Worked between marketing, production, and logistics to align design decisions with operational needs."
    ],
    outcome: "By the end of my time at Incapto, the company had a fully coherent design language across all media. The new packaging improved customer recognition, reduced printing costs, and aligned with sustainability goals. The project demonstrated how integrated design work — from packaging to product — strengthens both brand identity and user experience.",
    reflection: "Working at Incapto showed me how design operates within real business constraints. Every aesthetic choice affected production time, sustainability, and customer trust. This experience grounded my later work in research and speculative design, reminding me that every experiment must eventually meet real users, materials, and systems."
  }
];

// Fix: Add events data.
export const events: Event[] = [
  {
    id: "llum-bcn-2025",
    name: "Llum BCN Festival 2025",
    type: "Festival",
    startDate: "2025-02-14T00:00:00Z",
    endDate: "2025-02-16T00:00:00Z",
    location: "Poblenou, Barcelona",
    country: "Spain",
    link: "https://www.barcelona.cat/llumbcn/",
    image: "/miralls-del-dema.jpg",
  },
  {
    id: "mdef-exhibition-2025",
    name: "MDEF Design Studio Exhibition",
    type: "Exhibition",
    startDate: "2025-06-20T00:00:00Z",
    endDate: "2025-06-25T00:00:00Z",
    location: "Fab Lab Barcelona",
    country: "Spain",
    image: "/unseen-exposures.jpg",
  },
  {
    id: "ai-making-exhibit-2025",
    name: "AI-Making Thesis Exhibition",
    type: "Exhibition",
    startDate: "2025-07-10T00:00:00Z",
    endDate: "2025-07-10T00:00:00Z",
    location: "Fab Lab Barcelona",
    country: "Spain",
    link: "/thesis.pdf",
    image: "/future-of-designing.jpg",
  },
];
