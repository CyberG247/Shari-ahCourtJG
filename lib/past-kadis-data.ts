export interface PastKadiProfile {
  id: string
  name: string
  fullName: string
  honorific: string
  roleCategory: 'grand-kadi' | 'kadi'
  rankTitle: string
  tenurePeriod: string
  tenureYears: string
  status: 'retired' | 'deceased'
  passingYear?: string
  passingDate?: string
  burialOrMemorialLocation?: string
  traditionalOrHonoraryTitles?: string
  division: string
  biography: string[]
  keyContributions: string[]
  jurisprudentialSpecialization: string[]
  historicalNotes: string
}

export const pastKadisList: PastKadiProfile[] = [
  // --- PAST GRAND KADIS (HEADS OF COURT) ---
  {
    id: 'grand-kadi-muhammad-tahir',
    name: 'Hon. Grand Kadi Alhaji Muhammad Tahir',
    fullName: 'Muhammad Tahir',
    honorific: 'His Lordship, Hon. Grand Kadi',
    roleCategory: 'grand-kadi',
    rankTitle: 'Former Grand Kadi of Jigawa State',
    tenurePeriod: 'Pioneer Era (1990s – Early 2000s)',
    tenureYears: '1992 – 2002',
    status: 'retired',
    traditionalOrHonoraryTitles: 'Distinguished Pioneer Jurist',
    division: 'Dutse Headquarters (Pioneer Appellate Division)',
    biography: [
      'Hon. Grand Kadi Alhaji Muhammad Tahir served as one of the seminal heads of court of the Jigawa State Shari’ah Court of Appeal following the creation of Jigawa State out of the old Kano State on August 27, 1991.',
      'During his tenure, His Lordship laid the institutional foundation of the newly birthed appellate court, supervising the drafting of initial court registry guidelines, the establishment of the central archives in Dutse, and the deployment of the first generation of appellate court registries across the five judicial divisions of Dutse, Hadejia, Kazaure, Gumel, and Birnin Kudu.',
      'His judicial career was marked by immense reverence for classical Maliki jurisprudence, strict procedural regularity, and deep devotion to equitable dispute resolution under Islamic personal law.'
    ],
    keyContributions: [
      'Superintended the transition of Shari’a appeals from the old Kano State registry to the newly established Jigawa State judicial headquarters in Dutse.',
      'Formulated foundational guidelines for the settlement of records of proceedings in Islamic inheritance (Mirath) and matrimonial causes.',
      'Established the inaugural library of classical Arabic legal texts and Fatawa compilations for the appellate bench.'
    ],
    jurisprudentialSpecialization: [
      'Maliki Islamic Jurisprudence (Fiqh al-Mu’amalat & Munakahat)',
      'Appellate Procedure & Record Settlement',
      'Islamic Land Tenure & Waqf Endowments'
    ],
    historicalNotes: 'Pioneer judicial architect whose administrative foresight anchored the initial institutional setup of the Jigawa State Shari’ah Court of Appeal.'
  },
  {
    id: 'grand-kadi-munir-mustapha',
    name: 'Hon. Grand Kadi Alhaji Munir Mustapha',
    fullName: 'Munir Mustapha',
    honorific: 'His Lordship, Hon. Grand Kadi',
    roleCategory: 'grand-kadi',
    rankTitle: 'Former Grand Kadi of Jigawa State',
    tenurePeriod: '2000s Era (Expansion of Shari’ah Framework)',
    tenureYears: '2002 – 2012',
    status: 'retired',
    traditionalOrHonoraryTitles: 'Former Member, Jigawa State Judicial Service Commission (JSC)',
    division: 'Dutse Headquarters',
    biography: [
      'Hon. Grand Kadi Alhaji Munir Mustapha presided over the Jigawa State Shari’ah Court of Appeal during a crucial era of legal development and institutional expansion across northern Nigeria in the 2000s.',
      'His Lordship championed the modernization of Shari’a court administration, working in close collaboration with the State Judicial Service Commission to introduce enhanced professional standards for court registries, inspectors, and presiding Alkalis.',
      'Following his honorable retirement from the appellate bench, he continued his public service as a prominent member of the Jigawa State Judicial Service Commission (JSC) and as a respected elder in national consultative forums.'
    ],
    keyContributions: [
      'Guided the Shari’ah Court of Appeal through the statutory expansion of the Shari’ah legal framework in Jigawa State.',
      'Initiated structured training colloquia for Upper Shari’a Court judges and appellate registrars.',
      'Strengthened appellate supervisory jurisdiction, reducing appeals turnover time and fostering integrity across all 27 Local Government Areas.'
    ],
    jurisprudentialSpecialization: [
      'Constitutional Limits of State Shari’a Jurisdiction',
      'Judicial Ethics & Integrity Oversight',
      'Islamic Succession & Complex Estate Distribution'
    ],
    historicalNotes: 'Esteemed jurist and judicial statesman whose stewardship strengthened the credibility and public trust in the state’s Shari’ah appellate system.'
  },
  {
    id: 'grand-kadi-isah-gantsa',
    name: 'Hon. Grand Kadi Isah Jibrin Gantsa',
    fullName: 'Isah Jibrin Gantsa',
    honorific: 'His Lordship, Hon. Grand Kadi (Late)',
    roleCategory: 'grand-kadi',
    rankTitle: 'Former Grand Kadi of Jigawa State',
    tenurePeriod: 'Former Head of Court (Served until 2020)',
    tenureYears: '2015 – 2020',
    status: 'deceased',
    passingYear: '2026',
    passingDate: 'January 22, 2026',
    burialOrMemorialLocation: 'Funeral Prayer (Janazah) held at Dutse Central Mosque, Dutse, Jigawa State',
    traditionalOrHonoraryTitles: 'Fagacin Dutse | Former President, Dutse Emirate Development Association (DEDA)',
    division: 'Dutse Headquarters',
    biography: [
      'The late Honourable Grand Kadi Isah Jibrin Gantsa (Fagacin Dutse) was one of the most distinguished, revered, and transformative heads of court in the history of the Jigawa State Shari’ah Court of Appeal.',
      'Appointed to lead the appellate judiciary and sworn in by the Governor of Jigawa State, His Lordship served with unwavering moral fortitude, scholarly distinction, and humane compassion. He dedicated his tenure to upgrading judicial welfare, reforming registry operations, and modernizing physical court infrastructure.',
      'Beyond his illustrious judicial office, he was an eminent community pillar and elder statesman, holding the prestigious traditional title of Fagacin Dutse and serving as President of the Dutse Emirate Development Association (DEDA). His passing in Cairo, Egypt in January 2026 elicited state-wide and national mourning from government, the judiciary, traditional rulers, and citizens alike.'
    ],
    keyContributions: [
      'Described by state leadership as one of the finest Grand Kadis in Jigawa State history for his transformative administrative reforms and welfare programs for judicial staff.',
      'Reformed appellate docket management and enhanced court accessibility across rural communities in the state.',
      'Presided over numerous landmark appellate decisions establishing sound precedents in matrimonial restitution, guardianship (Hadanah), and agricultural property disputes.'
    ],
    jurisprudentialSpecialization: [
      'Classical Maliki Jurisprudence & Judicial Precedent',
      'Matrimonial Law, Talaq & Khul’ Jurisprudence',
      'Appellate Procedure & Record Settlement'
    ],
    historicalNotes: 'An iconic judicial leader whose legacy of institutional integrity, scholarly humility, and community development continues to inspire the Jigawa State judiciary. Rahimahullah.'
  },

  // --- PAST & EMERITUS APPELLATE KADIS ---
  {
    id: 'kadi-bashir-birnin-kudu',
    name: 'Hon. Kadi Bashir Birnin-Kudu',
    fullName: 'Bashir Ahmed Birnin-Kudu',
    honorific: 'The Honorable Kadi (Late)',
    roleCategory: 'kadi',
    rankTitle: 'Former Honorable Kadi of the Appellate Bench',
    tenurePeriod: 'Senior Appellate Bench & Islamic Education Leadership',
    tenureYears: '1990s – 2010s',
    status: 'deceased',
    passingYear: '2025',
    passingDate: 'October 10, 2025',
    burialOrMemorialLocation: 'Aminu Kano Teaching Hospital (Passed) | Interred in Jigawa State',
    traditionalOrHonoraryTitles: 'Pioneer Provost, Jigawa State College of Islamic & Legal Studies (Ringim) | Chief Imam, Dutse Central Mosque | Chairman, Jigawa State Council of Ulama',
    division: 'Birnin Kudu / Dutse Appellate Divisions',
    biography: [
      'The late Honourable Kadi Bashir Birnin-Kudu was a towering intellectual luminary, spiritual guide, and eminent jurist who made indelible contributions to Islamic legal education and the administration of justice across Kano and Jigawa States.',
      'A master of Islamic jurisprudence, he served as a distinguished Kadi of the Jigawa State Shari’ah Court of Appeal, where his appellate opinions were revered for their linguistic precision, profound fidelity to Maliki sources, and deep human empathy.',
      'In addition to his judicial bench service, His Lordship was the pioneer Provost of the Jigawa State College of Islamic and Legal Studies in Ringim, molding countless jurists, registrars, and scholars. He also served as the Chief Imam of the Dutse Central Mosque and Chairman of the Jigawa State Council of Ulama until his demise in October 2025.'
    ],
    keyContributions: [
      'Pioneer Provost of the Jigawa State College of Islamic and Legal Studies (Ringim), establishing the academic training ground for the state’s judicial workforce.',
      'Authored authoritative appellate judgments reconciling classical Maliki doctrines with statutory Nigerian court procedure.',
      'Served as spiritual leader (Chief Imam of Dutse Central Mosque) and supreme religious counselor as Chairman of the Jigawa Council of Ulama.'
    ],
    jurisprudentialSpecialization: [
      'Islamic Jurisprudence (Usul al-Fiqh & Fiqh al-Muqaran)',
      'Inheritance Law & Estate Distribution (Mirath & Wasaya)',
      'Judicial Ethics & Moral Integrity'
    ],
    historicalNotes: 'Revered spiritual and intellectual father of the Jigawa Islamic judiciary whose lifetime of scholarship educated generations of judges. Rahimahullah.'
  },
  {
    id: 'kadi-ibrahim-yau',
    name: 'Hon. Kadi Ibrahim Alhaji Ya’u',
    fullName: 'Ibrahim Alhaji Ya’u',
    honorific: 'The Honorable Kadi',
    roleCategory: 'kadi',
    rankTitle: 'Past Honorable Kadi of the Shari’ah Court of Appeal',
    tenurePeriod: 'Appointed 2019 (Appellate Division)',
    tenureYears: '2019 – 2024',
    status: 'retired',
    traditionalOrHonoraryTitles: 'Senior Appellate Jurist',
    division: 'Hadejia / Dutse Appellate Divisions',
    biography: [
      'Hon. Kadi Ibrahim Alhaji Ya’u was recommended by the National Judicial Council (NJC) in October 2019 and appointed by the Jigawa State Government as an Appellate Kadi of the Shari’ah Court of Appeal.',
      'Bringing over two decades of trial experience from the Upper Shari’a courts, His Lordship served on numerous appellate panels adjudicating intricate land disputes, agricultural boundary arbitrations, and inheritance distributions across the Hadejia and Gumel emirate divisions.',
      'His tenure was characterized by rigorous adherence to procedural deadlines, meticulous examination of trial transcripts, and active participation in judicial continuing education.'
    ],
    keyContributions: [
      'Presided over complex appellate panels in the eastern judicial divisions of Jigawa State.',
      'Contributed significantly to expedited hearing guidelines for rural probate and estate appeals.',
      'Served as judicial mentor to newly appointed Alkalis and registry personnel.'
    ],
    jurisprudentialSpecialization: [
      'Agricultural Land Tenure & Customary Islamic Easements (Irtifaq)',
      'Estate Settlement (Qismah al-Tirkat)',
      'Appellate Cause List Management'
    ],
    historicalNotes: 'Dedicated appellate jurist whose seasoned insight fortified appellate dispute resolution in the Hadejia and Dutse divisions.'
  },
  {
    id: 'kadi-sani-isah',
    name: 'Hon. Kadi Alhaji Sani Isah',
    fullName: 'Sani Isah',
    honorific: 'The Honorable Kadi',
    roleCategory: 'kadi',
    rankTitle: 'Past Honorable Kadi of the Shari’ah Court of Appeal',
    tenurePeriod: 'Senior Appellate Bench (Retired)',
    tenureYears: '2010 – 2021',
    status: 'retired',
    traditionalOrHonoraryTitles: 'Senior Judicial Elder',
    division: 'Ringim / Kazaure Appellate Divisions',
    biography: [
      'Hon. Kadi Alhaji Sani Isah is a veteran jurist who rendered decades of meritorious service to the Jigawa State Judiciary, culminating in his elevation to the Appellate Bench of the Shari’ah Court of Appeal.',
      'Throughout his judicial career spanning several local government divisions, His Lordship earned widespread acclaim for his uncompromising integrity, mastery of evidentiary standards under Islamic law, and fair treatment of all litigants.',
      'Since his honorable statutory retirement, he has remained an active community counselor, advising on alternative dispute resolution and traditional conciliation (Sulhu) within the state.'
    ],
    keyContributions: [
      'Formulated judicial recommendations for standardizing witness examination (Tazkiyah al-Shuhud) in appellate reviews.',
      'Resolved hundreds of appellate contested divorce and custody disputes through equitable judicial intervention.',
      'Championed amicable reconciliation (Sulhu) mechanisms at the appellate level prior to contentious trials.'
    ],
    jurisprudentialSpecialization: [
      'Islamic Law of Evidence (Shahadah & Yamin)',
      'Matrimonial Dissolution & Conciliation (Sulhu)',
      'Custody (Hadanah) & Child Maintenance (Nafaqah)'
    ],
    historicalNotes: 'Respected judicial elder remembered for his calm demeanor, integrity, and devotion to peaceful dispute conciliation.'
  }
]
