import { bootstrap } from '@scoutgg/widgets'
import { hyper as renderer } from '@scoutgg/widgets/cjs/renderers/hyper'
import hyper from 'hyperhtml'
import { PageRouter } from 'widgets-router'
console.log('Has router?', PageRouter)
// Import the components you want to use
import './components/hello/hello'

// Bootstrap Widgets (Start it)
bootstrap([
  function(meh) {
    debugger
  },
  renderer(hyper)
])
