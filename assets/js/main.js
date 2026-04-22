const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

const citations = {
  videohoi2026: {
    citation:
      "Y. Luo, D. Wen, K. Peng, R. Liu, J. Zheng, Y. Chen, J. Wei, and R. Stiefelhagen. Rethinking Video Human-Object Interaction: Set Prediction over Time for Unified Detection and Anticipation. arXiv preprint arXiv:2604.10397, 2026.",
    bibtex: `@misc{luo2026rethinkingvideohoi,
  title={Rethinking Video Human-Object Interaction: Set Prediction over Time for Unified Detection and Anticipation},
  author={Luo, Y. and Wen, D. and Peng, K. and Liu, R. and Zheng, J. and Chen, Y. and Wei, J. and Stiefelhagen, R.},
  year={2026},
  eprint={2604.10397},
  archivePrefix={arXiv}
}`,
  },
  impact2026: {
    citation:
      "D. Wen, Z. Zhong, D. Schneider, M. Zaremski, L. Kunzmann, Y. Shi, R. Liu, et al. IMPACT: A Dataset for Multi-Granularity Human Procedural Action Understanding in Industrial Assembly. arXiv preprint arXiv:2604.10409, 2026.",
    bibtex: `@misc{wen2026impact,
  title={IMPACT: A Dataset for Multi-Granularity Human Procedural Action Understanding in Industrial Assembly},
  author={Wen, D. and Zhong, Z. and Schneider, D. and Zaremski, M. and Kunzmann, L. and Shi, Y. and Liu, R. and others},
  year={2026},
  eprint={2604.10409},
  archivePrefix={arXiv}
}`,
  },
  sleepstaging2026: {
    citation:
      "K. Wang, D. Wen, Y. Chen, R. Liu, J. Zheng, J. Wei, K. Yang, R. Stiefelhagen, et al. Towards Multi-Source Domain Generalization for Sleep Staging with Noisy Labels. arXiv preprint arXiv:2604.10009, 2026.",
    bibtex: `@misc{wang2026sleepstagingnoisylabels,
  title={Towards Multi-Source Domain Generalization for Sleep Staging with Noisy Labels},
  author={Wang, K. and Wen, D. and Chen, Y. and Liu, R. and Zheng, J. and Wei, J. and Yang, K. and Stiefelhagen, R. and others},
  year={2026},
  eprint={2604.10009},
  archivePrefix={arXiv}
}`,
  },
  proood2026: {
    citation:
      "Y. Zhang, M. Duan, K. Peng, Y. Wang, D. Wen, D. P. Paudel, L. Van Gool, et al. ProOOD: Prototype-Guided Out-of-Distribution 3D Occupancy Prediction. arXiv preprint arXiv:2604.01081, 2026.",
    bibtex: `@misc{zhang2026proood,
  title={ProOOD: Prototype-Guided Out-of-Distribution 3D Occupancy Prediction},
  author={Zhang, Y. and Duan, M. and Peng, K. and Wang, Y. and Wen, D. and Paudel, D. P. and Van Gool, L. and others},
  year={2026},
  eprint={2604.01081},
  archivePrefix={arXiv}
}`,
  },
  guideDog2026: {
    citation:
      "R. Liu, J. Zhang, J. Zheng, Y. Chen, P. S. Lee, D. Wen, K. Peng, J. Zhang, et al. Not an Obstacle for Dog, but a Hazard for Human: A Co-Ego Navigation System for Guide Dog Robots. arXiv preprint arXiv:2603.20121, 2026.",
    bibtex: `@misc{liu2026coego,
  title={Not an Obstacle for Dog, but a Hazard for Human: A Co-Ego Navigation System for Guide Dog Robots},
  author={Liu, R. and Zhang, J. and Zheng, J. and Chen, Y. and Lee, P. S. and Wen, D. and Peng, K. and Zhang, J. and others},
  year={2026},
  eprint={2603.20121},
  archivePrefix={arXiv}
}`,
  },
  interedit2026: {
    citation:
      "Y. Yang, D. Wen, L. Qi, W. Kong, J. Zheng, R. Liu, Y. Chen, C. Wu, K. Yang, et al. InterEdit: Navigating Text-Guided Multi-Human 3D Motion Editing. arXiv preprint arXiv:2603.13082, 2026.",
    bibtex: `@misc{yang2026interedit,
  title={InterEdit: Navigating Text-Guided Multi-Human 3D Motion Editing},
  author={Yang, Y. and Wen, D. and Qi, L. and Kong, W. and Zheng, J. and Liu, R. and Chen, Y. and Wu, C. and Yang, K. and others},
  year={2026},
  eprint={2603.13082},
  archivePrefix={arXiv}
}`,
  },
  m2occ2026: {
    citation:
      "K. Lin, K. Peng, D. Wen, Y. Chen, R. Liu, and K. Yang. M2-Occ: Resilient 3D Semantic Occupancy Prediction for Autonomous Driving with Incomplete Camera Inputs. arXiv preprint arXiv:2603.09737, 2026.",
    bibtex: `@misc{lin2026m2occ,
  title={M2-Occ: Resilient 3D Semantic Occupancy Prediction for Autonomous Driving with Incomplete Camera Inputs},
  author={Lin, K. and Peng, K. and Wen, D. and Chen, Y. and Liu, R. and Yang, K.},
  year={2026},
  eprint={2603.09737},
  archivePrefix={arXiv}
}`,
  },
  whatif2026: {
    citation:
      "R. Liu, Y. Chen, Y. Zhang, J. Zheng, K. Peng, C. Wu, C. Huang, D. Wen, et al. What if? Emulative Simulation with World Models for Situated Reasoning. arXiv preprint arXiv:2603.06445, 2026.",
    bibtex: `@misc{liu2026whatif,
  title={What if? Emulative Simulation with World Models for Situated Reasoning},
  author={Liu, R. and Chen, Y. and Zhang, Y. and Zheng, J. and Peng, K. and Wu, C. and Huang, C. and Wen, D. and others},
  year={2026},
  eprint={2603.06445},
  archivePrefix={arXiv}
}`,
  },
  voxels2026: {
    citation:
      "W. Li, K. Peng, D. Wen, J. Zheng, J. Wei, M. Duan, Y. Zhang, R. Fan, and K. Yang. Can we Trust Unreliable Voxels? Exploring 3D Semantic Occupancy Prediction under Label Noise. arXiv preprint arXiv:2603.06279, 2026.",
    bibtex: `@misc{li2026unreliablevoxels,
  title={Can we Trust Unreliable Voxels? Exploring 3D Semantic Occupancy Prediction under Label Noise},
  author={Li, W. and Peng, K. and Wen, D. and Zheng, J. and Wei, J. and Duan, M. and Zhang, Y. and Fan, R. and Yang, K.},
  year={2026},
  eprint={2603.06279},
  archivePrefix={arXiv}
}`,
  },
  sgr3_2026: {
    citation:
      "Z. Wang, R. Liu, Y. Chen, J. Zheng, W. Fan, K. Peng, D. Wen, J. Wei, J. Zhang, et al. SGR3 Model: Scene Graph Retrieval-Reasoning Model in 3D. arXiv preprint arXiv:2603.04614, 2026.",
    bibtex: `@misc{wang2026sgr3,
  title={SGR3 Model: Scene Graph Retrieval-Reasoning Model in 3D},
  author={Wang, Z. and Liu, R. and Chen, Y. and Zheng, J. and Fan, W. and Peng, K. and Wen, D. and Wei, J. and Zhang, J. and others},
  year={2026},
  eprint={2603.04614},
  archivePrefix={arXiv}
}`,
  },
  hyperbolic2026: {
    citation:
      "K. Peng, D. Wen, M. S. Sarfraz, Y. Chen, J. Zheng, D. Schneider, K. Yang, J. Wu, et al. Mitigating Label Noise using Prompt-Based Hyperbolic Meta-Learning in Open-Set Domain Generalization. International Journal of Computer Vision 134(3):99, 2026.",
    bibtex: `@article{peng2026mitigatinglabelnoise,
  title={Mitigating Label Noise using Prompt-Based Hyperbolic Meta-Learning in Open-Set Domain Generalization},
  author={Peng, K. and Wen, D. and Sarfraz, M. S. and Chen, Y. and Zheng, J. and Schneider, D. and Yang, K. and Wu, J. and others},
  journal={International Journal of Computer Vision},
  volume={134},
  number={3},
  pages={99},
  year={2026},
  doi={10.1007/s11263-025-02643-9}
}`,
  },
  refatomnetpp2025: {
    citation:
      "K. Peng, D. Wen, J. Fu, J. Wu, K. Yang, J. Zheng, R. Liu, Y. Chen, Y. Fu, et al. RefAtomNet++: Advancing Referring Atomic Video Action Recognition using Semantic Retrieval based Multi-Trajectory Mamba. arXiv preprint arXiv:2510.16444, 2025.",
    bibtex: `@misc{peng2025refatomnetpp,
  title={RefAtomNet++: Advancing Referring Atomic Video Action Recognition using Semantic Retrieval based Multi-Trajectory Mamba},
  author={Peng, K. and Wen, D. and Fu, J. and Wu, J. and Yang, K. and Zheng, J. and Liu, R. and Chen, Y. and Fu, Y. and others},
  year={2025},
  eprint={2510.16444},
  archivePrefix={arXiv}
}`,
  },
  erelifm2025: {
    citation:
      "K. Peng, D. Wen, K. Yang, J. Fu, Y. Chen, R. Liu, J. Wu, J. Zheng, M. S. Sarfraz, et al. EReLiFM: Evidential Reliability-Aware Residual Flow Meta-Learning for Open-Set Domain Generalization under Noisy Labels. arXiv preprint arXiv:2510.12687, 2025.",
    bibtex: `@misc{peng2025erelifm,
  title={EReLiFM: Evidential Reliability-Aware Residual Flow Meta-Learning for Open-Set Domain Generalization under Noisy Labels},
  author={Peng, K. and Wen, D. and Yang, K. and Fu, J. and Chen, Y. and Liu, R. and Wu, J. and Zheng, J. and Sarfraz, M. S. and others},
  year={2025},
  eprint={2510.12687},
  archivePrefix={arXiv}
}`,
  },
  lidarSDG2025: {
    citation:
      "W. Kong, Z. Zeng, D. Wen, J. Wei, K. Peng, J. M. Goo, J. Boehm, et al. Exploring Single Domain Generalization of LiDAR-based Semantic Segmentation under Imperfect Labels. arXiv preprint arXiv:2510.09035, 2025.",
    bibtex: `@misc{kong2025lidarsdgimperfectlabels,
  title={Exploring Single Domain Generalization of LiDAR-based Semantic Segmentation under Imperfect Labels},
  author={Kong, W. and Zeng, Z. and Wen, D. and Wei, J. and Peng, K. and Goo, J. M. and Boehm, J. and others},
  year={2025},
  eprint={2510.09035},
  archivePrefix={arXiv}
}`,
  },
  segmenttoact2025: {
    citation:
      "W. Li, K. Peng, D. Wen, R. Liu, M. Duan, K. Luo, and K. Yang. Segment-to-Act: Label-Noise-Robust Action-Prompted Video Segmentation Towards Embodied Intelligence. arXiv preprint arXiv:2509.16677, 2025.",
    bibtex: `@misc{li2025segmenttoact,
  title={Segment-to-Act: Label-Noise-Robust Action-Prompted Video Segmentation Towards Embodied Intelligence},
  author={Li, W. and Peng, K. and Wen, D. and Liu, R. and Duan, M. and Luo, K. and Yang, K.},
  year={2025},
  eprint={2509.16677},
  archivePrefix={arXiv}
}`,
  },
  mica2026: {
    citation:
      "D. Wen, K. Peng, J. Zheng, Y. Chen, Y. Shi, J. Wei, R. Liu, K. Yang, and R. Stiefelhagen. MICA: Multi-Agent Industrial Coordination Assistant. IEEE International Conference on Robotics and Automation, 2026.",
    bibtex: `@inproceedings{wen2026mica,
  title={MICA: Multi-Agent Industrial Coordination Assistant},
  author={Wen, D. and Peng, K. and Zheng, J. and Chen, Y. and Shi, Y. and Wei, J. and Liu, R. and Yang, K. and Stiefelhagen, R.},
  booktitle={IEEE International Conference on Robotics and Automation},
  year={2026},
  eprint={2509.15237},
  archivePrefix={arXiv}
}`,
  },
  gear8_2025: {
    citation:
      "D. Wen, J. Zheng, R. Liu, Y. Xu, K. Peng, and R. Stiefelhagen. Snap, Segment, Deploy: A Visual Data and Detection Pipeline for Wearable Industrial Assistants. SMC 2025 / arXiv:2507.21072, 2025.",
    bibtex: `@inproceedings{wen2025snapsegmentdeploy,
  title={Snap, Segment, Deploy: A Visual Data and Detection Pipeline for Wearable Industrial Assistants},
  author={Wen, D. and Zheng, J. and Liu, R. and Xu, Y. and Peng, K. and Stiefelhagen, R.},
  booktitle={IEEE International Conference on Systems, Man, and Cybernetics},
  year={2025},
  eprint={2507.21072},
  archivePrefix={arXiv}
}`,
  },
  rohoi2025: {
    citation:
      "D. Wen, K. Peng, K. Yang, Y. Chen, R. Liu, J. Zheng, A. Roitberg, D. P. Paudel, et al. RoHOI: Robustness Benchmark for Human-Object Interaction Detection. arXiv preprint arXiv:2507.09111, 2025.",
    bibtex: `@misc{wen2025rohoi,
  title={RoHOI: Robustness Benchmark for Human-Object Interaction Detection},
  author={Wen, D. and Peng, K. and Yang, K. and Chen, Y. and Liu, R. and Zheng, J. and Roitberg, A. and Paudel, D. P. and others},
  year={2025},
  eprint={2507.09111},
  archivePrefix={arXiv}
}`,
  },
  hopadiff2025: {
    citation:
      "K. Peng, J. Huang, X. Huang, D. Wen, J. Zheng, Y. Chen, K. Yang, J. Wu, et al. HopaDIFF: Holistic-Partial Aware Fourier Conditioned Diffusion for Referring Human Action Segmentation in Multi-Person Scenarios. arXiv preprint arXiv:2506.09650, 2025.",
    bibtex: `@misc{peng2025hopadiff,
  title={HopaDIFF: Holistic-Partial Aware Fourier Conditioned Diffusion for Referring Human Action Segmentation in Multi-Person Scenarios},
  author={Peng, K. and Huang, J. and Huang, X. and Wen, D. and Zheng, J. and Chen, Y. and Yang, K. and Wu, J. and others},
  year={2025},
  eprint={2506.09650},
  archivePrefix={arXiv}
}`,
  },
  microg2026: {
    citation:
      "D. Wen, L. Qi, K. Peng, K. Yang, F. Teng, A. Luo, J. Fu, Y. Chen, R. Liu, Y. Shi, et al. Go Beyond Earth: Understanding Human Actions and Scenes in Microgravity Environments. International Conference on Learning Representations, 2026.",
    bibtex: `@inproceedings{wen2026gobeyondearth,
  title={Go Beyond Earth: Understanding Human Actions and Scenes in Microgravity Environments},
  author={Wen, D. and Qi, L. and Peng, K. and Yang, K. and Teng, F. and Luo, A. and Fu, J. and Chen, Y. and Liu, R. and Shi, Y. and others},
  booktitle={International Conference on Learning Representations},
  year={2026},
  eprint={2506.02845},
  archivePrefix={arXiv}
}`,
  },
  driverNoisy2025: {
    citation:
      "L. Fan, D. Wen, K. Peng, K. Yang, J. Zhang, R. Liu, Y. Chen, J. Zheng, J. Wu, et al. Exploring Video-Based Driver Activity Recognition under Noisy Labels. SMC 2025 / arXiv:2504.11966, 2025.",
    bibtex: `@inproceedings{fan2025driveractivitynoisylabels,
  title={Exploring Video-Based Driver Activity Recognition under Noisy Labels},
  author={Fan, L. and Wen, D. and Peng, K. and Yang, K. and Zhang, J. and Liu, R. and Chen, Y. and Zheng, J. and Wu, J. and others},
  booktitle={IEEE International Conference on Systems, Man, and Cybernetics},
  year={2025},
  eprint={2504.11966},
  archivePrefix={arXiv}
}`,
  },
  visograsp2025: {
    citation:
      "Y. Shi, D. Wen, G. Chen, E. Welte, S. Liu, K. Peng, R. Stiefelhagen, and R. Rayyes. VISO-Grasp: Vision-Language Informed Spatial Object-centric 6-DoF Active View Planning and Grasping in Clutter and Invisibility. IROS 2025.",
    bibtex: `@inproceedings{shi2025visograsp,
  title={VISO-Grasp: Vision-Language Informed Spatial Object-centric 6-DoF Active View Planning and Grasping in Clutter and Invisibility},
  author={Shi, Y. and Wen, D. and Chen, G. and Welte, E. and Liu, S. and Peng, K. and Stiefelhagen, R. and Rayyes, R.},
  booktitle={IEEE/RSJ International Conference on Intelligent Robots and Systems},
  year={2025},
  eprint={2503.12609},
  archivePrefix={arXiv}
}`,
  },
  graphdoc2025: {
    citation:
      "Y. Chen, R. Liu, J. Zheng, D. Wen, K. Peng, J. Zhang, and R. Stiefelhagen. Graph-based Document Structure Analysis. ICLR 2025 / arXiv:2502.02501.",
    bibtex: `@inproceedings{chen2025graphdoc,
  title={Graph-based Document Structure Analysis},
  author={Chen, Y. and Liu, R. and Zheng, J. and Wen, D. and Peng, K. and Zhang, J. and Stiefelhagen, R.},
  booktitle={International Conference on Learning Representations},
  year={2025},
  url={https://openreview.net/forum?id=Fu0aggezN9},
  eprint={2502.02501},
  archivePrefix={arXiv}
}`,
  },
  graspInvisibility2025: {
    citation:
      "Y. Shi, D. Wen, E. Welte, K. Peng, R. Stiefelhagen, and R. Rayyes. Grasp the Invisibility by Vision-Language guided Active View Planning. Preprint, 2025.",
    bibtex: `@misc{shi2025graspinvisibility,
  title={Grasp the Invisibility by Vision-Language guided Active View Planning},
  author={Shi, Y. and Wen, D. and Welte, E. and Peng, K. and Stiefelhagen, R. and Rayyes, R.},
  year={2025},
  note={Preprint}
}`,
  },
  refatom2024: {
    citation:
      "K. Peng, J. Fu, K. Yang, D. Wen, Y. Chen, R. Liu, J. Zheng, J. Zhang, et al. Referring Atomic Video Action Recognition. European Conference on Computer Vision, pages 166-185, 2024.",
    bibtex: `@inproceedings{peng2024referringatomic,
  title={Referring Atomic Video Action Recognition},
  author={Peng, K. and Fu, J. and Yang, K. and Wen, D. and Chen, Y. and Liu, R. and Zheng, J. and Zhang, J. and others},
  booktitle={European Conference on Computer Vision},
  pages={166--185},
  year={2024},
  doi={10.1007/978-3-031-72655-2_10}
}`,
  },
  ebhds2024: {
    citation:
      "K. Peng, D. Wen, K. Yang, A. Luo, Y. Chen, J. Fu, M. S. Sarfraz, A. Roitberg, et al. Advancing Open-Set Domain Generalization Using Evidential Bi-Level Hardest Domain Scheduler. Advances in Neural Information Processing Systems 37, pages 85412-85440, 2024.",
    bibtex: `@inproceedings{peng2024evidentialbilevel,
  title={Advancing Open-Set Domain Generalization Using Evidential Bi-Level Hardest Domain Scheduler},
  author={Peng, K. and Wen, D. and Yang, K. and Luo, A. and Chen, Y. and Fu, J. and Sarfraz, M. S. and Roitberg, A. and others},
  booktitle={Advances in Neural Information Processing Systems},
  volume={37},
  pages={85412--85440},
  year={2024}
}`,
  },
  skeletonNoisy2024: {
    citation:
      "Y. Xu, K. Peng, D. Wen, R. Liu, J. Zheng, Y. Chen, J. Zhang, A. Roitberg, et al. Skeleton-Based Human Action Recognition with Noisy Labels. IEEE/RSJ International Conference on Intelligent Robots and Systems, 2024.",
    bibtex: `@inproceedings{xu2024skeletonnoisylabels,
  title={Skeleton-Based Human Action Recognition with Noisy Labels},
  author={Xu, Y. and Peng, K. and Wen, D. and Liu, R. and Zheng, J. and Chen, Y. and Zhang, J. and Roitberg, A. and others},
  booktitle={IEEE/RSJ International Conference on Intelligent Robots and Systems},
  year={2024},
  doi={10.1109/IROS58592.2024.10801681}
}`,
  },
  featfsda2023: {
    citation:
      "K. Peng, D. Wen, D. Schneider, J. Zhang, K. Yang, M. S. Sarfraz, R. Stiefelhagen, and A. Roitberg. FeatFSDA: Towards Few-Shot Domain Adaptation for Video-Based Activity Recognition. arXiv preprint arXiv:2305.08420, 2023.",
    bibtex: `@misc{peng2023featfsda,
  title={FeatFSDA: Towards Few-Shot Domain Adaptation for Video-Based Activity Recognition},
  author={Peng, K. and Wen, D. and Schneider, D. and Zhang, J. and Yang, K. and Sarfraz, M. S. and Stiefelhagen, R. and Roitberg, A.},
  year={2023},
  eprint={2305.08420},
  archivePrefix={arXiv}
}`,
  },
};

