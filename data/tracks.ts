export type Track = { title: string; items: string[] };

export const tracks: Track[] = [
  {
    title: "Responsible & Ethical AI",
    items: [
      "Fairness, bias mitigation",
      "Explainability, interpretability",
      "Accountability, auditability",
      "AI governance, standards, auditing",
    ],
  },
  {
    title: "AI Safety, Robustness & Trustworthy AI",
    items: [
      "Adversarial ML (attacks/defenses)",
      "Model robustness and certification",
      "Uncertainty estimation, out-of-distribution detection",
      "Risk assessment and safety metrics",
    ],
  },
  {
    title: "Machine Learning & Deep Learning Methods",
    items: [
      "Novel architectures, optimization",
      "Transfer learning, meta-learning, few-shot",
      "Self-supervised, semi-supervised, reinforcement learning",
      "Generative models (GANs, diffusion, VAEs)",
    ],
  },
  {
    title: "Privacy, Confidentiality & Secure Data Analytics",
    items: [
      "Differential privacy, homomorphic encryption",
      "Secure multiparty computation, federated learning",
      "Privacy-preserving data mining",
      "Data anonymization, synthetic data",
    ],
  },
  {
    title: "Cybersecurity, System & Network Security",
    items: [
      "Network security, intrusion detection/prevention",
      "Secure software, application security",
      "Embedded systems, IoT security",
      "Side-channel attacks, firmware security",
    ],
  },
  {
    title: "Hardware Security & Trusted Computing",
    items: [
      "Secure hardware architectures",
      "Trusted execution environments, TPMs, enclaves",
      "Physical attacks, reverse engineering",
      "Secure boot, attestation",
    ],
  },
  {
    title: "Quantum Computing & Quantum Engineering",
    items: [
      "Quantum algorithms, complexity",
      "Quantum error correction, fault tolerance",
      "Quantum hardware, control, qubits",
      "Quantum communications, networks",
    ],
  },
  {
    title: "Quantum Cryptography & Post-Quantum Security",
    items: [
      "Quantum key distribution (QKD)",
      "Quantum-safe cryptography (post-quantum algorithms)",
      "Quantum attacks on classical cryptography",
      "Quantum-secure protocols",
    ],
  },
  {
    title: "AI + Quantum Synergies",
    items: [
      "Quantum machine learning",
      "Hybrid classical-quantum systems",
      "Quantum-enhanced optimization for AI",
      "Quantum-inspired algorithms",
    ],
  },
  {
    title: "System Architecture & Secure Integration",
    items: [
      "Co-design of hardware & software",
      "Secure system-on-chip (SoC) designs",
      "Edge computing, fog computing security",
      "Cyber–physical systems, real-time systems",
    ],
  },
  {
    title: "Human-Centric AI / Human–Machine Interaction",
    items: [
      "Trust, user experience, explainability to humans",
      "Human oversight & control",
      "Human-AI collaboration, mental models",
      "Socio-technical systems, fairness in deployment",
    ],
  },
  {
    title: "Sustainability, Green Computing & Energy Efficiency",
    items: [
      "Energy-efficient AI models, low-power design",
      "Quantum systems energy constraints",
      "Sustainable hardware, resource-constrained settings",
      "Carbon-aware computing",
    ],
  },
];
