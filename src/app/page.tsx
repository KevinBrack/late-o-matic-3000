import { ExcuseGenerator } from '../components/excuse/ExcuseGenerator'

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen bg-background overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-[100px] animate-pulse-slow" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-primary/20 to-transparent rounded-full blur-[100px] animate-pulse-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px] animate-float" />
        </div>

        <div className="relative py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-center mb-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                Late-o-matic 3000
              </span>
            </h1>
            <p className="text-center text-lg text-muted-foreground mb-12 italic font-medium max-w-2xl mx-auto">
              Because saving the multiverse is a perfectly valid reason for missing your morning standup
            </p>
            <ExcuseGenerator />
          </div>
        </div>
      </div>
    </>
  )
}
