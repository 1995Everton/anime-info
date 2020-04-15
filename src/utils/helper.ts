export function getFunctionFactory(
  service: { [x: string]: any },
  name: string
) {
  if (name in service) {
    return service[name]();
  }
  return null;
}

export function getKeyValue(service: { [x: string]: any }, key: string) {
  if (key in service) {
    return service[key];
  }
  return null;
}
