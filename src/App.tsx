import Cover from './pages/Cover'
import LogoUsage from './pages/LogoUsage'
import ColorPalette from './pages/ColorPalette'
import Typography from './pages/Typography'
import VoiceTone from './pages/VoiceTone'
import Iconography from './pages/Iconography'
import Spacing from './pages/Spacing'
import Nav from './components/Nav'

export default function App() {
  const handleExport = () => {
    window.print()
  }

  return (
    <>
      <Nav onExport={handleExport} />
      <main>
        <Cover />
        <LogoUsage />
        <ColorPalette />
        <Typography />
        <VoiceTone />
        <Iconography />
        <Spacing />
      </main>
    </>
  )
}
