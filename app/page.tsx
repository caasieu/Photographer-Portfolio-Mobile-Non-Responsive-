
import { Help } from '@/components/ui/sections/home/Help'
import { MyExperience } from '@/components/ui/sections/home/MyExperience'
import { People } from '@/components/ui/sections/home/People'
import { RecentWorks } from '@/components/ui/sections/home/RecentWorks'
import { TopLanding } from '@/components/ui/sections/home/TopLanding'

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <TopLanding />

      <MyExperience />

      <RecentWorks />

      <Help />

      <People />
    </main>
  )
}
