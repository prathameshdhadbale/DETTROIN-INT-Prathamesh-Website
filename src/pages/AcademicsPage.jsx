import { useParams } from 'react-router-dom';

const stageNames = {
  'pre-primary': 'Pre-Primary',
  'primary': 'Primary',
  'middle': 'Middle School',
  'daycare': 'Daycare',
};

export default function AcademicsPage() {
  const { stage } = useParams();
  const stageName = stageNames[stage] || 'Academics';

  return (
    <div className="section-container py-20">
      <h1 className="text-4xl font-bold text-heading font-heading">{stageName}</h1>
      <p className="mt-4 text-body">Content coming in Phase 4.</p>
    </div>
  );
}
