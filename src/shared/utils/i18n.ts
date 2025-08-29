export function getNameSpace(pathname: string): string {
  const clean = pathname.replace(/^\/|\/$/g, '');
  if (!clean) return 'Root';
  return clean.charAt(0).toUpperCase() + clean.slice(1);
}
