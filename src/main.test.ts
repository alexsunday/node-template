import {describe,it} from '@jest/globals'

import { sayHello } from './hello';

describe("test1", () => {
  it("sayHello", async() => {
    sayHello("TEST")
  })
})
