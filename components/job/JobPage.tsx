import JobCard from '@/components/job/JobCard'

export default function JobPage() {
  return (
    <div>
      <div>
        <JobCard
          title="Software Engineer"
          company="Tech Company"
          location="Remote"
          rate="$50/hr"
          brief="Looking for a skilled software engineer to join our team. Must have experience with React and Node.js. Open to remote work."
          badges={['UX Design', 'Figma', 'User Research', 'Prototyping']}
          postedAgo="2 days ago"
          bidsCount={18}
        />
      </div>
    </div>
  )
}
