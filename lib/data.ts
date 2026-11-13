export const links = [
  ["GitHub", "https://github.com/tusharsingh3199", "https://cdn.simpleicons.org/github/FFFFFF"],
  ["LinkedIn", "https://www.linkedin.com/in/tushar-singh-97526a379/", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"],
  ["LeetCode", "https://leetcode.com/tusharsingh3199", "https://cdn.simpleicons.org/leetcode/FFFFFF"],
  ["Kaggle", "https://www.kaggle.com/tusharsingh3199", "https://cdn.simpleicons.org/kaggle/FFFFFF"],
  ["YouTube", "https://youtube.com/@tusharsingh3282", "https://cdn.simpleicons.org/youtube/FFFFFF"],
];
export const email = "tusharsingh1346@gmail.com";

export const stack = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: "python", mark: "Py" },
      { name: "C", icon: "c", mark: "C" },
      { name: "C++", icon: "cplusplus", mark: "C++" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", mark: "J" },
      { name: "Bash", icon: "gnubash", mark: "$" },
      { name: "HTML", icon: "html5", mark: "5" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", mark: "3" },
      { name: "JavaScript", icon: "javascript", mark: "JS" },
      { name: "TypeScript", icon: "typescript", mark: "TS" },
    ],
  },
  {
    category: "ML and AI",
    items: [
      { name: "Deep learning", mark: "DL" },
      { name: "Computer vision", mark: "CV" },
      { name: "RAG", mark: "RAG" },
      { name: "Agentic AI", mark: "AI" },
      { name: "LangChain", icon: "langchain", mark: "LC" },
      { name: "LangGraph", mark: "LG" },
    ],
  },
  {
    category: "ML libraries",
    items: [
      { name: "PyTorch", icon: "pytorch", mark: "PT" },
      { name: "TensorFlow", icon: "tensorflow", mark: "TF" },
      { name: "Scikit-learn", icon: "scikitlearn", mark: "SK" },
      { name: "OpenCV", icon: "opencv", mark: "CV" },
      { name: "MediaPipe", icon: "mediapipe", mark: "MP" },
      { name: "NumPy", icon: "numpy", mark: "NP" },
      { name: "Pandas", icon: "pandas", mark: "PD" },
      { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg", mark: "M" },
    ],
  },
  {
    category: "Web and data",
    items: [
      { name: "FastAPI", icon: "fastapi", mark: "FA" },
      { name: "React", icon: "react", mark: "R" },
      { name: "Node.js", icon: "nodedotjs", mark: "N" },
      { name: "Express.js", icon: "express", mark: "EX" },
      { name: "REST APIs", mark: "API" },
      { name: "PostgreSQL", icon: "postgresql", mark: "PG" },
      { name: "MySQL", icon: "mysql", mark: "SQL" },
      { name: "MongoDB", icon: "mongodb", mark: "M" },
    ],
  },
  {
    category: "Cloud and DevOps",
    items: [
      { name: "Git", icon: "git", mark: "G" },
      { name: "GitHub Actions", icon: "githubactions", mark: "GH" },
      { name: "Linux", icon: "linux", mark: "L" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", mark: "AWS" },
      { name: "Docker", icon: "docker", mark: "D" },
      { name: "Kubernetes", icon: "kubernetes", mark: "K8s" },
    ],
  },
];

export const projects = [
  {
    id: "brain-tumor", title: "3D Brain Tumor Segmentation", when: "Jul to Aug 2026",
    repo: "https://github.com/tusharsingh3199/3D-Brain-Tumor-Segmentation",
    blurb: "End-to-end 3D segmentation on BraTS 2019 multi-modal MRI. A 3D U-Net is benchmarked against a Swin-UNETR transformer, then both are served through FastAPI with a Streamlit UI for MRI upload, slice overlays and downloadable masks.",
    facts: ["0.85 whole-tumor Dice for the 3D U-Net, against 0.74 for Swin-UNETR", "Per-class Dice of 0.77, 0.84 and 0.80 on necrotic core, edema and enhancing tumor", "Class-weighted Dice plus cross-entropy loss for the tumor/background imbalance"],
    tags: ["Python", "TensorFlow", "3D U-Net", "Swin-UNETR", "FastAPI"],
  },
  {
    id: "neural-flow", title: "Neural Flow Dynamics", when: "Nov 2026 to present",
    repo: "https://github.com/tusharsingh3199/Neural-Flow-Dynamics",
    blurb: "A research platform for weather forecasting and disaster decision support. Six pipeline stages run from data acquisition to approval, on versioned interfaces with full data provenance. A ClimODE-inspired neural-ODE forecaster is in design.",
    facts: ["Idempotent, provenance-tracked ingestion with Alembic migrations", "Source-feasibility checker for ERA5 and NOAA GFS access and licensing", "FastAPI, React, PostgreSQL and Redis in Docker Compose, checked by pytest, Ruff, mypy and ESLint"],
    tags: ["Python", "FastAPI", "PostGIS", "Docker Compose", "React", "TypeScript"],
  },
  {
    id: "agentic-game", title: "Agentic-GameAI", when: "Oct to Nov 2026",
    repo: "https://github.com/tusharsingh3199/Agentic-Game-AI",
    blurb: "A modular framework where LLM agents play five games of rising difficulty, from FrozenLake to a four-snake Arena. One shared core handles the retrying LLM client, JSONL step logs and the Pygame viewer.",
    facts: ["Sokoban planning with deadlock detection, retries from past failures and an optional BFS hint", "Real-time Breakout agent: pixel-to-state extraction, per-frame reflexes, a background LLM for strategy", "Snake Arena where LLM snakes face algorithmic opponents"],
    tags: ["Python", "LLM APIs", "Gymnasium", "ALE", "Pygame"],
  },
];

export const jobs = [{
  org: "Fiverr", role: "Freelance, Unreal Engine (C++)", where: "Remote",
  points: ["Delivered 9 end-to-end projects for 7 international clients on tight deadlines, owning requirements, C++ and Blueprints implementation, and handoff.", "Fixed crashes, logic errors and performance bottlenecks across 3 production projects, improving stability across devices."],
}];

export const wins = [
  "Top 10 of 2,000+ teams at Fintechstico (NSUT)",
  "Top 50 of 2,700+ teams at Brainwave (GGSIPU)",
  "Top 50 of 1,500+ teams at AzinHack (GGSIPU)",
  "300+ LeetCode problems solved, contest rating 1400+",
  "i7 Lead at IoSC GGSIPU-EDC, leading a team that builds AI/ML and game projects",
];

export const skills = [
  ["AI and ML", "Deep learning, computer vision, RAG and agentic systems."],
  ["Web", "FastAPI and Node.js back ends, React and TypeScript front ends."],
  ["DevOps", "Docker, Kubernetes, GitHub Actions and AWS on Linux."],
];
