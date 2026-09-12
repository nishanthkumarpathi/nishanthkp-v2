import { FileText, Award, ExternalLink, BookOpen, ChevronLeft, ChevronRight, BookMarked } from 'lucide-react';
import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import { researchPapers } from '../data/researchPapers';
import { patents } from '../data/patents';
import { bookReviews } from '../data/bookReviews';
import { SectionHeader } from './SectionHeader';

interface PublicationsProps {
  onViewAllPapers?: () => void;
  onViewPaper?: (slug: string) => void;
}

export function Publications({ onViewAllPapers, onViewPaper }: PublicationsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section id="publications" className="relative py-12 sm:py-20 lg:py-28 bg-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="04 — Research"
          title={<>Research &amp; <span className="font-display italic text-brand-bright">Publications</span></>}
          className="mb-7 sm:mb-14"
        />

        {/* Patents */}
        <div className="mb-8 sm:mb-14">
          <h3 className="flex items-center gap-2 font-display text-lg sm:text-2xl font-light text-content mb-5">
            <Award className="text-brand-bright" size={20} /> Patents
          </h3>
          <div className="space-y-5">
            {patents.map((patent, index) => (
              <div
                key={index}
                className="relative rounded-2xl border border-line bg-surface p-6 sm:p-8 hover:border-brand-bright/40 transition-colors overflow-hidden"
              >
                <span className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-brand-bright to-brand" aria-hidden />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-3">
                  <div className="flex-1">
                    <h4 className="font-display text-lg sm:text-xl font-light text-content mb-2">{patent.title}</h4>
                    <span className="inline-block px-3 py-1 rounded-md bg-brand-soft text-brand-bright text-sm font-mono">
                      {patent.type}
                    </span>
                  </div>
                  <span className="inline-block self-start px-3 py-1 rounded-md bg-emerald-500/15 text-emerald-400 text-sm font-medium">
                    {patent.status}
                  </span>
                </div>
                <p className="text-muted leading-relaxed mb-4">{patent.description}</p>
                <a
                  href={patent.link}
                  className="inline-flex items-center text-brand-bright hover:underline text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={15} className="mr-1.5" />
                  View Patent Application
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Book reviews */}
        <div className="mb-8 sm:mb-14">
          <h3 className="flex items-center gap-2 font-display text-lg sm:text-2xl font-light text-content mb-5">
            <BookMarked className="text-brand-bright" size={20} /> Book Reviews
          </h3>
          <div className="grid gap-5 md:grid-cols-2">
            {bookReviews.map((review) => (
              <article
                key={review.title}
                className="group flex gap-4 sm:gap-5 rounded-2xl border border-line bg-surface p-4 sm:p-5 hover:border-brand-bright/40 transition-colors"
              >
                <div className="h-20 w-16 sm:h-24 sm:w-20 flex-shrink-0 overflow-hidden rounded-lg bg-surface-2">
                  <img
                    src={review.image}
                    alt={review.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex flex-col">
                  <span className="text-xs font-mono text-brand-bright mb-1.5">{review.role}</span>
                  <h4 className="font-medium text-content leading-snug mb-2">{review.title}</h4>
                  <p className="text-sm text-muted leading-relaxed mb-3">{review.description}</p>
                  <p className="text-xs text-faint mb-3">
                    {review.publisher} · Published {new Intl.DateTimeFormat('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    }).format(new Date(`${review.publicationDate}T00:00:00`))}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2">
                    <a
                      href={review.bookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-brand-bright hover:underline"
                    >
                      <ExternalLink size={14} className="mr-1.5" /> View book
                    </a>
                    <a
                      href={review.linkedinPostUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-brand-bright hover:underline"
                    >
                      <ExternalLink size={14} className="mr-1.5" /> LinkedIn post
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Research Papers Carousel */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="flex items-center gap-2 font-display text-xl sm:text-2xl font-light text-content">
              <BookOpen className="text-brand-bright" size={20} /> Research Papers
            </h3>
            <div className="flex gap-2">
              <button
                onClick={scrollPrev}
                className="p-2.5 rounded-full border border-line text-muted hover:text-content hover:border-brand-bright transition-colors"
                aria-label="Previous paper"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={scrollNext}
                className="p-2.5 rounded-full border border-line text-muted hover:text-content hover:border-brand-bright transition-colors"
                aria-label="Next paper"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {researchPapers.map((paper) => (
                <motion.div
                  key={paper.slug}
                  className="flex-none w-[280px] sm:w-[320px] md:w-[360px] flex flex-col rounded-2xl border border-line bg-surface p-6 hover:border-brand-bright/40 transition-colors"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <FileText className="text-brand-bright flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <h4 className="font-medium text-content leading-snug line-clamp-2 mb-1">{paper.title}</h4>
                      <p className="text-xs text-faint font-mono">
                        {paper.publisher} · {paper.year}
                      </p>
                    </div>
                  </div>

                  <div className="text-xs text-muted mb-3">
                    <span className="text-content font-medium">Authored by:</span>{' '}
                    {paper.authors.map((author, i) => (
                      <span key={i}>
                        {author.profileUrl ? (
                          <a
                            href={author.profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-bright hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {author.name}
                          </a>
                        ) : (
                          <span>{author.name}</span>
                        )}
                        {i < paper.authors.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3 flex-1">{paper.description}</p>
                  <button
                    onClick={() => (onViewPaper ? onViewPaper(paper.slug) : onViewAllPapers?.())}
                    className="inline-flex items-center text-brand-bright hover:underline text-sm font-medium self-start"
                  >
                    <ExternalLink size={14} className="mr-1.5" />
                    Read Full Paper
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {onViewAllPapers && (
            <div className="mt-8 text-center">
              <button
                onClick={onViewAllPapers}
                className="inline-flex items-center text-brand-bright hover:underline text-sm font-medium"
              >
                View all research papers
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
