import { useParams } from 'react-router-dom';

const sectionNames = {
  enquiry: 'Enquiry Form',
  procedure: 'Admission Procedure',
};

export default function AdmissionsPage() {
  const { section } = useParams();
  const sectionName = sectionNames[section] || 'Admissions';

  return (
    <div className="section-container py-20">
      <h1 className="text-4xl font-bold text-heading font-heading">{sectionName}</h1>
      <p className="mt-4 text-body">Content coming in a later phase.</p>
    </div>
  );
}
