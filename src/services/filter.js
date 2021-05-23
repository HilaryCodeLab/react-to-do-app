export const FILTER_ALL = 'all';
export const FILTER_COMPLETED = 'completed';
export const FILTER_ACTIVE = 'active';

export function applyFilter(list, filter){
    switch(filter){
      case FILTER_COMPLETED:
        return list.filter(item => item.completed === true);
  
      case FILTER_ACTIVE:
        return list.filter(item => item.completed !== true);
  
      default:
        return list;
    }
  
  }