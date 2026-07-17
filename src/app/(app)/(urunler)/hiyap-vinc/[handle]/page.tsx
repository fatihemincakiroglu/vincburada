import KategoriUrunDetay from '@/components/KategoriUrunDetay'
import { getKategoriUrunByHandle, getKategoriUrunListesi } from '@/data/kategori-urunleri'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

const KATEGORI_HANDLE = 'hiyap-vinc'
const KATEGORI_ADI = 'Hiyap Vinç'

export async function generateStaticParams() {
  const liste = await getKategoriUrunListesi(KATEGORI_HANDLE)
  return (liste?.urunler ?? []).map((u) => ({ handle: u.handle }))
}

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }): Promise<Metadata> {
  const { handle } = await params
  const urun = await getKategoriUrunByHandle(KATEGORI_HANDLE, handle)

  if (!urun) {
    return { title: 'Model bulunamadı' }
  }

  const urunAdi = `${urun.marka} ${urun.model}`
  return {
    title: { absolute: `${urunAdi} - Vinç Burada` },
    description: `${urunAdi} modeli ve daha fazla vinç çeşitleri için hemen tıklayın. 0532 303 90 89 numarasını arayarak detaylı bilgi alın.`,
  }
}

const Page = async ({ params }: { params: Promise<{ handle: string }> }) => {
  const { handle } = await params
  const urun = await getKategoriUrunByHandle(KATEGORI_HANDLE, handle)

  if (!urun) {
    return redirect('/hiyap-vinc')
  }

  return <KategoriUrunDetay kategoriHandle={KATEGORI_HANDLE} kategoriAdi={KATEGORI_ADI} urun={urun} />
}

export default Page
