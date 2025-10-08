export interface MissionStep {
  stepNumber: number;
  month: string;
  situation: string;
  image: string;
  guideComment: string;
  choices: MissionChoice[];
}

export interface MissionChoice {
  id: string;
  text: string;
  icon: string;
  points: number;
  impactLevel: 'optimal' | 'good' | 'adequate' | 'suboptimal';
}

export interface MissionResult {
  stepNumber: number;
  chosenAction: string;
  immediateEffect: string;
  longTermConsequence: string;
  scientificInsight: string;
  points: number;
}

export interface Mission {
  id: string;
  theme: string;
  title: string;
  description: string;
  coverImage: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  guideIntro: string;
  steps: MissionStep[];
  calculateResults: (choices: string[]) => {
    totalScore: number;
    rating: 'excellent' | 'good' | 'moderate' | 'poor';
    overallImpact: {
      title: string;
      description: string;
      image: string;
    };
    detailedResults: MissionResult[];
    environmentalSummary: string;
    keyInsights: string[];
  };
}

export const terraMissions: Mission[] = [
  {
    id: 'amazon-watch',
    theme: 'Forests',
    title: 'Amazon Forest Watch',
    description: 'Monitor critical changes in the Amazon rainforest ecosystem over 6 months',
    coverImage: 'https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg?auto=compress&cs=tinysrgb&w=1200',
    difficulty: 'intermediate',
    duration: '8-10 min',
    guideIntro: 'Welcome, researcher. As Terra\'s lead analyst for the Amazon basin, you will make crucial observation decisions over the next 6 months. Each choice will shape our understanding of this vital ecosystem. We cannot observe everything at once - prioritize wisely.',
    steps: [
      {
        stepNumber: 1,
        month: 'Month 1',
        situation: 'First satellite pass reveals unusual thermal signatures across a 200km stretch of the Amazon. Multiple environmental factors could be at play.',
        image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200',
        guideComment: 'Our thermal sensors are picking up anomalies. What should we investigate first?',
        choices: [
          { id: 'fire-detection', text: 'Deploy fire detection protocols', icon: 'Flame', points: 95, impactLevel: 'optimal' },
          { id: 'deforestation-map', text: 'Map deforestation patterns', icon: 'TreePine', points: 85, impactLevel: 'good' },
          { id: 'co2-measure', text: 'Measure CO₂ concentration', icon: 'Wind', points: 70, impactLevel: 'adequate' }
        ]
      },
      {
        stepNumber: 2,
        month: 'Month 2',
        situation: 'Your initial observations revealed important data. Now, new cloud formations are affecting visibility. Indigenous communities report changes in local wildlife behavior.',
        image: 'https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?auto=compress&cs=tinysrgb&w=1200',
        guideComment: 'Ground reports coming in. We need to correlate satellite data with ecological changes.',
        choices: [
          { id: 'biodiversity-track', text: 'Track biodiversity indicators', icon: 'Bug', points: 90, impactLevel: 'optimal' },
          { id: 'water-stress', text: 'Monitor water stress levels', icon: 'Droplets', points: 85, impactLevel: 'good' },
          { id: 'temp-continue', text: 'Continue temperature monitoring', icon: 'Thermometer', points: 75, impactLevel: 'adequate' }
        ]
      },
      {
        stepNumber: 3,
        month: 'Month 3',
        situation: 'Dry season begins. MODIS detects smoke plumes in three distinct regions. Local authorities request our assistance in prioritizing intervention zones.',
        image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1200',
        guideComment: 'Multiple fire hotspots detected. Resources are limited - which area needs immediate attention?',
        choices: [
          { id: 'indigenous-focus', text: 'Focus on indigenous territories', icon: 'Home', points: 95, impactLevel: 'optimal' },
          { id: 'carbon-zones', text: 'Prioritize carbon-rich zones', icon: 'Leaf', points: 85, impactLevel: 'good' },
          { id: 'accessible-first', text: 'Target accessible areas first', icon: 'MapPin', points: 65, impactLevel: 'suboptimal' }
        ]
      },
      {
        stepNumber: 4,
        month: 'Month 4',
        situation: 'Rainfall patterns are abnormal. Some areas show unexpected greening while others continue degrading. Agricultural expansion pressures increase along forest edges.',
        image: 'https://images.pexels.com/photos/1108814/pexels-photo-1108814.jpeg?auto=compress&cs=tinysrgb&w=1200',
        guideComment: 'Mixed signals from the forest. We need to understand the broader pattern.',
        choices: [
          { id: 'regeneration-study', text: 'Study natural regeneration zones', icon: 'Sprout', points: 90, impactLevel: 'optimal' },
          { id: 'agriculture-assess', text: 'Assess agricultural encroachment', icon: 'Tractor', points: 85, impactLevel: 'good' },
          { id: 'rainfall-analyze', text: 'Analyze rainfall distribution', icon: 'CloudRain', points: 80, impactLevel: 'good' }
        ]
      },
      {
        stepNumber: 5,
        month: 'Month 5-6',
        situation: 'Final assessment phase. You have comprehensive data from your previous observations. Time to determine our long-term monitoring strategy.',
        image: 'https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg?auto=compress&cs=tinysrgb&w=1200',
        guideComment: 'Mission conclusion approaching. What legacy protocol should we establish?',
        choices: [
          { id: 'integrated-system', text: 'Establish integrated monitoring system', icon: 'Network', points: 95, impactLevel: 'optimal' },
          { id: 'early-warning', text: 'Create early warning network', icon: 'Bell', points: 90, impactLevel: 'optimal' },
          { id: 'data-sharing', text: 'Focus on data sharing protocols', icon: 'Share2', points: 80, impactLevel: 'good' }
        ]
      }
    ],
    calculateResults: (choiceIds: string[]) => {
      const choiceData: Record<string, { action: string; immediate: string; longTerm: string; insight: string }> = {
        'fire-detection': { action: 'Fire detection deployed', immediate: '47 active hotspots identified within 72 hours', longTerm: 'Rapid intervention saved 12,000 hectares of rainforest', insight: 'Early fire detection is crucial - every hour counts. Terra\'s thermal systems can detect fires as small as 100m².' },
        'deforestation-map': { action: 'Deforestation mapping', immediate: 'Illegal logging patterns identified across 8,000 hectares', longTerm: 'Data led to 15 arrests and protection of vulnerable zones', insight: 'MODIS 250m resolution reveals even small illegal logging operations, enabling targeted action.' },
        'co2-measure': { action: 'CO₂ measurement', immediate: 'CO₂ concentrations mapped across region', longTerm: 'Valuable data but immediate intervention opportunity missed', insight: 'CO₂ measurements are important for climate research, but active fires required more urgent attention.' },
        'biodiversity-track': { action: 'Biodiversity tracking', immediate: 'Species migration patterns documented', longTerm: 'Ecosystem stress identified - indicator species declining 23%', insight: 'Biodiversity changes are early indicators of forest degradation. This holistic approach links satellite to ground truth.' },
        'water-stress': { action: 'Water stress monitoring', immediate: 'Drought-stressed areas mapped', longTerm: 'High-risk fire zones identified - preventive strategy established', insight: 'Water stress often precedes fires. This preventive surveillance identifies vulnerable zones before catastrophe.' },
        'temp-continue': { action: 'Continued thermal monitoring', immediate: 'Heat accumulation tracked', longTerm: 'Consistent data collection but biodiversity signals missed', insight: 'Consistency is valuable in science, but flexibility to capture new signals is equally important.' },
        'indigenous-focus': { action: 'Indigenous territories prioritized', immediate: 'Protected 50,000 people and culturally significant forest areas', longTerm: 'Critical carbon sinks preserved - 2M tons of CO₂ protected', insight: 'Indigenous territories often contain the healthiest forests. Protecting communities protects the environment.' },
        'carbon-zones': { action: 'Carbon-rich zones targeted', immediate: 'Major carbon sinks secured', longTerm: 'Significant global climate impact - carbon storage maintained', insight: 'Old-growth forests store immense carbon amounts. Their loss would have worldwide climate repercussions.' },
        'accessible-first': { action: 'Accessible areas first', immediate: 'Rapid response deployed', longTerm: 'Critical remote zones experienced losses - suboptimal strategy', insight: 'Accessibility facilitates intervention, but environmental criticality must guide prioritization.' },
        'regeneration-study': { action: 'Natural regeneration study', immediate: '15,000 hectares of successful recovery identified', longTerm: 'Restoration models developed - reforestation potential quantified', insight: 'Natural regeneration can restore 70% of biodiversity within 10 years. Understanding these processes guides conservation.' },
        'agriculture-assess': { action: 'Agricultural encroachment assessment', immediate: 'Expansion patterns mapped', longTerm: 'Data informing policy interventions - future forest loss prevented', insight: 'Understanding agricultural pressures enables proactive land-use planning and deforestation prevention.' },
        'rainfall-analyze': { action: 'Rainfall analysis', immediate: 'Abnormal precipitation patterns documented', longTerm: 'Drought risks predicted for next season - improved preparedness', insight: 'Rainfall changes affect forest health. Climate monitoring supports broader ecological understanding.' },
        'integrated-system': { action: 'Integrated system established', immediate: 'All data streams combined into unified framework', longTerm: 'Sustainable scientific infrastructure created - continuous monitoring ensured', insight: 'Integrated systems offer more value than single-focus approaches. This infrastructure will serve future generations.' },
        'early-warning': { action: 'Early warning network created', immediate: 'Continuous protection system for 1M hectares deployed', longTerm: 'Preventive approach transforming Amazon conservation', insight: 'Early warning systems are game-changers - preventing damage rather than reacting to crises saves more forest.' },
        'data-sharing': { action: 'Data sharing protocols', immediate: 'Open data platform launched', longTerm: '30+ research collaborations enabled - amplified scientific impact', insight: 'Open data multiplies scientific impact. Sharing Terra observations accelerates global research.' }
      };

      const results: MissionResult[] = choiceIds.map((choiceId, index) => {
        const step = terraMissions[0].steps[index];
        const choice = step.choices.find(c => c.id === choiceId);
        const data = choiceData[choiceId] || { action: choice?.text || '', immediate: 'Action executed', longTerm: 'Data collected', insight: 'Observation completed successfully' };
        return { stepNumber: index + 1, chosenAction: choice?.text || '', immediateEffect: data.immediate, longTermConsequence: data.longTerm, scientificInsight: data.insight, points: choice?.points || 0 };
      });

      const totalScore = results.reduce((sum, r) => sum + r.points, 0);
      const avgScore = totalScore / results.length;
      let rating: 'excellent' | 'good' | 'moderate' | 'poor';
      if (avgScore >= 90) rating = 'excellent';
      else if (avgScore >= 80) rating = 'good';
      else if (avgScore >= 70) rating = 'moderate';
      else rating = 'poor';

      const impacts = {
        excellent: { title: 'Mission Excellence: Amazon Protected', description: 'Your strategic decisions prevented significant forest loss while establishing long-term monitoring infrastructure. The Amazon basin shows resilience thanks to your proactive interventions.', image: 'https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?auto=compress&cs=tinysrgb&w=1200' },
        good: { title: 'Mission Success: Valuable Data Acquired', description: 'Your observation strategy yielded important insights into Amazon ecosystem dynamics. Some critical windows were missed, but overall forest health monitoring improved.', image: 'https://images.pexels.com/photos/1108814/pexels-photo-1108814.jpeg?auto=compress&cs=tinysrgb&w=1200' },
        moderate: { title: 'Mission Complete: Lessons Learned', description: 'While data was collected, several priority areas did not receive optimal attention. The forest experienced preventable losses that better choices might have mitigated.', image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200' },
        poor: { title: 'Challenging Mission: Reevaluation Needed', description: 'Decisions made did not sufficiently prioritize critical threats. Significant forest loss occurred. This experience highlights the importance of strategic prioritization with limited resources.', image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1200' }
      };

      return {
        totalScore,
        rating,
        overallImpact: impacts[rating],
        detailedResults: results,
        environmentalSummary: rating === 'excellent' ? 'Your mission achieved optimal environmental outcomes. Fire prevention, biodiversity protection, and sustainable monitoring systems are now in place. The Amazon basin\'s carbon storage capacity remains intact, protecting climate stability.' : rating === 'good' ? 'Your mission contributed positively to Amazon protection. While some forest loss occurred, your data will inform future conservation efforts. Several key ecosystems remain protected thanks to your interventions.' : 'The mission reveals the complexity of Amazon monitoring. Resource constraints and prioritization challenges led to suboptimal outcomes in some areas. This experience highlights the need for integrated, multi-faceted approaches to forest protection.',
        keyInsights: ['Early fire detection systems save more forest than reactive approaches', 'Indigenous territories often coincide with the healthiest forest areas', 'Integrated monitoring systems provide better long-term value than single-focus strategies', 'Natural regeneration zones can recover 70% of biodiversity within 10 years', 'Satellite data must be combined with ground truth for maximum effectiveness']
      };
    }
  },
  {
    id: 'ocean-pacific',
    theme: 'Oceans',
    title: 'Pacific Ocean Anomaly',
    description: 'Monitor potential El Niño development and its global impacts over 5 months',
    coverImage: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=1200',
    difficulty: 'intermediate',
    duration: '8-10 min',
    guideIntro: 'Welcome to ocean surveillance center. You will track a major thermal anomaly in the Pacific that could trigger an El Niño event. Your observations will help predict global weather impacts affecting billions of people.',
    steps: [
      {
        stepNumber: 1,
        month: 'Week 1',
        situation: 'MODIS sensors detect a +2°C sea surface temperature anomaly in the central equatorial Pacific. Historical patterns suggest potential El Niño development.',
        image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1200',
        guideComment: 'Significant thermal anomaly detected. What should be our first observation priority?',
        choices: [
          { id: 'sst-mapping', text: 'Map surface temperatures in detail', icon: 'Thermometer', points: 95, impactLevel: 'optimal' },
          { id: 'current-patterns', text: 'Analyze ocean current changes', icon: 'Waves', points: 85, impactLevel: 'good' },
          { id: 'atmospheric-coupling', text: 'Observe ocean-atmosphere coupling', icon: 'Wind', points: 80, impactLevel: 'good' }
        ]
      },
      {
        stepNumber: 2,
        month: 'Week 4',
        situation: 'The thermal anomaly extends eastward. Warm waters now reach the South American coast. Coral reefs in the region show signs of stress.',
        image: 'https://images.pexels.com/photos/3210387/pexels-photo-3210387.jpeg?auto=compress&cs=tinysrgb&w=1200',
        guideComment: 'Warming intensifies. Marine ecosystems are threatened. Where should we focus our attention?',
        choices: [
          { id: 'coral-health', text: 'Monitor coral reef health', icon: 'Fish', points: 90, impactLevel: 'optimal' },
          { id: 'phytoplankton', text: 'Measure phytoplankton changes', icon: 'Droplet', points: 85, impactLevel: 'good' },
          { id: 'temp-expansion', text: 'Continue tracking thermal expansion', icon: 'TrendingUp', points: 75, impactLevel: 'adequate' }
        ]
      },
      {
        stepNumber: 3,
        month: 'Week 8',
        situation: 'Confirmation: El Niño is developing. Weather patterns begin changing. Droughts predicted in Australia and Indonesia, heavy rains expected in Peru.',
        image: 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=1200',
        guideComment: 'El Niño confirmed. Global impacts beginning. Which region needs our surveillance most?',
        choices: [
          { id: 'drought-regions', text: 'Monitor drought regions (Australia/SE Asia)', icon: 'AlertTriangle', points: 95, impactLevel: 'optimal' },
          { id: 'flood-zones', text: 'Track flood risk zones (Americas)', icon: 'CloudRain', points: 90, impactLevel: 'optimal' },
          { id: 'hurricane-activity', text: 'Analyze hurricane activity changes', icon: 'Wind', points: 80, impactLevel: 'good' }
        ]
      },
      {
        stepNumber: 4,
        month: 'Week 12',
        situation: 'El Niño reaches peak intensity. Impacts manifest globally: wildfires in Indonesia, floods in Peru, drought in Southern Africa.',
        image: 'https://images.pexels.com/photos/1557652/pexels-photo-1557652.jpeg?auto=compress&cs=tinysrgb&w=1200',
        guideComment: 'Multiple simultaneous crises. Our data can help emergency responses. Which intervention is most critical?',
        choices: [
          { id: 'fire-monitoring', text: 'Detect and map active fires', icon: 'Flame', points: 95, impactLevel: 'optimal' },
          { id: 'food-security', text: 'Assess food security impacts', icon: 'Wheat', points: 90, impactLevel: 'optimal' },
          { id: 'infrastructure', text: 'Monitor infrastructure damage', icon: 'Home', points: 80, impactLevel: 'good' }
        ]
      },
      {
        stepNumber: 5,
        month: 'Week 16-20',
        situation: 'El Niño decline phase. Conditions beginning to normalize. Time to assess total impacts and improve future forecasting systems.',
        image: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=1200',
        guideComment: 'El Niño cycle ending. What scientific legacy should we create for the next event?',
        choices: [
          { id: 'predictive-model', text: 'Improve El Niño forecast models', icon: 'TrendingUp', points: 95, impactLevel: 'optimal' },
          { id: 'impact-assessment', text: 'Complete global impact assessment', icon: 'Globe', points: 90, impactLevel: 'optimal' },
          { id: 'early-warning', text: 'Develop improved early warning system', icon: 'Bell', points: 85, impactLevel: 'good' }
        ]
      }
    ],
    calculateResults: (choiceIds: string[]) => {
      const results: MissionResult[] = choiceIds.map((choiceId, index) => ({
        stepNumber: index + 1,
        chosenAction: terraMissions[1].steps[index].choices.find(c => c.id === choiceId)?.text || '',
        immediateEffect: 'Observation executed successfully',
        longTermConsequence: 'Impact analyzed and documented',
        scientificInsight: 'Significant contribution to ocean science',
        points: terraMissions[1].steps[index].choices.find(c => c.id === choiceId)?.points || 0
      }));

      const totalScore = results.reduce((sum, r) => sum + r.points, 0);
      const avgScore = totalScore / results.length;
      let rating: 'excellent' | 'good' | 'moderate' | 'poor';
      if (avgScore >= 90) rating = 'excellent';
      else if (avgScore >= 80) rating = 'good';
      else if (avgScore >= 70) rating = 'moderate';
      else rating = 'poor';

      return {
        totalScore,
        rating,
        overallImpact: { title: rating === 'excellent' ? 'Exceptional El Niño Surveillance' : 'Ocean Mission Completed', description: rating === 'excellent' ? 'Your comprehensive monitoring enabled accurate forecasts and effective emergency responses. Millions benefited from your observations.' : 'Your mission provided valuable data, though some critical monitoring opportunities were missed.', image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1200' },
        detailedResults: results,
        environmentalSummary: 'El Niño represents one of Earth\'s most powerful climate phenomena. Your surveillance contributed to understanding and mitigating its impacts.',
        keyInsights: ['El Niño affects weather conditions across half the planet', 'Early detection allows months of preparation for impacts', 'Coral reefs are sensitive indicators of ocean stress', 'Satellite surveillance is essential for early warnings', 'El Niño impacts are felt for 12-18 months']
      };
    }
  },
  {
    id: 'arctic-melt',
    theme: 'Polar',
    title: 'Arctic Ice Crisis',
    description: 'Observe accelerating ice loss and understand feedback mechanisms over one year',
    coverImage: 'https://images.pexels.com/photos/416676/pexels-photo-416676.jpeg?auto=compress&cs=tinysrgb&w=1200',
    difficulty: 'advanced',
    duration: '10-12 min',
    guideIntro: 'Welcome to Arctic monitoring station. You will observe one of Earth\'s most rapidly changing environments. The Arctic is warming 4x faster than the global average - every observation counts for understanding this critical system.',
    steps: [
      {
        stepNumber: 1,
        month: 'Spring',
        situation: 'Early spring melt reveals unusually thin ice in the Beaufort Sea. ASTER data shows significant thickness changes from previous years.',
        image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1200',
        guideComment: 'Early season data is crucial for predicting summer ice extent. What is your priority?',
        choices: [
          { id: 'ice-thickness', text: 'Map ice thickness distribution', icon: 'Layers', points: 95, impactLevel: 'optimal' },
          { id: 'albedo-changes', text: 'Measure surface albedo changes', icon: 'Sun', points: 85, impactLevel: 'good' },
          { id: 'ocean-heat', text: 'Monitor ocean heat content', icon: 'Thermometer', points: 80, impactLevel: 'good' }
        ]
      },
      {
        stepNumber: 2,
        month: 'Late Spring',
        situation: 'Melt ponds forming earlier than usual. Ice surface darker, absorbing more solar radiation. Polar bear populations being monitored.',
        image: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1200',
        guideComment: 'Feedback loop accelerating. We need to quantify the cascading effects.',
        choices: [
          { id: 'melt-ponds', text: 'Track melt pond expansion rates', icon: 'Droplet', points: 90, impactLevel: 'optimal' },
          { id: 'wildlife-habitat', text: 'Assess wildlife habitat changes', icon: 'Paw', points: 85, impactLevel: 'good' },
          { id: 'ice-concentration', text: 'Monitor sea ice concentration', icon: 'Grid', points: 75, impactLevel: 'adequate' }
        ]
      },
      {
        stepNumber: 3,
        month: 'Summer',
        situation: 'Ice extent reaches record minimum. Major glaciers show accelerated calving. International shipping routes through Arctic opening earlier.',
        image: 'https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1200',
        guideComment: 'Critical moment - summer minimum determines next year\'s ice formation.',
        choices: [
          { id: 'glacier-dynamics', text: 'Study glacier flow acceleration', icon: 'MoveRight', points: 95, impactLevel: 'optimal' },
          { id: 'shipping-routes', text: 'Document shipping route changes', icon: 'Ship', points: 70, impactLevel: 'adequate' },
          { id: 'multiyear-ice', text: 'Analyze multi-year ice loss', icon: 'Calendar', points: 90, impactLevel: 'optimal' }
        ]
      },
      {
        stepNumber: 4,
        month: 'Fall',
        situation: 'Refreeze begins but delayed 3 weeks. New ice thinner and more fragile. Atmospheric circulation patterns show changes linked to ice loss.',
        image: 'https://images.pexels.com/photos/773594/pexels-photo-773594.jpeg?auto=compress&cs=tinysrgb&w=1200',
        guideComment: 'Arctic influence extends globally. What connection should we investigate?',
        choices: [
          { id: 'jet-stream', text: 'Connect to jet stream changes', icon: 'Wind', points: 95, impactLevel: 'optimal' },
          { id: 'new-ice-formation', text: 'Monitor new ice formation rates', icon: 'Snowflake', points: 85, impactLevel: 'good' },
          { id: 'permafrost', text: 'Assess coastal permafrost thaw', icon: 'Mountain', points: 90, impactLevel: 'optimal' }
        ]
      },
      {
        stepNumber: 5,
        month: 'Winter',
        situation: 'Year-end analysis phase. Your cumulative data reveals unprecedented changes. Scientific community needs predictive models for next decade.',
        image: 'https://images.pexels.com/photos/416676/pexels-photo-416676.jpeg?auto=compress&cs=tinysrgb&w=1200',
        guideComment: 'Mission finale: What is the most valuable contribution we can make?',
        choices: [
          { id: 'ice-free-timeline', text: 'Build ice-free Arctic timeline model', icon: 'TrendingDown', points: 95, impactLevel: 'optimal' },
          { id: 'ecosystem-cascade', text: 'Map ecosystem cascade effects', icon: 'GitBranch', points: 90, impactLevel: 'optimal' },
          { id: 'historical-baseline', text: 'Establish historical comparison baseline', icon: 'BarChart', points: 85, impactLevel: 'good' }
        ]
      }
    ],
    calculateResults: (choiceIds: string[]) => {
      const results: MissionResult[] = choiceIds.map((choiceId, index) => ({
        stepNumber: index + 1,
        chosenAction: terraMissions[2].steps[index].choices.find(c => c.id === choiceId)?.text || '',
        immediateEffect: 'Critical Arctic data acquired',
        longTermConsequence: 'Major contribution to polar science',
        scientificInsight: 'Deep understanding of Arctic processes',
        points: terraMissions[2].steps[index].choices.find(c => c.id === choiceId)?.points || 0
      }));

      const totalScore = results.reduce((sum, r) => sum + r.points, 0);
      const avgScore = totalScore / results.length;
      let rating: 'excellent' | 'good' | 'moderate' | 'poor';
      if (avgScore >= 90) rating = 'excellent';
      else if (avgScore >= 80) rating = 'good';
      else if (avgScore >= 70) rating = 'moderate';
      else rating = 'poor';

      return {
        totalScore,
        rating,
        overallImpact: { title: rating === 'excellent' ? 'Breakthrough Arctic Understanding' : 'Arctic Mission Completed', description: rating === 'excellent' ? 'Your comprehensive monitoring revealed critical feedback mechanisms driving Arctic change. Your predictive models will guide climate policy for decades.' : 'Your observations contributed to Arctic science, though some key processes remain less understood.', image: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1200' },
        detailedResults: results,
        environmentalSummary: rating === 'excellent' ? 'Your mission captured the full complexity of Arctic amplification. Ice thickness data, albedo feedback, glacier dynamics, and atmospheric connections now form a comprehensive picture.' : 'The mission provided valuable snapshots of Arctic change. However, interconnected polar processes mean observation gaps can limit our predictive power.',
        keyInsights: ['Ice thickness is more important than extent for predicting future melt', 'Albedo feedback creates self-reinforcing warming once initiated', 'Multi-year ice loss represents irreversible short-term change', 'Arctic changes directly influence mid-latitude weather patterns', 'Glacier calving contributes significantly to sea level rise']
      };
    }
  }
];
