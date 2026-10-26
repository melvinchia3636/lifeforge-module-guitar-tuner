import { lazy } from 'react'

import { createForgeModule } from '@lifeforge/federation'

const { forgeAPI: _, ...manifest } = createForgeModule({
  routes: {
    '/': lazy(() => import('@'))
  }
})

export default manifest
