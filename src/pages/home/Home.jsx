import "./home.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Feedback from '../feedback/Feedback'
import Analytics from '../analytics/Analytics'

export default function Home() {
  return (
    <div className="homePage">
      <Sidebar/>
      <Analytics/>
    </div>
  )
}
