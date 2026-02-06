declare module "ityped" {
  type InitOptions = {
    showCursor?: boolean;
    backDelay?: number;
    backSpeed?: number;
    strings: string[];
  };

  export function init(element: HTMLElement, options: InitOptions): void;
}
