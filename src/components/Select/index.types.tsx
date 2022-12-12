/**
 * Object representing one element of the options list in select
 */
export interface IOption {
  /** Option identifer */
  id: number;
  /** Value associated with the option */
  optionValue: string | null;
  /** The text displayed on the screen */
  textDisplayed: string;
}

export interface SelectProps {
  /** Label for the input */
  label: string;
  /** List of options. Is displayed when you click on a select */
  optionsList: IOption[];
  /** Current value of the select */
  value: IOption | null;
  /** Controls select input changes */
  changeHandler: (option: any) => void;
}
