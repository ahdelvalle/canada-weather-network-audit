# Canada Precipitation Network — Change Analysis

## July 18, 2026 vs September 24, 2026 Audit Comparison

**Prepared by:** Adrián Hernández-del-Valle, PhD
**Institution:** SCRI — Services Communautaires pour Réfugiés et Immigrants, Montreal
**For:** Follow-up to Minister Julie Dabrusin's response (Jan 2026) / MP Rachel Bendayan's office
**Methodology:** ECCC 5-category station classification, applied to the full ECCC inventory
**Scope:** 12 provinces and territories (Yukon not included in either audit)
**Comparison basis:** `station_classification_results.csv` from each run, merged on `Station ID`

---

## Executive Summary

Between the July 18 and September 24, 2026 audits, the Canadian precipitation network was **effectively frozen everywhere except Alberta**. Of the 8,197 stations present in both audits, **not a single station changed classification** in either direction. The entire national change is explained by inventory *membership*, not by stations degrading or recovering:

- **136 stations disappeared** from the ECCC inventory (present in July, absent in September).
- **All 136 are in Alberta.** 135 of them were classified *active* in July (120 functional, 15 transmission-issue); only 1 was already decommissioned.
- **120 of the 136 (88%) carry the AGCM/AGDM designation** — Alberta's agricultural climate and drought-moisture monitoring network. Most of the remainder are irrigation-reservoir stations.
- **124 of the 136 (91%) last reported daily data in 2024** — i.e. recently active, not long-dormant.
- **1 station entered** the inventory nationwide: Montreal International Airport (Quebec), as a transmission-issue station.

This extends the pattern documented in the May → July comparison (44 Alberta stations left the inventory) to a larger scale over the following interval: **136 more Alberta stations gone in roughly ten weeks**, again removed wholesale rather than through the normal decommissioning path.

---

## 1. National Aggregate Comparison

| Category | July 18 | Sept 24 | Δ |
|---|---:|---:|---:|
| ✅ ACTIVE_FUNCTIONAL | 1,165 | 1,045 | **−120** |
| ⚠️ ACTIVE_TRANSMISSION_ISSUE | 371 | 357 | **−14** |
| 🏚️ DECOMMISSIONED | 6,797 | 6,796 | −1 |
| 🔌 NO_PRECIP_SENSOR | 0 | 0 | 0 |
| **Total stations analyzed** | **8,333** | **8,198** | **−135** |
| Effective network (functional + transmission) | 1,536 | 1,402 | −134 |
| Functional rate (of effective network) | 75.85% | 74.54% | −1.31 pp |
| Effective failure rate | 24.15% | 25.46% | +1.31 pp |

The net −135 total = 136 stations leaving − 1 station entering. The −120 functional and −14 transmission changes are accounted for entirely by the departing Alberta stations (plus the one Montreal entrant on the transmission side); no station was reclassified.

---

## 2. Station-Level Change Analysis

Merging the two runs on `Station ID` (8,333 unique IDs in July, 8,198 in September):

| Membership | Count |
|---|---:|
| Present in **both** audits | 8,197 |
| **Left** inventory (July only) | 136 |
| **Entered** inventory (September only) | 1 |

### Transition matrix — stations present in both audits (July → September)

| July ↓ / Sept → | Functional | Transmission | Decommissioned |
|---|---:|---:|---:|
| **Functional** | 1,045 | 0 | 0 |
| **Transmission** | 0 | 356 | 0 |
| **Decommissioned** | 0 | 0 | 6,796 |

The matrix is perfectly diagonal. **Zero off-diagonal transitions.** No station present in both audits moved between categories — not one degraded, not one recovered. This is the same "none changed category" result seen May → July, now confirmed across the July → September interval.

### What the 136 departed stations were, in July

| July classification | Count |
|---|---:|
| ACTIVE_FUNCTIONAL | 120 |
| ACTIVE_TRANSMISSION_ISSUE | 15 |
| DECOMMISSIONED | 1 |
| **Total** | **136** |

