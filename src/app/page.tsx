import { ExcuseGenerator } from '../components/excuse/ExcuseGenerator';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4">
      <div className="container mx-auto max-w-4xl">
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold mb-2">Late-o-matic 3000</h1>
          <p className="text-gray-400">Because saving the multiverse is a perfectly valid reason for missing your morning standup</p>
        </header>
        <ExcuseGenerator />
      </div>
    </main>
  );
}
