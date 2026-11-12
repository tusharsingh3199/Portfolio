export const links = [
  ["GitHub", "https://github.com/tusharsingh3199"],
  ["LinkedIn", "https://www.linkedin.com/in/tushar-singh-97526a379/"],
  ["LeetCode", "https://leetcode.com/tusharsingh3199"],
  ["Kaggle", "https://www.kaggle.com/tusharsingh3199"],
  ["YouTube", "https://youtube.com/@tusharsingh3282"],
];
export const email = "tusharsingh1346@gmail.com";

export const stack: [string, string][] = [
  ["Languages", "Python, C, C++, Java, Bash, HTML, CSS, JavaScript, TypeScript"],
  ["ML and AI", "Deep learning, computer vision, RAG, agentic AI, LangChain, LangGraph"],
  ["ML libraries", "PyTorch, TensorFlow, Scikit-learn, OpenCV, MediaPipe, NumPy, Pandas, Matplotlib"],
  ["Web and data", "FastAPI, React, Node.js, Express.js, REST APIs, PostgreSQL, MySQL, MongoDB"],
  ["Cloud and DevOps", "Git, GitHub Actions, Linux, AWS, Docker, Kubernetes"],
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
