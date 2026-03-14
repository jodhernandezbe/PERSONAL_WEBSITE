---
layout: default
title: Software
permalink: /software/
---

<details>
<summary><strong>PyGREET</strong> - Python Interface for GREET Life Cycle Assessment</summary>

<div class="about-section" markdown="1">

Next-generation Python interface for the GREET life cycle assessment model, enabling programmatic access to transportation and energy system analysis.

**Platform**: [PyGREET](https://greet.anl.gov/pygreet)
**Tech Stack**: Python, FastAPI, Jupyter Notebooks, SQLite
**Methodology**: LCA Modeling, Automated Workflows, Educational Interface Design

### Key Features
- Native Python access to GREET functionality and databases
- Interactive Jupyter notebooks for LCA analysis and visualization
- Automated batch processing and sensitivity analysis
- Educational tools for universities and training programs

### Applications
- Transportation and energy system life cycle assessments
- Academic research and policy analysis
- Corporate sustainability reporting

</div>

</details>

<details>
<summary><strong>GREET OpenLCA Interface</strong> - LCA Data Engineering & AI-Assisted Mapping Platform</summary>

<div class="about-section" markdown="1">

AI-assisted data engineering pipeline transforming GREET data into OpenLCA JSON-LD format with intelligent flow mapping to U.S. Federal LCA Commons standards.

**Platform**: [GREET OpenLCA Interface](https://greet.anl.gov/openlca_interface)
**Tech Stack**: Python, Django REST Framework, Streamlit, PostgreSQL
**Methodology**: RAG, LLM-as-judge, Data Engineering Pipeline

### Key Features
- GREET to OpenLCA JSON-LD format conversion
- AI-assisted mapping using RAG and LLM-as-judge workflow
- Automated categorization with 4-digit NAICS codes
- U.S. Federal LCA Commons elementary flow alignment

### Applications
- Government sustainability assessments with standardized data
- Academic LCA research with interoperable formats
- Corporate studies with Federal Commons compatibility

</div>

</details>

<details>
<summary><strong>TRI4PLADS</strong> - Plastic Additives End-of-Life Analysis Platform</summary>

<div class="about-section" markdown="1">

Modern data engineering platform for analyzing plastic additives chemical flow patterns using EPA TRI data and statistical modeling.

**GitHub**: [jodhernandezbe/TRI4PLADS](https://github.com/jodhernandezbe/TRI4PLADS)
**PyPI Package**: [tri4plads](https://pypi.org/project/focapd/)
**Tech Stack**: Python 3.12+, Poetry, SQLite, Alembic
**Methodology**: Data engineering pipeline, Statistical modeling

### Key Features
- ETL pipeline for EPA TRI data processing
- Plastic additives end-of-life flow analysis
- Discrete distribution generation from regulatory data
- Interactive CLI and database migrations

### Applications
- Plastic waste management policy support
- TRI compliance and release pattern analysis
- Academic research with reproducible workflows

</div>

</details>

<details>
<summary><strong>Chemical End-of-Life ML Models</strong> - Structure-Based Prediction API</summary>

<div class="about-section" markdown="1">

Machine learning API for predicting chemical end-of-life scenarios using structure-based classification models.

**GitHub**: [jodhernandezbe/prtr_deployment](https://github.com/jodhernandezbe/prtr_deployment)
**Research Foundation**: [ACS Sustainable Chemistry & Engineering](https://doi.org/10.1021/acssuschemeng.2c05662)
**Tech Stack**: FastAPI, Python, Scikit-learn, AWS EC2, Docker
**Methodology**: Machine Learning, Structure-based classification

### Key Features
- Structure-based chemical classification models
- RESTful API for real-time chemical fate predictions
- Batch processing for large chemical datasets
- Integration with regulatory assessment workflows

### Applications
- EPA chemical risk evaluations
- Chemical informatics research
- Environmental fate modeling

</div>

</details>

<details>
<summary><strong>PRTR Transfers API</strong> - International Pollutant Release Dashboard</summary>

<div class="about-section" markdown="1">

FastAPI platform for analyzing and comparing pollutant release data across three international regulatory systems.

**GitHub**: [jodhernandezbe/PRTR_transfers_FastAPI](https://github.com/jodhernandezbe/PRTR_transfers_FastAPI)
**Data Sources**: NPRI (Canada), NPI (Australia), TRI (USA)
**Tech Stack**: FastAPI, SQLite, SQLAlchemy ORM, AWS EC2
**Methodology**: RESTful API design, Cross-country data harmonization

### Key Features
- Cross-country pollutant data comparison API
- Interactive dashboard with visualizations
- Standardized schema across PRTR systems
- AWS deployment with automated documentation

### Applications
- International environmental policy analysis
- Comparative regulatory research
- Cross-border pollution monitoring

</div>

</details>

<details>
<summary><strong>StEWI</strong> - Standardized Emission and Waste Inventories</summary>

<div class="about-section" markdown="1">

Official EPA system for standardizing and integrating environmental emissions and waste data across multiple regulatory programs.

**GitHub**: [USEPA/standardizedinventories](https://github.com/USEPA/standardizedinventories)
**Data Products**: [EPA StEWI Data Catalog](https://catalog.data.gov/dataset/stewi-v1-0-5-data-products)
**Coverage**: 6 major EPA inventories (2011-2023)
**Tech Stack**: Python, Apache Parquet, Pandas
**Methodology**: ETL frameworks, Data standardization

### Key Features
- Standardized data formats across EPA programs
- Facility and chemical matching across inventories
- Overlap removal and quality assurance
- Multi-year trending capabilities

### Applications
- EPA assessment workflows
- National environmental data analysis
- Research data integration

</div>

</details>

<details>
<summary><strong>EoL4Chem</strong> - Chemical Waste Flow Tracking & Analysis Framework</summary>

<div class="about-section" markdown="1">

Python framework for tracking chemical waste flows and identifying recycling, treatment, and disposal facilities using EPA databases.

**GitHub**: [jodhernandezbe/EoL4Chem](https://github.com/jodhernandezbe/EoL4Chem)
**Data Sources**: EPA CDR, TRI, RCRAInfo, FRS databases
**Tech Stack**: Python, BeautifulSoup, Pandas, SQLite, Matplotlib
**Methodology**: Web scraping, ETL pipelines, Circular economy analysis

### Key Features
- Chemical waste flow tracking and analysis
- RETDF facility identification and mapping
- Integration with PAU4Chem for pollution abatement analysis
- Circular life cycle analysis capabilities

### Applications
- Waste management policy recommendations
- Chemical fate and transport modeling
- Circular economy analysis and optimization

</div>

</details>

<details>
<summary><strong>SciFinder Scraper</strong> - Chemical Pricing & Supplier Intelligence</summary>

<div class="about-section" markdown="1">

Web scraping tool for extracting chemical pricing and supplier information from CAS SciFinder database.

**GitHub**: [jodhernandezbe/SciFinder_Scraper](https://github.com/jodhernandezbe/SciFinder_Scraper)
**Data Source**: CAS SciFinder Database
**Tech Stack**: Python, Selenium WebDriver, Pandas
**Methodology**: Web scraping, Batch processing

### Key Features
- Automated SciFinder data extraction
- Chemical pricing and supplier information retrieval
- Geographic supplier mapping
- Batch processing of CAS number lists

### Applications
- Chemical cost modeling and optimization
- Supply chain evaluation and risk assessment
- Research budget planning and market intelligence

</div>

</details>

<details>
<summary><strong>Properties Scraper</strong> - Multi-Source Chemical Property Data Collection</summary>

<div class="about-section" markdown="1">

Web scraping framework for gathering chemical properties from multiple authoritative databases.

**GitHub**: [jodhernandezbe/Properties_Scraper](https://github.com/jodhernandezbe/Properties_Scraper)
**Data Sources**: NOAA CAMEO, OSHA, NIST, EPA CompTox, IFA GESTIS
**Tech Stack**: Python, Selenium WebDriver, Pandas
**Methodology**: Web scraping, Multi-source data integration

### Key Features
- Automated batch processing of CAS number lists
- Multi-source data integration and standardization
- Configurable scraping modules for different databases
- Data validation and CSV export capabilities

### Applications
- Chemical property data for environmental modeling
- Regulatory compliance and safety information
- Risk assessment and toxicity analysis

</div>

</details>

<details>
<summary><strong>PAU4Chem</strong> - Pollution Abatement Unit Chemical Flow Analysis</summary>

<div class="about-section" markdown="1">

Python framework for tracking chemical flows in pollution abatement units using EPA TRI data.

**GitHub**: [jodhernandezbe/PAU4Chem](https://github.com/jodhernandezbe/PAU4Chem)
**Data Sources**: EPA TRI Basic Plus Data Files (1987-2018)
**Tech Stack**: Python, BeautifulSoup, Pandas, NumPy, SciPy
**Methodology**: Web scraping, Statistical analysis, Chemical flow modeling

### Key Features
- Automated TRI data extraction and processing
- Chemical flow tracking through pollution abatement units
- Multi-year data integration (1987-2018)
- Statistical analysis of waste management processes

### Applications
- Environmental policy and pollution control strategies
- Industrial ecology and chemical flow network analysis
- TRI compliance assessment and technology evaluation

</div>

</details>