### Recency of the departed stations (DLY Last Year)

| Last reported year | Stations |
|---|---:|
| 2024 | 124 |
| 2023 | 3 |
| 2022 | 2 |
| 2021 | 1 |
| 2020 | 1 |
| 2018 | 4 |
| 2015 | 1 |

91% were reporting data as recently as 2024. These are not stale historical records being cleaned up; they are recently active stations removed from the inventory.

---

## 3. Alberta Deep Dive

Alberta absorbed the entire national change.

| Alberta | July 18 | Sept 24 | Δ | % change |
|---|---:|---:|---:|---:|
| ✅ Functional | 212 | 92 | −120 | −57% |
| ⚠️ Transmission issue | 32 | 17 | −15 | −47% |
| 🏚️ Decommissioned | 1,177 | 1,176 | −1 | ~0% |
| **Total** | **1,421** | **1,285** | **−136** | **−10%** |
| Effective failure rate | 13.1% | 15.6% | +2.5 pp | |

Alberta's **functional precipitation stations fell 57% in about ten weeks**, while its decommissioned count was essentially unchanged. The stations were not retired through the standard decommissioning process (which would move them into the DECOMMISSIONED bucket and preserve their historical record with a stated end year) — they were dropped from the federal inventory entirely.

### The departed stations are an agricultural network

| Designation | Count | Share |
|---|---:|---:|
| AGCM / AGDM (agricultural climate & drought-moisture monitoring) | 120 | 88% |
| Reservoir / irrigation & other named sites | 16 | 12% |

Representative AGCM/AGDM departures: Abee AGDM, Alliance AGCM, Andrew AGDM, Bellshill AGCM, Bodo AGDM, Busby AGCM, Cadogan AGCM, Consort AGDM, Crestomere AGCM, Delburne AGCM, Dewberry AGCM, Edgerton AGCM, Ferintosh AGCM. Non-tagged departures are dominated by irrigation-reservoir sites: St. Mary Reservoir, Milk River Ridge Reservoir, Bullhorn Coulee Reservoir, Bullhorn Headwaters, plus Breton Plots, Three Hills, Black Diamond, Acadia Valley, and others.

An entire designated sub-network leaving in a single interval is consistent with **one inventory-level change**, not 136 independent station closures. This is the same interpretation reached in the May → July analysis, now supported by a larger and cleaner sample.

---

## 4. Province-by-Province — Everything Outside Alberta Is Static

| Province | Total Jul | Total Sep | Func Jul | Func Sep | Failure Jul | Failure Sep |
|---|---:|---:|---:|---:|---:|---:|
| **ALBERTA** | **1,421** | **1,285** | **212** | **92** | **13.1%** | **15.6%** |
| British Columbia | 1,747 | 1,747 | 241 | 241 | 16.9% | 16.9% |
| Manitoba | 576 | 576 | 72 | 72 | 17.2% | 17.2% |
| New Brunswick | 228 | 228 | 27 | 27 | 20.6% | 20.6% |
| Newfoundland | 323 | 323 | 44 | 44 | 37.1% | 37.1% |
| Northwest Territories | 165 | 165 | 37 | 37 | 43.9% | 43.9% |
| Nova Scotia | 307 | 307 | 43 | 43 | 23.2% | 23.2% |
| Nunavut | 189 | 189 | 47 | 47 | 43.4% | 43.4% |
| Ontario | 1,567 | 1,567 | 164 | 164 | 23.0% | 23.0% |
| Prince Edward Island | 55 | 55 | 8 | 8 | 20.0% | 20.0% |
| Quebec | 1,029 | 1,030 | 189 | 189 | 34.4% | 34.6% |
| Saskatchewan | 726 | 726 | 81 | 81 | 14.7% | 14.7% |

