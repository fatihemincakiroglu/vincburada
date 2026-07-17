'use client'

import Form from 'next/form'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import FieldPanelContainer from '../FieldPanelContainer'
import {
  TOption,
  isTuruOptions,
  isTuruHedef,
  isTuruIkinciAlan,
  tonajOptions,
  yukseklikOptions,
  yukseklikToParams,
} from '@/components/HeroSearchForm/vincAramaSecenekleri'

const optionBtnClass = (aktif: boolean) =>
  `rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
    aktif
      ? 'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900'
      : 'border-neutral-300 text-neutral-700 dark:border-neutral-600 dark:text-neutral-300'
  }`

// boş "Lütfen seçiniz" kaydını mobil buton listesinden çıkar
const isTurleri = isTuruOptions.filter((o) => o.value)
const tonajlar = tonajOptions.filter((o) => o.value)
const yukseklikler = yukseklikOptions.filter((o) => o.value)

const ManliftSearchFormMobile = () => {
  const [fieldNameShow, setFieldNameShow] = useState<'is' | 'detay'>('is')
  const [isTuru, setIsTuru] = useState<TOption | null>(null)
  const [detay, setDetay] = useState<TOption | null>(null)
  const router = useRouter()

  const ikinciAlan = isTuru ? isTuruIkinciAlan[isTuru.value] : 'tonaj'
  const detaySecenekleri = ikinciAlan === 'yukseklik' ? yukseklikler : tonajlar

  const handleFormSubmit = () => {
    const hedef = isTuru ? isTuruHedef[isTuru.value] : ''
    if (!hedef) return

    const params = new URLSearchParams()
    if (hedef === '/sepetli-vinc') {
      params.set('cargo_type', 'insan')
      if (detay) for (const [k, v] of Object.entries(yukseklikToParams(detay.value))) params.set(k, v)
    } else if (detay) {
      params.set(ikinciAlan === 'yukseklik' ? 'yukseklik' : 'kapasite', detay.value)
    }
    const qs = params.toString()
    router.push(`${hedef}${qs ? `?${qs}` : ''}#modeller`)
  }

  return (
    <Form id="form-hero-search-form-mobile" action={handleFormSubmit} className="flex w-full flex-col gap-y-3">
      {/* İŞ TÜRÜ */}
      <FieldPanelContainer
        isActive={fieldNameShow === 'is'}
        headingOnClick={() => setFieldNameShow('is')}
        headingTitle="Ne yapacaksınız?"
        headingValue={isTuru?.label || 'Seçiniz'}
      >
        <p className="text-lg font-semibold">Ne yapacaksınız?</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {isTurleri.map((o) => (
            <button
              key={o.value}
              type="button"
              className={optionBtnClass(isTuru?.value === o.value)}
              onClick={() => {
                setIsTuru(isTuru?.value === o.value ? null : o)
                setDetay(null)
                setFieldNameShow('detay')
              }}
            >
              {o.label}
            </button>
          ))}
        </div>
      </FieldPanelContainer>

      {/* DETAY: tonaj veya yükseklik */}
      <FieldPanelContainer
        isActive={fieldNameShow === 'detay'}
        headingOnClick={() => setFieldNameShow('detay')}
        headingTitle={ikinciAlan === 'yukseklik' ? 'Çalışma yüksekliği' : 'Kaldırılacak yük'}
        headingValue={detay?.label || 'Fark etmez'}
      >
        <p className="text-lg font-semibold">
          {ikinciAlan === 'yukseklik' ? 'Çalışma yüksekliği' : 'Kaldırılacak yük'}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {detaySecenekleri.map((o) => (
            <button
              key={o.value}
              type="button"
              className={optionBtnClass(detay?.value === o.value)}
              onClick={() => setDetay(detay?.value === o.value ? null : o)}
            >
              {o.label}
            </button>
          ))}
        </div>
      </FieldPanelContainer>
    </Form>
  )
}

export default ManliftSearchFormMobile
