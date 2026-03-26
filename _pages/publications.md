---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
redirect_from:
  - /pubs
---

{% include base_path %}


<style>
.tag-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 10px 0;
}

/* Hide real checkboxes */
.tag-filters input[type="checkbox"] {
  display: none;
}

/* Base button style */
.tag-btn {
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid #ccc;
  background-color: #f5f5f5;
  cursor: pointer;
  font-size: 0.9em;
  transition: all 0.2s ease;
  user-select: none;
}

/* Hover */
.tag-btn:hover {
  background-color: #e8e8e8;
}

/* Active (checked) state */
.tag-filters input[type="checkbox"]:checked + .tag-btn {
  background-color: #007acc;
  color: white;
  border-color: #007acc;
}

/* Optional: subtle pressed effect */
.tag-filters input[type="checkbox"]:checked + .tag-btn:hover {
  background-color: #005fa3;
}

#tag-application:checked + label { background: #2a9d8f; border-color: #2a9d8f; }
#tag-models:checked + label { background: #e76f51; border-color: #e76f51; }
#tag-uq:checked + label { background: #264653; border-color: #264653; }
#tag-software:checked + label { background: #f4a261; border-color: #f4a261; }
#tag-other:checked + label { background: #6c757d; border-color: #6c757d; }

.type-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
}

/* Hide radios */
.type-filters input[type="radio"] {
  display: none;
}

/* Button style */
.type-btn {
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid #ccc;
  background-color: #f5f5f5;
  cursor: pointer;
  font-size: 0.9em;
  transition: all 0.2s ease;
  user-select: none;
}

/* Hover */
.type-btn:hover {
  background-color: #e8e8e8;
}

/* Selected */
.type-filters input[type="radio"]:checked + .type-btn {
  background-color: #333;
  color: white;
  border-color: #333;
}

.table-wrapper {
  width: 100%;
  overflow-x: auto; /* fallback if needed */
}

.pub-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
  font-size: 0.95em;
}

.pub-table thead {
  border-bottom: 2px solid #ddd;
}

.pub-table th {
  text-align: left;
  font-weight: 600;
  padding: 8px 6px;
  color: #444;
}

.pub-table td {
  padding: 4px 6px;
  vertical-align: top;
}

/* Row spacing instead of gridlines */
.pub-table tbody tr {
  border-bottom: 1px solid #eee;
}

/* Hover effect */
.pub-table tbody tr:hover {
  background-color: #fafafa;
}

/* Publication structure */
.pub-title {
  font-weight: 600;
  margin-bottom: 1px;
}

.pub-authors {
  color: #555;
  font-size: 0.75em;
}

.pub-venue {
  color: #777;
  font-size: 0.7em;
}

.pub-source {
  color: #999;
  font-size: 0.65em;
}

.pub-source a {
  color: inherit;          /* use same color as surrounding text */
  text-decoration: underline;
}

.pub-source a:hover {
  color: inherit;          /* prevent hover color change */
  text-decoration: underline;
}

/* Year column */
.year-col {
  width: 60px;
  text-align: right;
  white-space: nowrap;
  color: #666;
}

@media (max-width: 700px) {

  /* Remove table structure */
  .pub-table thead {
    display: none;
  }

  .pub-table,
  .pub-table tbody,
  .pub-table tr,
  .pub-table td {
    display: block;
    width: 100%;
  }

  /* Each row becomes a card */
  .pub-table tr {
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 12px;
    background: #fff;
  }

  /* Stack content */
  .pub-table td {
    padding: 0;
  }

  /* Year becomes a label */
  .year-col {
    text-align: left;
    margin-bottom: 6px;
    font-weight: 600;
    color: #444;
  }

  /* Improve spacing */
  .pub-title {
    font-size: 1em;
    margin-bottom: 4px;
  }

  .pub-authors,
  .pub-venue,
  .pub-source {
    font-size: 0.9em;
    line-height: 1.3;
  }
}

.pub-heading {
  font-size: 1.3em;
  font-weight: 600;
  margin: 15px 0 5px;
  color: #333;
}

@media print {
  .type-filters {
    display: none !important;
  }

  .tag-filters {
    display: none !important;
  }

  .pub-source {
    display: none !important;
  }
}

</style>

