import React from 'react';
import styles from './PhaseTables.module.css';

type Phase = {
  materials: string[];
};

interface PhaseTablesProps {
  phases: Phase[];
}

const PhaseTables: React.FC<PhaseTablesProps> = ({ phases }) => {
  return (
    <div className={styles.container}>
      {phases.map((phase, index) => (
        <div key={index} className={styles.phaseTable}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>{`Phase ${index + 1}`}</th>
              </tr>
            </thead>
            <tbody>
              {phase.materials.map((material, idx) => (
                <tr key={idx}>
                  <td>{material}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

// Example Usage
const phasesData: Phase[] = [
  {
    materials: [
      'Material 1',
      'Material 2',
      'Material 3',
      'Material 4',
      'Material 5',
    ],
  },
  {
    materials: ['Material 1', 'Material 2', 'Material 3'],
  },
  {
    materials: ['Material 1'],
  },
];

const App: React.FC = () => {
  return <PhaseTables phases={phasesData} />;
};

export default App;
