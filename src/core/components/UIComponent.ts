interface Component {
  tagName: string;
  className?: string;
  innerText?: string;
}

export default function createUIComponent(component: Component, parent: HTMLElement) {
  const container = document.createElement(`${component.tagName}`);

  if (component.className) {
    container.className = component.className;
  }
  if (component.innerText) {
    container.innerText = component.innerText;
  }

  parent.append(container);
}