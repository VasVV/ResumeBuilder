export const removeskill = skillIndex => {
    return {
        type:  'REMOVE_SKILL',
        payload: skillIndex
    };
  };