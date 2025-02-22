import moduleNode from '../module.interface';

/**
 * This file contains the module tree for the sidebar component.
 *
 *
 * this object corresponds to management module.
 */
const managementTree: moduleNode[] = [
  {
    name: 'Team members',
    children: [
      { icon: 'group', name: 'View team members', route: '/team-members' },
      {
        icon: 'person_add',
        name: 'Add team member',
        route: '/add-team-member',
      },
      {
        icon: 'manage_accounts',
        name: 'Edit team member',
        route: '/edit-team-member',
      },
    ],
  },
  {
    name: 'teams',
    children: [
      { icon: 'workspaces', name: 'View teams', route: '/teams' },
      { icon: 'group_add', name: 'Add team', route: '/add-team' },
      { icon: 'group_work', name: 'Edit team', route: '/edit-team' },
    ],
  },
];

/**
 * This module corresponds to general module of the sidebar component.
 *
 * this object corresponds to management module.
 */
const generalTree: moduleNode[] = [
  {
    name: 'Task and projects',
    children: [
      { icon: 'task_alt', name: 'Task management', route: '/tasks' },
      { icon: 'inventory', name: 'projects management', route: '/projects' },
    ],
  },
];

export { generalTree, managementTree };
