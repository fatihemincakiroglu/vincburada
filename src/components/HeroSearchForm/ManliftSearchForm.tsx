'use client'

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface Props {
  className?: string
  formStyle: 'default' | 'small'
}

type TOption = { value: string; label: string }

const cargoOptions: TOption[] = [
  { value: '', label: 'Lütfen seçiniz' },
  { value: 'insan', label: 'İnsan' },
  { value: 'malzeme', label: 'Malzeme' },
]

const powerOptions: TOption[] = [
  { value: '', label: 'Enerji türü seçiniz' },
  { value: 'akulu', label: 'Akülü' },
  { value: 'dizel', label: 'Dizel' },
  { value: 'cift_enerjili', label: 'Çift Enerjili' },
]

const labelClass = 'block text-xs font-semibold tracking-wide text-neutral-400 uppercase mb-1'

const PremiumSelect = ({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: TOption[]
  value: TOption
  onChange: (option: TOption) => void
}) => {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className="group relative flex-1 cursor-pointer px-6 py-4 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-700/40">
        <ListboxButton className="w-full text-start focus:outline-hidden">
          <span className={labelClass}>{label}</span>
          <span className="flex items-center justify-between gap-2">
            <span
              className={clsx(
                'truncate text-base font-medium',
                value.value ? 'text-neutral-800 dark:text-neutral-100' : 'text-neutral-400 dark:text-neutral-500'
              )}
            >
              {value.label}
            </span>
            <ChevronDownIcon
              aria-hidden="true"
              className="size-4 shrink-0 text-neutral-400 transition-transform duration-200 group-data-open:rotate-180"
            />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute start-2 end-2 top-full z-30 mt-2 origin-top overflow-hidden rounded-2xl bg-white/95 p-1.5 shadow-2xl ring-1 ring-black/5 backdrop-blur-sm transition duration-150 ease-out focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 sm:start-3 sm:end-3 dark:bg-neutral-800/95 dark:ring-white/10"
        >
          {options.map((option) => (
            <ListboxOption
              key={option.value}
              value={option}
              className="group/option flex cursor-pointer items-center justify-between gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-neutral-700 transition-colors data-focus:bg-orange-50 data-focus:text-orange-600 data-selected:text-orange-600 dark:text-neutral-200 dark:data-focus:bg-orange-500/10 dark:data-focus:text-orange-400 dark:data-selected:text-orange-400"
            >
              <span className="truncate">{option.label}</span>
              <CheckIcon aria-hidden="true" className="hidden size-4 shrink-0 group-data-selected/option:block" />
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}

export const ManliftSearchForm = ({ className, formStyle = 'default' }: Props) => {
  const router = useRouter()

  const [cargo, setCargo] = useState<TOption>(cargoOptions[0])
  const [power, setPower] = useState<TOption>(powerOptions[0])
  const [heightMin, setHeightMin] = useState('')
  const [heightMax, setHeightMax] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams()
    if (cargo.value) params.set('cargo_type', cargo.value)
    if (power.value) params.set('power_source', power.value)
    if (heightMin) params.set('height_min', heightMin)
    if (heightMax) params.set('height_max', heightMax)

    router.push(`/stay-categories/all?${params.toString()}`)
  }

  const inputClass =
    'w-full border-0 bg-transparent p-0 text-base font-medium text-neutral-800 placeholder:text-neutral-400 focus:ring-0 focus:outline-hidden dark:text-neutral-100 dark:placeholder:text-neutral-500'

  return (
    <div className={clsx('flex w-full flex-col gap-3 sm:flex-row sm:items-stretch', className)}>
      <div className="flex shrink-0 items-center justify-center rounded-2xl bg-orange-500 px-6 py-4 text-center text-sm font-bold text-white shadow-lg sm:w-44">
        ARADIĞIN VİNÇ BURADA
      </div>

      <form
        className={clsx(
          'relative z-10 flex w-full flex-col divide-y divide-neutral-200 rounded-2xl bg-white shadow-xl sm:flex-row sm:divide-x sm:divide-y-0 dark:divide-neutral-700 dark:bg-neutral-800',
          formStyle === 'small' && 'custom-shadow-1'
        )}
        onSubmit={handleSubmit}
      >
        <PremiumSelect label="Ne Taşıyacaksınız?" options={cargoOptions} value={cargo} onChange={setCargo} />

        <PremiumSelect label="Güç Kaynağı" options={powerOptions} value={power} onChange={setPower} />

        <div className="flex-1 px-6 py-4 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-700/40">
          <label className={labelClass} htmlFor="height_min">
            Yükseklik (Min)
          </label>
          <input
            id="height_min"
            type="number"
            min={0}
            placeholder="0"
            value={heightMin}
            onChange={(e) => setHeightMin(e.target.value)}
            className={inputClass}
          />
        </div>

        <div className="flex-1 px-6 py-4 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-700/40">
          <label className={labelClass} htmlFor="height_max">
            Yükseklik (Max)
          </label>
          <input
            id="height_max"
            type="number"
            min={0}
            placeholder="0"
            value={heightMax}
            onChange={(e) => setHeightMax(e.target.value)}
            className={inputClass}
          />
        </div>

        <div className="flex items-center justify-center p-3 sm:pe-3 sm:ps-0">
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-bold text-white shadow-md transition-all hover:bg-orange-600 hover:shadow-lg active:scale-95 sm:w-auto sm:rounded-2xl"
          >
            BUL
          </button>
        </div>
      </form>
    </div>
  )
}
