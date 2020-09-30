import { Application } from 'spectron'
import * as path from 'path'

const electronPath = require('electron')

jest.setTimeout(10000)

let app: Application

describe('Main window', () => {
  beforeEach(() => {
    app = new Application({
      path: electronPath.toString(),
      args: [path.join(__dirname, '..', '..')]
    })
    return app.start()
  })

  afterEach(() => {
    if (app.isRunning()) {
      return app.stop()
    }
    return null
  })

  it('opens the window', async () => {
    const { client, browserWindow } = app
    await client.waitUntilWindowLoaded()
    const title = await browserWindow.getTitle()

    expect(title).toBe('Electron React Typescript Spectron App')
  })
})
