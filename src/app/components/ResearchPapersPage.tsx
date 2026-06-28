import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, FileText, ExternalLink, Image as ImageIcon, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { researchPapers, getPaperBySlug } from '../data/researchPapers';

interface ResearchPapersPageProps {
  onBack: () => void;
}

export function ResearchPapersPage({ onBack }: ResearchPapersPageProps) {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();

  const selectedPaper = (slug ? getPaperBySlug(slug) : undefined) ?? researchPapers[0];

  return (
    <div className="min-h-screen bg-page pt-20">
      {/* Sub-header */}
      <div className="bg-page/80 backdrop-blur-md border-b border-line sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="inline-flex items-center text-brand-bright hover:text-content transition-colors font-medium text-sm"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Portfolio
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="kicker block mb-4">Research</span>
          <h1 className="font-display text-4xl sm:text-5xl font-light text-content mb-4">Research Papers</h1>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto font-light">
            Published research in cybersecurity, cloud security, and DevSecOps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Papers list */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="rounded-2xl border border-line bg-surface overflow-hidden sticky top-36">
              <div className="p-4 border-b border-line bg-surface-2">
                <h2 className="font-medium text-content text-sm">
                  All Papers <span className="text-faint font-mono">({researchPapers.length})</span>
                </h2>
              </div>
              <div className="max-h-[60vh] overflow-y-auto scrollbar-hide">
                {researchPapers.map((paper) => {
                  const isActive = paper.slug === selectedPaper.slug;
                  return (
                    <button
                      key={paper.slug}
                      onClick={() => navigate(`/research-papers/${paper.slug}`)}
                      aria-current={isActive ? 'true' : undefined}
                      className={`w-full p-4 text-left border-b border-line transition-colors border-l-2 ${
                        isActive
                          ? 'bg-brand-soft border-l-brand-bright'
                          : 'hover:bg-surface-3 border-l-transparent'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            isActive ? 'bg-brand-strong text-white' : 'bg-surface-3 text-muted'
                          }`}
                        >
                          <FileText size={15} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3
                            className={`text-sm font-medium line-clamp-2 ${
                              isActive ? 'text-brand-bright' : 'text-content'
                            }`}
                          >
                            {paper.title}
                          </h3>
                          <p className="text-xs text-faint font-mono mt-1">
                            {paper.publisher} · {paper.year}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Paper content */}
          <div className="lg:col-span-8 xl:col-span-9">
            <motion.div
              key={selectedPaper.slug}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-line bg-surface overflow-hidden"
            >
              <div className="p-6 sm:p-8 border-b border-line">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-brand-soft flex items-center justify-center flex-shrink-0">
                    <FileText className="text-brand-bright" size={26} />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-xl sm:text-2xl font-light text-content mb-2">
                      {selectedPaper.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="px-3 py-1 rounded-md bg-brand-soft text-brand-bright font-mono text-xs">
                        {selectedPaper.type}
                      </span>
                      <span className="text-faint font-mono text-xs">
                        {selectedPaper.publisher} · {selectedPaper.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <Block title="Authors">
                  <div className="flex flex-wrap gap-2 text-muted">
                    {selectedPaper.authors.map((author, i) => (
                      <span key={i} className="flex items-center">
                        {author.profileUrl ? (
                          <a
                            href={author.profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-bright hover:underline font-medium"
                          >
                            {author.name}
                          </a>
                        ) : (
                          <span className="font-medium text-content">{author.name}</span>
                        )}
                        {i < selectedPaper.authors.length - 1 && <span className="mr-1">,</span>}
                      </span>
                    ))}
                  </div>
                </Block>

                <Block title="Abstract">
                  <p className="text-muted leading-relaxed">{selectedPaper.description}</p>
                </Block>

                {selectedPaper.fullContent && (
                  <Block title="Summary">
                    <p className="text-muted leading-relaxed">{selectedPaper.fullContent}</p>
                  </Block>
                )}

                {(selectedPaper.images || selectedPaper.certificates) && (
                  <Block title="Related Documents">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {selectedPaper.certificates?.map((cert, i) => (
                        <div
                          key={i}
                          className="rounded-lg border border-line bg-surface-2 p-4 flex flex-col items-center justify-center text-center hover:bg-surface-3 transition-colors"
                        >
                          <Award className="text-brand-bright mb-2" size={28} />
                          <span className="text-sm text-muted">{cert}</span>
                        </div>
                      ))}
                      {selectedPaper.images?.map((img, i) => (
                        <div
                          key={i}
                          className="rounded-lg border border-line bg-surface-2 p-4 flex flex-col items-center justify-center text-center hover:bg-surface-3 transition-colors"
                        >
                          <ImageIcon className="text-brand-bright mb-2" size={28} />
                          <span className="text-sm text-muted">{img}</span>
                        </div>
                      ))}
                    </div>
                  </Block>
                )}

                <div className="flex flex-wrap gap-3 pt-4 border-t border-line">
                  <a
                    href={selectedPaper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 rounded-lg bg-brand-strong text-white hover:bg-brand-deep transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={15} className="mr-2" />
                    View Full Paper
                  </a>
                  {selectedPaper.doiLink && (
                    <a
                      href={selectedPaper.doiLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2.5 rounded-lg border border-brand-bright/50 text-brand-bright hover:bg-brand-soft transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={15} className="mr-2" />
                      View DOI
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h4 className="kicker text-[0.62rem] mb-3">{title}</h4>
      {children}
    </div>
  );
}