<div class="type-filters">
  <input type="radio" name="type" id="type-all" value="all" checked>
  <label for="type-all" class="type-btn">All</label>

  <input type="radio" name="type" id="type-journal" value="journal">
  <label for="type-journal" class="type-btn">Journal</label>

  <input type="radio" name="type" id="type-conference" value="conference">
  <label for="type-conference" class="type-btn">Conference</label>

  <input type="radio" name="type" id="type-preprint" value="preprint">
  <label for="type-preprint" class="type-btn">Preprint</label>
</div>

<div class="tag-filters">
  <input type="checkbox" id="tag-models" value="models">
  <label for="tag-models" class="tag-btn">Models</label>

  <input type="checkbox" id="tag-uq" value="uq">
  <label for="tag-uq" class="tag-btn">Uncertainty Quantification</label>

  <input type="checkbox" id="tag-application" value="application">
  <label for="tag-application" class="tag-btn">Applications</label>

  <input type="checkbox" id="tag-software" value="software">
  <label for="tag-software" class="tag-btn">Software</label>

  <input type="checkbox" id="tag-other" value="other">
  <label for="tag-other" class="tag-btn">Other</label>
</div>

<h2 class="pub-heading">Publications</h2>
<div class="table-wrapper">
  <table id="paperTable" class="pub-table">
    <thead>
      <tr>
        <th>Publication</th>
      </tr>
    </thead>
    <tbody>
      <tr data-tags="models uq" data-type="journal">
        <td>
          <div class="pub-title">Efficient monotonic Gaussian processes via Randomize-then-Optimize</div>
          <div class="pub-authors">Zhang, C., <i>Everink, J. M.</i> and Jørgensen, J.S.</div>
          <div class="pub-venue">Journal of Computational Physics (journal) - 2026</div>
          <div class="pub-source">Paper: <a href="https://doi.org/10.1016/j.jcp.2026.114787">Elsevier</a>, Code: <a href="https://doi.org/10.5281/zenodo.15807484">Zenodo</a></div>
        </td>
      </tr>
      <tr data-tags="application uq" data-type="journal">
        <td>
          <div class="pub-title">Bayesian velocity-space tomography with collision- and charge-exchange-physics prior from fast-ion D-alpha measurements at TCV with uncertainty quantification</div>
          <div class="pub-authors">Rud, M. et al.</div>
          <div class="pub-venue">Plasma Physics and Controlled Fusion (journal) - 2026</div>
          <div class="pub-source">Paper: <a href="http://doi.org/10.1088/1361-6587/ae3858">IOP</a></div>
        </td>
      </tr>
      <tr data-tags="models uq software" data-type="preprint">
        <td>
          <div class="pub-title">A computational framework and implementation of implicit priors in Bayesian inverse problems</div>
          <div class="pub-authors"><i>Everink, J. M.</i>, Zhang, C., Alghamdi, A. M. A., Laumont, R., Riis, N.A.B. and Jørgensen, J.S.</div>
          <div class="pub-venue">arXiv (preprint) - 2025</div>
          <div class="pub-source">Paper: <a href="https://arxiv.org/abs/2509.11781">arXiv</a>, Code: <a href="https://doi.org/10.5281/zenodo.17115255">Zenodo</a></div>
        </td>
      </tr>
      <tr data-tags="uq" data-type="conference">
        <td>
          <div class="pub-title">Self-supervised conformal prediction for uncertainty quantification in imaging problems</div>
          <div class="pub-authors"><i>Everink, J. M.</i>, Amougou, B.T. and Pereyra, M.</div>
          <div class="pub-venue">SSVM 2025 (conference) - 2025</div>
          <div class="pub-source">Paper: <a href="https://link.springer.com/chapter/10.1007/978-3-031-92366-1_9">Springer</a>,  <a href="https://arxiv.org/abs/2502.05127">arXiv</a></div>
        </td>
      </tr>
      <tr data-tags="models" data-type="preprint">
        <td>
          <div class="pub-title">The geometry and well-posedness of sparse regularized linear regression</div>
          <div class="pub-authors"><i>Everink, J. M.</i>, Dong, Y. and Andersen, M.S.</div>
          <div class="pub-venue">arXiv (preprint) - 2024</div>
          <div class="pub-source">Paper: <a href="https://arxiv.org/abs/2409.03461">arXiv</a></div>
        </td>
      </tr>
      <tr data-tags="application models" data-type="journal">
        <td>
          <div class="pub-title">Spatial regularization and level-set methods for experimental electrical impedance tomography with partial data</div>
          <div class="pub-authors">Alghamdi, A. M. A. et al.</div>
          <div class="pub-venue">Applied Mathematics for Modern Challenges (journal) - 2024</div>
          <div class="pub-source">Paper: <a href="https://www.aimsciences.org/article/doi/10.3934/ammc.2024013">AIMS</a></div>
        </td>
      </tr>
      <tr data-tags="models uq" data-type="journal">
        <td>
          <div class="pub-title">Sparse Bayesian inference with regularized Gaussian distributions</div>
          <div class="pub-authors"><i>Everink, J. M.</i>, Dong, Y. and Andersen, M.S.</div>
          <div class="pub-venue">Inverse Problems (journal) - 2023</div>
          <div class="pub-source">Paper: <a href="https://iopscience.iop.org/article/10.1088/1361-6420/acf9c5">IOP</a></div>
        </td>
      </tr>
      <tr data-tags="models uq" data-type="journal">
        <td>
          <div class="pub-title">Bayesian inference with projected densities</div>
          <div class="pub-authors"><i>Everink, J. M.</i>, Dong, Y. and Andersen, M.S.</div>
          <div class="pub-venue">SIAM/ASA Journal on Uncertainty Quantification (journal) - 2023</div>
          <div class="pub-source">Paper: <a href="https://orbit.dtu.dk/en/publications/bayesian-inference-with-projected-densities/">DTU Orbit</a>, <a href="https://epubs.siam.org/doi/full/10.1137/22M150695X">SIAM</a>, <a href="https://arxiv.org/abs/2209.12481">arXiv</a></div>
        </td >
      </tr>
      <tr data-tags="software other" data-type="conference">
        <td>
          <div class="pub-title">Having fun in learning formal specifications</div>
          <div class="pub-authors">Prasetya, W. et al.</div>
          <div class="pub-venue">ICSE-SEET 2019 (conference) - 2019</div>
          <div class="pub-source">Paper: <a href="https://ieeexplore.ieee.org/abstract/document/8802100">IEEE</a>, <a href="https://arxiv.org/abs/1903.00334">arXiv</a></div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<h2 class="pub-heading">Theses</h2>
  <table id="paperTable" class="pub-table">
    <thead>
      <tr>
        <th>Thesis</th>
      </tr>
    </thead>
    <tbody>
      <tr data-tags="models uq software" data-type="">
        <td>
          <div class="pub-title">PhD: Uncertainty Quantification for Inverse Problems with Sparsity-Promoting Implicit Priors</div>
          <div class="pub-venue">Technical University of Denmark - 2025</div>
          <div class="pub-source">Thesis: <a href="https://orbit.dtu.dk/files/390213132/phd_thesis_JMEV.pdf">DTU Orbit</a>, Code: <a href="https://github.com/CUQI-DTU/Thesis-JME">Github</a></div>
        </td>
      </tr>
      <tr data-tags="models" data-type="">
        <td>
          <div class="pub-title">MSc in Mathematical Sciences: One-bit Compressed Sensing with Generative Models</div>
          <div class="pub-venue">Utrecht University - 2021</div>
          <div class="pub-source">Thesis: <a href="https://studenttheses.uu.nl/bitstream/handle/20.500.12932/41296/Master_thesis_Jasper_Everink.pdf">UU student theses</a>, Code: <a href="https://github.com/jeverink/MastersThesis">Github</a></div>
        </td>
      </tr>
        <tr data-tags="other" data-type="">
        <td>
          <div class="pub-title">BSc in Mathematics: Numerically Solving The Wave Equation Using The Finite Element Method</div>
          <div class="pub-venue">Utrecht University - 2018</div>
          <div class="pub-source">Thesis: <a href="https://studenttheses.uu.nl/bitstream/handle/20.500.12932/29861/thesis.pdf">UU student theses</a>, Code: <a href="https://github.com/jeverink/BachelorsThesis">Github</a></div>
        </td>
      </tr>
    </tbody>
  </table>
