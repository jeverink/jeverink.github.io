---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
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

.pub-venue a {
  color: inherit;          /* use same color as surrounding text */
  text-decoration: underline;
}

.pub-venue a:hover {
  color: inherit;          /* prevent hover color change */
  text-decoration: underline;
}

.pub-source a {
  color: inherit;          /* use same color as surrounding text */
  text-decoration: underline;
}

.pub-source a:hover {
  color: inherit;          /* prevent hover color change */
  text-decoration: underline;
}

.pub-authors a {
  color: inherit;          /* use same color as surrounding text */
  text-decoration: underline;
}

/* Year column */
.year-col {
  width: 60px;
  text-align: right;
  white-space: nowrap;
  color: #666;
}

.year-col img {
  width: 80%;
  height: auto;
  display: block;
  margin: auto auto;
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


<h2 class="pub-heading">Research Experience</h2>
<div class="table-wrapper">
  <table id="paperTable" class="pub-table">
    <tbody>
      <tr>
        <td class="year-col">Oct 2025 - Currently <br> 
        <img src="/images/imgs/uef.png"></td>
        <td>
          <div class="pub-title">Postdoctoral Researcher</div>
          <div class="pub-authors">Institute: University of Eastern Finland, Kuopio, Finland</div>
          <div class="pub-venue">Research project: Inverse problems in functional and quantitative MRI</div>
        </td>
      </tr>
      <tr>
        <td class="year-col">Oct 2024 - Sep 2025 <br> 
        <img src="/images/imgs/dtu.png"></td>
        <td>
          <div class="pub-title">Postdoctoral Researcher</div>
          <div class="pub-authors">Institute: Technical University of Denmark, Kgs. Lyngby, Denmark</div>
          <div class="pub-venue">Research project: <a href="https://sites.dtu.dk/cuqi">CUQI, Computational Uncertainty Quantification for Inverse Problems</a></div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<h2 class="pub-heading">Education</h2>
<div class="table-wrapper">
  <table id="paperTable" class="pub-table">
    <tbody>
      <tr>
        <td class="year-col">Oct 2021 - Sep 2024 <br> 
        <img src="/images/imgs/dtu.png"></td>
        <td>
          <div class="pub-title">PhD</div>
          <div class="pub-authors">Thesis: Uncertainty Quantification for Inverse Problems with Sparsity-Promoting Implicit Priors.</div>
          <div class="pub-venue">University: Technical University of Denmark, Kgs. Lyngby, Denmark</div>
          <div class="pub-source">Research group: <a href="https://sites.dtu.dk/cuqi">CUQI, Computational Uncertainty Quantification for Inverse Problems</a> <br>
                                  Thesis: <a href="https://orbit.dtu.dk/files/390213132/phd_thesis_JMEV.pdf">DTU Orbit</a></div>
        </td>
      </tr>
      <tr>
        <td class="year-col">Sep 2018 - Aug 2021 <br> 
        <img src="/images/imgs/uu.png"></td>
        <td>
          <div class="pub-title">Master of Science (MSc), Mathematical Sciences</div>
          <div class="pub-authors">University: Utrecht University, Utrecht, the Netherlands</div>
          <div class="pub-venue">Thesis: One-bit Compressed Sensing with Generative Models</div>
          <div class="pub-source">Track: Scientific Computing<br>
                                  Distinction: cum laude<br>
                                  Thesis: <a href="https://studenttheses.uu.nl/bitstream/handle/20.500.12932/41296/Master_thesis_Jasper_Everink.pdf">UU student theses</a></div>
        </td>
      </tr>
      <tr>
        <td class="year-col">Sep 2015 - Aug 2018 <br> 
        <img src="/images/imgs/uu.png"></td>
        <td>
          <div class="pub-title">Bachelor of Science (BSc), Mathematics</div>
          <div class="pub-authors">University: Utrecht University, Utrecht, the Netherlands</div>
          <div class="pub-venue">Thesis: Numerically Solving The Wave Equation Using The Finite Element Method</div>
          <div class="pub-source">Distinction: cum laude<br>
                                  Thesis: <a href="https://studenttheses.uu.nl/bitstream/handle/20.500.12932/29861/thesis.pdf">UU student theses</a></div>
        </td>
      </tr>
            <tr>
        <td class="year-col">Sep 2015 - Aug 2018 <br> 
        <img src="/images/imgs/uu.png"></td>
        <td>
          <div class="pub-title">Bachelor of Science (BSc), Computer Science</div>
          <div class="pub-authors">University: Utrecht University, Utrecht, the Netherlands</div>
          <div class="pub-venue">Thesis: FormalZ (Can Learning Formal Specification Be Fun?)</div>
          <div class="pub-source">Specialization: Game Technology<br>
                                  Distinction: cum laude<br>
                                  Thesis related publication: <a href="https://ieeexplore.ieee.org/abstract/document/8802100">IEEE</a></div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<h2 class="pub-heading">Teaching Experience</h2>
<div class="table-wrapper">
  <table id="paperTable" class="pub-table">
    <tbody>
      <tr>
        <td>
          <div class="pub-title">Co-teacher</div>
          <div class="pub-authors">
            Introduction to Uncertainty Quantification for Inverse Problems (1.5 days, PhD level course, Summer 2024)</div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="pub-title">Substitute teacher</div>
          <div class="pub-authors">
            Inverse Problems and Imaging (Fall 2022 and Fall 2025)<br>
            Optimization and Data Fitting (Fall 2024)</div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="pub-title">Teaching related course work</div>
          <div class="pub-authors">Teaching Lab (2.5 ECTS, Summer 2022, Technical University of Denmark)<br>
          Teaching Assistant Training (1 ECTS, 2019, Utrecht University)
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="pub-title">Teaching related software</div>
          <div class="pub-authors">FormalZ (Can Learning Formal Specification Be Fun?): <a href="https://ieeexplore.ieee.org/abstract/document/8802100">Paper</a>, <a href="https://github.com/FormalZ">Code</a>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="pub-title">Teaching assistance (TA) during PhD at the Technical University of Denmark</div>
          <div class="pub-authors">
            Mathematical Software Programming (Fall 2022 and Fall 2023)<br>
            Optimization and Data Fitting (Fall 2022)
          </div>
          <div class="pub-title">Teaching assistance (TA) during MSc at Utrecht University</div>
          <div class="pub-authors">
            Numerical Mathematics (Fall 2018, Fall 2019 and Fall 2020)<br>
            Calculus and Linear Algebra 1 & 2 (Fall 2020)<br>
            Stochastic Processes (Spring 2020)
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<h2 class="pub-heading">Conference & Workshop Attendance</h2>
<div class="table-wrapper">
  <table id="paperTable" class="pub-table">
    <tbody>
      <tr>
        <td class="year-col">2025</td>
        <td>
          <div class="pub-authors">
            Inverse Days (Finland)<br>
            Joint Statistical Meetings (JSM, USA) - Conference Talk<br>
            SSVM (UK) - Conference Talk
          </div>
        </td>
      </tr>
      <tr>
        <td class="year-col">2024</td>
        <td>
          <div class="pub-authors">
            Inverse Days (Finland) - Conference Talk<br>
            Uncertainty Quantification for Inverse Problems and Imaging (UQIPI24, United Kingdom) - Workshop Talk<br>
            SIAM Conference on Uncertainty Quantification (UQ24, Italy) - Conference Talk
          </div>
        </td>
      </tr>
        <tr>
        <td class="year-col">2023</td>
        <td>
          <div class="pub-authors">
            Inverse Days (Finland) - Conference Talk<br>
            Computational Mathematics for Data Science (CMDS, Denmark) - Poster<br>
            Applied Inverse Problems (AIP23, Germany) - Conference Talk<br>
            SIAM Conference on Computational Science and Engineering (CSE23, Netherlands) - Conference Talk<br>
          </div>
        </td>
      </tr>
        <tr>
        <td class="year-col">2022</td>
        <td>
          <div class="pub-authors">
            Inverse Days (Finland) - Short Talk<br>
            Imaging with Uncertainty Quantification (IUQ22, Denmark) - Workshop Talk<br>
            SIAM Conference on Imaging Science (IS22, virtual) - Conference Talk</div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
