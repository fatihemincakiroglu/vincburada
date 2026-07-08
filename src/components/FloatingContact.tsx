const PHONE_DISPLAY = '0532 303 90 89'
const PHONE_TEL = '05323039089'
const WHATSAPP = 'https://wa.me/905323039089'

const FloatingContact = () => {
  return (
    <div className="fixed right-4 bottom-24 z-40 flex flex-col gap-3 lg:right-6 lg:bottom-6">
      {/* WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp ile yazın: ${PHONE_DISPLAY}`}
        title="WhatsApp ile yazın"
        className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus:outline-hidden"
      >
        <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" className="size-7">
          <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.256.59 4.46 1.712 6.4L3.2 28.8l6.582-1.686a12.74 12.74 0 0 0 6.218 1.606h.006c7.058 0 12.798-5.74 12.798-12.8s-5.74-12.72-12.8-12.72Zm0 23.36h-.004a10.6 10.6 0 0 1-5.404-1.48l-.388-.23-3.906 1 1.042-3.806-.254-.39a10.56 10.56 0 0 1-1.62-5.654c0-5.868 4.776-10.64 10.648-10.64 2.844 0 5.516 1.108 7.526 3.12a10.58 10.58 0 0 1 3.114 7.528c-.002 5.868-4.778 10.552-10.754 10.552Zm5.84-7.94c-.32-.16-1.892-.934-2.186-1.04-.292-.108-.506-.16-.718.16-.212.32-.824 1.04-1.01 1.252-.186.214-.372.24-.692.08-.32-.16-1.35-.498-2.572-1.588-.95-.848-1.592-1.894-1.778-2.214-.186-.32-.02-.492.14-.652.144-.144.32-.372.48-.56.16-.186.212-.32.32-.532.106-.214.052-.4-.028-.56-.08-.16-.718-1.732-.984-2.372-.26-.622-.522-.538-.718-.548l-.612-.01c-.212 0-.558.08-.85.4-.292.32-1.116 1.09-1.116 2.66s1.142 3.088 1.302 3.3c.16.214 2.248 3.432 5.446 4.812.76.328 1.354.524 1.816.67.764.244 1.458.21 2.008.128.612-.092 1.892-.774 2.158-1.522.266-.746.266-1.386.186-1.52-.08-.134-.292-.214-.612-.374Z" />
        </svg>
      </a>
      {/* Telefon */}
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label={`Hemen arayın: ${PHONE_DISPLAY}`}
        title={`Hemen arayın: ${PHONE_DISPLAY}`}
        className="flex size-14 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg transition-transform hover:scale-105 focus:outline-hidden"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-6">
          <path d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" />
        </svg>
      </a>
    </div>
  )
}

export default FloatingContact
