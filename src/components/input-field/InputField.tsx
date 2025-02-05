import styles from './InputField.module.css'

export function InputField({ className, ...props }: { className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={`${styles.inputField} ${className}`} {...props} />
}