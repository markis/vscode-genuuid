  // tslint:disable:no-bitwise
import { pseudoRandomBytes } from 'crypto';

/**
 * Generate uuid
 *
 * Example:
 *  123e4567-e89b-42d3-a456-426655440000
 */
export function generateUUID(): string {
  // create 16 byte array to fill
  const bytes = pseudoRandomBytes(16);

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  bytes[6] = (bytes[6] & 0x0f) | 0x40; // version to 4
  bytes[8] = (bytes[8] & 0x3f) | 0x80;

  let i = 0;
  return byteToHex(bytes[i++]) + byteToHex(bytes[i++]) +
          byteToHex(bytes[i++]) + byteToHex(bytes[i++]) + '-' +
          byteToHex(bytes[i++]) + byteToHex(bytes[i++]) + '-' +
          byteToHex(bytes[i++]) + byteToHex(bytes[i++]) + '-' +
          byteToHex(bytes[i++]) + byteToHex(bytes[i++]) + '-' +
          byteToHex(bytes[i++]) + byteToHex(bytes[i++]) +
          byteToHex(bytes[i++]) + byteToHex(bytes[i++]) +
          byteToHex(bytes[i++]) + byteToHex(bytes[i++]);
}

function byteToHex(byte: number) {
  return ('0' + (byte & 0xFF).toString(16)).slice(-2);
}
