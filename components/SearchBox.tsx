import { Input } from '@src/components/styled/Input'

interface IInput {
  value: string
  onChange: (value: string) => void
}

export function SearchBox({ value, onChange }: IInput): JSX.Element {
  return (
    <Input
      value={value}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
    />
  )
}
