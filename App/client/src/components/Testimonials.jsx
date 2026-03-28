import React, { memo, useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    id: 1,
    avatar:
      'https://images.pexels.com/photos/2970225/pexels-photo-2970225.jpeg?auto=compress&cs=tinysrgb&w=320&h=320&fit=crop',
    quote:
      'The design support from concept to delivery was exceptional and helped us launch with confidence.',
    name: 'Brenda Nfor',
    role: 'UI/UX Designer, Douala',
  },
  {
    id: 2,
    avatar:
      'https://images.pexels.com/photos/3973709/pexels-photo-3973709.jpeg?auto=compress&cs=tinysrgb&w=320&h=320&fit=crop',
    quote:
      'Highly professional and detail-oriented work that made our collaboration with engineers much smoother.',
    name: 'Ruth Ndzi',
    role: 'Product Manager, Yaounde',
  },
  {
    id: 3,
    avatar:
      'https://images.pexels.com/photos/6649375/pexels-photo-6649375.jpeg?auto=compress&cs=tinysrgb&w=320&h=320&fit=crop',
    quote:
      'Our conversion journey became clearer, and users now complete key flows with less friction.',
    name: 'Clarisse Mbarga',
    role: 'Marketing Specialist, Buea',
  },
  {
    id: 4,
    avatar:
      'https://images.pexels.com/photos/2764976/pexels-photo-2764976.jpeg?auto=compress&cs=tinysrgb&w=320&h=320&fit=crop',
    quote:
      'The final interface feels premium, consistent, and easier for our team to maintain across releases.',
    name: 'Vanessa Tchoumi',
    role: 'Project Manager, Douala',
  },
  {
    id: 5,
    avatar:
      'https://images.pexels.com/photos/3534957/pexels-photo-3534957.jpeg?auto=compress&cs=tinysrgb&w=320&h=320&fit=crop',
    quote:
      'He translated our startup vision into clean product screens that investors and users immediately understood.',
    name: 'Mireille Nkafu',
    role: 'Founder, Yaounde',
  },
  {
    id: 6,
    avatar:
      'https://images.pexels.com/photos/950243/pexels-photo-950243.jpeg?auto=compress&cs=tinysrgb&w=320&h=320&fit=crop',
    quote:
      'The redesign improved navigation clarity and gave our platform a much more trustworthy first impression.',
    name: 'Arielle Ngono',
    role: 'Client, Douala',
  },
  {
    id: 7,
    avatar:
      'https://images.pexels.com/photos/1493295/pexels-photo-1493295.jpeg?auto=compress&cs=tinysrgb&w=320&h=320&fit=crop',
    quote:
      'Design decisions were strategic and practical, which made handoff and implementation extremely efficient.',
    name: 'Carine Fokou',
    role: 'Consultant, Yaounde',
  },
  {
    id: 8,
    avatar:
      'https://images.pexels.com/photos/2825477/pexels-photo-2825477.jpeg?auto=compress&cs=tinysrgb&w=320&h=320&fit=crop',
    quote:
      'The product now communicates our value clearly and supports stronger engagement from early-stage clients.',
    name: 'Diane Nchinda',
    role: 'CEO, Bafoussam',
  },
  {
    id: 9,
    avatar:
      'https://images.pexels.com/photos/1516288/pexels-photo-1516288.jpeg?auto=compress&cs=tinysrgb&w=320&h=320&fit=crop',
    quote:
      'Every component was thoughtfully designed, making responsive implementation straightforward and reliable.',
    name: 'Estelle Mbassi',
    role: 'Frontend Developer, Douala',
  },
  {
    id: 10,
    avatar:
      'https://images.pexels.com/photos/27948344/pexels-photo-27948344.jpeg?auto=compress&cs=tinysrgb&w=320&h=320&fit=crop',
    quote:
      'The UX flow reduced support requests and helped users understand the platform from their first session.',
    name: 'Nadine Ewane',
    role: 'Software Engineer, Yaounde',
  },
  {
    id: 11,
    avatar:
      'https://images.pexels.com/photos/5653485/pexels-photo-5653485.jpeg?auto=compress&cs=tinysrgb&w=320&h=320&fit=crop',
    quote:
      'Great process and communication from discovery to final screens, with zero ambiguity for development.',
    name: 'Patrick Neba',
    role: 'Backend Developer, Douala',
  },
  {
    id: 12,
    avatar:
      'https://images.pexels.com/photos/5083017/pexels-photo-5083017.jpeg?auto=compress&cs=tinysrgb&w=320&h=320&fit=crop',
    quote:
      'The UI quality elevated our whole product and gave us a cleaner, faster path to production.',
    name: 'Boris Mvondo',
    role: 'Software Engineer, Yaounde',
  },
  {
    id: 13,
    avatar:
      'https://images.pexels.com/photos/5082976/pexels-photo-5082976.jpeg?auto=compress&cs=tinysrgb&w=320&h=320&fit=crop',
    quote:
      'Our team now prioritizes features better because the product structure and user journeys are crystal clear.',
    name: 'Fabrice Ndzi',
    role: 'Product Manager, Buea',
  },
  {
    id: 14,
    avatar:
      'https://images.pexels.com/photos/5082985/pexels-photo-5082985.jpeg?auto=compress&cs=tinysrgb&w=320&h=320&fit=crop',
    quote:
      'He helped us shape a usable MVP quickly without sacrificing polish, consistency, or accessibility.',
    name: 'Lionel Tchana',
    role: 'Founder, Douala',
  },
  {
    id: 15,
    avatar:
      'https://images.pexels.com/photos/5669788/pexels-photo-5669788.jpeg?auto=compress&cs=tinysrgb&w=320&h=320&fit=crop',
    quote:
      'From wireframes to final UI, the work stayed intentional and focused on measurable user outcomes.',
    name: 'Arthur Nkoe',
    role: 'UI/UX Designer, Yaounde',
  },
  {
    id: 16,
    avatar:
      'https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg?auto=compress&cs=tinysrgb&w=320&h=320&fit=crop',
    quote:
      'The delivery quality was strong, and the final product is far easier for our customers to navigate.',
    name: 'Kevin Fongang',
    role: 'Client, Yaounde',
  },
  {
    id: 17,
    avatar:
      'https://images.pexels.com/photos/6150694/pexels-photo-6150694.jpeg?auto=compress&cs=tinysrgb&w=320&h=320&fit=crop',
    quote:
      'Highly collaborative and detail-driven. The visual system now aligns perfectly with our business goals.',
    name: 'Blaise Nchouta',
    role: 'Consultant, Douala',
  },
  {
    id: 18,
    avatar:
      'https://images.pexels.com/photos/7148422/pexels-photo-7148422.jpeg?auto=compress&cs=tinysrgb&w=320&h=320&fit=crop',
    quote:
      'The experience now feels modern and premium, which improved confidence in our brand during demos.',
    name: 'Junior Fobid',
    role: 'CEO, Yaounde',
  },
  {
    id: 19,
    avatar:
      'https://images.pexels.com/photos/19039168/pexels-photo-19039168.jpeg?auto=compress&cs=tinysrgb&w=320&h=320&fit=crop',
    quote:
      'Excellent attention to hierarchy and usability. Our team can ship updates faster with fewer UX corrections.',
    name: 'Stephane Koki',
    role: 'Developer, Buea',
  },
  {
    id: 20,
    avatar:
      'https://images.pexels.com/photos/35529702/pexels-photo-35529702.jpeg?auto=compress&cs=tinysrgb&w=320&h=320&fit=crop',
    quote:
      'The refined UX helped us improve task completion and made the platform easier for new users to adopt.',
    name: 'Rodrigue Nnanga',
    role: 'Project Manager, Douala',
  },
]

