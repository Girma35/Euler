interface CTAProps {
  title: string
  description: string
  buttonText?: string
  buttonHref?: string
  className?: string
}

export default function CTA({ 
  title, 
  description, 
  buttonText = "Book Free 15-min Call",
  buttonHref = "https://calendly.com/euler/15min",
  className = ""
}: CTAProps) {
  return (
    <section className={`bg-primary text-white py-16 ${className}`}>
      <div className="container-max section-padding text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">{description}</p>
        <a
          href={buttonHref}
          className="btn-secondary inline-block"
          data-goal="lead"
        >
          {buttonText}
        </a>
      </div>
    </section>
  )
}
