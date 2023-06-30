import { View, Map } from 'ol';
import TileLayer from 'ol/layer/Tile'
import { OSM, TileDebug } from 'ol/source'
import MapProperty from 'ol/MapProperty'

export default function () {
  if (!process.client) return null

  const map = useState('ol-world-map', () => new Map({
    layers: [
      new TileLayer({
          source: new OSM(),
      }),
      new TileLayer({
          source: new TileDebug()
      }),
    ],
    target: 'world-map',
    view: new View({
      center: [0, 0],
      zoom: 1,
    })
  })).value

  // Calling private method Map.handleTargetChanged_
  // That make sure map will mount into target each call useWorldMap()
  onMounted(() => map.notify(MapProperty.TARGET, 'world-map'))
  return map
}