const AUTO_SCROLL_STEP = 0.45

const TestimonialCard = memo(function TestimonialCard({ item }) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-person">
        <img
          alt={`${item.name} avatar`}
          decoding="async"
          height="128"
          loading="lazy"
          width="128"
          src={item.avatar}
          onError={(event) => {
            event.currentTarget.src = '/placeholder-avatar.jpg'
          }}
        />
        <div>
          <h3>{item.name}</h3>
          <span>{item.role}</span>
        </div>
      </div>
      <p>{item.quote}</p>
    </article>
  )
})

export default function Testimonials() {
  const trackRef = useRef(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const node = trackRef.current
    if (!node) {
      return undefined
    }

    let frameId = null

    const tick = () => {
      if (!paused) {
        node.scrollLeft += AUTO_SCROLL_STEP
        const midpoint = node.scrollWidth / 2
        if (node.scrollLeft >= midpoint) {
          node.scrollLeft -= midpoint
        }
      }
      frameId = window.requestAnimationFrame(tick)
    }

    frameId = window.requestAnimationFrame(tick)
    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [paused])

  useEffect(() => {
    const node = trackRef.current
    if (!node) {
      return undefined
    }

    let dragging = false
    let pointerStartX = 0
    let scrollStartX = 0

    const handlePointerDown = (event) => {
      dragging = true
      pointerStartX = event.clientX
      scrollStartX = node.scrollLeft
      setPaused(true)
      node.classList.add('is-dragging')
      node.setPointerCapture(event.pointerId)
    }

    const handlePointerMove = (event) => {
      if (!dragging) {
        return
      }
      const deltaX = event.clientX - pointerStartX
      node.scrollLeft = scrollStartX - deltaX
    }

    const handlePointerUp = () => {
      if (!dragging) {
        return
      }
      dragging = false
      node.classList.remove('is-dragging')
      setPaused(false)
    }

    node.addEventListener('pointerdown', handlePointerDown)
    node.addEventListener('pointermove', handlePointerMove)
    node.addEventListener('pointerup', handlePointerUp)
    node.addEventListener('pointercancel', handlePointerUp)
    node.addEventListener('pointerleave', handlePointerUp)

    return () => {
      node.removeEventListener('pointerdown', handlePointerDown)
      node.removeEventListener('pointermove', handlePointerMove)
      node.removeEventListener('pointerup', handlePointerUp)
      node.removeEventListener('pointercancel', handlePointerUp)
      node.removeEventListener('pointerleave', handlePointerUp)
    }
  }, [])

  return (
    <section className="section testimonials" id="testimonials">
      <div className="shell">
        <div className="section-head testimonial-head" data-reveal>
          <p className="eyebrow">Services and Skills</p>
          <h2>Design support from concept to polished delivery</h2>
        </div>
      </div>

      <div className="testimonial-marquee" data-reveal>
        <div
          aria-label="Client testimonials"
          className="testimonial-track"
          onBlurCapture={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          ref={trackRef}
          role="region"
          tabIndex={0}
        >
          {[0, 1].map((loop) => (
            <div aria-hidden={loop === 1} className="testimonial-group" key={loop}>
              {testimonials.map((item) => (
                <TestimonialCard item={item} key={`${loop}-${item.id}`} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
