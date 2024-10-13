export function excludeFieldHelper(item: any, keys: string[]) {
  if (typeof item !== 'object' || item === null) {
    return item;
  }

  return Object.fromEntries(
    Object.entries(item)?.map(([key, value]) => {
      if (keys.includes(key)) {
        return [key, undefined];
      } else if (Array.isArray(value)) {
        return [key, value.map((v) => excludeFieldHelper(v, keys))];
      } else if (typeof value === 'object' && value !== null) {
        if (Object.keys(value).length === 0) {
          if (keys.includes(key)) {
            return [key, undefined];
          } else {
            return [key, value];
          }
        } else {
          return [key, excludeFieldHelper(value, keys)];
        }
      } else {
        return [key, value];
      }
    }),
  );
}
