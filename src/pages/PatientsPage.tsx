import { Badge } from '../components/Badge'
import { PagePanel } from '../components/PagePanel'

const badgeRowClassName = 'mt-5 flex flex-wrap gap-2'

export function PatientsPage() {
  return (
    <PagePanel eyebrow="Care Management" title="Patients">
      Patient records and clinical status views will be added in upcoming tasks.
      <span className={badgeRowClassName}>
        <Badge status="active" />
        <Badge status="follow-up-needed" />
        <Badge status="insurance" />
      </span>
    </PagePanel>
  )
}
