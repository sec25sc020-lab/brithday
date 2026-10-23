import { useEffect, useState } from 'react'
import './App.css'

const birthdayLetter = `
My dearest Shibal 💗,

Happy Birthday to my favourite human!

You have this contagious energy that makes everything feel brighter and more fun. I love how we can laugh about the most random things and turn ordinary moments into something special. Sometimes, it is not even about doing anything big — it is our conversations, our laughter, and the vibe we share that make everything memorable.

I am genuinely grateful to have you in my life. Thank you for being the wonderful, energetic person you are. I hope this new year of your life brings you endless happiness, success in everything you dream of, exciting opportunities, and countless reasons to smile.

Keep chasing your dreams, keep shining in your own way, and never forget how special you are. No matter how busy life gets, I hope we always find time for our random talks, laughter, and beautiful memories.

Never stop being your wonderfully energetic self. Here's to more laughter, more chaos, and a million more memories together. Love you loads, Shibal! 💕

Always cheering for you,
Your favourite human ♡
`

// Edit this original friendship poem in one place.
const foreverPoem = [
  'Shibal, in every season and every changing sky,',
  'I’ll keep a little space for you by my side.',
  'For all our silly laughter and the memories we make,',
  'For every gentle “I’m here” when a day feels hard to take.',
  'When roads turn new and years rush by,',
  'Our friendship will be a familiar light.',
  'You are my forever kind of person — the friend who makes ordinary days unforgettable and difficult days easier.',
  'No matter where life takes us, a part of my heart will always save a place for you.',
  'Through every change, wherever we roam,',
  'I’ll be cheering for you — and you’ll always feel like home. ♡',
]

const galleryItems = [
  {
    src: '/photos/photo-1.jpg',
    alt: 'Illustrated placeholder memory for Shibal and me',
    caption: 'Us being us 💗',
    tone: 'left',
  },
  {
    src: '/photos/photo-2.jpg',
    alt: 'Illustrated placeholder memory for Shibal and me',
    caption: 'Our kind of chaos 😂',
    tone: 'right',
  },
  {
    src: '',
    alt: 'Placeholder memory slot for a future photo',
    caption: 'The memories that make me smile.',
    tone: 'left',
    placeholder: true,
  },
  {
    src: '',
    alt: 'Placeholder memory slot for a future photo',
    caption: 'My favourite vibe is our vibe.',
    tone: 'right',
    placeholder: true,
  },
  {
    src: '',
    alt: 'Placeholder memory slot for a future photo',
    caption: 'Little moments, big happiness ✨',
    tone: 'left',
    placeholder: true,
  },
  {
    src: '',
    alt: 'Placeholder memory slot for a future photo',
    caption: 'More memories waiting to happen ♡',
    tone: 'right',
    placeholder: true,
  },
]

const reasons = [
  'Your energy can turn an ordinary day into something exciting.',
  'You make random moments feel special.',
  'Our laughter is one of my favourite things.',
  'You bring your own unforgettable vibe.',
  'Being around you makes little moments matter.',
  'You deserve every beautiful opportunity coming your way.',
  'I\'m grateful for the friendship we share.',
  'The world needs more of your wonderfully energetic self.',
]

const navItems = [
  { label: 'Opening', target: 'opening' },
  { label: 'Forever', target: 'forever' },
  { label: 'Cake', target: 'cake' },
  { label: 'Gallery', target: 'gallery' },
  { label: 'Reasons', target: 'reasons' },
  { label: 'Letter', target: 'letter' },
  { label: 'Finale', target: 'finale' },
]

