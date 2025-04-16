import JobPage from '@/components/job/JobPage'
import ProfileSidebar from '@/components/ui/profile-sidebar'
import CalltoAction from '@/components/job/Cta'
export default function Dashborad() {
  return (
    <>
      <div className="flex h-screen flex-row bg-gray-100">
        <ProfileSidebar />
        <div>
          <CalltoAction />
          <JobPage />
        </div>
      </div>
    </>
  )
}
