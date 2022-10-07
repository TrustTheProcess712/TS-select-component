import styles from "./select.module.css";

type SelectOptions = {
  label: string;
  value: string;
};

type SelectProps = {
  options: SelectOption[];
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

export function Select({ value, onChange, options }: SelectProps) {
  return (
    <>
      <div className="conatiner">Wrong</div>
      <div className={styles.container}>Right</div>
    </>
  );
}
