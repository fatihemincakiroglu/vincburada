import KategoriUrunGrid from '@/components/KategoriUrunGrid'
import { getKategoriUrunListesi } from '@/data/kategori-urunleri'
import HeadingWithSub from '@/shared/Heading'

const KategoriUrunBolumu = async ({ handle, kategoriAdi }: { handle: string; kategoriAdi: string }) => {
  const liste = await getKategoriUrunListesi(handle)
  if (!liste) return null

  return (
    <section id="modeller" className="scroll-mt-24">
      <HeadingWithSub level={2} subheading={liste.aciklama}>
        {liste.baslik}
      </HeadingWithSub>
      <div className="mt-8">
        <KategoriUrunGrid urunler={liste.urunler} kategoriAdi={kategoriAdi} kategoriHandle={handle} />
      </div>
      <p className="mt-6 text-xs text-neutral-400 dark:text-neutral-500">{liste.dipnot}</p>
    </section>
  )
}

export default KategoriUrunBolumu
