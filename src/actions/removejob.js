export const removejob = jobIndex => {
    return {
        type:  'REMOVE_JOB',
        payload: jobIndex
    };
  };