import icons from '../plugins/icons.js';

export const iconComponents = {
  kanban: icons.YourIcon,
  checkmark: icons.CheckmarkIcon,
  line: icons.LineIcon,
};

export const cards = [
  {
    title: 'Kanban board',
    description:`
      Agile tool with modal windows for viewing and 
      editing tasks. Locking and highlighting problematic 
      issues, configuring the workflow, and Kanban 
      board filters.
    `,
    iconType: 'kanban',
  },
  {
    title: 'Checklists',
    description: `
      Create checklists within complex tasks by breaking 
      them down into sub-tasks. Assign different 
      specialists to sub-tasks, comment on them and 
      attach files to them, and keep track of all work on 
      the task within the checklist.
    `,
    iconType: 'checkmark',
  },
  {
    title: 'Charts',
    description: `
      Easily customizable interactive graphs and charts 
      allow you to track team performance and predict 
      when tasks will be completed.
    `,
    iconType: 'line',
  },
];
