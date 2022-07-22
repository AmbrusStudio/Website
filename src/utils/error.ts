import type { ErrorCode } from '@ethersproject/logger'

export interface EthersError extends Error {
  reason?: string
  code?: ErrorCode
  method?: string
}

export interface MetaMaskError {
  message?: string
  code?: number
}

export function isEthersError(error: unknown): error is EthersError {
  if (
    typeof error === 'object' &&
    error &&
    'reason' in error &&
    'code' in error &&
    'message' in error
  ) {
    return true
  }
  return false
}

export function isMetaMaskError(error: unknown): error is MetaMaskError {
  if (typeof error === 'object' && error && 'code' in error && 'message' in error) {
    return true
  }
  return false
}

export function alertErrorMessage(message: string, error: unknown): void {
  console.error(message, error)
  if (isEthersError(error)) {
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
