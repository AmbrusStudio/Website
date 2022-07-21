import type { ErrorCode } from '@ethersproject/logger'

export class EthersError extends Error {
  public reason?: string
  public code?: ErrorCode
  public method?: string

  public constructor(message?: string, code?: ErrorCode, method?: string) {
    super(message)
    this.reason = message
    this.code = code
    this.method = method
  }
}

export interface MetaMaskError {
  message?: string
  code?: number
}

export function isMetaMaskError(error: unknown): error is MetaMaskError {
  if (typeof error === 'object' && error && 'code' in error && 'message' in error) {
    return true
  }
  return false
}

export function alertErrorMessage(message: string, error: unknown): void {
  console.error(message, error)
  if (error instanceof EthersError) {
    alert(`${message}, ${error.reason}`)
  } else if (isMetaMaskError(error)) {
    alert(`${message}, ${error.message}`)
  } else if (error instanceof Error) {
    alert(`${message}, ${error.message}`)
  } else if (typeof error === 'string') {
    alert(`${message}, ${error}`)
  } else {
    alert(message)
  }
}
