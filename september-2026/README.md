# September 2026 — July → September 2026 Comparison

**Headline:** between the July 18 and September 24, 2026 audits, 136 stations left the federal station inventory — all of them in Alberta (120 of 136 AGCM/AGDM agricultural stations). Among the 8,197 stations present in both audits, zero changed classification. ECCC and Alberta Agriculture and Irrigation have since confirmed in writing that the Government of Alberta's historical data was deliberately removed from the federal archive in August/September 2026, with Alberta's ACIS as the designated source going forward (see the report's Addendum, §9).

## Contents

| File | Description |
|---|---|
| `Precipitation_Network_Change_Report_Jul_Sep_2026.md` | Full comparison report, incl. §9 Addendum with agency confirmations |
| `alberta_departed_stations.csv` | All 136 departed stations: ID, name, July classification, record years, coordinates, AGCM/AGDM flag |
| `eccc_retrieval_test_136.csv` | Federal retrieval test: 0 of 136 departed stations return data from ECCC's historical-data service |
| `fig_alberta_departed_EN_1080x1350.png` / `_FR_` | Summary figure (English / French) |
| `fig1_transition_matrix_jul_sep.png` | Jul→Sep transition matrix (8,197 common stations, perfectly diagonal) |
| `canada_precipitation_network_map.png` | September 24, 2026 national classification map |
| `BUENO9_SCRAPER_CANADA_WIDE.ipynb` | Audit pipeline notebook (Colab) — ECCC 5-category classification applied to the full inventory |

Methodology: ECCC's five-category station classification, as described in correspondence from the Minister's office (January 2026), applied to the full ECCC station inventory; snapshots merged on Station ID.
