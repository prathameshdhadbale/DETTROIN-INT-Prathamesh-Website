import { useParams } from 'react-router-dom';
import QuickEnquiryCard from '../components/sections/QuickEnquiryCard';
import SectionHeading from '../components/common/SectionHeading';
import FAQSection from '../components/sections/FAQSection';

const sectionNames = {
  enquiry: 'Enquiry Form',
  procedure: 'Admission Procedure',
};

export default function AdmissionsPage() {
  const { section } = useParams();
  const sectionName = sectionNames[section] || 'Admissions';

  return (
    <div className="bg-offwhite py-16 md:py-24 min-h-screen">
      <div className="section-container">
        <SectionHeading
          eyebrow="Join Us"
          title={sectionName}
          align="center"
        />

        <div className="mt-12 max-w-4xl mx-auto">
          {section === 'enquiry' ? (
            <div className="max-w-2xl mx-auto">
              <QuickEnquiryCard />
            </div>
          ) : (
            <div className="space-y-8 text-body bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold font-heading text-heading mb-4">How to Apply</h3>
              <ul className="list-decimal list-inside space-y-4">
                <li><strong className="text-heading">Submit Enquiry:</strong> Fill out the online enquiry form or visit the school reception to collect the prospectus and registration form.</li>
                <li><strong className="text-heading">Registration:</strong> Submit the completed registration form along with required documents (birth certificate, previous school records, photos).</li>
                <li><strong className="text-heading">Interaction/Assessment:</strong> An informal interaction (for pre-primary) or a basic proficiency test (for higher classes) will be scheduled.</li>
                <li><strong className="text-heading">Admission Offer:</strong> Based on the assessment and seat availability, an admission offer will be made.</li>
                <li><strong className="text-heading">Fee Payment:</strong> Pay the admission fees within the stipulated time to confirm the seat.</li>
              </ul>
              
              <div className="pt-12">
                 <FAQSection />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
