export const getValidEvents = (events) => {
  if (!events || !Array.isArray(events)) {
    return [];
  }

  return events.filter((event) => {
    const hasId = event.eventID == null || event.eventID !== undefined;
    const hasDetails = !!event.details;
    const hasTeams = hasDetails && !!event.details.teamA && !!event.details.teamB;
    const hasStartDate = hasDetails && !!event.details.startDate;

    return hasId && hasTeams && hasStartDate;
  });
};