function App() {
  const [openedReasons, setOpenedReasons] = useState({})
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [isLetterOpen, setIsLetterOpen] = useState(false)
  const [cakeBlown, setCakeBlown] = useState(false)
  const [showHugMessage, setShowHugMessage] = useState(false)
  const [celebrationKey, setCelebrationKey] = useState(0)
  const [showForeverPoem, setShowForeverPoem] = useState(false)

  const discoveredCount = Object.values(openedReasons).filter(Boolean).length

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setLightboxIndex(null)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const toggleReason = (index) => {
    setOpenedReasons((previous) => ({
      ...previous,
      [index]: !previous[index],
    }))
  }

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goToLightbox = (direction) => {
    if (lightboxIndex === null) return
    const nextIndex =
      direction === 'next'
        ? (lightboxIndex + 1) % galleryItems.length
        : (lightboxIndex - 1 + galleryItems.length) % galleryItems.length
    setLightboxIndex(nextIndex)
  }

  const handleOpenSurprise = () => {
    setCelebrationKey((value) => value + 1)
    document.getElementById('forever')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const blowCandles = () => {
    setCakeBlown(true)
    setCelebrationKey((value) => value + 1)
  }

  const resetCake = () => {
    setCakeBlown(false)
    setCelebrationKey((value) => value + 1)
  }

  const replayCelebration = () => {
    setCakeBlown(false)
    setIsLetterOpen(false)
    setShowHugMessage(false)
    setOpenedReasons({})
    setCelebrationKey((value) => value + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const activePhoto = lightboxIndex !== null ? galleryItems[lightboxIndex] : null

  return (
    <div className="page-shell">
      <nav className="top-nav" aria-label="Page sections">
        {navItems.map((item) => (
          <button
            key={item.target}
            type="button"
            className="nav-chip"
            onClick={() =>
              document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          >
            {item.label}
          </button>
        ))}
      </nav>

      <main className="birthday-page">
        <section id="opening" className="hero-section">
          <div className="sky-glow sky-glow-one" aria-hidden="true" />
          <div className="sky-glow sky-glow-two" aria-hidden="true" />
          <div className="floating-stars" aria-hidden="true">
            {Array.from({ length: 18 }).map((_, index) => (
              <span key={index} className={`spark spark-${index % 6}`} />
            ))}
          </div>

          <p className="eyebrow">HEY, MY FAVOURITE HUMAN... 💗</p>
          <h1 className="hero-title">HAPPY BIRTHDAY, SHIBAL! 🎂</h1>
          <p className="hero-subtitle">Today, the whole little universe celebrates YOU. ✨</p>

          <div className="polaroid-frame floating-card">
            <img src="/photos/photo-1.jpg" alt="Shibal smiling in a sweet memory moment" />
          </div>

          <button type="button" className="primary-button surprise-button" onClick={handleOpenSurprise}>
            Open Your Birthday Surprise 🎁
          </button>
          <div className="scroll-hint">Your surprise is waiting below ↓</div>
        </section>

        <section id="forever" className="content-section forever-section">
          <div className="section-heading-block centered">
            <p className="section-tag">A little promise, always</p>
            <h2>Always Mine Forever 💗</h2>
          </div>

          <div className={`forever-card ${showForeverPoem ? 'is-revealed' : ''}`}>
            <div className="forever-hearts" aria-hidden="true">
              <span>♡</span>
              <span>♥</span>
              <span>♡</span>
              <span>♥</span>
              <span>♡</span>
            </div>
            <p className="forever-intro">
              A small reminder for all the days ahead: our friendship has a place in every chapter.
            </p>
            <button
              type="button"
              className="primary-button"
              onClick={() => setShowForeverPoem((visible) => !visible)}
              aria-expanded={showForeverPoem}
              aria-controls="forever-poem"
            >
              {showForeverPoem ? 'Keep Our Promise Close 💗' : 'Read Our Forever Promise 💌'}
            </button>
            {showForeverPoem && (
              <div id="forever-poem" className="forever-poem" aria-live="polite">
                {foreverPoem.map((line, index) => (
                  <p key={`${index}-${line}`} style={{ '--line-index': index }}>
                    {line}
                  </p>
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="cake" className="content-section cake-section">
          <div className="section-heading-block centered">
            <p className="section-tag">Make a wish</p>
            <h2>Make a wish, Shibal! ✨</h2>
          </div>

          <p className="cake-blurb">Close your eyes, make your biggest wish, and let the magic begin.</p>

          <div className={`cake-scene ${cakeBlown ? 'cake-blown' : ''}`} key={celebrationKey}>
            <div className="cake-glow" aria-hidden="true" />
            <div className="floating-hearts" aria-hidden="true">
              {Array.from({ length: 14 }).map((_, index) => (
                <span key={index} className={`heart heart-${index % 7}`} />
              ))}
            </div>

            <div className="cake-wrap">
              <div className="cake-plate" aria-hidden="true" />
              <div className="cake-layer cake-layer-top" aria-hidden="true" />
              <div className="cake-layer cake-layer-mid" aria-hidden="true" />
              <div className="cake-layer cake-layer-base" aria-hidden="true" />
              <div className="cake-frosting" aria-hidden="true" />

              <div className="candles" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className={`candle candle-${index + 1}`}>
                    <span className="flame" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="cake-actions">
            <button type="button" className="primary-button" onClick={blowCandles}>
              Blow the Candles 💨
            </button>
            <button type="button" className="secondary-button" onClick={resetCake}>
              One More Wish! ✨
            </button>
          </div>

          <div className={`wish-message ${cakeBlown ? 'visible' : ''}`}>
            May every little wish in your heart find its way to you. You deserve so much happiness, Shibal! 💗
          </div>
        </section>

        <section id="gallery" className="content-section gallery-section">
          <div className="section-heading-block">
            <p className="section-tag">Little memories</p>
            <h2>Our Little Memory Gallery 📸💞</h2>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <button
                key={item.caption}
                type="button"
                className={`gallery-card ${item.placeholder ? 'placeholder-card' : ''} ${item.tone}`}
                onClick={() => !item.placeholder && openLightbox(index)}
                aria-label={item.caption}
              >
                {item.placeholder ? (
                  <div className="placeholder-art">
                    <span>♡</span>
                    <small>Your next memory goes here ♡</small>
                  </div>
                ) : (
                  <img src={item.src} alt={item.alt} />
                )}
                <span className="photo-caption">{item.caption}</span>
              </button>
            ))}
          </div>
        </section>

        <section id="reasons" className="content-section reasons-section">
          <div className="section-heading-block">
            <p className="section-tag">Little things</p>
            <h2>Little Things That Make You, YOU 💗</h2>
          </div>

          <div className="reason-progress">{discoveredCount} of 8 little reasons discovered 💕</div>

          <div className="reason-grid">
            {reasons.map((reason, index) => (
              <button
                key={reason}
                type="button"
                className={`reason-card ${openedReasons[index] ? 'is-open' : ''}`}
                onClick={() => toggleReason(index)}
                aria-expanded={Boolean(openedReasons[index])}
              >
                <span className="reason-index">{index + 1}</span>
                <span className="reason-text">{openedReasons[index] ? reason : 'Tap to reveal a little reason 💗'}</span>
                <span className="reason-heart" aria-hidden="true">♡</span>
              </button>
            ))}
          </div>
        </section>

        <section id="letter" className="content-section letter-section">
          <div className="section-heading-block">
            <p className="section-tag">For Shibal</p>
            <h2>Secret Letter 💌🌙</h2>
          </div>

          <div className={`letter-envelope ${isLetterOpen ? 'letter-open' : ''}`}>
            {!isLetterOpen ? (
              <>
                <p className="letter-note">Psst... Shibal, there\'s something written just for you.</p>
                <button type="button" className="primary-button" onClick={() => setIsLetterOpen(true)}>
                  Open Your Letter 💌
                </button>
              </>
            ) : (
              <div className="letter-paper" aria-live="polite">
                <div className="wax-seal">♡</div>
                <p>{birthdayLetter}</p>
                <button type="button" className="secondary-button" onClick={() => setIsLetterOpen(false)}>
                  Close Letter
                </button>
              </div>
            )}
          </div>
        </section>

        <section id="surprise" className="content-section surprise-section">
          <div className="section-heading-block centered">
            <p className="section-tag">One last little secret</p>
            <h2>One Last Little Secret... 🤫</h2>
          </div>

          <button type="button" className="primary-button" onClick={() => setShowHugMessage((value) => !value)}>
            Tap for a Hug 💗
          </button>

          {showHugMessage && (
            <div className="hug-message">
              <div className="hug-heart" aria-hidden="true">💗</div>
              <p>
                If I could give you one thing today, it would be the ability to see yourself the way the people who love you see you. You are special, Shibal. Never forget that. 🫶
              </p>
            </div>
          )}
        </section>

        <section id="finale" className="content-section finale-section">
          <div className="finale-badge">Birthday magic ✨</div>
          <h2>HAPPY BIRTHDAY, SHIBAL! 💗</h2>
          <p>
            May your life be filled with love, laughter, confidence, success, unexpected happiness, and beautiful memories. Keep shining, keep laughing, and keep being YOU! ✨
          </p>

          <div className="finale-sparkles" aria-hidden="true">
            {Array.from({ length: 24 }).map((_, index) => (
              <span key={index} className={`spark spark-${index % 6}`} />
            ))}
          </div>

          <button type="button" className="primary-button" onClick={replayCelebration}>
            Let\'s Celebrate Again! 🎂
          </button>

          <div className="sign-off">Made with a little code, a lot of love, and endless friendship. ♡</div>
        </section>
      </main>

      {activePhoto && (
        <div className="lightbox" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label="Enlarged photo">
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="lightbox-close" onClick={closeLightbox} aria-label="Close enlarged image">
              ×
            </button>
            <img src={activePhoto.src} alt={activePhoto.alt} />
            <div className="lightbox-caption">{activePhoto.caption}</div>
            <div className="lightbox-controls">
              <button type="button" className="secondary-button" onClick={() => goToLightbox('prev')}>
                Previous
              </button>
              <button type="button" className="secondary-button" onClick={() => goToLightbox('next')}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
