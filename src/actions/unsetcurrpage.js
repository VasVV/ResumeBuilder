export const unsetcurrpage = prevpage => {
    return {
        type:  'UNSET_CURRPAGE',
        payload: prevpage
    };
  };