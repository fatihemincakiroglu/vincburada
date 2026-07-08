'use client'

import clsx from 'clsx'
import Form from 'next/form'
import { useRouter } from 'next/navigation'

interface Props {
  className?: string
  formStyle: 'default' | 'small'
}

export const ManliftSearchForm = ({ className, formStyle = 'default' }: Props) => {
  const router = useRouter()

  const handleFormSubmit = (formData: FormData) => {
    const entries = Object.fromEntries(formData.entries())
    console.log('Manlift arama formu gonderildi', entries)

    const params = new URLSearchParams()
    if (entries.cargo_type) params.set('cargo_type', entries.cargo_type as string)
    if (entries.power_source) params.set('power_source', entries.power_source as string)
    if (entries.height_min) params.set('height_min', entries.height_min as string)
    if (entries.height_max) params.set('height_max', entries.height_max as string)

    router.push(`/stay-categories/all?${params.toString()}`)
  }

  const labelClass = 'block text-xs font-semibold tracking-wide text-neutral-400 uppercase mb-1'
  const inputClass =
    'w-full border-0 bg-transparent p-0 text-base font-medium text-neutral-800 focus:ring-0 focus:outline-hidden dark:text-neutral-100'

  return (
    <div className={clsx('flex w-full flex-col gap-3 sm:flex-row sm:items-stretch', className)}>
      <div className="flex shrink-0 items-center justify-center rounded-2xl bg-orange-500 px-6 py-4 text-center text-sm font-bold text-white shadow-lg sm:w-44">
        ARADIĞIN VİNÇ BURADA
      </div>

      <Form
        className={clsx(
          'relative z-10 flex w-full flex-col divide-y divide-neutral-200 rounded-2xl bg-white shadow-xl sm:flex-row sm:divide-x sm:divide-y-0 dark:divide-neutral-700 dark:bg-neutral-800',
          formStyle === 'small' && 'custom-shadow-1'
        )}
        action={handleFormSubmit}
      >
        <div className="flex-1 px-6 py-4">
          <label className={labelClass}>Ne Taşıyacaksınız?</label>
          <select name="cargo_type" className={inputClass} defaultValue="">
            <option value="">Lütfen seçiniz</option>
            <option value="insan">İnsan</option>
            <option value="malzeme">Malzeme</option>
          </select>
        </div>

        <div className="flex-1 px-6 py-4">
          <label className={labelClass}>Güç Kaynağı</label>
          <select name="power_source" className={inputClass} defaultValue="">
            <option value="">Enerji türü seçiniz</option>
            <option value="akulu">Akülü</option>
            <option value="dizel">Dizel</option>
            <option value="cift_enerjili">Çift Enerjili</option>
          </select>
        </div>

        <div className="flex-1 px-6 py-4">
          <label className={labelClass}>Yükseklik (Min)</label>
          <input type="number" name="height_min" placeholder="0" className={inputClass} />
        </div>

        <div className="flex-1 px-6 py-4">
          <label className={labelClass}>Yükseklik (Max)</label>
          <input type="number" name="height_max" placeholder="0" className={inputClass} />
        </div>

        <div className="flex items-center justify-center p-3 sm:pe-3 sm:ps-0">
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-bold text-white hover:bg-orange-600 sm:w-auto sm:rounded-2xl"
          >
            BUL
          </button>
        </div>
      </Form>
    </div>
  )
}
