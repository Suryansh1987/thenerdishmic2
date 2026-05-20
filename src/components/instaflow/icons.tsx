import type { SVGProps } from "react";

function IconBase(props: SVGProps<SVGSVGElement>) {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props} />;
}

export function WindowsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M3 5.5 10.5 4v8H3zM13 3.6 21 2v10h-8zM3 13h7.5v8L3 19.5zM13 13h8v9l-8-1.6z" />
    </IconBase>
  );
}

export function AppleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M16.3 2.7c.1 1-.3 2-1 2.8-.7.8-1.7 1.3-2.7 1.2-.1-1 .3-2 1-2.7.8-.8 1.9-1.3 2.7-1.3Zm2.9 13.8c-.4.9-.9 1.7-1.5 2.5-.8 1-1.8 2.3-3 2.3-1 0-1.7-.6-2.8-.6-1.1 0-1.9.6-2.9.6-1.2 0-2.1-1.1-2.9-2.1C4.4 17.1 3.2 14 4.6 11.4c.8-1.8 2.4-3 4.1-3 .9 0 1.8.3 2.4.6.5.2.8.4 1 .4.2 0 .5-.1 1-.4.7-.3 1.6-.7 2.5-.6.5 0 1.9.2 2.9 1.6-2.6 1.6-2.1 5.2.7 6.5Z" />
    </IconBase>
  );
}

export function LinuxIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 2.8c2.4 0 4 2.4 4 5.4v1.8c0 .9.2 1.8.7 2.6.5.8.7 1.7.7 2.6 0 3-2.4 5.8-5.4 5.8s-5.4-2.8-5.4-5.8c0-.9.2-1.8.7-2.6.5-.8.7-1.7.7-2.6V8.2c0-3 1.6-5.4 4-5.4Zm-1.6 7c0 .4.3.7.7.7s.7-.3.7-.7-.3-.7-.7-.7-.7.3-.7.7Zm2.5 0c0 .4.3.7.7.7s.7-.3.7-.7-.3-.7-.7-.7-.7.3-.7.7Zm-2.1 4.1c.4.4 1 .6 1.2.6.3 0 .9-.2 1.3-.6l.8.7c-.7.7-1.5 1-2.1 1-.7 0-1.5-.3-2.1-1l.9-.7Z" />
    </IconBase>
  );
}

export function ArrowFlowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true" {...props}>
      <path d="M6 18 18 6" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
      <path d="M10 6h8v8" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}
