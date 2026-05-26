import { fenStylerContent } from './fenStylerContent'

type FenStylerHeaderProps = {
  variant?: 'desktop' | 'mobile'
}

export const FenStylerHeader = ({ variant = 'desktop' }: FenStylerHeaderProps) => {
  const baseClass = variant === 'mobile' ? 'fen-styler-card__mobile' : 'fen-styler-card'
  const elementSeparator = variant === 'mobile' ? '-' : '__'

  return (
    <div className={`${baseClass}${elementSeparator}header`}>
      <h2 className={`${baseClass}${elementSeparator}title`}>{fenStylerContent.title}</h2>
      <p className={`${baseClass}${elementSeparator}subtitle`}>{fenStylerContent.subtitle}</p>
      <div className={`${baseClass}${elementSeparator}pill`}>{fenStylerContent.pill}</div>
    </div>
  )
}
