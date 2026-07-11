import vincElektrikliImage from '@/images/vinc/hero-elektrikli.webp'
import vincHiyapImage from '@/images/vinc/hero-hiyap.webp'
import vincMiniImage from '@/images/vinc/jekko/hero-mini.webp'
import vincKuleImage from '@/images/vinc/hero-kule.webp'
import vincMobilImage from '@/images/vinc/hero-mobil.webp'
import vincSepetliImage from '@/images/vinc/hero-sepetli.webp'
import vincImage from '@/images/vinc/hero-vinc.webp'

// Vinç categories --------
export async function getVincCategories() {
  return [
    {
      id: 'vinc-cat://1',
      name: 'Vinç',
      handle: 'vinc',
      href: '/vinc',
      count: 0,
      thumbnail: vincImage.src,
      description: 'Genel amaçlı vinç kiralama',
    },
    {
      id: 'vinc-cat://2',
      name: 'Sepetli Vinç',
      handle: 'sepetli-vinc',
      href: '/sepetli-vinc',
      count: 0,
      thumbnail: vincSepetliImage.src,
      description: 'Yüksekte güvenli çalışma',
    },
    {
      id: 'vinc-cat://3',
      name: 'Kule Vinç',
      handle: 'kule-vinc',
      href: '/kule-vinc',
      count: 0,
      thumbnail: vincKuleImage.src,
      description: 'Şantiye ve inşaat projeleri',
    },
    {
      id: 'vinc-cat://4',
      name: 'Elektrikli Vinç',
      handle: 'elektrikli-vinc',
      href: '/elektrikli-vinc',
      count: 0,
      thumbnail: vincElektrikliImage.src,
      description: 'Sessiz ve çevreci çözümler',
    },
    {
      id: 'vinc-cat://5',
      name: 'Mobil Vinç',
      handle: 'mobil-vinc',
      href: '/mobil-vinc',
      count: 0,
      thumbnail: vincMobilImage.src,
      description: 'Her sahaya hızlı ulaşım',
    },
    {
      id: 'vinc-cat://6',
      name: 'Hiyap Vinç',
      handle: 'hiyap-vinc',
      href: '/hiyap-vinc',
      count: 0,
      thumbnail: vincHiyapImage.src,
      description: 'Taşıma ve kaldırma bir arada',
    },
    {
      id: 'vinc-cat://7',
      name: 'Mini Vinç',
      handle: 'mini-vinc',
      href: '/mini-vinc',
      count: 0,
      thumbnail: vincMiniImage.src,
      description: 'Dar alanda kompakt güç',
    },
  ]
}

// types
export type TVincCategory = Awaited<ReturnType<typeof getVincCategories>>[number]
export type TCategory = TVincCategory
