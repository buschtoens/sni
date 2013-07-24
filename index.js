/**
 * Expose `sni`.
 * @type Function
 */
module.exports = sni;

/**
 * RegEx for finding a domain name.
 * @type {RegExp}
 */
var regex = /^(?:[a-z0-9-]+\.)+[a-z]+$/i;

/**
 * Extract the SNI from a Buffer.
 * @param  {Buffer}      buf
 * @return {String|null}
 */
function sni(buf) {
  var sni = null;

  for(var b = 0, prev, start, end, str; b < buf.length; b++) {
    if(prev === 0 && buf[b] === 0) {
      start = b + 2;
      end   = start + buf[b + 1];
      if(start < end && end < buf.length) {
        str = buf.toString("utf8", start, end);
        if(regex.test(str)) {
          sni = str;
          continue;
        }
      }
    }
    prev = buf[b];
  }

  return sni;
}