Eleven of twelve jurisdictions are **identical to the station**. Quebec differs by exactly one station — the single national entrant (see §5), which raises its transmission count by one and nudges its failure rate from 34.4% to 34.6%. Every other cell is unchanged. This uniform stasis is itself evidence: it rules out a methodological change between runs (which would have perturbed every province) and isolates the Alberta departure as a discrete, real inventory event.

---

## 5. The Single New Station

| Station ID | Name | Province | September classification |
|---|---|---|---|
| 55798 | Montreal International Airport | Quebec | ACTIVE_TRANSMISSION_ISSUE |

One station nationwide appeared in September that was absent in July. It accounts for Quebec's +1 total and the country's "−136 left / +1 entered = −135 net" reconciliation.

---

## 6. Data-Quality Notes and Caveats

**The download tallies are not comparable and should be disregarded.** The classification comparison above is solid; the raw-file download phase is not:

| Download phase | July | September |
|---|---:|---:|
| Attempted | 1,536 | 1,402 |
| Successful | 1,385 (90%) | 258 (18%) |
| Failed | 151 | 1,144 |

September classified 1,045 stations as functional but only downloaded 258 files — an internally inconsistent result. This is almost certainly ECCC rate-limiting or a throttled/interrupted download phase in the September run, not a real collapse in data availability. **Do not interpret the download drop as a network finding.** If the precipitation time series are needed, re-run only the download step, rate-limited and off-peak; the classification results do not depend on it.

**Minor:** the notebook's hardcoded July figures (368/370 transmission) differ from the actual July run (371). All figures in this report are recomputed from the source CSVs, not from hardcoded literals.

---

## 7. Implications for Agricultural Insurance and Climate Monitoring

1. **Actuarial risk models.** The stations removed are precisely the agricultural climate and drought-moisture (AGCM/AGDM) stations that crop-insurance pricing depends on, concentrated in the province where agricultural insurance exposure is largest. A 57% reduction in Alberta's functional precipitation stations directly erodes the observational basis for AgriInsurance rate-setting.

2. **Discontinuity, not decay.** Because no station changed category, the risk is not gradual sensor degradation but an abrupt removal of a coherent monitoring layer. Continuous long-term records underpin regime-change detection; a wholesale inventory removal creates a step discontinuity that is harder to correct for than random dropout.

3. **Transparency obligations.** Recently-active stations (91% reporting in 2024) leaving the federal inventory without appearing in the decommissioned record raises a data-governance question: where did these records go, and are they still retrievable?

---

## 8. Recommended Actions

1. **Inventory inquiry (not NIRT).** These stations *left the inventory*; they are not "active-but-no-data" cases. The appropriate ask to ECCC is why 136 recently-active Alberta stations — 88% of them AGCM/AGDM — were removed from the federal inventory between July and September 2026, and whether their historical records remain accessible.

