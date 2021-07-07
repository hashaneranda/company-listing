import React from 'react';

//progressbar
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface ProgressBarProps {
  percentage: number;
  color: string;
}

/**
 *ProgressBar Component
 *
 * @param {*} {
 *   percentage - percentage completion
 *   className - classes,
 *   color  - color,
 *   ...props
 * }
 * @returns ProgressBar Component
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({ percentage = 0, color = '#d05353ff' }) => {
  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          // Text size
          textSize: '18px',

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 10,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: color,
          textColor: color,
        })}
      />
    </div>
  );
};
