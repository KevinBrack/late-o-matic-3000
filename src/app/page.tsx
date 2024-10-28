import { ExcuseGenerator } from '../components/excuse/ExcuseGenerator';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-800 dark:text-white">
          Late-o-matic 3000
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 italic">
          Because saving the multiverse is a perfectly valid reason for missing your morning standup
        </p>
        <ExcuseGenerator />
      </div>
    </main>
  );
}
