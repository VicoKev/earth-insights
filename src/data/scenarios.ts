export interface Choice {
  id: string;
  text: string;
  icon: string;
  consequence: {
    image: string;
    title: string;
    description: string;
    scientificExplanation: string;
    environmentalScore: number;
    impact: 'positive' | 'neutral' | 'critical';
  };
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  context: string;
  initialImage: string;
  choices: Choice[];
  category: string;
}

export const scenarios: Scenario[] = [
  {
    id: 'amazon-deforestation',
    title: 'Amazon Rainforest Crisis',
    description: 'Terra detects unusual patterns in the Amazon basin',
    context: 'Satellite data shows significant changes in the Amazon rainforest over the past year. Multiple hotspots indicate different environmental concerns. Your priority decision will determine which area receives immediate attention and research funding.',
    initialImage: 'https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Forest',
    choices: [
      {
        id: 'deforestation',
        text: 'Prioritize Deforestation Monitoring',
        icon: 'TreePine',
        consequence: {
          image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Deforestation Patterns Revealed',
          description: 'Your focus on deforestation has uncovered critical illegal logging operations affecting 15,000 hectares.',
          scientificExplanation: 'By prioritizing deforestation monitoring using MODIS data, Terra can track forest cover changes with 250m resolution. This reveals patterns of illegal logging and helps authorities respond quickly. Deforestation monitoring is crucial for understanding carbon cycle disruptions, as forests store approximately 300 billion tons of carbon.',
          environmentalScore: 85,
          impact: 'positive'
        }
      },
      {
        id: 'co2-analysis',
        text: 'Analyze Carbon Dioxide Levels',
        icon: 'Wind',
        consequence: {
          image: 'https://images.pexels.com/photos/1108814/pexels-photo-1108814.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Carbon Flux Measurement Success',
          description: 'Your CO₂ analysis reveals that the Amazon is now emitting more carbon than it absorbs in certain regions.',
          scientificExplanation: 'Using MOPITT (Measurements of Pollution in the Troposphere), Terra tracks CO₂ concentrations. The Amazon traditionally acts as a carbon sink, absorbing about 2 billion tons of CO₂ annually. However, when stressed by deforestation and fire, it can become a carbon source, releasing stored carbon back into the atmosphere.',
          environmentalScore: 80,
          impact: 'positive'
        }
      },
      {
        id: 'fire-detection',
        text: 'Focus on Fire Detection',
        icon: 'Flame',
        consequence: {
          image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Wildfire Outbreak Detected',
          description: 'Your fire monitoring system identifies 47 active fire hotspots, including several that threaten indigenous territories.',
          scientificExplanation: 'Terra\'s thermal bands detect fires as small as 100m². Early fire detection is critical as wildfires release massive amounts of CO₂, destroy biodiversity, and can create feedback loops that increase future fire risk. In 2019 alone, Amazon fires released 400 million tons of CO₂.',
          environmentalScore: 90,
          impact: 'critical'
        }
      }
    ]
  },
  {
    id: 'arctic-ice',
    title: 'Arctic Ice Sheet Monitoring',
    description: 'Unusual melting patterns detected in the Arctic region',
    context: 'Terra\'s instruments show accelerated ice loss in the Arctic. Multiple environmental factors are at play, and your decision will shape our understanding of this critical region.',
    initialImage: 'https://images.pexels.com/photos/416676/pexels-photo-416676.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Polar',
    choices: [
      {
        id: 'ice-thickness',
        text: 'Measure Ice Thickness Changes',
        icon: 'Snowflake',
        consequence: {
          image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Critical Ice Thinning Documented',
          description: 'Your measurements show Arctic ice is now 40% thinner than it was 40 years ago.',
          scientificExplanation: 'Using ASTER\'s thermal imaging, Terra can estimate ice thickness by measuring surface temperature variations. Thinner ice means less albedo (reflectivity), causing more solar energy absorption. This creates a feedback loop: less ice → more warming → even less ice. Arctic sea ice has declined by about 13% per decade since 1979.',
          environmentalScore: 85,
          impact: 'critical'
        }
      },
      {
        id: 'albedo-effect',
        text: 'Study Albedo Effect',
        icon: 'Sun',
        consequence: {
          image: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Albedo Feedback Loop Confirmed',
          description: 'Your research confirms that darker ocean water is absorbing significantly more solar radiation.',
          scientificExplanation: 'Terra\'s CERES instrument measures Earth\'s energy balance. Ice reflects 80-90% of sunlight (high albedo), while dark ocean water reflects only 6%. As ice melts, more dark water is exposed, absorbing more heat and accelerating warming. This is one of the most powerful positive feedback mechanisms in climate change.',
          environmentalScore: 80,
          impact: 'positive'
        }
      },
      {
        id: 'glacial-movement',
        text: 'Track Glacier Movement',
        icon: 'MoveRight',
        consequence: {
          image: 'https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Accelerated Glacier Flow Detected',
          description: 'Major glaciers are moving toward the ocean 3x faster than historical rates.',
          scientificExplanation: 'ASTER provides high-resolution stereo imagery allowing scientists to create Digital Elevation Models (DEMs). By comparing images over time, we can track glacier movement with centimeter precision. Faster glacier flow contributes to sea level rise. Greenland alone loses about 280 billion tons of ice per year.',
          environmentalScore: 90,
          impact: 'critical'
        }
      }
    ]
  },
  {
    id: 'ocean-temperature',
    title: 'Ocean Temperature Anomaly',
    description: 'Unusual warming patterns detected in the Pacific Ocean',
    context: 'Terra\'s sensors identify a significant temperature anomaly in the Pacific. This could indicate the development of El Niño conditions, which would affect weather patterns globally.',
    initialImage: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Ocean',
    choices: [
      {
        id: 'sst-mapping',
        text: 'Map Sea Surface Temperatures',
        icon: 'Thermometer',
        consequence: {
          image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'El Niño Pattern Confirmed',
          description: 'Your temperature mapping confirms a strong El Niño developing, likely to impact global weather for 12-18 months.',
          scientificExplanation: 'MODIS measures sea surface temperature (SST) with 1°C accuracy. El Niño occurs when warm water accumulates in the eastern Pacific, shifting the jet stream and altering weather patterns worldwide. This can cause droughts in some regions and floods in others. Accurate SST monitoring allows for early warning systems.',
          environmentalScore: 95,
          impact: 'critical'
        }
      },
      {
        id: 'coral-bleaching',
        text: 'Monitor Coral Reef Health',
        icon: 'Fish',
        consequence: {
          image: 'https://images.pexels.com/photos/3210387/pexels-photo-3210387.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Mass Coral Bleaching Event',
          description: 'Elevated temperatures are causing widespread coral bleaching across 30% of monitored reefs.',
          scientificExplanation: 'Terra can detect coral bleaching by monitoring water temperature and ocean color changes. When stressed by heat, corals expel their symbiotic algae, turning white. Prolonged bleaching leads to coral death. Coral reefs support 25% of marine life despite covering less than 1% of the ocean floor, making their protection critical.',
          environmentalScore: 75,
          impact: 'critical'
        }
      },
      {
        id: 'ocean-currents',
        text: 'Analyze Current Patterns',
        icon: 'Waves',
        consequence: {
          image: 'https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Current Disruption Identified',
          description: 'Ocean circulation patterns show unusual shifts that could affect marine ecosystems and climate.',
          scientificExplanation: 'Using SST data and ocean color, Terra can infer current patterns. Ocean currents distribute heat globally and influence climate. The thermohaline circulation (global conveyor belt) moves warm water toward poles and cold water toward the equator. Changes in this system can have profound impacts on regional climates and marine life distribution.',
          environmentalScore: 85,
          impact: 'positive'
        }
      }
    ]
  },
  {
    id: 'urban-expansion',
    title: 'Rapid Urban Growth',
    description: 'Detecting unprecedented urban expansion in Southeast Asia',
    context: 'Satellite imagery shows explosive urban growth in a major metropolitan area. Your analysis will help understand the environmental impacts of urbanization.',
    initialImage: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Urban',
    choices: [
      {
        id: 'heat-island',
        text: 'Study Urban Heat Island Effect',
        icon: 'Thermometer',
        consequence: {
          image: 'https://images.pexels.com/photos/3566187/pexels-photo-3566187.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Extreme Heat Islands Mapped',
          description: 'Urban areas are measuring 7-12°C hotter than surrounding rural regions, affecting millions.',
          scientificExplanation: 'Terra\'s ASTER instrument measures land surface temperature in both day and night. Urban areas absorb and retain more heat due to dark surfaces like asphalt and concrete, creating "heat islands." This increases energy consumption for cooling, worsens air quality, and poses health risks during heatwaves. Green infrastructure can reduce these effects.',
          environmentalScore: 80,
          impact: 'positive'
        }
      },
      {
        id: 'air-quality',
        text: 'Monitor Air Pollution',
        icon: 'Cloud',
        consequence: {
          image: 'https://images.pexels.com/photos/1723637/pexels-photo-1723637.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Dangerous Pollution Levels Detected',
          description: 'PM2.5 and NO₂ concentrations exceed safe levels by 300% in industrial zones.',
          scientificExplanation: 'MODIS and MOPITT detect aerosols and trace gases. Rapid urbanization often increases emissions from vehicles, industry, and construction. Air pollution causes 7 million premature deaths annually worldwide. Satellite monitoring helps identify pollution sources and assess the effectiveness of mitigation policies.',
          environmentalScore: 90,
          impact: 'critical'
        }
      },
      {
        id: 'land-use',
        text: 'Track Land Use Changes',
        icon: 'Map',
        consequence: {
          image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Agricultural Land Loss Documented',
          description: 'Urban expansion has converted 50,000 hectares of fertile agricultural land in just 5 years.',
          scientificExplanation: 'Terra\'s multispectral imaging classifies land types based on their spectral signatures. Tracking land use change helps understand impacts on food security, biodiversity, and ecosystem services. Urban sprawl often consumes productive agricultural land and fragments natural habitats, reducing biodiversity.',
          environmentalScore: 75,
          impact: 'neutral'
        }
      }
    ]
  },
  {
    id: 'sahara-dust',
    title: 'Saharan Dust Transport',
    description: 'Massive dust plume crossing the Atlantic Ocean',
    context: 'Terra observes a large dust storm from the Sahara Desert traveling westward. Your monitoring choice will help understand this phenomenon\'s global impacts.',
    initialImage: 'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Atmosphere',
    choices: [
      {
        id: 'dust-trajectory',
        text: 'Track Dust Plume Movement',
        icon: 'Wind',
        consequence: {
          image: 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Transcontinental Dust Transport Mapped',
          description: 'The plume will reach the Caribbean in 5 days, carrying 100 million tons of dust across the Atlantic.',
          scientificExplanation: 'MODIS tracks aerosol optical depth to monitor dust plumes. Saharan dust travels up to 5,000 km, affecting air quality, suppressing hurricanes, fertilizing oceans and rainforests with nutrients, and influencing climate. About 27 million tons reach the Amazon annually, providing essential phosphorus for plant growth.',
          environmentalScore: 70,
          impact: 'neutral'
        }
      },
      {
        id: 'air-quality-impact',
        text: 'Assess Air Quality Impact',
        icon: 'AlertTriangle',
        consequence: {
          image: 'https://images.pexels.com/photos/1557652/pexels-photo-1557652.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Respiratory Health Alert Issued',
          description: 'PM10 levels will exceed safe limits in affected regions, impacting respiratory health for vulnerable populations.',
          scientificExplanation: 'Fine dust particles (PM10 and PM2.5) can penetrate deep into lungs, causing respiratory problems. Terra\'s aerosol monitoring helps issue health warnings. While Saharan dust has natural benefits, concentrated plumes can cause air quality issues, especially for people with asthma or cardiovascular conditions.',
          environmentalScore: 85,
          impact: 'positive'
        }
      },
      {
        id: 'nutrient-delivery',
        text: 'Study Nutrient Transport to Oceans',
        icon: 'Droplets',
        consequence: {
          image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1200',
          title: 'Ocean Fertilization Effect Documented',
          description: 'Dust deposition is delivering iron to iron-limited ocean regions, potentially boosting phytoplankton growth.',
          scientificExplanation: 'Desert dust contains iron and other nutrients essential for ocean life. When deposited in the ocean, these nutrients can stimulate phytoplankton blooms. Phytoplankton produce 50% of Earth\'s oxygen and form the base of the marine food chain. Terra\'s ocean color sensors can detect these blooms and assess ecosystem responses.',
          environmentalScore: 75,
          impact: 'positive'
        }
      }
    ]
  }
];
