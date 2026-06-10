import type { SectionData } from './types';

export const contentData: SectionData[] = [
  {
    id: 'historia',
    title: 'História da Área de Dados',
    items: [
      {
        id: 'origem-estatistica',
        title: 'Origem da Estatística',
        icon: 'BarChart2',
        shortDescription: 'As raízes da coleta e análise de dados.',
        fullDescription: 'A estatística começou com a coleta de dados sobre populações e economias para fins governamentais. Desde o Egito Antigo até o desenvolvimento de métodos formais no século XVIII.',
        categories: ['Todos', 'Análise de Dados'],
        slug: 'origem-estatistica',
        path: '/historia/origem-estatistica'
      },
      {
        id: 'censos-governamentais',
        title: 'Censos e Dados Governamentais',
        icon: 'Globe',
        shortDescription: 'A primeira grande escala de coleta de dados.',
        fullDescription: 'Censos populacionais impulsionaram a necessidade de métodos eficientes de organização e processamento de grandes volumes de informação.',
        categories: ['Todos', 'Análise de Dados'],
        slug: 'censos-governamentais',
        path: '/historia/censos-governamentais'
      },
      {
        id: 'maquinas-tabulacao',
        title: 'Máquinas de Tabulação',
        icon: 'Cpu',
        shortDescription: 'A automação mecânica do processamento.',
        fullDescription: 'Herman Hollerith inventou a máquina de tabulação por cartões perfurados para o censo de 1890 nos EUA, marcando o nascimento da IBM.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'maquinas-tabulacao',
        path: '/historia/maquinas-tabulacao'
      },
      {
        id: 'primeiros-computadores',
        title: 'Primeiros Computadores',
        icon: 'Monitor',
        shortDescription: 'O advento da computação digital.',
        fullDescription: 'Máquinas como o ENIAC e o UNIVAC transformaram a capacidade de processamento de dados de mecânica para eletrônica.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'primeiros-computadores',
        path: '/historia/primeiros-computadores'
      },
      {
        id: 'nascimento-bd',
        title: 'Nascimento dos Bancos de Dados',
        icon: 'Database',
        shortDescription: 'Nascimento dos Bancos de Dados',
        fullDescription: 'Nos anos 60, surgiram os primeiros sistemas de gerenciamento de banco de dados (DBMS), permitindo acesso eficiente e compartilhado aos dados.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'nascimento-bd',
        path: '/historia/nascimento-bd'
      },
      {
        id: 'modelo-relacional',
        title: 'Modelo Relacional',
        icon: 'Layout',
        shortDescription: 'A revolução de Edgar F. Codd.',
        fullDescription: 'O modelo relacional introduziu a ideia de organizar dados em tabelas com chaves, revolucionando a forma como armazenamos informação.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'modelo-relacional',
        path: '/historia/modelo-relacional'
      },
      {
        id: 'surgimento-sql',
        title: 'Surgimento do SQL',
        icon: 'Code',
        shortDescription: 'A linguagem padrão para dados.',
        fullDescription: 'Desenvolvido pela IBM nos anos 70, o SQL tornou-se a interface universal para interagir com bancos de dados relacionais.',
        categories: ['Todos', 'Análise de Dados', 'Engenharia de Dados'],
        slug: 'surgimento-sql',
        path: '/historia/surgimento-sql'
      },
      {
        id: 'data-warehousing',
        title: 'Data Warehousing',
        icon: 'Archive',
        shortDescription: 'Repositórios centrais para decisão.',
        fullDescription: 'A consolidação de dados de múltiplas fontes em um único local para análise histórica e estratégica de negócios.',
        categories: ['Todos', 'Engenharia de Dados', 'Análise de Dados'],
        slug: 'data-warehousing',
        path: '/historia/data-warehousing'
      },
      {
        id: 'bi-historia',
        title: 'Business Intelligence (BI)',
        icon: 'TrendingUp',
        shortDescription: 'Dashboards e insights de negócios.',
        fullDescription: 'O BI democratizou o acesso aos dados nas empresas através de visualizações e relatórios interativos.',
        categories: ['Todos', 'Análise de Dados'],
        slug: 'bi-historia',
        path: '/historia/bi-historia'
      },
      {
        id: 'data-mining',
        title: 'Data Mining',
        icon: 'Pickaxe',
        shortDescription: 'Descoberta de padrões ocultos.',
        fullDescription: 'A prática de examinar grandes bases de dados para gerar novas informações e identificar tendências.',
        categories: ['Todos', 'Ciência de Dados'],
        slug: 'data-mining',
        path: '/historia/data-mining'
      },
      {
        id: 'big-data',
        title: 'Big Data',
        icon: 'Zap',
        shortDescription: 'Volume, Velocidade e Variedade.',
        fullDescription: 'A explosão de dados na internet exigiu novas formas de processamento distribuído e armazenamento em escala massiva.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'big-data',
        path: '/historia/big-data'
      },
      {
        id: 'ecossistema-hadoop',
        title: 'Ecossistema Hadoop',
        icon: 'Box',
        shortDescription: 'O processamento distribuído de código aberto.',
        fullDescription: 'Hadoop e MapReduce permitiram que empresas comuns processassem Petabytes de dados usando hardware barato.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'ecossistema-hadoop',
        path: '/historia/ecossistema-hadoop'
      },
      {
        id: 'cloud-computing',
        title: 'Computação em Nuvem',
        icon: 'Cloud',
        shortDescription: 'Dados em qualquer lugar, a qualquer hora.',
        fullDescription: 'AWS, Azure e GCP transformaram a infraestrutura de dados em serviço, permitindo escalabilidade infinita sob demanda.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'computacao-nuvem',
        path: '/historia/computacao-nuvem'
      },
      {
        id: 'data-science-evo',
        title: 'Data Science',
        icon: 'FlaskConical',
        shortDescription: 'A união de computação e ciência.',
        fullDescription: 'A evolução da estatística aplicada com algoritmos avançados para resolver problemas complexos e prever o futuro.',
        categories: ['Todos', 'Ciência de Dados'],
        slug: 'data-science',
        path: '/historia/data-science'
      },
      {
        id: 'machine-learning',
        title: 'Machine Learning',
        icon: 'Brain',
        shortDescription: 'Sistemas que aprendem com dados.',
        fullDescription: 'O desenvolvimento de modelos que melhoram seu desempenho automaticamente através da experiência e do processamento de dados.',
        categories: ['Todos', 'Ciência de Dados'],
        slug: 'machine-learning',
        path: '/historia/machine-learning'
      },
      {
        id: 'modern-data-stack',
        title: 'Plataformas Modernas de Dados',
        icon: 'Layers',
        shortDescription: 'A era do Modern Data Stack.',
        fullDescription: 'Integração ágil de ferramentas como dbt, Snowflake e Airflow para fluxos de dados rápidos e confiáveis.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'plataformas-modernas',
        path: '/historia/plataformas-modernas'
      },
      {
        id: 'gen-ai',
        title: 'IA Generativa',
        icon: 'Sparkles',
        shortDescription: 'A criação autônoma de conteúdo.',
        fullDescription: 'LLMs e modelos de difusão que utilizam vastas quantidades de dados para gerar texto, imagem e código.',
        categories: ['Todos', 'Ciência de Dados'],
        slug: 'ia-generativa',
        path: '/historia/ia-generativa'
      },
      {
        id: 'agentic-ai',
        title: 'IA Agêntica',
        icon: 'UserCheck',
        shortDescription: 'Sistemas com autonomia de ação.',
        fullDescription: 'A próxima fronteira, onde a IA não apenas responde, mas executa tarefas complexas e toma decisões autonomamente.',
        categories: ['Todos', 'Ciência de Dados', 'Ciência de Dados'],
        slug: 'ia-agentica',
        path: '/historia/ia-agentica'
      },
      {
        id: 'futuro-dados',
        title: 'Futuro da Área de Dados',
        icon: 'FastForward',
        shortDescription: 'O que vem pela frente?',
        fullDescription: 'Privacidade diferencial, computação quântica e a onipresença da inteligência em todos os aspectos da sociedade humana.',
        categories: ['Todos', 'Ciência de Dados'],
        slug: 'futuro-dados',
        path: '/historia/futuro-dados'
      }
    ]
  },
  {
    id: 'subareas',
    title: 'Subáreas de Dados',
    items: [
      {
        id: 'ciencia-dados-sub',
        title: 'Ciência de Dados',
        icon: 'Beaker',
        shortDescription: 'Extração de conhecimento através de métodos científicos.',
        fullDescription: 'Campo interdisciplinar que utiliza algoritmos, processos e sistemas para extrair insights de dados estruturados e não estruturados.',
        categories: ['Todos', 'Ciência de Dados'],
        slug: 'ciencia-de-dados',
        path: '/subareas/ciencia-de-dados'
      },
      {
        id: 'analise-dados-sub',
        title: 'Análise de Dados',
        icon: 'BarChart',
        shortDescription: 'Exame de dados para apoiar a tomada de decisão.',
        fullDescription: 'Focada em processar e modelar dados para descobrir informações úteis e sugerir conclusões para o negócio.',
        categories: ['Todos', 'Análise de Dados'],
        slug: 'analise-de-dados',
        path: '/subareas/analise-de-dados'
      },
      {
        id: 'engenharia-dados-sub',
        title: 'Engenharia de Dados',
        icon: 'Settings',
        shortDescription: 'Desenvolvimento e manutenção de arquiteturas de dados.',
        fullDescription: 'Responsável por construir os sistemas que permitem a coleta e processamento de dados em larga escala.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'engenharia-de-dados',
        path: '/subareas/engenharia-de-dados'
      },
      {
        id: 'bi-sub',
        title: 'Business Intelligence (BI)',
        icon: 'TrendingUp',
        shortDescription: 'Estratégias e tecnologias para análise de negócios.',
        fullDescription: 'Transforma dados brutos em insights de negócios para ajudar as empresas a tomar decisões estratégicas mais rápidas.',
        categories: ['Todos', 'Análise de Dados'],
        slug: 'business-intelligence',
        path: '/subareas/business-intelligence'
      },
      {
        id: 'big-data-sub',
        title: 'Big Data',
        icon: 'Zap',
        shortDescription: 'Processamento de volumes massivos de informação.',
        fullDescription: 'Trata de conjuntos de dados tão grandes e complexos que precisam de tecnologias de processamento distribuído.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'big-data',
        path: '/subareas/big-data'
      },
      {
        id: 'ia-sub',
        title: 'Inteligência Artificial',
        icon: 'Brain',
        shortDescription: 'Sistemas que simulam inteligência humana.',
        fullDescription: 'Área da computação dedicada a criar máquinas capazes de realizar tarefas que normalmente exigiriam inteligência humana.',
        categories: ['Todos', 'Ciência de Dados'],
        slug: 'inteligencia-artificial',
        path: '/subareas/inteligencia-artificial'
      },
      {
        id: 'estatistica-sub',
        title: 'Estatística',
        icon: 'Percent',
        shortDescription: 'A base matemática da análise de dados.',
        fullDescription: 'Ciência que utiliza a teoria das probabilidades para explicar a frequência da ocorrência de eventos.',
        categories: ['Todos', 'Análise de Dados', 'Ciência de Dados'],
        slug: 'estatistica',
        path: '/subareas/estatistica'
      },
      {
        id: 'data-mining-sub',
        title: 'Mineração de Dados',
        icon: 'Pickaxe',
        shortDescription: 'Descoberta de padrões em grandes bases.',
        fullDescription: 'Processo de explorar grandes quantidades de dados à procura de padrões consistentes ou relacionamentos sistemáticos.',
        categories: ['Todos', 'Ciência de Dados'],
        slug: 'mineracao-de-dados',
        path: '/subareas/mineracao-de-dados'
      }
    ]
  },
  {
    id: 'profissoes',
    title: 'Profissões da Área de Dados',
    items: [
      {
        id: 'analista-dados',
        title: 'Analista de Dados',
        icon: 'Search',
        shortDescription: 'Transforma dados em insights estratégicos.',
        fullDescription: 'O Analista de Dados é responsável por coletar, processar e realizar análises estatísticas para transformar dados brutos em informações úteis.',
        categories: ['Todos', 'Análise de Dados'],
        slug: 'analista-de-dados',
        path: '/profissoes/analista-de-dados'
      },
      {
        id: 'analista-bi',
        title: 'Analista de BI',
        icon: 'BarChart',
        shortDescription: 'Especialista em visualização e dashboards.',
        fullDescription: 'Focado em Business Intelligence, este profissional cria dashboards e relatórios para auxiliar na tomada de decisão gerencial.',
        categories: ['Todos', 'Análise de Dados'],
        slug: 'analista-de-bi',
        path: '/profissoes/analista-de-bi'
      },
      {
        id: 'cientista-dados',
        title: 'Cientista de Dados',
        icon: 'Beaker',
        shortDescription: 'Cria modelos preditivos e algoritmos.',
        fullDescription: 'Utiliza métodos científicos e machine learning para prever tendências e encontrar padrões complexos nos dados.',
        categories: ['Todos', 'Ciência de Dados'],
        slug: 'cientista-de-dados',
        path: '/profissoes/cientista-de-dados'
      },
      {
        id: 'engenheiro-dados',
        title: 'Engenheiro de Dados',
        icon: 'Settings',
        shortDescription: 'Constrói pipelines e infraestrutura.',
        fullDescription: 'Responsável pela arquitetura, coleta, armazenamento e processamento de grandes volumes de dados de forma confiável.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'engenheiro-de-dados',
        path: '/profissoes/engenheiro-de-dados'
      },
      {
        id: 'analytics-engineer',
        title: 'Analytics Engineer',
        icon: 'Zap',
        shortDescription: 'A ponte entre engenharia e análise.',
        fullDescription: 'Especialista em transformar dados crus em conjuntos de dados limpos e modelados para análise, utilizando ferramentas como dbt.',
        categories: ['Todos', 'Engenharia de Dados', 'Análise de Dados'],
        slug: 'analytics-engineer',
        path: '/profissoes/analytics-engineer'
      },
      {
        id: 'arquiteto-dados',
        title: 'Arquiteto de Dados',
        icon: 'Layout',
        shortDescription: 'Desenha a visão estratégica dos dados.',
        fullDescription: 'Define como os dados serão gerenciados, integrados e protegidos em toda a organização através de modelos de arquitetura.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'arquiteto-dados',
        path: '/profissoes/arquiteto-dados'
      },
      {
        id: 'ml-engineer',
        title: 'Engenheiro de Machine Learning',
        icon: 'Cpu',
        shortDescription: 'Coloca modelos de ML em produção.',
        fullDescription: 'Focado na implementação, escala e monitoramento de modelos de IA e machine learning em ambientes de produção.',
        categories: ['Todos', 'Ciência de Dados', 'Engenharia de Dados'],
        slug: 'engenheiro-de-machine-learning',
        path: '/profissoes/engenheiro-de-machine-learning'
      },
      {
        id: 'ai-engineer',
        title: 'Engenheiro de IA',
        icon: 'Sparkles',
        shortDescription: 'Desenvolve sistemas inteligentes e agentes.',
        fullDescription: 'Especialista em construir aplicações que utilizam IA Generativa, LLMs e agentes autônomos para resolver tarefas complexas.',
        categories: ['Todos', 'Ciência de Dados'],
        slug: 'engenheiro-de-ia',
        path: '/profissoes/engenheiro-de-ia'
      }
    ]
  },
  {
    id: 'tecnologias',
    title: 'Tecnologias',
    items: [
      {
        id: 'sql',
        title: 'SQL',
        icon: 'Database',
        shortDescription: 'A linguagem universal para manipulação de dados.',
        fullDescription: 'Structured Query Language é essencial para consultar, manipular e gerenciar dados em bancos relacionais.',
        categories: ['Todos', 'Análise de Dados', 'Engenharia de Dados'],
        slug: 'sql',
        path: '/tecnologias/sql'
      },
      {
        id: 'nosql',
        title: 'NoSQL',
        icon: 'Server',
        shortDescription: 'Bancos de dados não relacionais e flexíveis.',
        fullDescription: 'Ideal para dados não estruturados e alta escalabilidade, incluindo modelos de documento, chave-valor e grafos.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'nosql',
        path: '/tecnologias/nosql'
      },
      {
        id: 'data-warehouse',
        title: 'Data Warehouse',
        icon: 'Archive',
        shortDescription: 'Repositórios integrados para BI.',
        fullDescription: 'Sistemas focados em análise de dados históricos e suporte à tomada de decisão empresarial.',
        categories: ['Todos', 'Análise de Dados', 'Engenharia de Dados'],
        slug: 'data-warehouse',
        path: '/tecnologias/data-warehouse'
      },
      {
        id: 'data-lake',
        title: 'Data Lake',
        icon: 'Droplets',
        shortDescription: 'Armazenamento massivo de dados brutos.',
        fullDescription: 'Repositório central que permite armazenar todos os seus dados estruturados e não estruturados em qualquer escala.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'data-lake',
        path: '/tecnologias/data-lake'
      },
      {
        id: 'python',
        title: 'Python',
        icon: 'Code2',
        shortDescription: 'A linguagem líder em Ciência de Dados.',
        fullDescription: 'Versátil e poderosa, Python possui o ecossistema mais rico para análise, IA e automação de dados.',
        categories: ['Todos', 'Ciência de Dados', 'Análise de Dados'],
        slug: 'python',
        path: '/tecnologias/python'
      },
      {
        id: 'r-lang',
        title: 'R',
        icon: 'Percent',
        shortDescription: 'Linguagem focada em estatística e gráficos.',
        fullDescription: 'Excelente para análise estatística profunda, pesquisa acadêmica e visualizações complexas.',
        categories: ['Todos', 'Ciência de Dados'],
        slug: 'r',
        path: '/tecnologias/r'
      },
      {
        id: 'scala',
        title: 'Scala',
        icon: 'Terminal',
        shortDescription: 'Poderosa para processamento distribuído.',
        fullDescription: 'Combina programação funcional e orientada a objetos, sendo a linguagem base do Apache Spark.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'scala',
        path: '/tecnologias/scala'
      },
      {
        id: 'hadoop',
        title: 'Hadoop',
        icon: 'Box',
        shortDescription: 'O pioneiro do processamento distribuído.',
        fullDescription: 'Permite o processamento de grandes conjuntos de dados em clusters de computadores usando modelos de programação simples.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'hadoop',
        path: '/tecnologias/hadoop'
      },
      {
        id: 'spark',
        title: 'Apache Spark',
        icon: 'Zap',
        shortDescription: 'Processamento de dados ultra-rápido.',
        fullDescription: 'Motor de análise unificado para processamento de dados em larga escala, com suporte a streaming e ML.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'apache-spark',
        path: '/tecnologias/apache-spark'
      },
      {
        id: 'kafka',
        title: 'Apache Kafka',
        icon: 'Activity',
        shortDescription: 'Plataforma de streaming de eventos.',
        fullDescription: 'Utilizada para construir pipelines de dados em tempo real e aplicações que reagem a fluxos de dados.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'apache-kafka',
        path: '/tecnologias/apache-kafka'
      },
      {
        id: 'machine-learning-tech',
        title: 'Machine Learning',
        icon: 'Brain',
        shortDescription: 'Aprendizado automático a partir de dados.',
        fullDescription: 'Campo da IA que foca no desenvolvimento de algoritmos que podem aprender e fazer previsões.',
        categories: ['Todos', 'Ciência de Dados'],
        slug: 'machine-learning',
        path: '/tecnologias/machine-learning'
      },
      {
        id: 'deep-learning',
        title: 'Deep Learning',
        icon: 'Network',
        shortDescription: 'Redes neurais artificiais profundas.',
        fullDescription: 'Subcampo do ML inspirado na estrutura do cérebro, ideal para visão computacional e processamento de linguagem.',
        categories: ['Todos', 'Ciência de Dados'],
        slug: 'deep-learning',
        path: '/tecnologias/deep-learning'
      },
      {
        id: 'gen-ai-tech',
        title: 'IA Generativa',
        icon: 'Sparkles',
        shortDescription: 'Modelos que criam novos conteúdos.',
        fullDescription: 'Tecnologias como LLMs e Diffusion Models que geram textos, imagens e áudios a partir de dados existentes.',
        categories: ['Todos', 'Ciência de Dados'],
        slug: 'ia-generativa',
        path: '/tecnologias/ia-generativa'
      },
      {
        id: 'cloud-computing-tech',
        title: 'Cloud Computing',
        icon: 'Cloud',
        shortDescription: 'Infraestrutura de dados escalável.',
        fullDescription: 'Uso de servidores remotos (AWS, Azure, GCP) para armazenar, gerenciar e processar dados.',
        categories: ['Todos', 'Análise de Dados', 'Engenharia de Dados'],
        slug: 'cloud-computing',
        path: '/tecnologias/cloud-computing'
      },
      {
        id: 'data-mesh',
        title: 'Data Mesh',
        icon: 'Grid',
        shortDescription: 'Arquitetura de dados descentralizada.',
        fullDescription: 'Abordagem sociotécnica que trata dados como produtos e distribui a responsabilidade por domínio.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'data-mesh',
        path: '/tecnologias/data-mesh'
      },
      {
        id: 'data-fabric',
        title: 'Data Fabric',
        icon: 'Trello',
        shortDescription: 'Camada de dados conectada e inteligente.',
        fullDescription: 'Arquitetura que facilita o acesso e compartilhamento de dados em um ambiente de dados distribuído.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'data-fabric',
        path: '/tecnologias/data-fabric'
      },
      {
        id: 'etl',
        title: 'ETL',
        icon: 'Shuffle',
        shortDescription: 'Extração, Transformação e Carga.',
        fullDescription: 'Processo clássico de integração de dados onde as transformações ocorrem antes do carregamento no destino.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'etl',
        path: '/tecnologias/etl'
      },
      {
        id: 'elt',
        title: 'ELT',
        icon: 'RefreshCw',
        shortDescription: 'Extração, Carga e Transformação.',
        fullDescription: 'Abordagem moderna onde os dados são carregados brutos no destino e transformados utilizando o poder do Warehouse.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'elt',
        path: '/tecnologias/elt'
      },
      {
        id: 'data-streaming',
        title: 'Streaming de Dados',
        icon: 'Wind',
        shortDescription: 'Processamento de dados em tempo real.',
        fullDescription: 'Técnica para processar fluxos contínuos de dados à medida que eles são gerados.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'streaming-de-dados',
        path: '/tecnologias/streaming-de-dados'
      },
      {
        id: 'dataops',
        title: 'DataOps',
        icon: 'RotateCw',
        shortDescription: 'Agilidade e qualidade no ciclo de dados.',
        fullDescription: 'Metodologia inspirada em DevOps para melhorar a qualidade e reduzir o tempo de entrega de projetos de dados.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'dataops',
        path: '/tecnologias/dataops'
      }
    ]
  },
  {
    id: 'ferramentas',
    title: 'Ferramentas',
    items: [
      {
        id: 'excel',
        title: 'Microsoft Excel',
        icon: 'Table',
        shortDescription: 'A ferramenta de planilhas mais usada no mundo.',
        fullDescription: 'Essencial para análise rápida de dados, limpeza básica e criação de relatórios em ambientes corporativos.',
        categories: ['Todos', 'Análise de Dados'],
        slug: 'microsoft-excel',
        path: '/ferramentas/microsoft-excel'
      },
      {
        id: 'power-bi',
        title: 'Power BI',
        icon: 'BarChart3',
        shortDescription: 'Líder em Business Intelligence e visualização.',
        fullDescription: 'Plataforma da Microsoft para transformar dados brutos em dashboards interativos e insights de negócios.',
        categories: ['Todos', 'Análise de Dados'],
        slug: 'power-bi',
        path: '/ferramentas/power-bi'
      },
      {
        id: 'tableau',
        title: 'Tableau',
        icon: 'PieChart',
        shortDescription: 'Visualização de dados poderosa e intuitiva.',
        fullDescription: 'Focada em self-service BI, permite criar visualizações complexas e explorar dados de forma visual.',
        categories: ['Todos', 'Análise de Dados'],
        slug: 'tableau',
        path: '/ferramentas/tableau'
      },
      {
        id: 'looker-studio',
        title: 'Looker Studio',
        icon: 'Presentation',
        shortDescription: 'Visualização de dados gratuita do Google.',
        fullDescription: 'Ferramenta baseada na nuvem para criar relatórios e dashboards integrados ao ecossistema Google.',
        categories: ['Todos', 'Análise de Dados'],
        slug: 'looker-studio',
        path: '/ferramentas/looker-studio'
      },
      {
        id: 'jupyter',
        title: 'Jupyter Notebook',
        icon: 'BookOpen',
        shortDescription: 'Ambiente interativo para ciência de dados.',
        fullDescription: 'Permite criar e compartilhar documentos que contêm código vivo, equações, visualizações e texto narrativo.',
        categories: ['Todos', 'Ciência de Dados'],
        slug: 'jupyter-notebook',
        path: '/ferramentas/jupyter-notebook'
      },
      {
        id: 'google-colab',
        title: 'Google Colab',
        icon: 'Infinity',
        shortDescription: 'Notebooks na nuvem com acesso a GPUs.',
        fullDescription: 'Plataforma do Google que permite escrever e executar Python no navegador, ideal para ML e IA.',
        categories: ['Todos', 'Ciência de Dados'],
        slug: 'google-colab',
        path: '/ferramentas/google-colab'
      },
      {
        id: 'vscode',
        title: 'VS Code',
        icon: 'FileCode',
        shortDescription: 'O editor de código favorito dos desenvolvedores.',
        fullDescription: 'Extensível e leve, é amplamente utilizado por cientistas e engenheiros de dados para desenvolvimento de scripts e pipelines.',
        categories: ['Todos', 'Ciência de Dados', 'Engenharia de Dados'],
        slug: 'vs-code',
        path: '/ferramentas/vs-code'
      },
      {
        id: 'dbeaver',
        title: 'DBeaver',
        icon: 'HardDrive',
        shortDescription: 'Gerenciador universal de bancos de dados.',
        fullDescription: 'Ferramenta multi-plataforma para desenvolvedores e administradores de banco de dados SQL e NoSQL.',
        categories: ['Todos', 'Análise de Dados'],
        slug: 'dbeaver',
        path: '/ferramentas/dbeaver'
      },
      {
        id: 'mysql-workbench',
        title: 'MySQL Workbench',
        icon: 'Database',
        shortDescription: 'Design e administração de MySQL.',
        fullDescription: 'Ferramenta visual unificada para arquitetos, desenvolvedores e DBAs de bancos de dados MySQL.',
        categories: ['Todos', 'Análise de Dados'],
        slug: 'mysql-workbench',
        path: '/ferramentas/mysql-workbench'
      },
      {
        id: 'airflow',
        title: 'Apache Airflow',
        icon: 'Wind',
        shortDescription: 'Orquestração de workflows de dados.',
        fullDescription: 'Plataforma para programar, agendar e monitorar fluxos de trabalho usando Python (DAGs).',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'apache-airflow',
        path: '/ferramentas/apache-airflow'
      },
      {
        id: 'dbt',
        title: 'dbt (Data Build Tool)',
        icon: 'Hammer',
        shortDescription: 'Transformação de dados via SQL.',
        fullDescription: 'Permite que analistas e engenheiros transformem dados dentro de seus armazéns seguindo boas práticas de software.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'dbt',
        path: '/ferramentas/dbt'
      },
      {
        id: 'nifi',
        title: 'Apache NiFi',
        icon: 'Waves',
        shortDescription: 'Automação de fluxos de dados.',
        fullDescription: 'Sistema focado no fluxo de dados, roteamento e lógica de transformação em larga escala.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'apache-nifi',
        path: '/ferramentas/apache-nifi'
      },
      {
        id: 'superset',
        title: 'Apache Superset',
        icon: 'AreaChart',
        shortDescription: 'Exploração de dados moderna e rápida.',
        fullDescription: 'Plataforma de visualização de dados de código aberto que pode lidar com Petabytes de informação.',
        categories: ['Todos', 'Análise de Dados'],
        slug: 'apache-superset',
        path: '/ferramentas/apache-superset'
      },
      {
        id: 'metabase',
        title: 'Metabase',
        icon: 'SearchCode',
        shortDescription: 'BI fácil para todos na empresa.',
        fullDescription: 'Permite que qualquer pessoa faça perguntas e aprenda com os dados de forma intuitiva, sem precisar de SQL.',
        categories: ['Todos', 'Análise de Dados'],
        slug: 'metabase',
        path: '/ferramentas/metabase'
      },
      {
        id: 'git',
        title: 'Git',
        icon: 'GitBranch',
        shortDescription: 'Controle de versão de arquivos.',
        fullDescription: 'Essencial para rastrear alterações no código e colaborar em projetos de ciência e engenharia de dados.',
        categories: ['Todos', 'Análise de Dados', 'Ciência de Dados', 'Engenharia de Dados'],
        slug: 'git',
        path: '/ferramentas/git'
      },
      {
        id: 'github',
        title: 'GitHub',
        icon: 'Github',
        shortDescription: 'Hospedagem de código e colaboração.',
        fullDescription: 'Plataforma baseada em Git para gerenciar projetos, automação (Actions) e compartilhamento de conhecimento.',
        categories: ['Todos', 'Ciência de Dados', 'Engenharia de Dados'],
        slug: 'github',
        path: '/ferramentas/github'
      },
      {
        id: 'docker',
        title: 'Docker',
        icon: 'Container',
        shortDescription: 'Containerização de aplicações.',
        fullDescription: 'Garante que o ambiente de dados seja consistente desde o desenvolvimento até a produção através de containers.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'docker',
        path: '/ferramentas/docker'
      },
      {
        id: 'kubernetes',
        title: 'Kubernetes',
        icon: 'Anchor',
        shortDescription: 'Orquestração de containers em escala.',
        fullDescription: 'Gerencia containers em clusters, garantindo alta disponibilidade e escalabilidade para infraestruturas de dados.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'kubernetes',
        path: '/ferramentas/kubernetes'
      },
      {
        id: 'mlflow',
        title: 'MLflow',
        icon: 'Activity',
        shortDescription: 'Gestão do ciclo de vida de ML.',
        fullDescription: 'Plataforma aberta para gerenciar o fluxo de Machine Learning, incluindo experimentação e implantação.',
        categories: ['Todos', 'Ciência de Dados', 'Engenharia de Dados'],
        slug: 'mlflow',
        path: '/ferramentas/mlflow'
      },
      {
        id: 'tensorflow',
        title: 'TensorFlow',
        icon: 'Cpu',
        shortDescription: 'Biblioteca líder para Deep Learning.',
        fullDescription: 'Ecossistema ponta a ponta para aprendizado de máquina, focado em redes neurais profundas.',
        categories: ['Todos', 'Ciência de Dados'],
        slug: 'tensorflow',
        path: '/ferramentas/tensorflow'
      },
      {
        id: 'pytorch',
        title: 'PyTorch',
        icon: 'Zap',
        shortDescription: 'Flexibilidade para pesquisa em IA.',
        fullDescription: 'Biblioteca de ML baseada em Torch, amplamente usada em pesquisa e produção por sua dinamicidade.',
        categories: ['Todos', 'Ciência de Dados'],
        slug: 'pytorch',
        path: '/ferramentas/pytorch'
      }
    ]
  },
  {
    id: 'tecnicas',
    title: 'Técnicas',
    items: [
      {
        id: 'eda',
        title: 'Análise Exploratória de Dados (EDA)',
        icon: 'Search',
        shortDescription: 'Exploração inicial para entender os dados.',
        fullDescription: 'O primeiro passo de qualquer projeto de dados, focado em entender padrões, detectar anomalias e testar hipóteses usando estatística e visualização.',
        categories: ['Todos', 'Análise de Dados', 'Ciência de Dados'],
        slug: 'analise-exploratoria',
        path: '/tecnicas/analise-exploratoria'
      },
      {
        id: 'limpeza-dados',
        title: 'Limpeza de Dados',
        icon: 'Filter',
        shortDescription: 'Tratamento de dados para análise.',
        fullDescription: 'Processo de identificar e corrigir erros, valores ausentes e inconsistências para garantir a qualidade das conclusões.',
        categories: ['Todos', 'Análise de Dados', 'Engenharia de Dados'],
        slug: 'limpeza-de-dados',
        path: '/tecnicas/limpeza-de-dados'
      },
      {
        id: 'visualizacao-dados',
        title: 'Visualização de Dados',
        icon: 'LineChart',
        shortDescription: 'Representação visual da informação.',
        fullDescription: 'A arte e ciência de transformar números em gráficos que facilitam a compreensão de tendências e outliers.',
        categories: ['Todos', 'Análise de Dados', 'Ciência de Dados'],
        slug: 'visualizacao-de-dados',
        path: '/tecnicas/visualizacao-de-dados'
      },
      {
        id: 'storytelling',
        title: 'Data Storytelling',
        icon: 'MessageSquare',
        shortDescription: 'Comunicando insights através de narrativas.',
        fullDescription: 'Técnica de combinar dados, visualizações e narrativa para influenciar decisões e comunicar resultados de forma impactante.',
        categories: ['Todos', 'Análise de Dados'],
        slug: 'data-storytelling',
        path: '/tecnicas/data-storytelling'
      },
      {
        id: 'modelagem-dados',
        title: 'Modelagem de Dados',
        icon: 'Database',
        shortDescription: 'Estruturação lógica da informação.',
        fullDescription: 'Definição de como os dados são armazenados e como se relacionam, essencial para a performance e clareza de sistemas e análises.',
        categories: ['Todos', 'Engenharia de Dados', 'Análise de Dados'],
        slug: 'modelagem-de-dados',
        path: '/tecnicas/modelagem-de-dados'
      },
      {
        id: 'feature-engineering',
        title: 'Feature Engineering',
        icon: 'Wand2',
        shortDescription: 'Criação de variáveis para modelos.',
        fullDescription: 'Processo de usar o conhecimento de domínio para criar novas variáveis (features) que tornam os algoritmos de ML mais eficazes.',
        categories: ['Todos', 'Ciência de Dados'],
        slug: 'feature-engineering',
        path: '/tecnicas/feature-engineering'
      },
      {
        id: 'feature-selection',
        title: 'Seleção de Features',
        icon: 'CheckSquare',
        shortDescription: 'Escolha das variáveis mais importantes.',
        fullDescription: 'Identificação das variáveis que mais contribuem para o poder preditivo do modelo, reduzindo ruído e complexidade.',
        categories: ['Todos', 'Ciência de Dados'],
        slug: 'selecao-de-features',
        path: '/tecnicas/selecao-de-features'
      },
      {
        id: 'supervised-learning',
        title: 'Aprendizado Supervisionado',
        icon: 'BrainCircuit',
        shortDescription: 'Treinamento com dados rotulados.',
        fullDescription: 'Técnica onde o modelo aprende a partir de exemplos com respostas conhecidas (ex: regressão e classificação).',
        categories: ['Todos', 'Ciência de Dados'],
        slug: 'aprendizado-supervisionado',
        path: '/tecnicas/aprendizado-supervisionado'
      },
      {
        id: 'unsupervised-learning',
        title: 'Aprendizado Não Supervisionado',
        icon: 'Cpu',
        shortDescription: 'Descoberta de padrões em dados sem rótulos.',
        fullDescription: 'Algoritmos que buscam estruturas ocultas nos dados por conta própria (ex: agrupamento/clustering).',
        categories: ['Todos', 'Ciência de Dados'],
        slug: 'aprendizado-nao-supervisionado',
        path: '/tecnicas/aprendizado-nao-supervisionado'
      },
      {
        id: 'model-evaluation',
        title: 'Avaliação de Modelos',
        icon: 'Target',
        shortDescription: 'Medição da performance da IA.',
        fullDescription: 'Uso de métricas (Acurácia, Precisão, Recall, F1-Score) para validar se o modelo realmente funciona.',
        categories: ['Todos', 'Ciência de Dados'],
        slug: 'avaliacao-de-modelos',
        path: '/tecnicas/avaliacao-de-modelos'
      },
      {
        id: 'ab-testing',
        title: 'A/B Testing',
        icon: 'Split',
        shortDescription: 'Experimentos científicos para produtos.',
        fullDescription: 'Comparação entre duas versões de algo para determinar qual performa melhor com base em significância estatística.',
        categories: ['Todos', 'Análise de Dados', 'Ciência de Dados'],
        slug: 'ab-testing',
        path: '/tecnicas/ab-testing'
      },
      {
        id: 'data-governance',
        title: 'Governança de Dados',
        icon: 'ShieldCheck',
        shortDescription: 'Gestão de segurança e conformidade.',
        fullDescription: 'Políticas e processos para garantir que os dados sejam seguros, privados e usados de acordo com leis como a LGPD.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'governanca-de-dados',
        path: '/tecnicas/governanca-de-dados'
      },
      {
        id: 'data-quality',
        title: 'Qualidade de Dados',
        icon: 'CheckCircle',
        shortDescription: 'Monitoramento da integridade dos dados.',
        fullDescription: 'Conjunto de práticas para garantir que os dados sejam precisos, completos e confiáveis para o negócio.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'qualidade-de-dados',
        path: '/tecnicas/qualidade-de-dados'
      },
      {
        id: 'data-observability',
        title: 'Observabilidade de Dados',
        icon: 'Eye',
        shortDescription: 'Visibilidade total da saúde dos pipelines.',
        fullDescription: 'Entendimento profundo do estado dos dados através de métricas, logs e linhagem (lineage).',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'observabilidade-de-dados',
        path: '/tecnicas/observabilidade-de-dados'
      },
      {
        id: 'dataops-tech',
        title: 'DataOps',
        icon: 'RotateCw',
        shortDescription: 'Agilidade no ciclo de vida de dados.',
        fullDescription: 'Metodologia para reduzir o tempo de ciclo e melhorar a qualidade da entrega de dados.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'dataops',
        path: '/tecnicas/dataops'
      },
      {
        id: 'mlops',
        title: 'MLOps',
        icon: 'Infinity',
        shortDescription: 'Operacionalização de Machine Learning.',
        fullDescription: 'Práticas para automatizar e tornar confiável o ciclo de vida de modelos de ML em produção.',
        categories: ['Todos', 'Ciência de Dados', 'Engenharia de Dados'],
        slug: 'mlops',
        path: '/tecnicas/mlops'
      }
    ]
  },
  {
    id: 'plataformas',
    title: 'Plataformas e Ambientes de Dados',
    items: [
      {
        id: 'databricks',
        title: 'Databricks',
        icon: 'Braces',
        shortDescription: 'Plataforma unificada de análise de dados.',
        fullDescription: 'Criada pelos fundadores do Apache Spark, o Databricks combina o melhor dos Data Warehouses e Data Lakes na arquitetura Lakehouse.',
        categories: ['Todos', 'Ciência de Dados', 'Engenharia de Dados'],
        slug: 'databricks',
        path: '/plataformas/databricks'
      },
      {
        id: 'aws',
        title: 'AWS (Amazon Web Services)',
        icon: 'Cloud',
        shortDescription: 'A maior plataforma de nuvem do mundo.',
        fullDescription: 'Oferece um ecossistema gigante de serviços para dados, como S3 (armazenamento), Redshift (DW), EMR (Spark) e SageMaker (ML).',
        categories: ['Todos', 'Análise de Dados', 'Ciência de Dados', 'Engenharia de Dados'],
        slug: 'aws',
        path: '/plataformas/aws'
      },
      {
        id: 'azure',
        title: 'Microsoft Azure',
        icon: 'Cloud',
        shortDescription: 'A nuvem da Microsoft para empresas.',
        fullDescription: 'Plataforma robusta com serviços integrados como Azure Synapse, Data Factory e Azure Machine Learning.',
        categories: ['Todos', 'Análise de Dados', 'Ciência de Dados', 'Engenharia de Dados'],
        slug: 'azure',
        path: '/plataformas/azure'
      },
      {
        id: 'gcp',
        title: 'Google Cloud Platform (GCP)',
        icon: 'Cloud',
        shortDescription: 'Nuvem focada em IA e análise escalável.',
        fullDescription: 'Destaque para o BigQuery (DW serverless), Vertex AI e serviços de processamento de dados em tempo real.',
        categories: ['Todos', 'Análise de Dados', 'Ciência de Dados', 'Engenharia de Dados'],
        slug: 'gcp',
        path: '/plataformas/gcp'
      },
      {
        id: 'snowflake',
        title: 'Snowflake',
        icon: 'Database',
        shortDescription: 'O Data Warehouse moderno na nuvem.',
        fullDescription: 'Arquitetura que separa armazenamento de processamento, permitindo escalabilidade instantânea e compartilhamento fácil de dados.',
        categories: ['Todos', 'Análise de Dados', 'Engenharia de Dados'],
        slug: 'snowflake',
        path: '/plataformas/snowflake'
      },
      {
        id: 'kaggle',
        title: 'Kaggle',
        icon: 'Trophy',
        shortDescription: 'A maior comunidade de Ciência de Dados.',
        fullDescription: 'Plataforma para competições de ML, compartilhamento de datasets e notebooks, essencial para aprendizado e portfólio.',
        categories: ['Todos', 'Análise de Dados', 'Ciência de Dados'],
        slug: 'kaggle',
        path: '/plataformas/kaggle'
      }
    ]
  },
  {
    id: 'curiosidades',
    title: 'Curiosidades',
    items: [
      {
        id: 'origem-data-scientist',
        title: 'Como surgiu o termo "Data Scientist"',
        icon: 'UserSearch',
        shortDescription: 'A origem do título de "Cientista de Dados".',
        fullDescription: 'O termo foi popularizado por DJ Patil e Jeff Hammerbacher em 2008, então líderes de dados no LinkedIn e Facebook, para descrever profissionais que exploravam montanhas de dados.',
        categories: ['Todos', 'Ciência de Dados'],
        slug: 'como-surgiu-o-termo-data-scientist',
        path: '/curiosidades/como-surgiu-o-termo-data-scientist'
      },
      {
        id: 'origem-sql',
        title: 'A origem do SQL',
        icon: 'Code',
        shortDescription: 'O nascimento da linguagem padrão de dados.',
        fullDescription: 'Originalmente chamada de SEQUEL, foi desenvolvida pela IBM nos anos 70 para manipular dados no inovador Modelo Relacional de Edgar F. Codd.',
        categories: ['Todos', 'Análise de Dados'],
        slug: 'a-origem-do-sql',
        path: '/curiosidades/a-origem-do-sql'
      },
      {
        id: 'primeiro-bd-relacional',
        title: 'O primeiro banco de dados relacional',
        icon: 'Database',
        shortDescription: 'O sistema que mudou o armazenamento.',
        fullDescription: 'O System R da IBM foi o primeiro protótipo a implementar o modelo relacional e SQL, servindo de base para quase todos os bancos de dados modernos.',
        categories: ['Todos', 'Análise de Dados'],
        slug: 'o-primeiro-banco-de-dados-relacional',
        path: '/curiosidades/o-primeiro-banco-de-dados-relacional'
      },
      {
        id: 'volume-dados-dia',
        title: 'Quantos dados são gerados por dia no mundo',
        icon: 'Activity',
        shortDescription: 'A escala massiva da geração de informação.',
        fullDescription: 'Estima-se que geramos mais de 3.5 quintilhões de bytes por dia, impulsionados por redes sociais, dispositivos IoT e transações digitais constantes.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'quantos-dados-sao-gerados-por-dia',
        path: '/curiosidades/quantos-dados-sao-gerados-por-dia'
      },
      {
        id: 'historia-hadoop',
        title: 'A história do Hadoop',
        icon: 'Box',
        shortDescription: 'Como o Big Data se tornou acessível.',
        fullDescription: 'Inspirado em papéis técnicos do Google e nomeado após um elefante de brinquedo, o Hadoop permitiu que qualquer empresa processasse dados em larga escala.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'a-historia-do-hadoop',
        path: '/curiosidades/a-historia-do-hadoop'
      },
      {
        id: 'nascimento-spark',
        title: 'Como nasceu o Apache Spark',
        icon: 'Zap',
        shortDescription: 'A superação das limitações do MapReduce.',
        fullDescription: 'Desenvolvido no laboratório AMPLab da UC Berkeley, o Spark nasceu para processar dados em memória, sendo até 100 vezes mais rápido que o Hadoop clássico.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'como-nasceu-o-apache-spark',
        path: '/curiosidades/como-nasceu-o-apache-spark'
      },
      {
        id: 'premio-netflix',
        title: 'O prêmio da Netflix para recomendação',
        icon: 'Trophy',
        shortDescription: 'A competição que impulsionou o ML.',
        fullDescription: 'Em 2006, a Netflix ofereceu US$ 1 milhão para quem melhorasse seu algoritmo de recomendação em 10%, gerando avanços significativos na área.',
        categories: ['Todos', 'Ciência de Dados'],
        slug: 'o-premio-da-netflix',
        path: '/curiosidades/o-premio-da-netflix'
      },
      {
        id: 'netflix-uso-dados',
        title: 'Como a Netflix usa dados',
        icon: 'Tv',
        shortDescription: 'A ciência por trás do "O que assistir".',
        fullDescription: 'A Netflix usa dados não apenas para recomendar, mas para decidir quais séries produzir e até qual imagem de capa mostrar para cada perfil de usuário.',
        categories: ['Todos', 'Análise de Dados'],
        slug: 'como-a-netflix-usa-dados',
        path: '/curiosidades/como-a-netflix-uso-dados'
      },
      {
        id: 'spotify-recomendacoes',
        title: 'Como o Spotify recomenda músicas',
        icon: 'Music',
        shortDescription: 'O segredo do "Descobertas da Semana".',
        fullDescription: 'O Spotify combina filtragem colaborativa, processamento de linguagem natural e análise de áudio para criar playlists personalizadas para milhões de pessoas.',
        categories: ['Todos', 'Análise de Dados'],
        slug: 'como-o-spotify-recomenda-musicas',
        path: '/curiosidades/como-o-spotify-recomenda-musicas'
      },
      {
        id: 'evolucao-ia',
        title: 'A evolução da Inteligência Artificial',
        icon: 'BrainCircuit',
        shortDescription: 'Do Teste de Turing aos modelos atuais.',
        fullDescription: 'A IA passou por "verões" de hype e "invernos" de falta de recursos, evoluindo de sistemas baseados em regras para as redes neurais profundas de hoje.',
        categories: ['Todos', 'Ciência de Dados'],
        slug: 'a-evolucao-da-ia',
        path: '/curiosidades/a-evolucao-da-ia'
      },
      {
        id: 'surgimento-chatgpt',
        title: 'O surgimento do ChatGPT',
        icon: 'MessageSquare',
        shortDescription: 'A revolução da IA Generativa.',
        fullDescription: 'Lançado pela OpenAI em 2022, o ChatGPT quebrou recordes de adoção ao mostrar o poder de modelos de linguagem em conversas naturais.',
        categories: ['Todos', 'Ciência de Dados'],
        slug: 'o-surgimento-do-chatgpt',
        path: '/curiosidades/o-surgimento-do-chatgpt'
      },
      {
        id: 'maiores-data-centers',
        title: 'Os maiores data centers do mundo',
        icon: 'Server',
        shortDescription: 'Onde os dados "moram".',
        fullDescription: 'Existem complexos de data centers gigantescos, como o de Langfang na China, com milhões de metros quadrados de servidores processando o mundo digital.',
        categories: ['Todos', 'Engenharia de Dados'],
        slug: 'os-maiores-data-centers-do-mundo',
        path: '/curiosidades/os-maiores-data-centers-do-mundo'
      }
    ]
  }
];
