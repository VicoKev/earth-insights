import { QuizTheme } from '../types';

export const quizThemes: QuizTheme[] = [
  {
    id: 'climate',
    title: 'Climate Change',
    description: 'Test your knowledge about Earth\'s changing climate',
    icon: 'thermometer',
    questions: [
      {
        id: 'c1',
        question: 'What is the primary greenhouse gas responsible for climate change?',
        options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
        correctAnswer: 1,
        explanation: 'Carbon dioxide (CO2) is the primary greenhouse gas emitted through human activities, mainly from burning fossil fuels.'
      },
      {
        id: 'c2',
        question: 'How long has NASA\'s Terra satellite been observing Earth?',
        options: ['10 years', '15 years', '25 years', '30 years'],
        correctAnswer: 2,
        explanation: 'Terra was launched in December 1999 and has been providing crucial Earth observation data for 25 years.'
      },
      {
        id: 'c3',
        question: 'What does MODIS stand for?',
        options: ['Modern Observation Digital Imaging System', 'Moderate Resolution Imaging Spectroradiometer', 'Multiple Orbital Data Integration Satellite', 'Monitored Ocean Depth Imaging System'],
        correctAnswer: 1,
        explanation: 'MODIS (Moderate Resolution Imaging Spectroradiometer) is one of Terra\'s key instruments for observing Earth.'
      },
      {
        id: 'c4',
        question: 'What percentage of Earth\'s surface is covered by water?',
        options: ['50%', '60%', '71%', '80%'],
        correctAnswer: 2,
        explanation: 'Approximately 71% of Earth\'s surface is covered by water, which plays a crucial role in regulating our climate.'
      },
      {
        id: 'c5',
        question: 'Which gas has the highest concentration in Earth\'s atmosphere?',
        options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'],
        correctAnswer: 2,
        explanation: 'Nitrogen makes up about 78% of Earth\'s atmosphere, while oxygen is about 21%.'
      }
    ]
  },
  {
    id: 'oceans',
    title: 'Oceans & Water',
    description: 'Explore the mysteries of Earth\'s oceans',
    icon: 'waves',
    questions: [
      {
        id: 'o1',
        question: 'What is the deepest part of the ocean?',
        options: ['Puerto Rico Trench', 'Java Trench', 'Mariana Trench', 'Tonga Trench'],
        correctAnswer: 2,
        explanation: 'The Mariana Trench is the deepest part of the ocean, reaching depths of about 11,000 meters (36,000 feet).'
      },
      {
        id: 'o2',
        question: 'What causes ocean currents?',
        options: ['Wind and temperature differences', 'Tidal forces only', 'Underwater volcanoes', 'Marine life movement'],
        correctAnswer: 0,
        explanation: 'Ocean currents are primarily driven by wind patterns and temperature differences in the water.'
      },
      {
        id: 'o3',
        question: 'What is coral bleaching?',
        options: ['A natural coral growth process', 'Loss of algae due to stress', 'A type of coral disease', 'Coral turning white with age'],
        correctAnswer: 1,
        explanation: 'Coral bleaching occurs when stressed corals expel their symbiotic algae, often due to warming ocean temperatures.'
      },
      {
        id: 'o4',
        question: 'How much of the ocean has been explored?',
        options: ['Less than 5%', 'About 25%', 'Around 50%', 'More than 75%'],
        correctAnswer: 0,
        explanation: 'Scientists estimate that less than 5% of the ocean has been explored, making it less known than the surface of Mars.'
      },
      {
        id: 'o5',
        question: 'What is the Gulf Stream?',
        options: ['A river in the Gulf of Mexico', 'A warm ocean current', 'An underwater canyon', 'A type of marine ecosystem'],
        correctAnswer: 1,
        explanation: 'The Gulf Stream is a powerful warm ocean current that flows from the Gulf of Mexico along the eastern US coast.'
      }
    ]
  },
  {
    id: 'forests',
    title: 'Forests & Biodiversity',
    description: 'Learn about Earth\'s green lungs',
    icon: 'tree-pine',
    questions: [
      {
        id: 'f1',
        question: 'Which rainforest is the largest in the world?',
        options: ['Congo Rainforest', 'Amazon Rainforest', 'Daintree Rainforest', 'Borneo Rainforest'],
        correctAnswer: 1,
        explanation: 'The Amazon Rainforest is the world\'s largest, covering about 5.5 million square kilometers.'
      },
      {
        id: 'f2',
        question: 'What percentage of Earth\'s oxygen do rainforests produce?',
        options: ['10%', '20%', '50%', '70%'],
        correctAnswer: 1,
        explanation: 'Rainforests produce about 20% of Earth\'s oxygen, though most oxygen comes from ocean phytoplankton.'
      },
      {
        id: 'f3',
        question: 'How many tree species are estimated to exist on Earth?',
        options: ['3,000', '10,000', '30,000', '60,000'],
        correctAnswer: 3,
        explanation: 'Scientists estimate there are approximately 60,000 tree species on Earth, with many yet to be discovered.'
      },
      {
        id: 'f4',
        question: 'What is deforestation\'s main cause?',
        options: ['Natural wildfires', 'Agricultural expansion', 'Urban development', 'Climate change'],
        correctAnswer: 1,
        explanation: 'Agricultural expansion is the leading cause of deforestation, accounting for about 80% of forest loss.'
      },
      {
        id: 'f5',
        question: 'How long does it take for a rainforest to regenerate after being cleared?',
        options: ['5-10 years', '20-30 years', '50-100 years', '200+ years'],
        correctAnswer: 3,
        explanation: 'It can take 200 years or more for a rainforest to fully regenerate its original biodiversity after being cleared.'
      }
    ]
  },
  {
    id: 'atmosphere',
    title: 'Atmosphere & Weather',
    description: 'Understand Earth\'s protective blanket',
    icon: 'cloud',
    questions: [
      {
        id: 'a1',
        question: 'Which layer of the atmosphere do we live in?',
        options: ['Stratosphere', 'Troposphere', 'Mesosphere', 'Thermosphere'],
        correctAnswer: 1,
        explanation: 'We live in the troposphere, the lowest layer of the atmosphere where all weather occurs.'
      },
      {
        id: 'a2',
        question: 'What protects Earth from harmful UV radiation?',
        options: ['Clouds', 'Ozone layer', 'Magnetic field', 'Water vapor'],
        correctAnswer: 1,
        explanation: 'The ozone layer in the stratosphere absorbs most of the Sun\'s harmful ultraviolet radiation.'
      },
      {
        id: 'a3',
        question: 'What causes the seasons?',
        options: ['Distance from the Sun', 'Earth\'s axial tilt', 'Solar activity', 'Ocean currents'],
        correctAnswer: 1,
        explanation: 'Earth\'s 23.5-degree axial tilt causes different parts of Earth to receive varying amounts of sunlight throughout the year.'
      },
      {
        id: 'a4',
        question: 'What is a greenhouse gas?',
        options: ['Gas that creates rain', 'Gas that traps heat', 'Gas that produces oxygen', 'Gas that cools the planet'],
        correctAnswer: 1,
        explanation: 'Greenhouse gases trap heat in the atmosphere, keeping Earth warm enough to sustain life.'
      },
      {
        id: 'a5',
        question: 'How high is the atmosphere?',
        options: ['10 km', '50 km', '100 km', '10,000 km'],
        correctAnswer: 3,
        explanation: 'The atmosphere extends about 10,000 km above Earth\'s surface, though 75% of its mass is in the first 11 km.'
      }
    ]
  }
];
