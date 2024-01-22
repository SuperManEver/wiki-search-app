// vendor
import { ChangeEvent, KeyboardEvent } from 'react'
import cn from 'clsx'
import Image from 'next/image'

// icons
import closeIcon from '@/assets/close-icon.svg'

// styles
import css from './styles.module.scss'

interface IProps {
  value: string
  onChange(evt: ChangeEvent<HTMLInputElement>): void
  onKeyPress(evt: KeyboardEvent<HTMLInputElement>): void
  onInputClear(): void
  className?: string
}

function SearchInput({
  value,
  onChange,
  onInputClear,
  className,
  onKeyPress,
}: IProps) {
  return (
    <div className={cn(css.root, className)}>
      <input
        value={value}
        type="text"
        placeholder="Enter something..."
        className={css.input}
        onChange={onChange}
        onKeyDown={onKeyPress}
      />

      <button
        className={cn(css.buttonReset, css.searchButton)}
        onClick={onInputClear}
      >
        <Image
          src={closeIcon}
          width={18}
          height={18}
          alt="Close icon"
          className={css.closeIcon}
        />
      </button>
    </div>
  )
}

export default SearchInput
