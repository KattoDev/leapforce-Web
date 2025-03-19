function getPending(userPendingTasks: number): string {
  return userPendingTasks > 0
    ? `${userPendingTasks} pendientes`
    : 'Estás al dia con tus tareas, ten un buen dia'
}

export default { getPending }
