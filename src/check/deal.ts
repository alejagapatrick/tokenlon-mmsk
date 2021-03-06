import * as _ from 'lodash'
import { dealOrder } from '../request/marketMaker'
import { getSupportedTokens } from '../utils/token'

const check = async () => {
  try {
    const tokenA = getSupportedTokens()[0]
    const mockOrder = {
      makerToken: tokenA.symbol,
      takerToken: tokenA.opposites[0],
      makerTokenAmount: 40.19308759,
      takerTokenAmount: 0.3,
      timestamp: 1551855180,
      quoteId: 'assdcjfsdhfdfoesfhafh',
    }
    const resp = await dealOrder(mockOrder)
    if (resp.result !== false) {
      return `deal an non-exist order ${JSON.stringify(mockOrder)} but got result not false`
    }
  } catch (e) {
    return `deal API request error ${e.message}`
  }

  return ''
}

export default check