export const dataHandler = (pageType, resData, paramsObj) => {
    switch (pageType) {
      case 'SPORTS':
        return resData;
      case 'EVENTS':
        return resData.find((sport) => sport.id === Number(paramsObj.sport_id));
      case 'OUTCOMES':
        const event = resData.find((sport) => sport.id === Number(paramsObj.sport_id));

        return event && event.comp && event.comp.find(compItem => compItem.events.find(event => event.id === Number(paramsObj.event_id)));
      
      default:
        return resData;
    }
  };