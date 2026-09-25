/*
 * EOSC-ES · Estado de desarrollo / Development status
 * ---------------------------------------------------
 * ESTE ES EL ÚNICO FICHERO QUE HAY QUE EDITAR PARA ACTUALIZAR LA PÁGINA.
 * THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE THE PAGE.
 *
 * Estados válidos / valid status values:
 *   "done"      completado / completed
 *   "progress"  en curso / in progress
 *   "review"    en revisión / under review
 *   "planned"   planificado / planned
 *   "pending"   pendiente de decisión / decision pending
 *
 * Textos bilingües: { es: "...", en: "..." }. Si un texto es igual en ambos
 * idiomas puede ser una cadena simple.
 */
window.EOSC_ES_STATUS = {
  meta: {
    updated: "2026-09-25",
    project: "EOSC-ES-Prep",
    grant: "25-EOSC-GRV-PREP-010",
    coordinator: "IACS (Instituto Aragonés de Ciencias de la Salud)",
    institutions: 22,
    contact: "",            // p. ej. "eosc-es@iacs.es" (vacío = no se muestra)
    repo: ""                // URL del repositorio GitHub (vacío = no se muestra)
  },

  /* Fases del camino hacia Nodo de la Federación. current: índice (0..n-1) */
  phases: {
    current: 1,
    items: [
      { es: "Proyecto preparatorio (EOSC Gravity)", en: "Preparatory project (EOSC Gravity)", when: { es: "may 2026 –", en: "May 2026 –" } },
      { es: "Project Charter y gobernanza", en: "Project Charter and governance", when: { es: "sep – oct 2026", en: "Sep – Oct 2026" } },
      { es: "Solicitud de enrolment (3.ª ola)", en: "Enrolment application (3rd wave)", when: { es: "finales 2026 – inicio 2027", en: "late 2026 – early 2027" } },
      { es: "Build-up del Nodo", en: "Node build-up", when: "M1 – M24" },
      { es: "Nodo de la Federación EOSC", en: "EOSC Federation Node", when: "" }
    ]
  },

  /* Entregables del proyecto preparatorio */
  deliverables: [
    { id: "D1", title: { es: "Plan de proyecto", en: "Project Plan" }, status: "done",
      note: { es: "Entregado; versión revisada (v2) reenviada.", en: "Submitted; revised version (v2) re-submitted." } },
    { id: "D2", title: { es: "Project Charter del Nodo", en: "Node Project Charter" }, status: "review", due: "M5 · 09/2026",
      note: { es: "Aprobado con recomendaciones; revisión R1 preparada con los cambios solicitados y la reducción de entregables (5) e hitos (8) del build-up.", en: "Approved with recommendations; R1 revision prepared addressing the reviewers' comments, with build-up deliverables reduced to 5 and milestones to 8." } },
    { id: "D3", title: { es: "Plan y presentación del showcase event", en: "Showcase event plan and presentation" }, status: "review",
      note: { es: "Reenvío R1 (16 diapositivas) previsto el 28/09/2026.", en: "R1 re-submission (16 slides) due 28/09/2026." } },
    { id: "D4", title: { es: "Matriz EOSC Academy", en: "EOSC Academy Matrix" }, status: "progress",
      note: { es: "En preparación.", en: "In preparation." } },
    { id: "D5", title: { es: "Informe de casos de uso", en: "Use Case Report" }, status: "progress",
      note: { es: "En preparación.", en: "In preparation." } }
  ],

  /* Hitos y eventos del proyecto preparatorio (orden cronológico) */
  events: [
    { date: "2026-05-08", status: "done", title: { es: "Reunión de lanzamiento (online)", en: "Kick-off meeting (online)" } },
    { date: "2026-06-29", status: "done", title: { es: "Primera reunión presencial, CSIC Madrid, con observadores de los Nodos alemán (NFDI) y checo (EOSC-CZ)", en: "First in-person meeting, CSIC Madrid, with observers from the German (NFDI) and Czech (EOSC-CZ) Nodes" } },
    { date: "2026-07-23", status: "done", title: { es: "Reunión online del consorcio", en: "Online consortium meeting" } },
    { date: "2026-09", status: "done", title: { es: "Project Charter (D2) entregado", en: "Project Charter (D2) submitted" } },
    { date: "2026-10-02", status: "planned", title: { es: "Encuentro tripartito EOSC España en Zaragoza (EOSC-A, Comisión Europea, EOSC Steering Board, COS-Gob, Ministerio de Ciencia, Innovación y Universidades)", en: "Spanish EOSC tripartite event in Zaragoza (EOSC-A, European Commission, EOSC Steering Board, COS-Gob, Ministry of Science, Innovation and Universities)" } },
    { date: "2026-11", status: "planned", title: { es: "Showcase event", en: "Showcase event" } }
  ],

  /* Criterios de enrolment (2.ª ola; se asumen para la 3.ª) */
  enrolment: [
    { status: "done", title: { es: "Recursos con TRL > 6", en: "Resources at TRL > 6" }, note: { es: "Los 12 recursos de la cartera inicial declaran TRL ≥ 7.", en: "All 12 resources of the initial portfolio declare TRL ≥ 7." } },
    { status: "done", title: { es: "Al menos un caso de uso multi-Nodo", en: "At least one multi-Node use case" }, note: { es: "Cuatro casos, todos inter-node.", en: "Four use cases, all inter-node." } },
    { status: "done", title: { es: "Compromiso de firma del MoU de la Federación", en: "Commitment to sign the Federation MoU" }, note: { es: "Declarado en el Project Charter.", en: "Stated in the Project Charter." } },
    { status: "progress", title: { es: "Acuerdo de gobernanza del Nodo", en: "Node governance agreement" }, note: { es: "Borrador de convenio de colaboración disponible (ES-D1).", en: "Draft collaboration agreement available (ES-D1)." } },
    { status: "pending", title: { es: "Entidad representante del Nodo", en: "Node representing entity" }, note: { es: "A acordar en el consorcio y con los actores nacionales (tripartito 2/10).", en: "To be agreed within the consortium and with national actors (tripartite, 2 Oct)." } },
    { status: "pending", title: { es: "Cinco roles nombrados (coordinación, operaciones, ciberseguridad, legal, comunicación)", en: "Five named roles (coordinator, operations, cybersecurity, legal, communications)" }, note: { es: "Todos por designar; se nombrarán antes de ES-MS0.", en: "All still TBD; to be named ahead of ES-MS0." } },
    { status: "pending", title: { es: "Endoso de la autoridad nacional competente", en: "Endorsement by the competent national authority" }, note: { es: "Vía Ministerio de Ciencia, Innovación y Universidades y COS-Gob, antes de la solicitud.", en: "Through the Ministry of Science, Innovation and Universities and COS-Gob, before the application." } }
  ],

  /* Roles obligatorios del Nodo. name vacío = por designar */
  roles: [
    { role: { es: "Coordinador/a", en: "Coordinator" }, name: "", status: "pending" },
    { role: { es: "Responsable de operaciones", en: "Operations Officer" }, name: "", status: "pending" },
    { role: { es: "Responsable de ciberseguridad", en: "Cybersecurity Officer" }, name: "", status: "pending" },
    { role: { es: "Responsable legal", en: "Legal Officer" }, name: "", status: "pending" },
    { role: { es: "Responsable de comunicación", en: "Communications Officer" }, name: "", status: "pending" }
  ],
  rolesNote: {
    es: "Todos los roles del Nodo y los responsables técnicos de cada Federating Capability están por designar. La designación es una decisión de gobernanza del consorcio, que se abre en el encuentro tripartito del 2 de octubre de 2026 en Zaragoza; todos se nombrarán antes de la solicitud de enrolment (ES-MS0).",
    en: "All Node roles and the technical owners of each Federating Capability are still to be designated. Designation is a governance decision of the consortium, opened at the tripartite event in Zaragoza on 2 October 2026; all will be named ahead of the enrolment application (ES-MS0)."
  },

  /* Federating Capabilities */
  fcs: [
    { id: "FC-1", name: { es: "AAI", en: "AAI" }, level: "mandatory", status: "planned", owner: "", inst: "RedIRIS (Red.es)", target: "M6 · ES-MS2",
      basis: { es: "RedIRIS SIR, integrado en eduGAIN.", en: "RedIRIS SIR, integrated with eduGAIN." } },
    { id: "FC-2", name: { es: "Catálogos y registro de recursos", en: "Resource Catalogues and Registry" }, level: "mandatory", status: "planned", owner: "", inst: "RedIRIS / FECYT", target: "M6 · ES-MS2",
      basis: { es: "RECOLECTA, datos.gob.es, PLATICA (CARREDI); vía OpenAIRE.", en: "RECOLECTA, datos.gob.es, PLATICA (CARREDI); via OpenAIRE." } },
    { id: "FC-3", name: { es: "Helpdesk", en: "Helpdesk" }, level: "mandatory2026", status: "planned", owner: "", inst: "UPV / IACS / UJAEN", target: "M12 · ES-MS4",
      basis: { es: "Zammad con intercambio de tickets entre Nodos.", en: "Zammad with inter-node ticket exchange." } },
    { id: "FC-4", name: { es: "Monitorización", en: "Service Monitoring" }, level: "mandatory2026", status: "planned", owner: "", inst: "", target: "M12 · ES-MS4",
      basis: { es: "ARGO + exportadores Prometheus/OpenMetrics.", en: "ARGO + Prometheus/OpenMetrics exporters." } },
    { id: "FC-5", name: { es: "Sistema de gestión de servicios", en: "Service Management System" }, level: "mandatory2026", status: "planned", owner: "", inst: "", target: "M15 · ES-MS5",
      basis: { es: "SMS basado en FitSM.", en: "FitSM-based SMS." } },
    { id: "FC-6", name: { es: "Contabilidad de servicios", en: "Service Accounting" }, level: "recommended", status: "planned", owner: "", inst: "", target: "Build-up",
      basis: { es: "Demostrador sobre plataformas de IA e inferencia.", en: "Demonstrator on AI and inference platforms." } },
    { id: "FC-7", name: { es: "Contabilidad de productos de investigación", en: "Research Product Accounting" }, level: "recommended", status: "planned", owner: "", inst: "", target: "Build-up",
      basis: { es: "Estadísticas de uso de repositorios DSpace y RECOLECTA.", en: "Usage statistics from DSpace repositories and RECOLECTA." } },
    { id: "FC-8/9", name: { es: "Pedidos / despliegue de aplicaciones", en: "Order Management / Application Deployment" }, level: "recommended", status: "pending", owner: "", inst: "", target: { es: "No comprometido", en: "Not committed" },
      basis: { es: "Candidato: Application Workload Manager (UPV).", en: "Candidate: Application Workload Manager (UPV)." } }
  ],

  /* Casos de uso del build-up */
  usecases: [
    { id: "ES-UC1", title: { es: "EHDS: uso secundario de datos de salud, alcance One Health", en: "EHDS: secondary use of health data, One Health scope" },
      lead: "IACS", status: "planned", target: "M18 · ES-MS6", rehearsal: "M15 · ES-MS5",
      nodes: "Life Sciences Connect (EOSC ENTRUST); BBMRI-ERIC; EOSC EU Node",
      dataspace: { es: "Espacio Europeo de Datos Sanitarios", en: "European Health Data Space" } },
    { id: "ES-UC2", title: { es: "Ocean Health", en: "Ocean Health" },
      lead: "CSIC · UMU", status: "planned", target: "M18 · ES-MS6",
      nodes: "European Digital Twin of the Ocean Node; Blue-Cloud 2026",
      dataspace: { es: "Green Deal, componente marino", en: "Green Deal, marine component" } },
    { id: "ES-UC3", title: { es: "Euclid DR1", en: "Euclid DR1" },
      lead: "PIC · CIEMAT", status: "planned", target: "M12 · ES-MS4", rehearsal: "M9 · ES-MS3",
      nodes: "CERN Node (ESCAPE Data Lake, Rucio)",
      dataspace: { es: "Transversal (EOSC)", en: "Transverse (EOSC)" } },
    { id: "ES-UC4", title: { es: "Corpus parlamentarios (ParlaMint)", en: "Parliamentary corpora (ParlaMint)" },
      lead: "HiTZ (UPV/EHU) · IATEXT (ULPGC)", status: "planned", target: "M12 · ES-MS4",
      nodes: "EOSC Node Netherlands (SURF); EOSC Node Slovenia (CLARIN.SI)",
      dataspace: { es: "Espacios de datos lingüísticos y de patrimonio cultural", en: "Language and cultural heritage data spaces" } }
  ],

  /* Cartera inicial de recursos del Node Exchange (sección 3 del Charter R1) */
  resources: [
    { id: "ES-RES01", name: { es: "Cómputo y almacenamiento", en: "Compute and storage" }, provider: "SCAYLE · BSC-CNS · CESGA", trl: "9", uc: ["ES-UC1","ES-UC2","ES-UC3","ES-UC4"], fc: [], status: "planned" },
    { id: "ES-RES02", name: "Scientific Data Lake", provider: "PIC/CIEMAT", trl: "7", uc: ["ES-UC3"], fc: ["FC-1","FC-2"], status: "planned" },
    { id: "ES-RES03", name: { es: "Suite FAIR (FOOPS!, RSFC, FAIROs)", en: "FAIR suite (FOOPS!, RSFC, FAIROs)" }, provider: "UPM", trl: "8–9", uc: [], fc: ["FC-2"], status: "planned" },
    { id: "ES-RES04", name: "RAISE", provider: "Biogipuzkoa", trl: "8–9", uc: ["ES-UC1"], fc: [], status: "planned" },
    { id: "ES-RES05", name: "AI4EOSC", provider: "CSIC", trl: "9", uc: ["ES-UC1","ES-UC2"], fc: ["FC-2","FC-6"], status: "planned" },
    { id: "ES-RES06", name: { es: "Privacy toolbox (Anjana, pyCANON, trasgoDP)", en: "Privacy toolbox (Anjana, pyCANON, trasgoDP)" }, provider: "CSIC", trl: "9", uc: ["ES-UC1"], fc: [], status: "planned" },
    { id: "ES-RES07", name: "CosmoHub", provider: "PIC/CIEMAT", trl: "8", uc: ["ES-UC3"], fc: ["FC-1","FC-2"], status: "planned" },
    { id: "ES-RES08", name: "NEREIDAS", provider: "UMU", trl: "7", uc: ["ES-UC2"], fc: ["FC-2"], status: "planned" },
    { id: "ES-RES09", name: "BIGAN", provider: "IACS", trl: "8", uc: ["ES-UC1"], fc: ["FC-2"], status: "planned" },
    { id: "ES-RES10", name: { es: "Repositorios CLARIAH-ES", en: "CLARIAH-ES repositories" }, provider: "UPV/EHU · ULPGC", trl: "8–9", uc: ["ES-UC4"], fc: ["FC-1","FC-2","FC-7"], status: "planned" },
    { id: "ES-RES11", name: { es: "Pipeline de anotación lingüística", en: "Annotation pipeline" }, provider: "CLARIAH-ES", trl: "7–8", uc: ["ES-UC4"], fc: ["FC-2"], status: "planned" },
    { id: "ES-RES12", name: { es: "Formación y K-centre CLARIN", en: "Training and CLARIN K-centre" }, provider: "UPV/EHU · ULPGC", trl: "8", uc: ["ES-UC4"], fc: ["FC-3"], status: "planned" }
  ],

  /* Entregables del build-up (sección 7 del Charter R1). M1 = inicio del build-up */
  nodeDeliverables: [
    { id: "ES-D1", m: "M3", status: "planned", resp: { es: "[Por designar: entidad representante], con UPM y RedIRIS (marco de onboarding)", en: "[TBD: representing entity], with UPM and RedIRIS (onboarding framework)" },
      title: { es: "Gobernanza del Nodo y política de contribución de terceros", en: "Node governance and third-party contribution policy" },
      note: { es: "Convenio de colaboración firmado; términos de referencia de asamblea general, comité estratégico y comité técnico; entidad que firma el MoU; marco de onboarding (TRL ≥ 7, responsable nombrado, metadatos FAIR, perfil mínimo y validador, procedimiento de aceptación).", en: "Signed collaboration agreement; terms of reference of the general assembly, strategic and technical committees; legal entity signing the MoU; onboarding framework (TRL ≥ 7, named owner, FAIR metadata, minimum profile and validator, acceptance procedure)." } },
    { id: "ES-D2", m: "M3", status: "planned", resp: { es: "Instituciones líderes de los casos de uso (IACS, CSIC, PIC, UPV/EHU), con los Nodos contraparte", en: "Use case lead institutions (IACS, CSIC, PIC, UPV/EHU), with the counterpart Nodes" },
      title: { es: "Planes de implementación de los casos de uso", en: "Use case implementation plans" },
      note: { es: "Para cada caso: pregunta científica, comunidades, flujo de trabajo, FCs, perfil de metadatos, criterios de éxito y acuerdo escrito con el Nodo contraparte.", en: "For each case: scientific question, communities, workflow, FCs, metadata profile, success criteria and written agreement with the counterpart Node." } },
    { id: "ES-D3", m: "M9", status: "planned", resp: { es: "RedIRIS (Red.es) y FECYT (FC-1, FC-2); UPV/IACS/UJAEN y [por designar: operador del SMS] (FC-3 a FC-5)", en: "RedIRIS (Red.es) and FECYT (FC-1, FC-2); UPV/IACS/UJAEN and [TBD: SMS operator] (FC-3 to FC-5)" },
      title: { es: "Documentación técnica y de operaciones del Nodo", en: "Node technical and operations documentation" },
      note: { es: "Arquitectura AAI y catálogo con evidencias de conformidad FC-1/FC-2; helpdesk, monitorización, gestión de servicios FitSM, seguridad y plan de protección de datos (FC-3 a FC-5).", en: "AAI and catalogue architecture with FC-1/FC-2 conformance evidence; helpdesk, monitoring, FitSM service management, security and data protection plan (FC-3 to FC-5)." } },
    { id: "ES-D4", m: "M18", status: "planned", resp: { es: "Instituciones líderes de los casos de uso, con los Nodos contraparte", en: "Use case lead institutions, with the counterpart Nodes" },
      title: { es: "Informe de casos de uso", en: "Use case report" },
      note: { es: "Resultados de los cuatro casos demostrados de extremo a extremo, integración con contrapartes y lecciones para la Federación.", en: "Results of the four use cases demonstrated end to end, counterpart integration and lessons for the Federation." } },
    { id: "ES-D5", m: "M24", status: "planned", resp: { es: "Comité técnico y [por designar: entidad representante], con UPM (participación y formación)", en: "Technical committee and [TBD: representing entity], with UPM (engagement and training)" },
      title: { es: "Autoevaluación del Nodo y Project Charter actualizado", en: "Node self-assessment and updated Project Charter" },
      note: { es: "Evaluación frente a los requisitos mínimos de la Federación; informe de participación, formación y onboarding de terceros, con materiales para la EOSC Academy; Charter actualizado.", en: "Assessment against the Federation minimum requirements; engagement, training and third-party onboarding report, with materials for the EOSC Academy; updated Charter." } }
  ],

  /* Hitos del build-up (sección 9 del Charter R1). M1 = inicio del build-up */
  milestones: [
    { id: "ES-MS0", m: "M-3", status: "progress", d: [],
      title: { es: "Solicitud de enrolment en la 3.ª ola, con el endoso de la autoridad nacional competente y los cinco roles nombrados", en: "Third-wave enrolment application, with the endorsement of the competent national authority and the five roles named" } },
    { id: "ES-MS1", m: "M3", status: "planned", d: ["ES-D1","ES-D2"],
      title: { es: "Nodo constituido y abierto a proveedores: convenio firmado, órganos de gobierno constituidos, marco de onboarding publicado y planes de los casos de uso acordados con los Nodos contraparte", en: "Node constituted and open to providers: agreement signed, governance bodies constituted, onboarding framework published and use case plans agreed with the counterpart Nodes" } },
    { id: "ES-MS2", m: "M6", status: "planned", d: [],
      title: { es: "Node Core en producción: al menos un servicio integrado con la AAI federada de EOSC vía RedIRIS SIR y eduGAIN (FC-1) y al menos un catálogo nacional, RECOLECTA como primer candidato, recolectado en el ecosistema de catálogos de la Federación (FC-2)", en: "Node Core in production: at least one service integrated with the EOSC Federated AAI through RedIRIS SIR and eduGAIN (FC-1), and at least one national catalogue, RECOLECTA as first candidate, harvested into the Federation catalogue ecosystem (FC-2)" } },
    { id: "ES-MS3", m: "M9", status: "planned", d: ["ES-D3"],
      title: { es: "Primera oleada de onboarding y primera formación: cartera inicial accesible a través de la Federación, incluidos los recursos de los cuatro casos; workspace federado de ES-UC3 en operación; primera sesión de formación", en: "First onboarding wave and first training: initial portfolio accessible through the Federation, including the resources of the four use cases; ES-UC3 federated workspace in operation; first training session" } },
    { id: "ES-MS4", m: "M12", status: "planned", d: [],
      title: { es: "Operaciones del Nodo y primeros casos de uso: FC-3 y FC-4 en producción; ES-UC3 y ES-UC4 demostrados de extremo a extremo; primer evento anual EOSC-ES, onboarding de terceros abierto y ≥ 50 % de los recursos incorporados; autoevaluación intermedia", en: "Node operations and first use cases: FC-3 and FC-4 in production; ES-UC3 and ES-UC4 demonstrated end to end; first annual EOSC-ES event, third-party onboarding opened and ≥ 50% of resources onboarded; mid-term self-assessment" } },
    { id: "ES-MS5", m: "M15", status: "planned", d: [],
      title: { es: "Gestión de servicios y acceso gobernado: SMS (FC-5) establecido; ensayo de acceso gobernado de ES-UC1 sobre una cohorte ya autorizada o sintética, con la vía transfronteriza de HealthData@EU especificada", en: "Service management and governed access: SMS (FC-5) established; ES-UC1 governed-access rehearsal on an already-permitted or synthetic cohort, with the HealthData@EU cross-border pathway specified" } },
    { id: "ES-MS6", m: "M18", status: "planned", d: ["ES-D4"],
      title: { es: "ES-UC1 y ES-UC2 demostrados de extremo a extremo con sus Nodos contraparte", en: "ES-UC1 and ES-UC2 demonstrated end to end with their counterpart Nodes" } },
    { id: "ES-MS7", m: "M24", status: "planned", d: ["ES-D5"],
      title: { es: "Nodo a pleno alcance: todos los recursos comprometidos incorporados y segundo evento anual EOSC-ES", en: "Node at full scope: all committed resources onboarded and second annual EOSC-ES event" } }
  ]
};
