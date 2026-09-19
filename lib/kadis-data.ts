export interface KadiDetail {
  id: string
  name: string
  fullName: string
  honorific: string
  rank: string
  roleTitle: string
  appointmentPeriod: string
  appointmentYear: string
  njcRecommendation: string
  division: string
  qualifications: string[]
  biography: string[]
  careerHighlights: string[]
  internationalMissions: string[]
  jurisprudentialFocus: string[]
  landmarkDecisions: {
    suitNumber: string
    title: string
    year: string
    subject: string
    summary: string
  }[]
  image?: string
}

export const kadisData: Record<string, KadiDetail> = {
  'grand-kadi-salihu': {
    id: 'grand-kadi-salihu',
    name: 'Hon. Grand Kadi Muhammad Sani Salihu',
    fullName: 'Muhammad Sani Salihu',
    honorific: 'His Lordship, Hon. Grand Kadi',
    rank: 'Head of Court',
    roleTitle: 'Grand Kadi of Jigawa State',
    appointmentPeriod: 'Grand Kadi (2020 – Date)',
    appointmentYear: '2020',
    njcRecommendation: 'Recommended by the National Judicial Council (NJC) in April 2020; sworn in by the Governor of Jigawa State at Government House, Dutse.',
    division: 'Appellate Division 1 (Dutse Headquarters)',
    qualifications: [
      'Bachelor of Laws in Shari\'ah (LL.B Shari\'ah)',
      'Barrister at Law (BL), Nigerian Law School',
      'Advanced Diploma in Islamic Judicial Practice & Procedure',
      'Fellow, National Judicial Institute (NJI)'
    ],
    biography: [
      'The Honorable Grand Kadi Muhammad Sani Salihu is the distinguished Head of Court of the Shari’ah Court of Appeal, Jigawa State. Following a long and decorated career in the judicial service as a trial judge in the lower and Upper Shari\'a courts and later as Chief Registrar, His Lordship was elevated to the appellate bench and subsequently recommended by the National Judicial Council (NJC) in April 2020 to lead the state\'s Shari\'ah appellate judiciary.',
      'Under his visionary stewardship, the Jigawa State Shari\'ah Court of Appeal has undertaken aggressive institutional reforms, including expanding court registries into rural communities, establishing unannounced judicial inspection regimes to eliminate staff absenteeism and foster integrity, and spearheading the court\'s comprehensive digital modernization.',
      'His Lordship has represented Nigeria on numerous prestigious international judicial missions, most recently leading the state\'s high-level delegation of Kadis to the International Colloquium on Maliki Islamic Jurisprudence in Rabat, Kingdom of Morocco in September 2026.'
    ],
    careerHighlights: [
      'Grand Kadi of the Shari\'ah Court of Appeal, Jigawa State (2020 – Present)',
      'Member, Body of Benchers of Nigeria',
      'Member, Jigawa State Judicial Service Commission (JSC)',
      'Former Chief Registrar, Jigawa State Shari\'ah Court of Appeal',
      'Extensive career as Upper Shari\'a Court Presiding Judge'
    ],
    internationalMissions: [
      'Rabat, Kingdom of Morocco (September 2026) — Head of Delegation, International Colloquium on Islamic Jurisprudence & Appellate Systems',
      'All-Nigeria Judges Conference, National Judicial Institute (NJI), Abuja (2025, 2023, 2021)',
      'Commonwealth & Regional Judicial Leadership Roundtables'
    ],
    jurisprudentialFocus: [
      'Maliki Islamic Jurisprudence & Comparative Family Law',
      'Appellate Procedure & Supervisory Jurisdiction',
      'Constitutional Law & Judicial Ethics',
      'Estate Administration (Mirath) & Waqf Governance'
    ],
    landmarkDecisions: [
      {
        suitNumber: 'SCA/JG/AP/12/2021',
        title: 'Alhaji Garba & Ors v. Estate of Late Malam Zubairu',
        year: '2021',
        subject: 'Islamic Estate Distribution (Mirath)',
        summary: 'Enunciated the strict application of Quranic shares (Fardh) and the invalidity of customary pre-emptive allocations that prejudice female heirs under Maliki jurisprudence.'
      },
      {
        suitNumber: 'SCA/JG/CV/04/2023',
        title: 'Hajiya Maryam v. Babangida & Anor',
        year: '2023',
        subject: 'Matrimonial Property & Khul\' (Redemption)',
        summary: 'Clarified the equitable return of dowry (Mahr) and protection of women\'s proprietary gifts upon judicial dissolution of marriage.'
      }
    ]
  },

  'kadi-bala-musa': {
    id: 'kadi-bala-musa',
    name: 'Hon. Kadi Dr. Bala Musa (Ph.D)',
    fullName: 'Dr. Bala Musa',
    honorific: 'The Honorable Kadi Dr.',
    rank: 'Hon. Kadi 04',
    roleTitle: 'Appellate Kadi & Academic Jurist',
    appointmentPeriod: 'Hon. Kadi (2018 – Date)',
    appointmentYear: '2018',
    image: '/kadis/hon-kadi-bala-musa.jpg',
    njcRecommendation: 'Recommended for judicial appointment as Kadi of the Sharia Court of Appeal, Jigawa State, by the National Judicial Council (NJC) in March 2018.',
    division: 'Appellate Division 1 (Dutse)',
    qualifications: [
      'Doctor of Philosophy (Ph.D) in Islamic Studies, Ahmadu Bello University (ABU), Zaria',
      'Master of Laws / M.A. Islamic Jurisprudence',
      'Bachelor of Laws (LL.B Hons), Combined Common & Islamic Law',
      'Barrister at Law (BL), Nigerian Law School'
    ],
    biography: [
      'Hon. Kadi Dr. Bala Musa (Ph.D) is one of the most intellectually distinguished jurists on the appellate bench of the Jigawa State Shari’ah Court of Appeal. Prior to his elevation to the bench in March 2018 following the recommendation of the National Judicial Council (NJC), His Lordship served with distinction as the Chief Registrar of the Shari\'ah Court of Appeal.',
      'As Chief Registrar, Dr. Bala Musa championed historic access-to-justice initiatives, notably leading the establishment and equipping of dozens of new Sharia courts across rural and semi-urban communities throughout Jigawa State, ensuring rural citizens could access fair adjudication without burdensome travel.',
      'Academically, His Lordship holds a Doctor of Philosophy (Ph.D) in Islamic Studies from the prestigious Ahmadu Bello University (ABU), Zaria. In 2024, he served as the Chairman of the Local Organising Committee for the 3rd National Orphans Qur\'anic Recitation Competition (MUSABAQA) hosted by the Jigawa State Government. In 2025, he led the judicial delegation to the international conference in London, UK, and in September 2026 accompanied the Grand Kadi on the official mission to Rabat, Morocco.'
    ],
    careerHighlights: [
      'Kadi of the Shari\'ah Court of Appeal, Jigawa State (March 2018 – Present)',
      'Chief Registrar & Head of Administration, Jigawa State Shari\'ah Court of Appeal (Pre-2018)',
      'Chairman, Local Organising Committee, 3rd National Orphans Qur\'anic Recitation Competition (MUSABAQA 2024)',
      'Member, Northern States Shari\'ah Appellate Reform Committee',
      'Author and scholar on Maliki procedural codification and estate succession'
    ],
    internationalMissions: [
      'London, United Kingdom (September 2025) — Head of Delegation, Commonwealth & Global Islamic Law Symposium on Private International Law',
      'Rabat, Kingdom of Morocco (September 2026) — High-Level Envoy with Hon. Grand Kadi, International Colloquium on Islamic Jurisprudence',
      'Annual All-Nigeria Judges Conferences (NJI, Abuja)'
    ],
    jurisprudentialFocus: [
      'Maliki Jurisprudence & Classical Fiqh Studies',
      'Appellate Review of Mirath (Inheritance) Computations',
      'Custody (Hadanah) and Child Welfare in Islamic Law',
      'Judicial Codification and Court Automation'
    ],
    landmarkDecisions: [
      {
        suitNumber: 'SCA/JG/CV/03/2023',
        title: 'Usman v. Aisha & Ors',
        year: '2023',
        subject: 'Child Custody (Hadanah) & Maternal Rights',
        summary: 'Established binding appellate guidance affirming maternal custody rights of young children in accordance with classical Maliki authorities (Mukhtasar Khalil) where the mother has not remarried a stranger.'
      },
      {
        suitNumber: 'SCA/JG/AP/18/2020',
        title: 'Estate of Late Haruna v. Zonal Probate Registry',
        year: '2020',
        subject: 'Waqf Trusts & Residuary Estate Distribution',
        summary: 'Reinforced the distinction between non-alienable pious endowments (Waqf Khayri) and inheritable estate assets subject to Fara\'id.'
      }
    ]
  },

  'kadi-umar-nasir': {
    id: 'kadi-umar-nasir',
    name: 'Hon. Kadi Umar Nasir Ahmad',
    fullName: 'Umar Nasir Ahmad',
    honorific: 'The Honorable Kadi',
    rank: 'Hon. Kadi 02',
    roleTitle: 'Senior Appellate Kadi',
    appointmentPeriod: 'Hon. Kadi (2017 – Date)',
    appointmentYear: '2017',
    njcRecommendation: 'Recommended by the National Judicial Council (NJC) and sworn in by the Jigawa State Government in 2017.',
    division: 'Appellate Division 1 (Dutse)',
    qualifications: [
      'Bachelor of Laws (LL.B Hons), Common & Islamic Law',
      'Barrister at Law (BL), Nigerian Law School',
      'Master of Laws (LL.M) in Comparative Jurisprudence'
    ],
    biography: [
      'Hon. Kadi Umar Nasir Ahmad serves as Hon. Kadi 02 and is the most senior Kadi on the appellate bench following the Grand Kadi. His Lordship has rendered over two decades of distinguished service to the Nigerian judiciary, starting from the magisterial and Area Court bench through to the Shari\'ah Court of Appeal.',
      'Known for his incisive mastery of procedural law and Maliki evidentiary requirements (Bayyinah and Yameen), Kadi Umar Nasir Ahmad frequently presides over complex civil appeals arising from land boundaries, Islamic partnerships (Sharika), and family status.',
      'His Lordship was an integral member of the Grand Kadi\'s official entourage to the International Colloquium on Maliki Islamic Jurisprudence in Rabat, Morocco on 5th September, 2026.'
    ],
    careerHighlights: [
      'Senior Appellate Kadi (Hon. Kadi 02), Jigawa State Shari\'ah Court of Appeal (2017 – Present)',
      'Presiding Kadi, Appellate Panel 2, Dutse Headquarters',
      'Member, Jigawa State Rules of Court Committee',
      'Former Upper Shari\'a Court Presiding Judge'
    ],
    internationalMissions: [
      'Rabat, Kingdom of Morocco (September 2026) — High-Level Envoy, International Colloquium on Islamic Jurisprudence',
      'National Judicial Institute (NJI) Annual Refresher Courses for Judicial Officers'
    ],
    jurisprudentialFocus: [
      'Law of Evidence in Islamic Jurisprudence',
      'Appellate Civil Procedure & Practice Directions',
      'Matrimonial Dissolution (Talaq & Faskh)',
      'Commercial Islamic Contracts & Murabahah'
    ],
    landmarkDecisions: [
      {
        suitNumber: 'SCA/JG/CV/08/2022',
        title: 'Bello & Anor v. Fatima Ibrahim',
        year: '2022',
        subject: 'Matrimonial Maintenance & Arrears of Nafaqah',
        summary: 'Ruled that a husband\'s statutory obligation of spousal and child maintenance constitutes an enforceable civil debt under Shari\'ah that cannot be waived arbitrarily.'
      }
    ]
  },

  'kadi-safiyanu': {
    id: 'kadi-safiyanu',
    name: 'Hon. Kadi Safiyanu',
    fullName: 'Safiyanu Muhammad',
    honorific: 'The Honorable Kadi',
    rank: 'Hon. Kadi 03',
    roleTitle: 'Appellate Division Judge',
    appointmentPeriod: 'Hon. Kadi (2018 – Date)',
    appointmentYear: '2018',
    njcRecommendation: 'Recommended by the National Judicial Council (NJC) and sworn in by the Executive Governor of Jigawa State.',
    division: 'Appellate Division 2 (Hadejia)',
    qualifications: [
      'Diploma in Shari\'ah and Civil Law',
      'Bachelor of Laws (LL.B)',
      'Barrister at Law (BL), Nigerian Law School'
    ],
    biography: [
      'Hon. Kadi Safiyanu brings deep erudition in Islamic jurisprudential traditions to the Jigawa State Shari’ah Court of Appeal. Presiding predominantly over the eastern judicial divisions including Hadejia and surrounding emirate communities, His Lordship has resolved hundreds of appellate land disputes, inheritance contentions, and customary Islamic contracts.',
      'His Lordship is renowned for promoting Alternative Dispute Resolution (Tahkim and Sulhu) within appellate proceedings, frequently assisting disputing family members to reach amicable settlements in conformity with Quranic injunctions.'
    ],
    careerHighlights: [
      'Kadi of the Shari\'ah Court of Appeal (2018 – Present)',
      'Presiding Jurist, Hadejia Judicial Division Registry',
      'Specialist Arbitrator in Land & Agricultural Tenure Disputes'
    ],
    internationalMissions: [
      'All-Nigeria Judges Conference, Abuja',
      'Northern States Shari\'ah Appellate Jurists Conferences (Kano/Kaduna)'
    ],
    jurisprudentialFocus: [
      'Tahkim (Arbitration) and Sulhu (Reconciliation)',
      'Waqf and Public Religious Endowments',
      'Agricultural Land Tenure & Easement Rights'
    ],
    landmarkDecisions: [
      {
        suitNumber: 'SCA/JG/CV/19/2023',
        title: 'Community Elders v. Heirs of Late Danladi',
        year: '2023',
        subject: 'Waqf Pious Endowment Dedication',
        summary: 'Held that once land is dedicated as Waqf for communal or religious utility, it cannot be inherited or sold by biological heirs regardless of genealogical proximity.'
      }
    ]
  },

  'kadi-ibrahim-yau': {
    id: 'kadi-ibrahim-yau',
    name: 'Hon. Kadi Ibrahim Alhaji Ya\'u',
    fullName: 'Ibrahim Alhaji Ya\'u',
    honorific: 'The Honorable Kadi',
    rank: 'Hon. Kadi 05',
    roleTitle: 'Appellate Division Judge',
    appointmentPeriod: 'Hon. Kadi (2019 – Date)',
    appointmentYear: '2019',
    njcRecommendation: 'Recommended for judicial appointment as Kadi of the Sharia Court of Appeal, Jigawa State, by the National Judicial Council (NJC) in October 2019.',
    division: 'Appellate Division 3 (Kazaure)',
    qualifications: [
      'Bachelor of Laws (LL.B Shari\'ah & Civil Law)',
      'Barrister at Law (BL), Nigerian Law School',
      'Postgraduate Diploma in Islamic Studies & Estate Law'
    ],
    biography: [
      'Hon. Kadi Ibrahim Alhaji Ya\'u was recommended by the National Judicial Council (NJC) in October 2019 as a Kadi of the Shari\'ah Court of Appeal, Jigawa State. Prior to his elevation, His Lordship served with exemplary distinction across multiple judicial divisions in the state.',
      'His Lordship possesses deep expertise in private international law and cross-border estate succession. In September 2025, he represented the Jigawa State Judiciary at the Commonwealth and Global Islamic Law Conference in London, United Kingdom alongside Dr. Bala Musa. In September 2026, he was chosen by the Grand Kadi as part of the official delegation to Rabat, Morocco.'
    ],
    careerHighlights: [
      'Kadi of the Shari\'ah Court of Appeal (October 2019 – Present)',
      'Presiding Jurist, Kazaure Judicial Division',
      'Senior Delegate, London Commonwealth Islamic Law Conference (2025)',
      'Senior Delegate, Rabat Morocco International Colloquium (2026)'
    ],
    internationalMissions: [
      'London, United Kingdom (September 2025) — Commonwealth & Global Islamic Law Symposium',
      'Rabat, Kingdom of Morocco (September 2026) — International Colloquium on Islamic Jurisprudence',
      'National Judicial Institute (NJI) Annual Refresher Modules'
    ],
    jurisprudentialFocus: [
      'Private International Law & Cross-Border Estate Administration',
      'Inheritance Mathematical Ratios (Al-Fara\'id)',
      'Islamic Wills (Al-Wasiyyah) Validation'
    ],
    landmarkDecisions: [
      {
        suitNumber: 'SCA/JG/AP/27/2022',
        title: 'Binta & 4 Ors v. Executors of Late Alhaji Mustapha',
        year: '2022',
        subject: 'One-Third Limitation on Islamic Bequests (Wasiyyah)',
        summary: 'Enforced the cardinal Maliki rule that a Muslim may not bequeath more than one-third (1/3) of their net estate by will to non-heirs without the consent of all Quranic legal heirs.'
      }
    ]
  },

  'kadi-barau-musa': {
    id: 'kadi-barau-musa',
    name: 'Hon. Kadi Bara’u Bashir Musa',
    fullName: 'Bara’u Bashir Musa',
    honorific: 'The Honorable Kadi',
    rank: 'Hon. Kadi',
    roleTitle: 'Appellate Division Judge',
    appointmentPeriod: 'Hon. Kadi (2021 – Date)',
    appointmentYear: '2021',
    njcRecommendation: 'Recommended for judicial appointment by the National Judicial Council (NJC) at its 96th Meeting held in December 2021.',
    division: 'Appellate Division 2 (Hadejia)',
    qualifications: [
      'Bachelor of Laws (LL.B Hons)',
      'Barrister at Law (BL), Nigerian Law School',
      'Certificate in Islamic Commercial Arbitration'
    ],
    biography: [
      'Hon. Kadi Bara’u Bashir Musa was appointed to the appellate bench of the Jigawa State Shari’ah Court of Appeal following his recommendation by the National Judicial Council (NJC) in December 2021. His appointment reflected his exceptional reputation for scholarship, rigorous legal analysis, and judicial probity.',
      'His Lordship serves in the appellate divisions handling appeals concerning contractual disputes, bailiff enforcement petitions, and civil status disputes, championing fair and expeditious disposal of dockets.'
    ],
    careerHighlights: [
      'Kadi of the Shari\'ah Court of Appeal (December 2021 – Present)',
      'Appellate Division Judge, Hadejia Division Registry',
      'Member, Editorial Committee, Shari\'ah Court of Appeal Law Reports'
    ],
    internationalMissions: [
      'All-Nigeria Judges Conference (NJI Abuja, 2023, 2025)',
      'Northern States Shari\'ah Appellate Jurists Conferences'
    ],
    jurisprudentialFocus: [
      'Contractual Obligations & Islamic Commercial Transactions',
      'Appellate Review of Trial Court Evidentiary Rulings',
      'Execution of Judgments & Registry Procedures'
    ],
    landmarkDecisions: [
      {
        suitNumber: 'SCA/JG/CV/14/2023',
        title: 'Malam Shehu v. Commercial Grain Traders Union',
        year: '2023',
        subject: 'Islamic Sale Contracts (Bay\') & Defect Liability',
        summary: 'Reaffirmed the right of option to reject goods for latent defect (Khiyar al-Ayb) under Maliki contract law upon prompt discovery.'
      }
    ]
  },

  'kadi-ahmad-lamin': {
    id: 'kadi-ahmad-lamin',
    name: 'Hon. Kadi Ahmad Muhammadu Lamin',
    fullName: 'Ahmad Muhammadu Lamin',
    honorific: 'The Honorable Kadi',
    rank: 'Hon. Kadi',
    roleTitle: 'Appellate Division Judge',
    appointmentPeriod: 'Hon. Kadi (2021 – Date)',
    appointmentYear: '2021',
    njcRecommendation: 'Recommended for judicial appointment by the National Judicial Council (NJC) at its 96th Meeting held in December 2021.',
    division: 'Appellate Division 4 (Gumel)',
    qualifications: [
      'Bachelor of Laws (LL.B in Shari\'ah & Civil Law)',
      'Barrister at Law (BL), Nigerian Law School',
      'Advanced Diploma in Islamic Judicial Studies'
    ],
    biography: [
      'Hon. Kadi Ahmad Muhammadu Lamin was recommended by the National Judicial Council (NJC) in December 2021 as a Kadi of the Shari\'ah Court of Appeal, Jigawa State. Prior to this, His Lordship served with profound integrity and scholarly acumen in the state\'s lower judicature.',
      'In September 2026, His Lordship was selected as part of the official entourage accompanying His Lordship the Grand Kadi to the International Colloquium on Maliki Islamic Jurisprudence in Rabat, Kingdom of Morocco, participating in sessions on regional judicial harmonization.'
    ],
    careerHighlights: [
      'Kadi of the Shari\'ah Court of Appeal (December 2021 – Present)',
      'Presiding Jurist, Gumel Judicial Division Registry',
      'Delegate, Rabat Morocco International Judicial Summit (September 2026)'
    ],
    internationalMissions: [
      'Rabat, Kingdom of Morocco (September 2026) — High-Level Envoy with Hon. Grand Kadi, International Colloquium on Islamic Jurisprudence',
      'All-Nigeria Judges Conference, Abuja'
    ],
    jurisprudentialFocus: [
      'Estate Succession & Probate Verification',
      'Family Law & Marital Settlement',
      'Maliki Classical Jurisprudence Doctrines'
    ],
    landmarkDecisions: [
      {
        suitNumber: 'SCA/JG/AP/05/2024',
        title: 'Heirs of Late Mal. Sule v. Zonal Administrator',
        year: '2024',
        subject: 'Inheritance Fractions & Asabah Residuary Calculations',
        summary: 'Clarified the exact mathematical allocation of residual estate among consanguine and uterine brothers in compliance with Surah An-Nisa.'
      }
    ]
  },

  'kadi-nasiru-zargina': {
    id: 'kadi-nasiru-zargina',
    name: 'Hon. Kadi Nasiru Abubakar Zargina',
    fullName: 'Nasiru Abubakar Zargina',
    honorific: 'The Honorable Kadi',
    rank: 'Hon. Kadi',
    roleTitle: 'Appellate Division Judge',
    appointmentPeriod: 'Hon. Kadi (2021 – Date)',
    appointmentYear: '2021',
    njcRecommendation: 'Recommended for judicial appointment by the National Judicial Council (NJC) at its 96th Meeting held in December 2021.',
    division: 'Appellate Division 5 (Ringim)',
    qualifications: [
      'Bachelor of Laws (LL.B Hons)',
      'Barrister at Law (BL), Nigerian Law School',
      'Diploma in Shari\'ah and Legal Studies'
    ],
    biography: [
      'Hon. Kadi Nasiru Abubakar Zargina was elevated to the appellate bench following his recommendation by the National Judicial Council (NJC) in December 2021. His Lordship has brought profound administrative and procedural discipline to the appellate sittings.',
      'Presiding extensively in the Ringim Judicial Division, His Lordship has prioritized speedy dispute resolution, eliminating unnecessary adjournments, and enforcing strict compliance with statutory notice of appeal deadlines.'
    ],
    careerHighlights: [
      'Kadi of the Shari\'ah Court of Appeal (December 2021 – Present)',
      'Presiding Jurist, Ringim Judicial Division Registry',
      'Member, Committee on Appellate Case Flow Management'
    ],
    internationalMissions: [
      'National Judicial Institute (NJI) Annual Judges Conferences',
      'Regional Shari\'ah Bench & Bar Colloquiums'
    ],
    jurisprudentialFocus: [
      'Civil Appellate Procedure & Timelines',
      'Affidavit Evidence & Judicial Notice under Islamic Law',
      'Land Boundary Disputes & Valuation'
    ],
    landmarkDecisions: [
      {
        suitNumber: 'SCA/JG/CV/31/2023',
        title: 'Ringim Farmers Cooperative v. Local Council',
        year: '2023',
        subject: 'Right of Occupancy & Customary Shari\'ah Tenure',
        summary: 'Ruled that long-standing peaceful agricultural possession supported by community testimony constitutes prima facie ownership requiring compelling rebuttal.'
      }
    ]
  },

  'kadi-mukhtar-adam': {
    id: 'kadi-mukhtar-adam',
    name: 'Hon. Kadi Mukhtar Shuaibu Adam',
    fullName: 'Mukhtar Shuaibu Adam',
    honorific: 'The Honorable Kadi',
    rank: 'Hon. Kadi',
    roleTitle: 'Appellate Division Judge',
    appointmentPeriod: 'Hon. Kadi (2024 – Date)',
    appointmentYear: '2024',
    njcRecommendation: 'Recommended for judicial appointment as Kadi of the Sharia Court of Appeal, Jigawa State, by the National Judicial Council (NJC) in May 2024.',
    division: 'Appellate Division 1 (Dutse)',
    qualifications: [
      'Bachelor of Laws (LL.B in Shari\'ah & Civil Law)',
      'Barrister at Law (BL), Nigerian Law School',
      'Certificate in Electronic Court Management'
    ],
    biography: [
      'Hon. Kadi Mukhtar Shuaibu Adam was recommended by the National Judicial Council (NJC) in May 2024 as a Kadi of the Shari\'ah Court of Appeal, Jigawa State. His appointment brought fresh dynamism, youthful energy, and technical acumen to the appellate bench.',
      'His Lordship is deeply committed to judicial modernism, integrating computer-aided legal research into appellate panel preparation, and advancing public understanding of Islamic probate procedures.'
    ],
    careerHighlights: [
      'Kadi of the Shari\'ah Court of Appeal (May 2024 – Present)',
      'Appellate Division Jurist, Dutse Headquarters',
      'Member, Judicial ICT & Digital Transformation Committee'
    ],
    internationalMissions: [
      'National Judicial Institute (NJI) Induction Courses for Newly Appointed Judicial Officers (2024)',
      'National Conference on Technology in the Nigerian Judiciary'
    ],
    jurisprudentialFocus: [
      'Digital Evidence in Shari\'ah Adjudication',
      'Probate Administration & Certified Electronic True Copies (CTC)',
      'Contemporary Commercial Issues in Islamic Law'
    ],
    landmarkDecisions: [
      {
        suitNumber: 'SCA/JG/AP/09/2024',
        title: 'Ibrahim & Anor v. Registry Probate Desk',
        year: '2024',
        subject: 'Expedited Probate & Digital Estate Authentication',
        summary: 'Enjoined appellate registries to facilitate the prompt issuance of Letters of Administration where all legal heirs are verified and unanimously consenting.'
      }
    ]
  }
}

export function getAllKadis(): KadiDetail[] {
  return Object.values(kadisData)
}

export function getKadiById(id: string): KadiDetail | undefined {
  return kadisData[id]
}
