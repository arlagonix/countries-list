import React from "react";

function displayData(
  /** Raw data from API */
  dataFromAPI: any,
  /**
   * Function that transforms data <br>
   * `null` if there is no need to transform data
   */
  transformFunction: ((data: any) => any) | null,
  /** Checks if data from API is available */
  emptyCondition: boolean,
  /** Is returned if `emptyCondition` is `true` */
  placeholderWhenEmpty: string | React.ReactNode,
  /** Checks if data is yet being fetched */
  loadingCondition: boolean,
  /** Is returned while data is being fetched */
  placeholderWhenLoading: any
) {
  if (loadingCondition) return placeholderWhenLoading;
  if (emptyCondition) return placeholderWhenEmpty;
  return transformFunction === null ? dataFromAPI : transformFunction(dataFromAPI);
}

export default displayData;
