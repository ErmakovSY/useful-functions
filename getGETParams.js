/* 
  This function allows to get parameters from adress string (GET parameters)
*/

$_GET = (key) => {
  let s = window.location.search;
  s = s.match(new RegExp(key + '=([^&=]+)'));
  return s ? s[1] : false;
}