2. **Confirm custody of the AGCM/AGDM network.** Determine whether responsibility for these agricultural stations transferred to a provincial body (e.g. Alberta's ACIS / AgriMet network) rather than being discontinued, and whether the data remains federally archived.

3. **Cross-reference with ACIS.** Check the departed station list against Alberta Agriculture and Irrigation's ACIS network to establish whether coverage was maintained under provincial operation.

4. **Preserve the evidence chain.** Retain both audit snapshots (July and September) unchanged as the temporal comparison points. Do not overwrite them by re-running the pipeline.

---

## Appendix A — Departed Stations (sample)

Full list of all 136 departed stations (ID, name, province, July classification, DLY last year) is provided in the companion file **`alberta_departed_stations.csv`**. First 20 shown here:

| Station ID | Name | July class | DLY Last Year |
|---|---|---|---:|
| 32232 | Abee AGDM | ACTIVE_FUNCTIONAL | 2024 |
| 46127 | Albert Hall AGCM | ACTIVE_FUNCTIONAL | 2024 |
| 46327 | Alliance AGCM | ACTIVE_FUNCTIONAL | 2024 |
| 32253 | Andrew AGDM | ACTIVE_FUNCTIONAL | 2024 |
| 46128 | Bellshill AGCM | ACTIVE_FUNCTIONAL | 2024 |
| 32149 | Bodo AGDM | ACTIVE_FUNCTIONAL | 2024 |
| 10928 | Breton Plots | ACTIVE_FUNCTIONAL | 2024 |
| 47068 | Busby AGCM | ACTIVE_FUNCTIONAL | 2024 |
| 46470 | Cadogan AGCM | ACTIVE_FUNCTIONAL | 2024 |
| 32230 | Consort AGDM | ACTIVE_FUNCTIONAL | 2024 |
| 47069 | Crestomere AGCM | ACTIVE_FUNCTIONAL | 2024 |
| 46730 | Delburne AGCM | ACTIVE_FUNCTIONAL | 2024 |
| 46731 | Dewberry AGCM | ACTIVE_FUNCTIONAL | 2024 |
| 46129 | Edgerton AGCM | ACTIVE_FUNCTIONAL | 2024 |
| 46733 | Ferintosh AGCM | ACTIVE_FUNCTIONAL | 2024 |
| 45747 | Bullhorn Coulee Reservoir | ACTIVE_TRANSMISSION_ISSUE | 2024 |
| 45749 | Bullhorn Headwaters | ACTIVE_TRANSMISSION_ISSUE | 2024 |
| 45767 | Milk River Ridge Reservoir | ACTIVE_TRANSMISSION_ISSUE | 2024 |
| 45727 | St. Mary Reservoir | ACTIVE_TRANSMISSION_ISSUE | 2024 |
| 45748 | Glenwood | ACTIVE_TRANSMISSION_ISSUE | 2024 |

---

## 9. Addendum — Confirmations Received (October 7, 2026)

After this report was completed, the findings were put to the responsible agencies. Both confirmed the central finding in writing.

1. **ECCC — Applied Climatology Services, West region (written reply, October 2026).** Historical Government of Alberta climate data was removed from the ECCC National Archive in August/September 2026. The stated reason is version divergence: differing quality-control processes had produced two different sets of values for the same historical records in the federal and provincial archives. Users are directed to Alberta's ACIS (acis.alberta.ca) as the source for these stations.

2. **Alberta Agriculture and Irrigation — Agricultural Meteorology (written reply, October 2026).** The removal occurred while a standardized national approach to climate-data archiving is developed through the Canadian Council for Weather and Climate Monitoring, a federal–provincial–territorial initiative. Alberta's database is the authoritative, actively quality-controlled record for these stations; historical observations there may be corrected or updated as QA processes identify issues. The ACIS archive generally begins around 2000, and historical data from stations owned by agencies other than Alberta Agriculture was not incorporated into it. A bulk extract of the affected stations' daily data has been offered to this audit.

3. **Empirical verification (this audit).** All 136 departed stations now return empty responses from ECCC's public historical-data service, each queried for its own last reporting year, while retained control stations queried identically return complete daily files (see `eccc_retrieval_test_136.csv`). 135 of the 136 stations are identifiable in the current ACIS station list, several under new names, including eight former AGDM sites now operating under IMCIN designations.

4. **Open questions.** Whether two record segments remain publicly archived anywhere: the pre-2000 portion of Three Hills (ECCC 10907, daily records from 1993), and the full record of Glenwood (ECCC 45748, daily records 2010–2018), which does not appear in the current ACIS station list.

These confirmations explain the inventory event documented above; the classification framework, counts and figures in §§1–8 are unchanged by them.

---

## Methodology Note

Both audits were produced by the same pipeline (BUENO7 / CanadaPrecipitationScraperV2) applying ECCC's five-category classification to the full ECCC station inventory. This comparison merges the two `station_classification_results.csv` outputs on `Station ID`; membership differences identify stations that entered or left the inventory, and a cross-tabulation of classifications for stations present in both identifies category transitions. All counts are recomputed from the source CSVs. Effective network = total − decommissioned; effective failure rate = (transmission-issue + data-missing) / effective network.

*Report generated from July 18, 2026 and September 24, 2026 audit archives.*
