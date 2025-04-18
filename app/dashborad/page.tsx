import JobPage from '@/components/job/JobPage'
import ProfileSidebar from '@/components/ui/profile-sidebar'
import CalltoAction from '@/components/job/Cta'
import RightColoumn from '@/components/ui/right-col-dash'
export default function Dashborad() {
  return (
    <div>
      <div className="flex h-screen flex-row justify-center gap-10 bg-gray-100">
        <ProfileSidebar />
        <div>
          <CalltoAction />
          <JobPage />
        </div>
        <RightColoumn />
      </div>
    </div>
  )
}