const citeButtons = document.querySelectorAll("[data-cite-key]");

if (citeButtons.length) {
  let lastFocusedElement = null;

  const modal = document.createElement("div");
  modal.className = "cite-modal";
  modal.hidden = true;
  modal.innerHTML = `
    <div class="cite-dialog" role="dialog" aria-modal="true" aria-labelledby="cite-modal-title">
      <div class="cite-dialog-header">
        <h2 id="cite-modal-title">Citation</h2>
        <button class="cite-close" type="button">Close</button>
      </div>
      <p class="cite-text"></p>
      <pre class="cite-bibtex" tabindex="0"></pre>
      <div class="cite-actions">
        <button class="cite-copy" type="button">Copy BibTeX</button>
      </div>
    </div>
  `;
  document.body.append(modal);

  const citationText = modal.querySelector(".cite-text");
  const bibtexBlock = modal.querySelector(".cite-bibtex");
  const closeButton = modal.querySelector(".cite-close");
  const copyButton = modal.querySelector(".cite-copy");

  const closeCitation = () => {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    copyButton.textContent = "Copy BibTeX";
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  };

  const openCitation = (key) => {
    const entry = citations[key];
    if (!entry) {
      return;
    }

    citationText.textContent = entry.citation;
    bibtexBlock.textContent = entry.bibtex;
    modal.hidden = false;
    document.body.classList.add("modal-open");
    closeButton.focus();
  };

  const copyText = async (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  };

  citeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      lastFocusedElement = button;
      openCitation(button.dataset.citeKey);
    });
  });

  closeButton.addEventListener("click", closeCitation);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeCitation();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeCitation();
    }
  });

  copyButton.addEventListener("click", async () => {
    await copyText(bibtexBlock.textContent);
    copyButton.textContent = "Copied";
    window.setTimeout(() => {
      copyButton.textContent = "Copy BibTeX";
    }, 1600);
  });
}

const collaborationForm = document.querySelector("#collaboration-form");

if (collaborationForm) {
  collaborationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(collaborationForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const affiliation = String(formData.get("affiliation") || "").trim();
    const topic = String(formData.get("topic") || "Research collaboration").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = `[Collaboration] ${topic}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Affiliation: ${affiliation}`,
      `Inquiry type: ${topic}`,
      "",
      "Message:",
      message,
    ].join("\n");

    window.location.href =
      `mailto:di.wen@kit.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
