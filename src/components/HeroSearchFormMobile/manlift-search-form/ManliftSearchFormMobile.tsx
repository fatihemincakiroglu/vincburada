'use client'

import Form from 'next/form'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import FieldPanelContainer from '../FieldPanelContainer'

type TOption = { value: string; label: string }

const cargoOptions: TOption[] = [
  { value: 'insan', label: 'İnsan' },
  { value: 'malzeme', label: 'Malzeme' },
]

const powerOptions: TOption[] = [
  { value: 'akulu', label: 'Akülü' },
  { value: 'dizel', label: 'Dizel' },
  { value: 'cift_enerjili', label: 'Çift Enerjili' },
]

const optionBtnClass = (aktif: boolean) =>
  `rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
    aktif
      ? 'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900'
      : 'border-neutral-300 text-neutral-700 dark:border-neutral-600 dark:text-neutral-300'
  }`

const ManliftSearchFormMobile = () => {
  const [fieldNameShow, setFieldNameShow] = useState<'cargo' | 'power' | 'height'>('cargo')
  const [cargo, setCargo] = useState<TOption | null>(null)
  const [power, setPower] = useState<TOption | null>(null)
  const [heightMin, setHeightMin] = useState('')
  const [heightMax, setHeightMax] = useState('')
  const router = useRouter()

  const handleFormSubmit = () => {
    const params = new URLSearchParams()
    if (cargo?.value) params.set('cargo_type', cargo.value)
    if (power?.value) params.set('power_source', power.value)
    if (heightMin) params.set('height_min', heightMin)
    if (heightMax) params.set('height_max', heightMax)

    router.push(`/sepetli-vinc?${params.toString()}#modeller`)
  }

  const heightValue =
    heightMin || heightMax ? `${heightMin || '0'}m – ${heightMax || '80'}m` : 'Yükseklik aralığı seçin'

  const inputClass =
    'w-full rounded-xl border border-neutral-300 bg-transparent px-4 py-3 text-base focus:border-neutral-500 focus:ring-0 dark:border-neutral-600 dark:text-neutral-100'

  return (
    <Form id="form-hero-search-form-mobile" action={handleFormSubmit} className="flex w-full flex-col gap-y-3">
      {/* YÜK TÜRÜ */}
      <FieldPanelContainer
        isActive={fieldNameShow === 'cargo'}
        headingOnClick={() => setFieldNameShow('cargo')}
        headingTitle="Ne taşınacak?"
        headingValue={cargo?.label || 'Seçiniz'}
      >
        <p className="text-lg font-semibold">Ne taşınacak?</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {cargoOptions.map((o) => (
            <button
              key={o.value}
              type="button"
              className={optionBtnClass(cargo?.value === o.value)}
              onClick={() => {
                setCargo(cargo?.value === o.value ? null : o)
                setFieldNameShow('power')
              }}
            >
              {o.label}
            </button>
          ))}
        </div>
      </FieldPanelContainer>

      {/* ENERJİ TÜRÜ */}
      <FieldPanelContainer
        isActive={fieldNameShow === 'power'}
        headingOnClick={() => setFieldNameShow('power')}
        headingTitle="Enerji türü"
        headingValue={power?.label || 'Seçiniz'}
      >
        <p className="text-lg font-semibold">Enerji türü</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {powerOptions.map((o) => (
            <button
              key={o.value}
              type="button"
              className={optionBtnClass(power?.value === o.value)}
              onClick={() => {
                setPower(power?.value === o.value ? null : o)
                setFieldNameShow('height')
              }}
            >
              {o.label}
            </button>
          ))}
        </div>
      </FieldPanelContainer>

      {/* YÜKSEKLİK */}
      <FieldPanelContainer
        isActive={fieldNameShow === 'height'}
        headingOnClick={() => setFieldNameShow('height')}
        headingTitle="Çalışma yüksekliği"
        headingValue={heightValue}
      >
        <p className="text-lg font-semibold">Çalışma yüksekliği (metre)</p>
        <div className="mt-4 flex gap-3">
          <div className="flex-1">
            <label className="mb-1 block text-xs font-semibold tracking-wide text-neutral-400 uppercase">
              En az
            </label>
            <input
              type="number"
              min={0}
              max={80}
              inputMode="numeric"
              placeholder="örn. 10"
              value={heightMin}
              onChange={(e) => setHeightMin(e.target.value)}
              className={inputClass}
            />
          </div>
          <div className="flex-1">
            <label className="mb-1 block text-xs font-semibold tracking-wide text-neutral-400 uppercase">
              En fazla
            </label>
            <input
              type="number"
              min={0}
              max={80}
              inputMode="numeric"
              placeholder="örn. 40"
              value={heightMax}
              onChange={(e) => setHeightMax(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>
      </FieldPanelContainer>
    </Form>
  )
}

export default ManliftSearchFormMobile
