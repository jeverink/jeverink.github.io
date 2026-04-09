---
permalink: /
title: "Errata: Bayesian inference with projected densities"
permalink: /errata/projected_densities
author_profile: true
---

The following is a list of errors in the published and peer-reviewed article:

<a href="https://orbit.dtu.dk/en/publications/bayesian-inference-with-projected-densities/">Everink, J. M., Dong, Y., & Andersen, M. S. (2023). Bayesian inference with projected densities. SIAM/ASA Journal on Uncertainty Quantification, 11(3), 1025-1043.</a>


# Errors mentioned in appendix PhD thesis:

- **Lemma 2.3:** Some of the equalities should be proportional, due to a missing constant Jacobian in the proof. In particular:
    - The second equation in Lemma 2.3. should read:
    $$
    \pi_F(z)\,\propto\, \int_{\Sigma N_C} \pi_{x^\star}(z + v)\text{d}v.
    $$
    - The equation in the proof should read:
    $$
    \mathbb{P}(\Pi_C^{\Sigma^{-1}}(x^\star) \in E)\,=\, \int_{E + \Sigma N_C}\pi_{x^\star}(w)\text{d}w
    \propto \pi_F(z)\,\propto\, \int_{\Sigma N_C}\int_{E} \pi_{x^\star}(z + v)\text{d}v\text{d}z.
    $$
- **Figure 7:** In the top two subplots regarding the Autocorrelation Function (ACF) for $\lambda$ and $\delta$, the data labels are incorrect. Whilst the conclusions do not change, the correct data shown is the following:
    - ACF for $\lambda$, unconstrained is the only correct one.
    - ACF for $\lambda$, with nonnegativity shows ACF for $\delta$, with nonnegativity.
    - ACF for $\delta$, unconstrained shows ACF for $\lambda$, with nonnegativity.
    - ACF for $\delta$, with nonnegativity shows ACF for $\delta$, unconstrained.
